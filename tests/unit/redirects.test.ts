import { describe, it, expect } from "vitest";
import { redirects } from "@/lib/redirects";

describe("redirects shape", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(redirects)).toBe(true);
    expect(redirects.length).toBeGreaterThan(0);
  });

  it("every entry has a 'source' string starting with '/'", () => {
    redirects.forEach((r) => {
      expect(typeof r.source).toBe("string");
      expect(r.source.startsWith("/")).toBe(true);
    });
  });

  it("every entry has a 'destination' string starting with '/'", () => {
    redirects.forEach((r) => {
      expect(typeof r.destination).toBe("string");
      expect(r.destination.startsWith("/")).toBe(true);
    });
  });

  it("every entry has a boolean 'permanent' field", () => {
    redirects.forEach((r) => {
      expect(typeof r.permanent).toBe("boolean");
    });
  });

  it("all redirects are permanent (301)", () => {
    redirects.forEach((r) => {
      expect(r.permanent).toBe(true);
    });
  });

  it("no source matches its own destination (no self-redirect loops)", () => {
    redirects.forEach((r) => {
      // Strip trailing wildcards for comparison
      const source = r.source.replace(/\/:\w+\*/g, "");
      const dest = r.destination.replace(/\/:\w+\*/g, "");
      expect(source).not.toBe(dest);
    });
  });

  it("includes the canonical boat-rentals -> rentals redirect", () => {
    const r = redirects.find((x) => x.source === "/boat-rentals");
    expect(r).toBeDefined();
    expect(r!.destination).toBe("/rentals");
  });

  it("includes the read-on -> read-on-sonoma redirect", () => {
    const r = redirects.find((x) => x.source === "/read-on");
    expect(r).toBeDefined();
    expect(r!.destination).toBe("/read-on-sonoma");
  });

  it("includes the privacy-policy -> privacy redirect", () => {
    const r = redirects.find((x) => x.source === "/privacy-policy");
    expect(r).toBeDefined();
    expect(r!.destination).toBe("/privacy");
  });

  it("has no duplicate sources", () => {
    const sources = redirects.map((r) => r.source);
    const unique = new Set(sources);
    expect(unique.size).toBe(sources.length);
  });
});
