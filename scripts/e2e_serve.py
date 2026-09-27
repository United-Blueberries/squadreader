"""Serve the synthetic e2e match + built frontend, for the Playwright suite.

`sqreader serve` attaches to a live game before it starts HTTP, so the browser
tests use this instead: build tests/e2e_match.py's match into a temp dir, then
run the real server over it until killed.

    python scripts/e2e_serve.py --port 4599
"""
from __future__ import annotations

import argparse
import sys
import tempfile
import threading
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "tests"))

from e2e_match import build_match  # noqa: E402
from sqreader.httpsrv import _TickBeat, serve_in_background  # noqa: E402


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--port", type=int, default=4599)
    args = ap.parse_args()
    with tempfile.TemporaryDirectory(prefix="sqreader-e2e-") as tmp:
        built = build_match(Path(tmp))
        serve_in_background("127.0.0.1", args.port, _TickBeat(),
                            recordings_dir=built["rec_dir"],
                            stats_db=built["stats_db"],
                            frontend_dir=ROOT / "frontend" / "dist")
        print(f"e2e server on http://127.0.0.1:{args.port}", flush=True)
        try:
            threading.Event().wait()
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
