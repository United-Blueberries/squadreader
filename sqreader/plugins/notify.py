"""Get an alert in front of a human.

Every plugin can already raise an alert, and every alert already lands in
`plugin_alerts`. Nothing ever read that table. The detection worked and the
delivery did not exist, so the only way to learn about a cheater was to open
SQLite — which means nobody learned about anything.

This closes that. It wraps the `emit_alert` the manager injects, so delivery
belongs to the ALERT PIPELINE rather than to any one detector: write a new
plugin tomorrow and it gets announced without knowing this file exists.

Three things it must never do, in order of how badly they would hurt:

  * **Cost a tick.** Plugins run inside the reader loop. A webhook is a network
    call to someone else's server and can hang for thirty seconds. So the tick
    thread only ever puts a dict on a bounded queue; a worker thread does the
    talking. When the queue is full the alert is dropped and counted, never
    waited on. A missed notification is bad; a stalled reader is worse, and the
    alert is already durable in the database either way.
  * **Take the reader down.** Nothing here raises into the caller. Discord
    being down, DNS failing, a proxy eating the request — logged and forgotten.
  * **Leak the URL.** A webhook URL is a credential: whoever holds it can post
    into that channel. It is never logged, never echoed, never put in an error
    message.
"""
from __future__ import annotations

import json
import logging
import queue
import threading
import time
import urllib.error
import urllib.parse
import urllib.request
import uuid
from pathlib import Path
from typing import Any, Callable, Optional

log = logging.getLogger(__name__)

#: How many alerts may wait for delivery. Small on purpose: if the worker is
#: this far behind then Discord is down or rate-limiting us, and hoarding
#: thousands of stale alerts to dump later helps nobody.
QUEUE_MAX = 200

#: Discord allows ten embeds per message. Batching is what makes a burst — a
#: cheater tripping four detectors in one second — arrive as a single readable
#: post instead of four that race the rate limiter.
MAX_EMBEDS = 10

#: How long the worker waits for more alerts before posting what it has.
BATCH_WINDOW_SEC = 2.0

#: Discord rejects a whole message when its embeds TOGETHER exceed 6000
#: characters — with a bare 400 that names no cause. Ten embeds are allowed but
#: ten *large* ones are not, so batching by count alone silently loses the
#: entire batch exactly when there is most to say. Split by size as well, with
#: headroom for the JSON envelope.
MAX_MESSAGE_CHARS = 5500

#: Colour by how sure the detector is. Red does not mean "bad", it means
#: "confident": someone scanning the channel should see at a glance which rows
#: are worth opening.
COLOUR_SURE = 0xE04F4F
COLOUR_MAYBE = 0xE0A93B
COLOUR_INFO = 0x6C8EBF


def colour_for(confidence: Optional[float]) -> int:
    if not isinstance(confidence, (int, float)):
        return COLOUR_INFO
    if confidence >= 0.8:
        return COLOUR_SURE
    if confidence >= 0.5:
        return COLOUR_MAYBE
    return COLOUR_INFO


def replay_url(base: Optional[str], match_id: Optional[str]) -> Optional[str]:
    """A link to the recording the alert came from.

    It opens the replay, not the moment: the viewer reads only `mode` and `id`
    from the URL, so there is nowhere to put a timestamp yet. The match time
    goes in the message instead and an admin scrubs to it. Inventing a `&t=`
    the viewer ignores would look like it worked and quietly not.
    """
    if not base or not match_id:
        return None
    return f"{base.rstrip('/')}/replay/?mode=replay&id={match_id}"


def match_clock(details: Any) -> Optional[str]:
    """`elapsedSec` as mm:ss, when the detector recorded it."""
    v = details.get("elapsedSec") if isinstance(details, dict) else None
    if not isinstance(v, (int, float)) or v < 0:
        return None
    s = int(v)
    return f"{s // 60}:{s % 60:02d}"


#: Shown on every alert. The tool is free and source-available, and the people
#: reading these are exactly the people who run Squad servers - so the footer
#: is where it belongs: present on everything, in the way of nothing.
FOOTER_TEXT = "SquadReader - free replays & stats for Squad servers - squadreader.com"

#: A glyph per confidence band. An admin scanning a busy channel reads the
#: shape before the words.
_MARK_SURE = "\U0001F6A9"      # triangular flag
_MARK_MAYBE = "\u26A0"         # warning sign
_MARK_INFO = "\u2139"          # information


def mark_for(confidence: Optional[float]) -> str:
    if not isinstance(confidence, (int, float)):
        return _MARK_INFO
    if confidence >= 0.8:
        return _MARK_SURE
    if confidence >= 0.5:
        return _MARK_MAYBE
    return _MARK_INFO


