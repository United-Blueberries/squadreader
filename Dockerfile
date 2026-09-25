# syntax=docker/dockerfile:1
FROM python:3.12-slim-bookworm

COPY --from=ghcr.io/astral-sh/uv:0.8 /uv /bin/uv

# procps: sqreader/config.py's PID resolver shells out to pidof/pgrep to find
# the game server process (see squad_port / find_squad_server_pid).
RUN apt-get update \
    && apt-get install -y --no-install-recommends procps \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app
COPY . /app

# Editable install is required, not a style choice: sqreader/squad/metadata.py
# locates data/static via __file__ relative to the source tree. A normal
# site-packages install would copy that tree elsewhere and metadata would
# silently load empty (maps/pools/capzones all blank, no error).
RUN uv pip install --system --no-cache -e "/app[fast]"

# No USER line: /proc/<pid>/mem access needs CAP_SYS_PTRACE (+ CAP_DAC_READ_SEARCH
# since the game runs as a different uid), and capabilities granted to the
# container are only effective for uid 0. Isolation comes from cap_drop/pid
# scoping in the compose file, not from dropping root here.
ENV SQREADER_CONFIG=/data/sqreader.config.json \
    SQR_ADDR_CACHE=/data/addrcache.json
WORKDIR /data

# Exec form so python is PID 1 and receives SIGTERM directly (needed to
# finalize the in-progress .sqrx footer on shutdown, instead of a shell
# swallowing the signal). No CMD: the `serve` flags live in
# deploy/docker-compose.example.yml, next to the mounts they depend on.
ENTRYPOINT ["python", "-m", "sqreader.cli"]
