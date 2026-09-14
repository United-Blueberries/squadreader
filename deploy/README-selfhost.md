# Self-hosting against a Docker-hosted Squad server

This guide runs sqreader **natively on the host** (systemd, not a container)
against a Squad dedicated server that itself runs inside Docker (e.g. the
`cm2network/squad` image via a `SquadJS`-style `docker-compose.yml`). It
assumes two instances share the box (`squad` live + `squad-playground`) and
covers the live one only.

sqreader reads the game's memory via `/proc/<pid>/mem`. Linux's host root PID
namespace can see and read every descendant-namespace process, so this works
against a dockerized Squad server with **no extra Docker flags, capabilities,
or sidecar container** — as long as sqreader itself runs on the host, not
inside another container.

## 1. Check out the fork

```bash
sudo git clone <your-fork-url> /opt/sqreader
cd /opt/sqreader
```

Using `git checkout` + restart to upgrade (not the `curl squadreader.com/
install.sh | bash` installer) keeps this fully self-hosted: the installer
pulls signed compiled releases from upstream's own update platform, which a
from-source deployment never talks to.

## 2. Configure

```bash
cp sqreader.config.example.json sqreader.config.json
```

This file is gitignored — nothing here is ever committed. Edit it to match a
Docker-hosted, multi-instance box:

```json
{
  "squad_binary_pattern": "/home/steam/squad-dedicated/.*SquadGameServer.*",
  "squad_port": 7787,
  "squad_log_glob": "/opt/squad/data-squad/SquadGame/Saved/Logs/SquadGame.log",
  "server_id": "squad"
}
```

- `squad_binary_pattern` — the default assumes a `.../serverfiles/...` layout;
  the `cm2network/squad` image installs under `squad-dedicated` instead, so it
  needs overriding or `pidof -s SquadGameServer` may find no match at all.
- `squad_port` — the live server's `-Port=` (its `PORT` env var in
  `docker-compose.yml`). Required whenever more than one `SquadGameServer`
  process runs on the box, so the agent doesn't attach to an arbitrary one.
- `squad_log_glob` — the **host** path the log directory is bind-mounted to
  (check your `docker-compose.yml`'s volumes for the game container), not the
  path as seen from inside the container.
- Leave `push_enabled: false` and `central_url: null` (the defaults).

### No telemetry — the one rule

Every outbound call sqreader can make (match check-ins, offset self-heal,
auto-update) is gated behind enrollment credentials that only exist after
running `sqreader enroll`. **Never run that command on this box.** A fresh
checkout that skips it makes zero outbound requests — no config flag needed
beyond the defaults above. Confirm anytime with:

```bash
sqreader enroll --status   # should print "not enrolled"
```

## 3. Install the systemd unit

Copy the template out to `/etc/systemd/system` and fill in the placeholder
there — never edit the tracked copy in the repo:

```bash
sudo sed 's|@SQREADER_HOME@|/opt/sqreader|g' \
    deploy/sqreader-prod.service | sudo tee /etc/systemd/system/sqreader-prod.service
sudo systemctl daemon-reload
sudo systemctl enable --now sqreader-prod
```

This binds the HTTP server to `127.0.0.1:8081` only — it's not reachable
except through a reverse proxy, matching how the rest of the stack exposes
host-local services.

Optional but recommended on a box that's also running the live game server:
apply the CPU/IO drop-in described in a comment at the bottom of
`deploy/sqreader-prod.service` (`CPUQuota=50%`, `Nice=19`,
`IOSchedulingClass=idle`) so sqreader never competes with Squad under load.

## 4. Verify locally

```bash
sudo journalctl -u sqreader-prod -f      # should show it attaching to the game
sqreader doctor                          # confirms memory offsets resolve
curl -s http://127.0.0.1:8081/           # sqreader UI/API responds
```

## 5. Expose it through infra's Caddy

This project's `infra` repo reverse-proxies `*.united-blueberries.de` through
a containerized Caddy. Since sqreader runs on the host, not in that Docker
network, Caddy reaches it via `host.docker.internal` (the same mechanism
`vector` already uses there):

- `docker-compose.yml`: add `extra_hosts: ["host.docker.internal:host-gateway"]`
  to the `caddy` service.
- `Caddyfile`: add a public site block routing to `host.docker.internal:8081`
  (no auth gate — sqreader only ever serves finished-match replays/stats,
  never a live map).

Apply with `docker compose up -d caddy`, then create the DNS record for the
subdomain in Cloudflare (proxied, matching the other `*.united-blueberries.de`
records).

## 6. Verify end-to-end

```bash
curl -sI https://sqr.united-blueberries.de
```

## Out of scope for this pass

`squad-playground`, RCON/Steam-ID plugin wiring, and anti-cheat plugins are
not covered here — each is a config-only addition later if wanted (a second
instance following the same steps with its own `server_id`/port/systemd unit
for playground; `--plugins-config` for anti-cheat).
