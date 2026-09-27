"""End to end, minus the memory layer: snapshot frames → recorder + stats →
.sqrx + SQLite → HTTP server → what a client actually receives.

The halves of this chain are covered elsewhere (test_synth_match.py writes a
.sqrx, test_public_no_live.py serves a hand-made one). This proves they meet:
the file the recorder finalizes is the file the server lists and streams, and
the stats the same ticks produced are the stats the API reports.
"""
from __future__ import annotations

import json
import urllib.request

import pytest

from e2e_match import (IN_PROGRESS_TICKS, KILLER, LAYER, MATCH_ID, VICTIM,
                       build_match)
from sqreader.httpsrv import _TickBeat, serve_in_background


@pytest.fixture
def served(tmp_path):
    built = build_match(tmp_path)
    srv = serve_in_background("127.0.0.1", 0, _TickBeat(),
                              recordings_dir=built["rec_dir"],
                              stats_db=built["stats_db"])
    port = srv.server_address[1]

    def get(path):
        with urllib.request.urlopen(f"http://127.0.0.1:{port}{path}",
                                    timeout=5) as r:
            return r.read()

    try:
        yield built, get
    finally:
        srv.shutdown()
        srv.server_close()


def test_recorder_closed_the_match_itself(served):
    built, _ = served
    assert built["open_recording"] is None, \
        "WaitingPostMatch must finalize the recording without outside help"


def test_finalized_recording_is_listed_and_streamed_intact(served):
    _, get = served
    listing = json.loads(get("/api/recordings"))
    assert len(listing) == 1
    rec = listing[0]
    assert rec["matchId"] == MATCH_ID
    assert rec["layerName"] == LAYER
    assert rec["recordingState"] == "finalized" and rec["inProgress"] is False
    assert rec["ticks"] == IN_PROGRESS_TICKS

    assert json.loads(get(f"/api/recording/{rec['id']}/meta"))["id"] == rec["id"]

    lines = get(f"/api/recording/{rec['id']}").decode("utf-8").splitlines()
    frames = [json.loads(ln) for ln in lines if ln]
    # Every InProgress tick, in order — including the ones buffered before
    # the recorder confirmed the match id and opened the file.
    assert [f["tick"] for f in frames] == list(range(1, IN_PROGRESS_TICKS + 1))
    assert all(f["gameState"]["matchId"] == MATCH_ID for f in frames)


def test_stats_api_reports_the_match_and_the_kill(served):
    _, get = served
    matches = json.loads(get("/api/matches"))
    assert [m["match_id"] for m in matches] == [MATCH_ID]
    assert matches[0]["status"] == "final"

    detail = json.loads(get(f"/api/match/{MATCH_ID}"))
    by_name = {p["name"]: p for p in detail["players"]}
    assert set(by_name) == {"Alpha1", "Alpha2", "Bravo1", "Bravo2"}
    assert by_name[KILLER[0]]["kills"] == 1
    assert by_name[VICTIM[0]]["deaths"] == 1

    profile = json.loads(get(f"/api/players/{KILLER[1]}"))
    assert profile["lifetime"]["kills"] == 1
