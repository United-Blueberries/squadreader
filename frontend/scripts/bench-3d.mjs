// 3D view benchmark: same recording, same frame, same camera shots every run,
// compared against a saved baseline so a change that makes the view heavier
// shows up immediately.
//
//   npm run bench:3d               # run + compare with bench/3d-baseline.json
//   npm run bench:3d -- --save     # run + store the result as the new baseline
//   options: --live [--id <recording> --frame <n>]  (hosted recording instead
//            of the fixture), --chrome <path>, --headed
//            --baseline <file>  compare with / --save to another file
//                               (e.g. bench/.cache/before.json for a before/after)
//            --app <dir>        benchmark another checkout's frontend (e.g. a
//                               worktree of the code before a change) with this
//                               checkout's fixture, asset cache and baseline
//
// Default data is bench/fixture/ (an anonymized window of a real match, see
// make-bench-fixture.mjs) and SquadCalc's map assets come from a local cache
// (bench/.cache/, filled on first run), so a run needs no network and always
// renders the same thing. No extra dependencies: it starts Vite itself,
// launches the installed Chrome headless and reads window.__benchResult over
// the DevTools protocol.
//
// What to trust: draw calls / triangles / scene counts are deterministic and
// machine-independent; timings (median / p95 per frame, GPU-synced) only
// compare on the same machine + GPU (the GPU string is checked).

import { spawn } from "node:child_process";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const arg = (name, dflt) => {
  const i = process.argv.indexOf(`--${name}`);
  return i > 0 ? process.argv[i + 1] : dflt;
};
const flag = (name) => process.argv.includes(`--${name}`);

const FIXTURE = join(root, "bench", "fixture");
const LIVE = flag("live") || !existsSync(join(FIXTURE, "frames.ndjson.gz"));
// Live default: Gorodok Invasion (forests, capture zones, vehicles: the heavy case).
const ID = LIVE ? arg("id", "2026-10-11_172322_GorodokInvasionv2_Invasion_v2_4f5e38dd") : "bench-fixture";
const FRAME = arg("frame", LIVE ? "600" : "20");
const CACHE = join(root, "bench", ".cache", "squadcalc");

// Local routes for a fixture run: the recording, the repo's own icons, and a
// write-through cache of squadcalc.app's map assets.
const send = (res, type, body, extra = {}) => {
  res.writeHead(200, { "Content-Type": type, "Cache-Control": "no-store", ...extra });
  res.end(body);
};
const benchRoutes = {
  name: "bench-routes",
  configureServer(srv) {
    srv.middlewares.use(async (req, res, next) => {
      const path = decodeURIComponent(new URL(req.url, "http://x").pathname);
      try {
        if (path === "/api/recording/bench-fixture/meta")
          return send(res, "application/json", readFileSync(join(FIXTURE, "meta.json")));
        if (path === "/api/recording/bench-fixture")
          return send(res, "application/x-ndjson", readFileSync(join(FIXTURE, "frames.ndjson.gz")),
                      { "Content-Encoding": "gzip" });
        if (path === "/api/match/bench") { res.statusCode = 404; return res.end(); }
        if (path.startsWith("/icons/")) {
          const file = normalize(join(root, "..", path));
          if (!file.startsWith(normalize(join(root, "..", "icons")))) { res.statusCode = 400; return res.end(); }
          if (existsSync(file)) return send(res, file.endsWith(".png") ? "image/png" : "application/octet-stream", readFileSync(file));
        }
        if (path.startsWith("/__squadcalc/")) {
          const rel = path.slice("/__squadcalc/".length);
          const file = normalize(join(CACHE, rel));
          if (!file.startsWith(normalize(CACHE)) || rel.includes("..")) { res.statusCode = 400; return res.end(); }
          if (!existsSync(file)) {
            const r = await fetch(`https://squadcalc.app/api/${rel}`);
            if (!r.ok) { res.statusCode = r.status; return res.end(); }
            mkdirSync(dirname(file), { recursive: true });
            writeFileSync(file, Buffer.from(await r.arrayBuffer()));
          }
          const type = { ".png": "image/png", ".webp": "image/webp", ".json": "application/json" }[
            file.slice(file.lastIndexOf("."))] ?? "application/octet-stream";
          return send(res, type, readFileSync(file));
        }
      } catch (e) { res.statusCode = 500; return res.end(String(e)); }
      next();
    });
  },
};
const BASELINE = resolve(root, arg("baseline", join("bench", "3d-baseline.json")));
// The code under test. A bare worktree has no node_modules: borrow ours.
const APP = resolve(arg("app", root));
if (APP !== root && !existsSync(join(APP, "node_modules")))
  symlinkSync(join(root, "node_modules"), join(APP, "node_modules"), "junction");
const TIMEOUT_MS = 6 * 60_000;
// Regression thresholds: timings are noisy, counters are not.
const TIME_TOLERANCE = 0.15, TIME_FLOOR_MS = 1, COUNT_TOLERANCE = 0.05;

const CHROME = arg("chrome", [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser",
].find(existsSync));
if (!CHROME) throw new Error("No Chrome/Edge found; pass --chrome <path>");

process.env.SQREADER_BACKEND ??= "https://squadreader.united-blueberries.de";
const { createServer } = await import("vite");
const server = await createServer({ root: APP, logLevel: "warn", server: { port: 5199, strictPort: false },
                                   plugins: LIVE ? [] : [benchRoutes] });
await server.listen();
const url = `${server.resolvedUrls.local[0]}?mode=replay&id=${encodeURIComponent(ID)}&view=3d&bench=1&frame=${FRAME}${LIVE ? "" : "&assets=local"}`;

