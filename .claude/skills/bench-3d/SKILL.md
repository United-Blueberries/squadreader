---
name: bench-3d
description: Benchmark the squadreader 3D replay view and compare before vs after a change. Use BEFORE starting and AFTER finishing any change to the 3D view (frontend/src/canvas/Map3D.tsx, kind3d.ts, squadcalc/, sky/), when the user asks whether something made the 3D view slower/heavier, or when asked to benchmark, profile or re-baseline it.
---

# 3D view benchmark

Same scene every run (anonymized fixture recording, fixed frame, fixed camera
shots), so the numbers show whether a change made the 3D view heavier.

## Run

From `frontend/`:

```bash
npm run bench:3d
```

~30-60 s. It starts its own Vite (port 5199+), serves the fixture, the repo's
icons and a local cache of squadcalc.app's map assets (`bench/.cache/`, git-
ignored, filled on first run), launches the installed Chrome headless on the
real GPU and reads `window.__benchResult`. Works while the built-in browser
pane is hidden; needs no network once the cache is filled.

Exit 0 = no regression, 1 = something got worse, 2 = timed out.

## Before / after

Timings drift between sessions (GPU clocks, whatever else the machine runs:
the same code has measured 7.5 ms and 10 ms an hour apart), and a baseline
from another GPU or fixture is not compared at all. So for any change to the
3D view:

1. **Before editing**, run `npm run bench:3d`.
   - `no regressions` → the saved baseline fits this machine; still take a
     fresh before-run if timings matter for the change (step 2).
   - `no baseline yet` or `not comparable, not judged` (other GPU / fixture)
     → there is nothing valid to compare against: take a before-run.
2. Before-run (same sitting as the after-run, unchanged code):
   `npm run bench:3d -- --save --baseline bench/.cache/before.json`
3. Make the change.
4. After-run: `npm run bench:3d -- --baseline bench/.cache/before.json`
   → report this table (counts and timings vs the before-run).

**Already changed the code without a before-run?** Benchmark the unchanged
code from a temporary worktree of HEAD (works only if HEAD contains the 3D
view; the runner links our node_modules into it and serves our fixture):

```bash
git worktree add <scratch>/bench-before HEAD
npm run bench:3d -- --app <scratch>/bench-before/frontend --save --baseline bench/.cache/before.json
npm run bench:3d -- --baseline bench/.cache/before.json
# remove the node_modules link FIRST, never through it:
#   Windows: cmd /c rmdir <scratch>\bench-before\frontend\node_modules
#   Unix:    rm <scratch>/bench-before/frontend/node_modules
git worktree remove --force <scratch>/bench-before
```

Only `--save` to the committed `bench/3d-baseline.json` when the user agreed
to the new numbers.

## Report

Always show the user the table it prints (shot / median ms / p95 ms / draw
calls / triangles, with deltas vs the baseline) and say plainly whether it
regressed. Judge it like this:

- **Draw calls, triangles, scene counts** are deterministic. Any change means
  the rendered scene changed; > 5 % more is flagged WORSE. Explain why.
- **Timings** (per frame, GPU-synced with `gl.finish`, median + p95 over 90-120
  frames) wobble about ±1 ms run to run. Flagged only when > 15 % AND > 1 ms
  slower, and only against a baseline from the same GPU. A single flagged p95
  with unchanged counts: re-run once before calling it a regression.
- **Load times** are reported, not judged.
- **render ms / cpu ms**: three.js `render()` vs everything up to the GPU sync.
  If total grows but render ms doesn't, the cost is in our per-frame update:
  read the **"update ms per frame, by section"** table (bench-only lap timers
  in `frame()`: players+vehicles, deployables+rallies, markers+graves, fx,
  cull+caps, treeFade, buildingFade, rest) instead of guessing. That is how a
  7 ms tree-fade loop was found.
- **Pictures**: every run saves `bench/.cache/shots/<shot>.jpg` (3D canvas
  only, no HTML overlays) plus an untimed `follow.jpg` (follow camera +
  squad spotlight). Look at them after visual changes: they work while the
  built-in browser pane is hidden.

## Baseline

`frontend/bench/3d-baseline.json`. Re-save only when a cost increase is
intended and the user agreed, or when the fixture changed:

```bash
npm run bench:3d -- --save
```

A baseline from another recording/frame or another GPU is not compared (the
runner says so).

## Fixture

`frontend/bench/fixture/` = `meta.json` + `frames.ndjson.gz`: a 170-frame
window (~5.5 MB gz) of Gorodok Invasion v2, every player identity replaced
(names, EOS ids, clan tags, squad names, server name; the maker aborts if any
original string survives). Bench frame inside it: 20.

Rebuild only to deliberately change the benchmark scene, then re-save the
baseline:

```bash
npm run bench:3d:fixture -- [--id <recording> --at <sec> --frames <n>]
```

## Variants

- `npm run bench:3d -- --live [--id <rec> --frame <n>]` — a hosted recording
  instead of the fixture (network-bound; compares only with a live baseline).
- `--baseline <file>` compares with / saves to another file; `--app <dir>`
  benchmarks another checkout's frontend (see Before / after).
- `--headed` shows the Chrome window; `--chrome <path>` picks the browser.

## What it measures

Bench mode is `?bench` in Map3D (`runBench` at the end of the scene effect):
waits for the data + props, pauses on the frame, then renders shots
`overview`, `units-60m` (60 m above the soldiers' centroid), `forest-ground`
(4 m up in the densest tree tile) and `playing-1x` (1x playback). To add a
shot, add it there and re-save the baseline.
