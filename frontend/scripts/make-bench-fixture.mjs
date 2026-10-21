// Build the 3D benchmark's fixed, anonymized recording (bench/fixture/).
//
//   npm run bench:3d:fixture                       # default: Gorodok Invasion, ~20 min in
//   npm run bench:3d:fixture -- --id <rec> --at <sec> --frames <n>
//
// Cuts a window of full snapshots out of a hosted recording (every line of the
// stream is a complete snapshot, so any window stands alone), replaces every
// player identity, and gzips it. Re-run only to deliberately change the
// benchmark scene: a new fixture means a new baseline (bench:3d -- --save).

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { gzipSync } from "node:zlib";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name, dflt) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : dflt;
};
const BACKEND = process.env.SQREADER_BACKEND ?? "https://squadreader.united-blueberries.de";
const ID = arg("id", "2026-10-11_172322_GorodokInvasionv2_Invasion_v2_4f5e38dd");
const AT_SEC = Number(arg("at", "1160"));       // window start, seconds into the match
const FRAMES = Number(arg("frames", "170"));    // bench uses frame 20 + 130 more
const OUT = join(root, "bench", "fixture");

const meta = await (await fetch(`${BACKEND}/api/recording/${encodeURIComponent(ID)}/meta`)).json();
const from = Date.parse(meta.startedAtUtc) + AT_SEC * 1000;     // the server seeks by wall-clock ms
const res = await fetch(`${BACKEND}/api/recording/${encodeURIComponent(ID)}?v=2&from=${from}`,
  { headers: { "Accept-Encoding": "identity" } });
if (!res.ok) throw new Error(`HTTP ${res.status}`);

// Read just the window, then hang up.
const lines = [];
const reader = res.body.getReader(), dec = new TextDecoder();
let buf = "";
while (lines.length < FRAMES) {
  const { value, done } = await reader.read();
  if (done) break;
  buf += dec.decode(value, { stream: true });
  let nl;
  while ((nl = buf.indexOf("\n")) >= 0 && lines.length < FRAMES) {
    const line = buf.slice(0, nl).trim();
    buf = buf.slice(nl + 1);
    if (line && !line.includes('"t":"pos"')) lines.push(line);
  }
}
await reader.cancel();
const frames = lines.map((l) => JSON.parse(l));
if (frames.length < 150) throw new Error(`only ${frames.length} frames in the window`);

// ── anonymize ────────────────────────────────────────────────────────────────
// Every real player name / EOS id seen anywhere in the window gets a stable
// stand-in; then any string equal to one of them is replaced wherever it sits
// (vehicle seats, killers, placers, squad creators…).
const swap = new Map();
let n = 0;
for (const f of frames) for (const p of f.players ?? []) {
  const key = p.eosId ?? p.name;
  if (!key || swap.has(key)) continue;
  n++;
  const id = String(n).padStart(3, "0");
  if (p.eosId) swap.set(p.eosId, `00000000-0000-4000-8000-000000000${id}`);
  if (p.name) swap.set(p.name, `Player ${id}`);
}
// Free-text identity fields, by key wherever they appear (players, squads,
// rallies…): remembered so the leak check below also covers them.
const freeText = new Set();
const walk = (x) => {
  if (typeof x === "string") return swap.get(x) ?? x;
  if (Array.isArray(x)) return x.map(walk);
  if (x && typeof x === "object") {
    for (const k of Object.keys(x)) {
      const v = x[k];
      if ((k === "squadName" || k === "clanTag" || k === "creatorOnlineId") && typeof v === "string" && v) {
        freeText.add(v);
        x[k] = k === "squadName" ? (x.squadId != null ? `Squad ${x.squadId}` : "Squad") : null;
      } else x[k] = walk(v);
    }
  }
  return x;
};
for (const f of frames) {
  f.server = "bench";
  if (f.gameState) { f.gameState.serverName = "Bench server"; f.gameState.motd = null; f.gameState.matchId = "bench"; }
  for (const sq of f.squads ?? []) {
    if (typeof sq.name === "string" && sq.name) { freeText.add(sq.name); sq.name = sq.id != null ? `Squad ${sq.id}` : "Squad"; }
  }
  walk(f);
}
// Belt and braces: no real identity may survive anywhere in the output.
const body = frames.map((f) => JSON.stringify(f)).join("\n") + "\n";
for (const real of [...swap.keys(), ...freeText]) {
  if (real.length >= 3 && body.includes(JSON.stringify(real))) throw new Error(`identity leaked: ${real}`);
}

const first = frames[0].timestamp, last = frames[frames.length - 1].timestamp;
const outMeta = {
  id: "bench-fixture", filename: "bench-fixture.sqrx", sizeBytes: body.length,
  ticks: frames.length, positionFrames: 0, totalFrames: frames.length,
  durationSec: Math.round((Date.parse(last) - Date.parse(first)) / 1000),
  startedAtUtc: first, endedAtUtc: last, serverId: "bench",
  mapName: meta.mapName, gameMode: meta.gameMode, layerName: meta.layerName,
  matchId: "bench", peakPlayers: meta.peakPlayers, recordingState: "finalized", inProgress: false,
  source: { note: "anonymized window for npm run bench:3d", layer: meta.layerName, atSec: AT_SEC, frames: frames.length },
};
mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "meta.json"), JSON.stringify(outMeta, null, 2) + "\n");
const gz = gzipSync(body, { level: 9 });
writeFileSync(join(OUT, "frames.ndjson.gz"), gz);
console.log(`fixture: ${frames.length} frames, ${n} players anonymized, `
  + `${(body.length / 1048576).toFixed(1)} MB raw, ${(gz.length / 1048576).toFixed(1)} MB gzipped -> ${OUT}`);
