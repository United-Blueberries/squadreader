# Contributing to sqreader

Thanks for helping — sqreader is a community tool and issues/PRs are welcome.

## Dev setup

```bash
git clone https://github.com/cagrianilokumus/squadreader.git
cd sqreader
pip install -e ".[dev]"
```

Real data needs a live Squad server on Linux, but the **test suite runs
anywhere** — it uses fixtures, not a live process.

## Before opening a PR

Run the same gate CI runs:

```bash
python -m pytest           # unit tests
python -m ruff check .     # lint
python -m mypy sqreader    # types
# only if you touched the web UI:
cd frontend && npm ci && npm run build
```

Please keep the project conventions:

- **English code and identifiers; docs may be Turkish.**
- **No-guess policy** — attribution (killer, placer, spotter, …) shows only
  data verified from memory. If it isn't certain, leave the field blank; no
  heuristics or "nearest player" guesses.
- **No new runtime dependencies** without discussion (the reader ships with one:
  `zstandard`).
- Add a test for any new pure-logic helper.

## Web UI against real data

You don't need a running agent to work on `frontend/`. The Vite dev server
proxies `/api`, `/icons` and `/sqmaps` to `SQREADER_BACKEND`, so point it at
the hosted site and every real recording is available with hot reload:

```bash
cd frontend
SQREADER_BACKEND=https://squadreader.united-blueberries.de npm run dev
# PowerShell: $env:SQREADER_BACKEND="https://squadreader.united-blueberries.de"; npm run dev
```

Pick an `id` from <https://squadreader.united-blueberries.de/api/recordings>
(skip `inProgress: true`) and open
`http://localhost:5173/?mode=replay&id=<id>`; add `&view=3d` for the 3D view.
Without the variable the dev server talks to a local agent on `:8080`.

Claude Code picks this up from `.claude/launch.json` (`frontend-hosted`) and
the `frontend-live-data` skill in `.claude/skills/`, which also lists the
dev-only debug hooks (`window.__map3d`) and known traps.

## 3D view benchmark

Changes to the 3D view should not make it heavier unnoticed:

```bash
cd frontend
npm run bench:3d            # run and compare with bench/3d-baseline.json
npm run bench:3d -- --save  # store the current numbers as the new baseline
```

It replays a fixed, anonymized recording window (`frontend/bench/fixture/`,
rebuilt with `npm run bench:3d:fixture`) at a fixed frame through four camera
shots (overview, low over units, ground level in a forest, 1x playback) in
headless Chrome and reports per-frame time (GPU-synced median/p95), draw calls
and triangles. SquadCalc's map assets are cached in `frontend/bench/.cache/`
(git-ignored) on the first run, so later runs need no network. Draw calls and triangles are deterministic; timings only compare on
the same GPU and wobble by about 1 ms. Exit code 1 means something got worse
than the baseline (timings: >15% and >1 ms; counts: >5%).

## Updating the SquadCalc 3D data

The 3D replay view (`?view=3d`) uses SquadCalc's map calibration and its
building/tree loaders, pinned to one upstream commit
(`frontend/src/canvas/squadcalc/source.json`). To pick up SquadCalc changes:

```bash
cd frontend
npm run update:squadcalc                 # latest master
npm run update:squadcalc -- --ref <sha>  # or a specific commit
git diff                                 # what moved upstream
npm test
```

It prints added/removed/changed maps and any map squadreader knows that
SquadCalc has no 3D data for. Heightmaps, basemaps and prop/tree binaries are
not copied; the view loads them from squadcalc.app at runtime.

## Sign off your commits (DCO + licence grant)

Contributions are accepted under the [Developer Certificate of
Origin](https://developercertificate.org/). Sign off each commit:

```bash
git commit -s -m "your message"
```

The sign-off certifies you wrote the change, or otherwise have the right to
submit it. **You keep the copyright in what you write** — this is a licence,
not a hand-over.

By signing off you also grant the project's maintainer a perpetual,
irrevocable, worldwide, royalty-free licence to use your contribution and to
distribute it **under the project's current licence and under any later licence
the project adopts**, including a commercial one.

Why the second paragraph exists, plainly: this project is
[AGPL + Commons Clause](LICENSE), so the only party who may sell it is the
copyright holder. Without that grant, changing the licence later — or offering
anyone a commercial exception — would require tracking down and getting written
agreement from every past contributor. A plain DCO does **not** give it: a DCO
certifies where code came from and nothing more. That has already cost this
project a stalled licence change once, which is why it is spelled out here
rather than assumed.

If you are not willing to grant that, say so in the pull request. A change can
still be taken as a suggestion and reimplemented, or simply declined — that is
a better outcome for both of us than a contribution nobody can safely build on
later.

## Reverse-engineered offsets

Memory offsets target a specific Squad build. If a Squad update breaks reads,
`sqreader doctor` reports which offsets drifted; `docs/offsets.md`
explains how they were derived.