def format_evidence(details: Any, limit: int = 900) -> Optional[str]:
    """The numbers behind the call, as aligned columns rather than JSON.

    A raw JSON blob is developer output. An admin deciding whether to act
    wants to read `speed_ms  24.1` against `threshold_ms  18.0` at a glance,
    and the alignment is what makes the comparison instant.
    """
    if not isinstance(details, dict):
        return None
    rows = [(k, v) for k, v in sorted(details.items()) if k != "elapsedSec"]
    if not rows:
        return None
    width = min(24, max(len(k) for k, _ in rows))
    lines = []
    for k, v in rows:
        if isinstance(v, float):
            text = f"{v:.4g}"
        elif isinstance(v, (dict, list)):
            text = json.dumps(v, ensure_ascii=False, sort_keys=True)
        else:
            text = str(v)
        lines.append(f"{k[:width].ljust(width)}  {text}")
    body = "\n".join(lines)
    if len(body) > limit:
        body = body[:limit - 3] + "..."
    return body


def build_embed(alert: dict, *, replay_base: Optional[str] = None,
                server_label: Optional[str] = None) -> dict:
    """One alert as a Discord embed. Pure - this is the part worth testing.

    Laid out for someone scanning a channel, not for someone debugging: the
    player's name is the title because that is what an admin looks for, the
    numbers sit in columns rather than a JSON blob, and the whole title is a
    link to the replay so acting on it is one click.
    """
    details = alert.get("details") or {}
    name = alert.get("player_name") or alert.get("eos_id") or "unknown player"
    conf = alert.get("confidence")
    url = replay_url(replay_base, alert.get("match_id"))

    embed: dict[str, Any] = {
        "title": f"{mark_for(conf)}  {name}"[:250],
        "color": colour_for(conf),
        "footer": {"text": FOOTER_TEXT},
    }
    if url:
        # The title itself is the link: the most obvious thing to click is
        # also the thing you want.
        embed["url"] = url

    kind = str(alert.get("alert_type") or "alert")
    desc = [f"**{kind}**"]
    if url:
        desc.append(f"[Watch the replay]({url})")
    embed["description"] = "\n".join(desc)[:3900]

    # Inline fields render as columns, which is the whole reason to use them
    # instead of more bold text in the description.
    fields: list[dict] = []
    if isinstance(conf, (int, float)):
        fields.append({"name": "Confidence", "value": f"{round(conf * 100)}%",
                       "inline": True})
    clock = match_clock(details)
    if clock:
        fields.append({"name": "Match time", "value": clock, "inline": True})
    if server_label:
        fields.append({"name": "Server", "value": str(server_label)[:60],
                       "inline": True})
    ev = format_evidence(details)
    if ev:
        fields.append({"name": "Evidence", "value": f"```\n{ev}\n```",
                       "inline": False})
    if alert.get("eos_id"):
        fields.append({"name": "EOS ID",
                       "value": f"`{alert['eos_id']}`"[:1020],
                       "inline": False})
    if fields:
        embed["fields"] = fields[:25]

    ts = alert.get("ts")
    if isinstance(ts, (int, float)):
        embed["timestamp"] = (time.strftime("%Y-%m-%dT%H:%M:%S",
                                            time.gmtime(ts)) + "Z")
    return embed


def embed_chars(embed: dict) -> int:
    """The characters Discord counts against the per-message limit: the text
    fields, not the JSON around them."""
    n = len(str(embed.get("title") or "")) + len(str(embed.get("description") or ""))
    n += len(str((embed.get("footer") or {}).get("text") or ""))
    for f in embed.get("fields") or []:
        n += len(str(f.get("name") or "")) + len(str(f.get("value") or ""))
    return n


def split_by_size(embeds: list[dict],
                  limit: int = MAX_MESSAGE_CHARS) -> list[list[dict]]:
    """Group embeds into messages that will not be rejected.

    A single embed over the limit is still sent on its own: build_embed already
    truncates every field, so an oversized one means Discord's rules changed,
    and posting it to find out beats dropping it silently.
    """
    out: list[list[dict]] = []
    cur: list[dict] = []
    size = 0
    for e in embeds:
        n = embed_chars(e)
        if cur and (size + n > limit or len(cur) >= MAX_EMBEDS):
            out.append(cur)
            cur, size = [], 0
        cur.append(e)
        size += n
    if cur:
        out.append(cur)
    return out


