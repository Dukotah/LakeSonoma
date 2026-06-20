import { test, expect } from "@playwright/test";

/**
 * Smoke test — verifies the homepage renders and that at least one product
 * "Book" CTA links to the Singenuity booking host.
 *
 * Skip gracefully when browsers aren't installed by setting SKIP_E2E=1.
 */

const SKIP = process.env.SKIP_E2E === "1" || process.env.SKIP_E2E === "true";
const SINGENUITY_HOST = "book.singenuity.com";

test.describe("Homepage smoke", () => {
  test.skip(SKIP, "Skipping e2e tests (SKIP_E2E=1 or browsers not installed)");

  test("homepage renders with a heading", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");
    // Verify there's at least one visible heading (h1 or h2)
    const heading = page.locator("h1, h2").first();
    await expect(heading).toBeVisible();
  });

  test("homepage contains at least one 'Book' link pointing to Singenuity", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    // Find all anchor elements whose href points to Singenuity
    const bookLinks = page.locator(`a[href*="${SINGENUITY_HOST}"]`);
    const count = await bookLinks.count();

    expect(count).toBeGreaterThan(0);
  });

  test("Singenuity book links include a product ID path segment", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const bookLinks = page.locator(`a[href*="${SINGENUITY_HOST}/758/activity/details/"]`);
    const count = await bookLinks.count();

    // At least one deep-link must exist (not just the catalog URL)
    expect(count).toBeGreaterThan(0);
  });

  test("navigation links are present", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("domcontentloaded");

    // Check there are navigational anchor elements
    const navLinks = page.locator("nav a, header a");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });
});
