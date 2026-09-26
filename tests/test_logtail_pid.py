"""log_from_pid() path resolution — monkeypatched, no real /proc needed (runs on
Windows too)."""
import os

from sqreader.squad.logtail import log_from_pid

PID = 4242
EXE = os.path.join("/", "srv", "squad", "SquadGame", "Binaries", "Linux", "SquadGameServer")
DIRECT = os.path.join("/", "srv", "squad", "SquadGame", "Saved", "Logs", "SquadGame.log")
VIA_ROOT = f"/proc/{PID}/root{DIRECT}"


def _patch_realpath(monkeypatch):
    monkeypatch.setattr(os.path, "realpath", lambda p: EXE)


def test_direct_path_preferred_when_readable(monkeypatch):
    _patch_realpath(monkeypatch)
    monkeypatch.setattr(os, "access", lambda p, mode: p == DIRECT)
    assert log_from_pid(PID) == DIRECT


def test_proc_root_fallback_when_direct_unreadable(monkeypatch):
    _patch_realpath(monkeypatch)
    monkeypatch.setattr(os, "access", lambda p, mode: p == VIA_ROOT)
    assert log_from_pid(PID) == VIA_ROOT


def test_none_when_neither_readable(monkeypatch):
    _patch_realpath(monkeypatch)
    monkeypatch.setattr(os, "access", lambda p, mode: False)
    assert log_from_pid(PID) is None
