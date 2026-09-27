// Browser smoke tests against the BUILT SPA (frontend/dist), served by the real
// Python HTTP server over a synthetic match — see scripts/e2e_serve.py.
// Run `npm run build` first; `npm run e2e` does not rebuild.
import { defineConfig, devices } from "@playwright/test";

const PORT = 4599;

export default defineConfig({
  testDir: "e2e",
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [["list"], ["html", { open: "never" }]] : "list",
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    trace: "retain-on-failure",
  },
  projects: [{ name: "chromium", use: { ...devices["Desktop Chrome"] } }],
  webServer: {
    // CI installs the backend system-wide; locally it lives in the uv venv.
    command: `${process.env.E2E_PYTHON ?? "uv run python"} ../scripts/e2e_serve.py --port ${PORT}`,
    url: `http://127.0.0.1:${PORT}/health`,
    reuseExistingServer: !process.env.CI,
  },
});
