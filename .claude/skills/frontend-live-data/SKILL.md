---
name: frontend-live-data
description: Run, debug and test the squadreader web UI (frontend/) locally against the real hosted backend's data instead of a local agent — replays of real matches, stats, the 3D view. Use when asked to run/preview/debug/screenshot the frontend, reproduce a replay bug, or check a UI change with real recordings.
---

# Frontend against the hosted backend

The frontend never needs a local agent to be developed. Vite proxies `/api`,
`/health`, `/icons` and `/sqmaps` to `SQREADER_BACKEND`
(`frontend/vite.config.ts`), so point it at the hosted site and every real
recording is available on localhost with hot reload.

## Start it

Preferred (Claude desktop app): `preview_start` with the `frontend-hosted`
config in `.claude/launch.json`. Leave it running for the user when they want
to test.

By hand, from `frontend/`:

```bash
npm ci                                                        # first time only
SQREADER_BACKEND=https://squadreader.united-blueberries.de npm run dev
```

PowerShell: `$env:SQREADER_BACKEND="https://squadreader.united-blueberries.de"; npm run dev`.
Default without the variable is a local agent on `http://127.0.0.1:8080`.

## Find data to look at

- List recordings: `GET https://squadreader.united-blueberries.de/api/recordings`
  (JSON; fields `id`, `layerName`, `mapName`, `durationSec`, `inProgress`, …).
  Skip `inProgress: true`; only finalized recordings stream.
- Open one: `http://localhost:5173/?mode=replay&id=<id>`
- 3D view: add `&view=3d` (terrain/props/trees load from squadcalc.app).
- `?mode=replay` without `id` opens the picker.
- This build has no live map: `?mode=live` is ignored. "Live data" here means
  the hosted backend's recordings + stats. Some stats endpoints (e.g.
  `/api/leaderboard`) 404 on the hosted backend — that is not a frontend bug.

## Debug hooks (dev server only)

- `window.__map3d` (3D view, `import.meta.env.DEV` only): `store` (the live
  zustand store), `camera`, `soldierMeshes`, `vehMeshes`, `badgeGroup`,
  `buildingFades()`.
- Read state through `window.__map3d.store.getState()`. Do NOT
  `await import('/src/state/viewerStore.ts')` from the console: after any hot
  reload that yields a second, empty copy of the module.
- Jump to a frame and pause: `store.getState().stepReplayFrame(target - store.getState().replay.currentIdx)`.
- Wait for data before poking: `replay.frames.length` grows while the
  recording streams in.

## Gotchas

- The built-in browser pane pauses `requestAnimationFrame` while it is hidden:
  nothing renders, terrain never finishes "Loading…". Check `tabs_context`;
  ask the user to bring the pane back (Ctrl+Shift+B / Cmd+Shift+B) or verify
  logic through `__map3d` without screenshots.
- The built-in pane refuses pointer lock (`WrongDocumentError`): test 3D fly
  mode in the user's own browser.
- Screenshots of the pane can be scaled; set `resize_window` to e.g. 1400x800
  for stable coordinates and reset with preset `desktop` afterwards.

## Checks before handing back

From `frontend/`:

```bash
npx tsc --noEmit -p .     # types
npm test                  # every *.test.mts under src/
```

After any change to the 3D view, also run the `bench-3d` skill
(`npm run bench:3d`) and report its table.

Do not run `npm run build` to "check" — `frontend/dist` is committed. Build
into a scratch dir instead: `npx vite build --outDir <tmp> --emptyOutDir`.