const profile = mkdtempSync(join(tmpdir(), "bench3d-"));
const chrome = spawn(CHROME, [
  ...(flag("headed") ? [] : ["--headless=new"]),
  `--user-data-dir=${profile}`, "--remote-debugging-port=0", "--window-size=1400,800",
  "--no-first-run", "--no-default-browser-check", "--ignore-gpu-blocklist",
  "--disable-background-timer-throttling", "--disable-renderer-backgrounding", url,
], { stdio: "ignore" });

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let result;
try {
  // Chrome writes its debugging port here once it is up.
  let port;
  for (let i = 0; i < 100 && !port; i++) {
    await sleep(200);
    try { port = readFileSync(join(profile, "DevToolsActivePort"), "utf8").split("\n")[0]; } catch { /* not yet */ }
  }
  if (!port) throw new Error("Chrome did not start");
  const page = (await (await fetch(`http://127.0.0.1:${port}/json`)).json()).find((t) => t.type === "page");
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise((r, j) => { ws.onopen = r; ws.onerror = j; });
  let seq = 0;
  const pending = new Map();
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
  };
  const evaluate = (expression) => new Promise((resolve) => {
    const id = ++seq;
    pending.set(id, (m) => resolve(m.result?.result?.value));
    ws.send(JSON.stringify({ id, method: "Runtime.evaluate", params: { expression, returnByValue: true } }));
  });
  const t0 = Date.now();
  process.stdout.write(`bench: ${LIVE ? ID : "fixture (" + JSON.parse(readFileSync(join(FIXTURE, "meta.json"), "utf8")).layerName + ")"} @ frame ${FRAME} `);
  while (!result && Date.now() - t0 < TIMEOUT_MS) {
    await sleep(2000);
    process.stdout.write(".");
    result = await evaluate("window.__benchResult ?? null");
  }
  process.stdout.write("\n");
  ws.close();
} finally {
  chrome.kill();
  await server.close();
  await sleep(500);
  try { rmSync(profile, { recursive: true, force: true }); } catch { /* Chrome still holds a file */ }
}
if (!result) { console.error("bench: timed out (is the recording still on the backend?)"); process.exit(2); }

// Pictures of each shot, for a visual check (bench/.cache/shots/, git-ignored).
const SHOTS = join(root, "bench", ".cache", "shots");
mkdirSync(SHOTS, { recursive: true });
for (const [name, url] of Object.entries(result.images ?? {}))
  writeFileSync(join(SHOTS, `${name}.jpg`), Buffer.from(url.split(",")[1], "base64"));
delete result.images;
console.log(`pictures: ${SHOTS}`);

// ── report ───────────────────────────────────────────────────────────────────
let base = existsSync(BASELINE) ? JSON.parse(readFileSync(BASELINE, "utf8")) : null;
const comparable = base && base.recording === result.recording && base.frame === result.frame;
const sameGpu = base && base.gpu === result.gpu;
let worse = 0;
const delta = (cur, old, kind) => {
  if (old == null) return "";
  const d = cur - old, rel = old ? d / old : 0;
  const bad = kind === "time"
    ? sameGpu && rel > TIME_TOLERANCE && d > TIME_FLOOR_MS
    : rel > COUNT_TOLERANCE;
  if (bad) worse++;
  const sign = d > 0 ? "+" : "";
  return ` (${sign}${kind === "time" ? d.toFixed(1) : Math.round(d)}${bad ? " WORSE" : ""})`;
};
console.log(`gpu: ${result.gpu}  viewport: ${result.viewport}  map: ${result.map}  data: ${LIVE ? "live" : "fixture"}`
  + `${APP !== root ? `  app: ${APP}` : ""}  baseline: ${BASELINE}`);
if (base && !comparable) {
  console.log(`note: baseline used ${base.recording} @ ${base.frame}; not comparable, not judged`);
  base = null;
}
if (base && !sameGpu) console.log(`note: baseline was ${base.gpu}; timings not compared, counters are`);
console.log(`load: terrain ${result.loadMs.terrain} ms, props+trees ${result.loadMs.propsAndTrees} ms (network-bound, not judged)`);
console.log(`scene: ${JSON.stringify(result.scene)}`);
const rows = result.shots.map((s) => {
  const b = base?.shots.find((x) => x.name === s.name);
  return {
    shot: s.name,
    "median ms": s.medianMs + delta(s.medianMs, b?.medianMs, "time"),
    "p95 ms": s.p95Ms + delta(s.p95Ms, b?.p95Ms, "time"),
    "render ms": s.renderMs ?? "-",
    "cpu ms": s.cpuMs != null ? s.cpuMs + (b?.cpuMs != null ? ` (${s.cpuMs - b.cpuMs > 0 ? "+" : ""}${(s.cpuMs - b.cpuMs).toFixed(1)})` : "") : "-",
    "draw calls": s.drawCalls + delta(s.drawCalls, b?.drawCalls, "count"),
    triangles: s.triangles + delta(s.triangles, b?.triangles, "count"),
  };
});
console.table(rows);
if (result.shots[0]?.sections) {
  console.log("update ms per frame, by section:");
  console.table(Object.fromEntries(result.shots.map((s) => [s.name, s.sections])));
}

if (flag("save")) {
  mkdirSync(dirname(BASELINE), { recursive: true });
  writeFileSync(BASELINE, JSON.stringify(result, null, 2) + "\n");
  console.log(`baseline saved: ${BASELINE}`);
} else if (!base) {
  console.log("no baseline yet: run with --save to store this one");
} else if (worse) {
  console.log(`${worse} metric(s) got worse than the baseline`);
  process.exit(1);
} else {
  console.log("no regressions against the baseline");
}
