// Smoke test: a match recorded by the real recorder, served by the real HTTP
// server, decoded and rendered by the built viewer. The fixture is
// tests/e2e_match.py — four players on Al Basrah AAS v1, Alpha1 kills Bravo1.
import { expect, test, type Page } from "@playwright/test";

const LAYER = "Al Basrah AAS v1";

// Icons and map textures are not in the repo, so their 404s are expected.
// Anything else logged as an error — or thrown — fails the test.
function collectErrors(page: Page): string[] {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(`pageerror: ${e.message}`));
  page.on("console", (m) => {
    if (m.type() === "error" && !m.text().startsWith("Failed to load resource")) {
      errors.push(`console: ${m.text()}`);
    }
  });
  return errors;
}

test("home lists the recording and opens it", async ({ page }) => {
  const errors = collectErrors(page);
  await page.goto("/");
  const match = page.locator(".hm-match", { hasText: LAYER });
  await expect(match).toBeVisible();
  await match.click();
  await expect(page).toHaveURL(/mode=replay&id=/);
  await expect(page.locator("span.tb-clock")).toBeVisible();
  expect(errors).toEqual([]);
});

test("replay renders, plays, and shows the scoreboard", async ({ page, request }) => {
  const errors = collectErrors(page);
  const [rec] = await (await request.get("/api/recordings")).json();
  await page.goto(`/?mode=replay&id=${encodeURIComponent(rec.id)}`);

  await expect(page.locator("canvas").first()).toBeVisible();
  const clock = page.locator("span.tb-clock");
  await expect(clock).toBeVisible();

  const before = await clock.textContent();
  await page.getByTitle("play (space)").click();
  await expect(clock).not.toHaveText(before ?? "", { timeout: 5_000 });

  await page.keyboard.press("Tab");
  for (const name of ["Alpha1", "Alpha2", "Bravo1", "Bravo2"]) {
    await expect(page.getByText(name, { exact: true }).first()).toBeVisible();
  }
  expect(errors).toEqual([]);
});