class DiscordNotifier:
    """Posts alerts to a Discord webhook, off the reader's thread."""

    def __init__(self, webhook_url: str, *, replay_base: Optional[str] = None,
                 server_label: Optional[str] = None,
                 min_confidence: float = 0.0,
                 timeout: float = 10.0) -> None:
        self._url = webhook_url
        self._replay_base = replay_base
        self._server_label = server_label
        self._min_conf = min_confidence
        self._timeout = timeout
        self._q: "queue.Queue[dict]" = queue.Queue(maxsize=QUEUE_MAX)
        self._stop = threading.Event()
        self.dropped = 0
        self._worker = threading.Thread(target=self._run, name="alert-notify",
                                        daemon=True)
        self._worker.start()

    # -- the tick side: cheap, bounded, never blocks -----------------------

    def wants(self, alert: dict) -> bool:
        c = alert.get("confidence")
        return not (isinstance(c, (int, float)) and c < self._min_conf)

    def offer(self, alert: dict) -> None:
        if not self.wants(alert):
            return
        try:
            self._q.put_nowait(alert)
        except queue.Full:
            # Dropping is the right failure: the alert is already durable in
            # `plugin_alerts`, and blocking the reader to announce it would
            # trade the recording for a notification.
            self.dropped += 1
            if self.dropped in (1, 10, 100) or self.dropped % 1000 == 0:
                log.warning("alert webhook backed up, dropped %d so far",
                            self.dropped)

    def wrap(self, emit: Callable[[dict], None]) -> Callable[[dict], None]:
        """Storing comes first and always happens; announcing is best effort."""
        def emit_and_notify(alert: dict) -> None:
            try:
                emit(alert)
            finally:
                try:
                    self.offer(alert)
                except Exception:                    # never reaches a plugin
                    log.exception("alert notify failed")
        return emit_and_notify

    def close(self, drain_sec: float = 3.0) -> None:
        self._stop.set()
        self._worker.join(timeout=drain_sec)

    # -- the worker side: allowed to be slow -------------------------------

    def _run(self) -> None:
        while not self._stop.is_set() or not self._q.empty():
            batch = self._collect()
            if batch:
                self._post(batch)

    def _collect(self) -> list[dict]:
        try:
            first = self._q.get(timeout=0.5)
        except queue.Empty:
            return []
        batch = [first]
        deadline = time.monotonic() + BATCH_WINDOW_SEC
        while len(batch) < MAX_EMBEDS:
            remaining = deadline - time.monotonic()
            if remaining <= 0:
                break
            try:
                batch.append(self._q.get(timeout=remaining))
            except queue.Empty:
                break
        return batch

    def _post(self, batch: list[dict]) -> None:
        embeds = [build_embed(a, replay_base=self._replay_base,
                              server_label=self._server_label)
                  for a in batch]
        for chunk in split_by_size(embeds):
            self._post_embeds(chunk)

    def _post_embeds(self, embeds: list[dict]) -> None:
        _post(self._url, json.dumps({"embeds": embeds}).encode("utf-8"),
              "application/json", self._stop, self._timeout)


def _post(url: str, data: bytes, content_type: str,
          stop: threading.Event, timeout: float) -> None:
    """POST to a webhook with Discord's retry rules. Never raises, never logs
    the URL."""
    for attempt in range(3):
        try:
            req = urllib.request.Request(
                url, data=data, method="POST",
                headers={"Content-Type": content_type,
                         "User-Agent": "sqreader"})
            with urllib.request.urlopen(req, timeout=timeout):
                return
        except urllib.error.HTTPError as e:
            if e.code == 429:
                # Discord says how long to wait; honour it rather than
                # hammering a channel that is already refusing us.
                wait = 1.0
                try:
                    wait = float(json.loads(e.read() or b"{}")
                                 .get("retry_after", 1.0))
                except Exception:
                    pass
                if stop.wait(min(max(wait, 0.5), 30.0)):
                    return
                continue
            # The URL is a credential — log the code, the reason, and what
            # Discord said was wrong (its body names the offending field
            # and never echoes the URL). Without that a 400 is unfixable
            # from the logs alone, which is how a whole batch went missing
            # once already.
            why = ""
            try:
                why = (e.read() or b"")[:300].decode("utf-8", "replace")
            except Exception:
                pass
            log.warning("webhook rejected: HTTP %s %s %s",
                        e.code, e.reason, why)
            return
        except Exception as e:                   # DNS, TLS, timeout, ...
            if attempt == 2:
                log.warning("webhook unreachable: %s", type(e).__name__)
                return
            if stop.wait(1.0 + attempt):
                return


# -- round results ---------------------------------------------------------
#
# The same channel etiquette as alerts, for the other thing people want in
# Discord: who won. One post per confirmed match end, with the minimap
# attached (Discord hosts it, so the reader's HTTP server need not be public)
# and the title linking straight to the replay.

