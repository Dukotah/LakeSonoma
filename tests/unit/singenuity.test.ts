import { describe, it, expect, vi, beforeEach } from "vitest";
import { bookingUrl, catalogUrl, singenuityImage, SINGENUITY_BASE } from "@/lib/singenuity";

describe("bookingUrl", () => {
  beforeEach(() => {
    vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  it("returns a deep-link URL for a valid positive id", () => {
    const url = bookingUrl(3624);
    expect(url).toBe(`${SINGENUITY_BASE}/activity/details/3624/date`);
  });

  it("URL contains the Singenuity base host", () => {
    const url = bookingUrl(3644);
    expect(url).toContain("book.singenuity.com");
  });

  it("includes the id in the path", () => {
    expect(bookingUrl(42)).toContain("/42/");
  });

  it("falls back to catalog URL when id is null", () => {
    const url = bookingUrl(null);
    expect(url).toBe(catalogUrl());
  });

  it("falls back to catalog URL when id is undefined", () => {
    const url = bookingUrl(undefined);
    expect(url).toBe(catalogUrl());
  });

  it("falls back to catalog URL when id is 0 (bookByPhone sentinel)", () => {
    const url = bookingUrl(0);
    expect(url).toBe(catalogUrl());
  });

  it("falls back to catalog URL when id is negative", () => {
    const url = bookingUrl(-1);
    expect(url).toBe(catalogUrl());
  });

  it("emits a console.warn when id is invalid", () => {
    const warnSpy = vi.spyOn(console, "warn");
    bookingUrl(0);
    expect(warnSpy).toHaveBeenCalledWith(expect.stringContaining("[singenuity]"));
  });

  it("does NOT warn for a valid id", () => {
    const warnSpy = vi.spyOn(console, "warn");
    bookingUrl(3624);
    expect(warnSpy).not.toHaveBeenCalled();
  });
});

describe("catalogUrl", () => {
  it("returns the generic catalog URL", () => {
    expect(catalogUrl()).toBe(`${SINGENUITY_BASE}/`);
  });

  it("catalog URL ends with a trailing slash", () => {
    expect(catalogUrl()).toMatch(/\/$/);
  });
});

describe("singenuityImage", () => {
  it("includes the Cloudinary host", () => {
    const url = singenuityImage(3624);
    expect(url).toContain("res.cloudinary.com");
  });

  it("includes the given singenuityId in the URL", () => {
    const url = singenuityImage(3624);
    expect(url).toContain("3624");
  });

  it("accepts custom width and height", () => {
    const url = singenuityImage(3624, 400, 300);
    expect(url).toContain("w_400");
    expect(url).toContain("h_300");
  });

  it("defaults to 800x600", () => {
    const url = singenuityImage(3624);
    expect(url).toContain("w_800");
    expect(url).toContain("h_600");
  });
});
