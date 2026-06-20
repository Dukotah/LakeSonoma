import { defineConfig } from "vitest/config";
import { resolve } from "path";

export default defineConfig({
  test: {
    environment: "jsdom",
    globals: true,
    include: ["tests/**/*.test.{ts,tsx}", "**/*.test.{ts,tsx}"],
    exclude: ["tests/e2e/**", "node_modules/**"],
    alias: {
      "@": resolve(__dirname, "."),
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "."),
    },
  },
});