COLOUR_TEAM1 = 0x4A8FE7
COLOUR_TEAM2 = 0xE04F4F
COLOUR_DRAW = 0x8A8F98


def _hms(sec: Any) -> Optional[str]:
    if not isinstance(sec, (int, float)) or sec < 0:
        return None
    s = int(sec)
    return f"{s // 3600}:{s % 3600 // 60:02d}:{s % 60:02d}"


#: Where round links point when no `server_url` is configured.
DEFAULT_SERVER_URL = "https://squadreader.com"


def round_url(server_url: Optional[str], rec_id: Optional[str]) -> Optional[str]:
    """The replay page for one recording. The viewer is looked up by the
    recording's filename stem, not the match id."""
    if not server_url or not rec_id:
        return None
    return (f"{server_url.rstrip('/')}/?mode=replay&id="
            f"{urllib.parse.quote(rec_id)}")


def is_seed(m: dict) -> bool:
    """Seed rounds fill the server; nobody wants their result in a channel."""
    return (str(m.get("game_mode") or "").lower() == "seed"
            or " seed " in f" {str(m.get('layer_name') or '').lower()} ")


def faction_label(fid: Any, *, unit: bool = False) -> Optional[str]:
    """"AFU_LO_Motorized" -> "AFU" (or "AFU · Motorized"), as the viewer
    shows it."""
    if not fid:
        return None
    parts = str(fid).split("_")
    if unit and len(parts) > 2:
        return f"{parts[0]} · {parts[-1]}"
    return parts[0] or str(fid)


def build_round_embed(m: dict, *, url: Optional[str] = None,
                      has_map: bool = False,
                      server_label: Optional[str] = None) -> dict:
    """One finished match as a Discord embed. Pure - this is the part worth
    testing."""
    f1, f2 = m.get("team1_faction"), m.get("team2_faction")
    t1 = faction_label(f1, unit=True) or "Team 1"
    t2 = faction_label(f2, unit=True) or "Team 2"
    win = m.get("winner_team")
    if win == 1:
        title = f"\U0001F3C6  {faction_label(f1) or 'Team 1'} win"
        colour = COLOUR_TEAM1
    elif win == 2:
        title = f"\U0001F3C6  {faction_label(f2) or 'Team 2'} win"
        colour = COLOUR_TEAM2
    else:
        title, colour = "\U0001F91D  Draw", COLOUR_DRAW

    embed: dict[str, Any] = {"title": title[:250], "color": colour}
    if url:
        embed["url"] = url

    layer = str(m.get("layer_name") or m.get("map_name") or "unknown layer")
    head = f"**{layer}**"
    mode = m.get("game_mode")
    if mode and str(mode) not in layer:
        head += f"  ·  {mode}"
    desc = [head]
    if url:
        desc.append(f"[Watch the replay]({url})")
    embed["description"] = "\n".join(desc)[:3900]

    def tickets(n: Any) -> str:
        return f"{n} tickets" if isinstance(n, int) else "—"

    fields = [
        {"name": (("\U0001F947 " if win == 1 else "") + str(t1))[:250],
         "value": tickets(m.get("team1_tickets")), "inline": True},
        {"name": (("\U0001F947 " if win == 2 else "") + str(t2))[:250],
         "value": tickets(m.get("team2_tickets")), "inline": True},
        # An empty third column keeps the teams on their own row.
        {"name": "​", "value": "​", "inline": True},
    ]
    dur = _hms(m.get("duration_sec"))
    if dur:
        fields.append({"name": "Duration", "value": dur, "inline": True})
    if m.get("peak_players"):
        fields.append({"name": "Players", "value": str(m["peak_players"]),
                       "inline": True})
    if server_label:
        fields.append({"name": "Server", "value": str(server_label)[:60],
                       "inline": True})
    embed["fields"] = fields

    if has_map:
        embed["image"] = {"url": "attachment://map.webp"}
    ts = m.get("ended_at")
    if isinstance(ts, (int, float)):
        embed["timestamp"] = (time.strftime("%Y-%m-%dT%H:%M:%S",
                                            time.gmtime(ts)) + "Z")
    return embed


