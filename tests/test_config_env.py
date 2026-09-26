"""Env-var overrides: SQREADER_<KEY> sits between the config file and the CLI
in the resolution order (CLI flag > env > sqreader.config.json > DEFAULTS)."""
import json

import pytest

from sqreader import config


@pytest.fixture(autouse=True)
def reset_cache(monkeypatch):
    monkeypatch.setattr(config, "_cache", None)
    yield
    monkeypatch.setattr(config, "_cache", None)


def test_non_str_default_is_json_parsed(monkeypatch):
    monkeypatch.setenv("SQREADER_SQUAD_PORT", "7787")
    assert config.get("squad_port") == 7787


def test_bool_is_json_parsed(monkeypatch):
    monkeypatch.setenv("SQREADER_PUSH_ENABLED", "false")
    assert config.get("push_enabled") is False


def test_str_default_is_kept_raw_even_if_it_looks_numeric(monkeypatch):
    """server_id's default is a str, so "123" stays the string "123" rather
    than being json-parsed into the int 123."""
    monkeypatch.setenv("SQREADER_SERVER_ID", "123")
    assert config.get("server_id") == "123"


def test_none_default_url_is_kept_raw(monkeypatch):
    """central_url defaults to None (not a str), but a URL isn't valid JSON,
    so it falls back to the raw string instead of erroring."""
    monkeypatch.setenv("SQREADER_CENTRAL_URL", "https://example.com")
    assert config.get("central_url") == "https://example.com"


def test_env_beats_config_file(monkeypatch, tmp_path):
    cfg_file = tmp_path / "sqreader.config.json"
    cfg_file.write_text(json.dumps({"server_id": "from-file"}))
    monkeypatch.setenv("SQREADER_CONFIG", str(cfg_file))
    monkeypatch.setenv("SQREADER_SERVER_ID", "from-env")
    assert config.get("server_id") == "from-env"
