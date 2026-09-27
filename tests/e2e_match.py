"""A deterministic synthetic match, driven through the real recorder + stats.

Shared by `test_e2e_pipeline.py` (pytest) and `scripts/e2e_serve.py` (the
server the Playwright smoke test runs against). Frames follow the snapshot
shape in `frontend/src/state/types.ts`; only what the viewer and StatsStore
read is filled in, the rest stays empty or absent the same way a failed read
would leave it.

The match: four players on Al Basrah, walking east. At tick KILL_TICK Alpha1
kills Bravo1. Tickets drain every tick. After IN_PROGRESS_TICKS the server
goes WaitingPostMatch, which the recorder confirms and finalizes.
"""
from __future__ import annotations

import datetime as _dt
import json
from pathlib import Path

from sqreader.recorder import _handle_snap
from sqreader.stats import StatsStore

MATCH_ID = "e2e00000-0000-4000-8000-000000000001"
SERVER_ID = "e2e-1"
LAYER = "Al Basrah AAS v1"
IN_PROGRESS_TICKS = 40
KILL_TICK = 20
START = _dt.datetime(2026, 8, 8, 19, 0, 0, tzinfo=_dt.timezone.utc)

# name, 32-hex EOS id (StatsStore rejects anything else), team, squad
PLAYERS = [
    ("Alpha1", "0002" + "a1" * 14, 1, 1),
    ("Alpha2", "0002" + "a2" * 14, 1, 1),
    ("Bravo1", "0002" + "b1" * 14, 2, 1),
    ("Bravo2", "0002" + "b2" * 14, 2, 1),
]
KILLER, VICTIM = PLAYERS[0], PLAYERS[2]


def _layer() -> dict:
    root = Path(__file__).resolve().parents[1]
    bounds = json.loads((root / "data/static/layer_bounds.json")
                        .read_text(encoding="utf-8"))[LAYER]
    return {"name": LAYER, **bounds}


def recorder_box() -> dict:
    """The `state_box` the recorder keeps between `_handle_snap` calls."""
    return {
        "current": None, "last_state": None, "inactive_ticks": 0,
        "pending_match_id": None, "pending_match_buffer": [],
        "last_tick": None, "tick_sequence_required": False,
        "missing_tick_warned": False,
    }


def _player(p: tuple, i: int, tick: int, cx: float, cy: float) -> dict:
    name, eos, team, squad = p
    dead = p is VICTIM and tick >= KILL_TICK
    kills = 1 if p is KILLER and tick >= KILL_TICK else 0
    x = cx + (-8000 if team == 1 else 8000) + tick * 150
    y = cy + i * 1500
    return {
        "name": name, "eosId": eos, "playerId": i + 1, "teamId": team,
        "roleId": "Rifleman", "score": kills * 100, "ping": 30,
        "isBot": False, "clanTag": None,
        "squadStateAddr": f"0x{team}{squad}00", "teamStateAddr": f"0x{team}000",
        "squadId": squad, "squadName": f"SQUAD {team}", "squadTeamId": team,
        "soldier": None if dead else {
            "addr": f"0x{i + 1}000", "classShort": "BP_Soldier_C",
            "health": 100.0, "breathHoldStamina": None, "stance": "standing",
            "position": {"x": x, "y": y, "z": 0.0}, "yaw": 90.0,
            "attached": False,
        },
        "stats": {"kills": kills, "deaths": 1 if dead else 0},
    }


def frame(tick: int, *, state: str = "InProgress") -> dict:
    layer = _layer()
    tl, br = layer["topLeft"], layer["bottomRight"]
    cx, cy = (tl["x"] + br["x"]) / 2, (tl["y"] + br["y"]) / 2
    players = [_player(p, i, tick, cx, cy) for i, p in enumerate(PLAYERS)]
    damage = []
    if tick == KILL_TICK:
        damage.append({
            "victim": VICTIM[0], "victimEosId": VICTIM[1],
            "victimTeam": VICTIM[2], "victimSoldier": "0x3000",
            "victimPos": {"x": cx + 8000 + tick * 150, "y": cy + 3000, "z": 0.0},
            "attacker": KILLER[0], "attackerCtrlAddr": "0x1100",
            "selfInflicted": False, "causerWeapon": "BP_M4_C",
            "killed": True, "ts": tick,
        })
    teams = [
        {"id": t, "tickets": 300 - tick, "factionId": f,
         "playerCount": 2, "squadCount": 1}
        for t, f in ((1, "USA"), (2, "RGF"))
    ]
    return {
        "timestamp": (START + _dt.timedelta(seconds=tick)).isoformat(),
        "tick": tick,
        "server": SERVER_ID,
        "schemaVersion": "e2e",
        "counts": {"playerStatesNonCDO": len(players), "soldiersLive": 4,
                   "vehicleSeatsLive": 0, "totalUObjects": 0},
        "gameState": {
            "serverName": "sqreader e2e", "maxPlayers": 100, "tickRate": 50,
            "matchId": MATCH_ID, "matchState": state, "elapsedSec": tick,
            "isTicketBased": True, "gameModeId": "AAS", "numTeams": 2,
            "serverStartTimestamp": 1786217763, "worldTimeSec": 1000.0 + tick,
            "mapName": layer["mapName"], "gameModeName": "AAS",
            "layer": layer,
        },
        "teams": teams,
        "squads": [
            {"id": 1, "teamId": t, "name": f"SQUAD {t}", "playerCount": 2}
            for t in (1, 2)
        ],
        "players": players,
        "vehicles": [], "captureZones": [], "markers": [], "deployables": [],
        "vehicleSpawners": [], "rallyPoints": [], "projectiles": [],
        "damageEvents": damage,
    }


def frames() -> list[dict]:
    """The whole match, including the post-match ticks that close it."""
    out = [frame(t) for t in range(1, IN_PROGRESS_TICKS + 1)]
    out += [frame(t, state="WaitingPostMatch")
            for t in range(IN_PROGRESS_TICKS + 1, IN_PROGRESS_TICKS + 5)]
    return out


def build_match(root: Path) -> dict:
    """Record the match into `root/rec/` and `root/stats.db`."""
    rec_dir = root / "rec"
    rec_dir.mkdir(parents=True, exist_ok=True)
    stats_db = root / "stats.db"
    box = recorder_box()
    names: list = []
    store = StatsStore(stats_db, server_id=SERVER_ID)
    try:
        for f in frames():
            _handle_snap(snap=f, raw_line=json.dumps(f), state_box=box,
                         out_dir=rec_dir, server_id=SERVER_ID, min_ticks=0,
                         filename_buffer=names)
            store.record_tick(f)
    finally:
        store.close()
    return {"rec_dir": rec_dir, "stats_db": stats_db,
            "open_recording": box["current"]}
