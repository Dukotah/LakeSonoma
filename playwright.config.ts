import { defineConfig, devices } from "@playwright/test";

/**
 * E2E tests — smoke-only. Skip gracefully when browsers aren't installed
 * by setting SKIP_E2E=true or by running `npx playwright test` only when
 * the browsers are available (CI installs them explicitly).
 */
export default defineConfig({
  testDir: "./tests/e2e",
  /* Global timeout per test */
  timeout: 30_000,
  /* Fail fast in CI */
  retries: process.env.CI ? 1 : 0,
  /* Reporter */
  reporter: [["list"], ["html", { open: "never" }]],

  use: {
    /* Base URL — set BASE_URL env var in CI, default to local dev server */
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
    /* Collect traces on first retry */
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],

  /* Start a local Next.js server in CI if BASE_URL is not provided externally */
  // webServer intentionally omitted — the CI workflow uses next build + next start separately
  // to avoid OOM on the dev machine; set BASE_URL before running playwright.
});