def multipart(payload: dict, file_name: str, file_bytes: bytes,
              file_type: str = "image/webp") -> tuple[bytes, str]:
    """`payload_json` plus one file, the way Discord takes attachments."""
    boundary = "sqreader" + uuid.uuid4().hex
    b = boundary.encode()
    body = (b"--" + b + b"\r\n"
            b'Content-Disposition: form-data; name="payload_json"\r\n'
            b"Content-Type: application/json\r\n\r\n"
            + json.dumps(payload).encode("utf-8") + b"\r\n"
            + b"--" + b + b"\r\n"
            + (f'Content-Disposition: form-data; name="files[0]"; '
               f'filename="{file_name}"\r\n').encode()
            + f"Content-Type: {file_type}\r\n\r\n".encode()
            + file_bytes + b"\r\n--" + b + b"--\r\n")
    return body, f"multipart/form-data; boundary={boundary}"


class RoundNotifier:
    """Posts each finished match to a Discord webhook, off the reader's
    thread. `offer` is the StatsStore finalize hook: it only queues the id."""

    def __init__(self, webhook_url: str, *, db_path: Path,
                 recordings_dir: Optional[Path] = None,
                 sqmaps_dir: Optional[Path] = None,
                 server_url: Optional[str] = None,
                 server_label: Optional[str] = None,
                 timeout: float = 15.0) -> None:
        self._url = webhook_url
        self._db = db_path
        self.recordings_dir = recordings_dir
        self.sqmaps_dir = sqmaps_dir
        self._server_url = server_url
        self._label = server_label
        self._timeout = timeout
        self._q: "queue.Queue[str]" = queue.Queue(maxsize=20)
        self._stop = threading.Event()
        self._layers: Optional[dict] = None
        self._worker = threading.Thread(target=self._run, name="round-notify",
                                        daemon=True)
        self._worker.start()

    def offer(self, match_id: str) -> None:
        try:
            self._q.put_nowait(match_id)
        except queue.Full:
            log.warning("round webhook backed up, dropped a result")

    def close(self, drain_sec: float = 5.0) -> None:
        self._stop.set()
        self._worker.join(timeout=drain_sec)

    def _run(self) -> None:
        while not self._stop.is_set() or not self._q.empty():
            try:
                mid = self._q.get(timeout=0.5)
            except queue.Empty:
                continue
            try:
                self.send(mid)
            except Exception:
                log.exception("round notify failed")

    def send(self, match_id: str) -> None:
        from ..stats import match_detail
        m = match_detail(self._db, match_id)
        # winner_team stays NULL unless the end was confirmed: a restart or a
        # vanished match is not a result worth announcing.
        if not m or m.get("winner_team") is None or is_seed(m):
            return
        # A self-hosted viewer opens recordings by filename; squadreader.com
        # opens them by match id under /replay/.
        if self._server_url:
            url = round_url(self._server_url, self._recording_id(match_id))
        else:
            url = replay_url(DEFAULT_SERVER_URL, match_id)
        map_file = self._map_file(m.get("layer_name"))
        embed = build_round_embed(m, url=url, has_map=map_file is not None,
                                  server_label=self._label)
        payload = {"embeds": [embed]}
        if map_file is not None:
            data, ctype = multipart(payload, "map.webp", map_file.read_bytes())
        else:
            data = json.dumps(payload).encode("utf-8")
            ctype = "application/json"
        _post(self._url, data, ctype, self._stop, self._timeout)

    def _recording_id(self, match_id: str) -> Optional[str]:
        # The recorder finalizes before stats in the same tick, so the
        # sidecar is already on disk by the time this runs.
        if not self.recordings_dir or not self.recordings_dir.is_dir():
            return None
        # ponytail: scans the 50 newest sidecars; index them if that misses.
        metas = sorted(self.recordings_dir.glob("*.meta.json"),
                       key=lambda p: p.stat().st_mtime, reverse=True)[:50]
        for p in metas:
            try:
                meta = json.loads(p.read_text(encoding="utf-8"))
            except (OSError, ValueError):
                continue
            if meta.get("matchId") == match_id:
                return meta.get("id") or p.name[:-len(".meta.json")]
        return None

    def _map_file(self, layer: Optional[str]) -> Optional[Path]:
        if not layer or not self.sqmaps_dir:
            return None
        if self._layers is None:
            from ..squad.metadata import Metadata
            self._layers = Metadata.load().layer_bounds
        texture = (self._layers.get(layer) or {}).get("texture")
        if not texture:
            return None
        from ..httpsrv import _resolve_sqmap
        p = _resolve_sqmap(self.sqmaps_dir, texture)
        # The embed points at attachment://map.webp, so only a webp will do.
        return p if p is not None and p.suffix.lower() == ".webp" else None

__all__ = ["DiscordNotifier", "RoundNotifier", "build_round_embed",
           "multipart", "round_url", "build_embed", "colour_for", "format_evidence",
           "mark_for", "match_clock", "replay_url", "FOOTER_TEXT",
           "QUEUE_MAX", "MAX_EMBEDS"]
