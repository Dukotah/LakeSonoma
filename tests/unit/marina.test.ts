import { describe, it, expect } from "vitest";
import {
  fromPrice,
  productsByCategory,
  productsByActivity,
  getProduct,
  PRODUCTS,
  PONTOONS,
  RENTALS,
  PATIOS,
  type Product,
  type Category,
} from "@/data/marina";

// ---------------------------------------------------------------------------
// fromPrice
// ---------------------------------------------------------------------------
describe("fromPrice", () => {
  it("returns the minimum amount across pricing tiers", () => {
    const product = PRODUCTS.find((p) => p.slug === "pontoon-5-person")!;
    // tiers(125, 350, 625, 1000) -> min is 125
    expect(fromPrice(product)).toBe(125);
  });

  it("returns undefined when all pricing amounts are omitted (priceTBD)", () => {
    const product = PRODUCTS.find((p) => p.slug === "patio-grand")!;
    expect(fromPrice(product)).toBeUndefined();
  });

  it("handles a product with a single tier", () => {
    const product = PRODUCTS.find((p) => p.slug === "jet-ski")!;
    // tiers(150, null, null, null) -> min (and only) is 150
    expect(fromPrice(product)).toBe(150);
  });

  it("handles a synthetic product with no pricing array entries", () => {
    const fake: Product = {
      singenuityId: 9999,
      slug: "fake",
      name: "Fake",
      category: "paddle",
      activities: ["paddling"],
      pricing: [],
      blurb: "test",
    };
    expect(fromPrice(fake)).toBeUndefined();
  });

  it("correctly picks minimum when multiple amounts exist", () => {
    const fake: Product = {
      singenuityId: 9999,
      slug: "fake",
      name: "Fake",
      category: "sport",
      activities: ["watersports"],
      pricing: [
        { label: "1 hour", amount: 500 },
        { label: "4 hours", amount: 200 },
        { label: "8 hours", amount: 300 },
      ],
      blurb: "test",
    };
    expect(fromPrice(fake)).toBe(200);
  });
});

// ---------------------------------------------------------------------------
// productsByCategory
// ---------------------------------------------------------------------------
describe("productsByCategory", () => {
  it("returns only pontoon products for category 'pontoon'", () => {
    const results = productsByCategory("pontoon");
    expect(results.length).toBeGreaterThan(0);
    results.forEach((p) => expect(p.category).toBe("pontoon"));
  });

  it("returns only patio products for category 'patio'", () => {
    const results = productsByCategory("patio");
    expect(results.length).toBeGreaterThan(0);
    results.forEach((p) => expect(p.category).toBe("patio"));
  });

  it("returns only paddle products for category 'paddle'", () => {
    const results = productsByCategory("paddle");
    expect(results.length).toBeGreaterThan(0);
    results.forEach((p) => expect(p.category).toBe("paddle"));
  });

  it("returns an empty array for a category that has no products", () => {
    // Cast to Category to satisfy TS — deliberately invalid value
    const results = productsByCategory("nonexistent" as Category);
    expect(results).toEqual([]);
  });

  it("PONTOONS export matches productsByCategory('pontoon')", () => {
    expect(PONTOONS).toEqual(productsByCategory("pontoon"));
  });

  it("PATIOS export matches productsByCategory('patio')", () => {
    expect(PATIOS).toEqual(productsByCategory("patio"));
  });
});

// ---------------------------------------------------------------------------
// RENTALS (non-patio products)
// ---------------------------------------------------------------------------
describe("RENTALS", () => {
  it("contains no patio products", () => {
    RENTALS.forEach((p) => expect(p.category).not.toBe("patio"));
  });

  it("contains at least one product per non-patio category", () => {
    const categories = new Set(RENTALS.map((p) => p.category));
    expect(categories.has("pontoon")).toBe(true);
    expect(categories.has("paddle")).toBe(true);
    expect(categories.has("jetski")).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// productsByActivity
// ---------------------------------------------------------------------------
describe("productsByActivity", () => {
  it("returns products that include the given activity", () => {
    const fishingProducts = productsByActivity("fishing");
    expect(fishingProducts.length).toBeGreaterThan(0);
    fishingProducts.forEach((p) => expect(p.activities).toContain("fishing"));
  });

  it("returns products that include 'watersports'", () => {
    const results = productsByActivity("watersports");
    expect(results.length).toBeGreaterThan(0);
    results.forEach((p) => expect(p.activities).toContain("watersports"));
  });
});

// ---------------------------------------------------------------------------
// getProduct
// ---------------------------------------------------------------------------
describe("getProduct", () => {
  it("returns the correct product for a known slug", () => {
    const p = getProduct("jet-ski");
    expect(p).toBeDefined();
    expect(p!.slug).toBe("jet-ski");
    expect(p!.category).toBe("jetski");
  });

  it("returns undefined for an unknown slug", () => {
    expect(getProduct("does-not-exist")).toBeUndefined();
  });
});

// ---------------------------------------------------------------------------
// Data integrity — every product must have a valid booking setup
// ---------------------------------------------------------------------------
describe("PRODUCTS data integrity", () => {
  it("every product has a non-empty slug", () => {
    PRODUCTS.forEach((p) => expect(p.slug.trim().length).toBeGreaterThan(0));
  });

  it("every product with bookByPhone:false has singenuityId > 0", () => {
    const broken = PRODUCTS.filter(
      (p) => !p.bookByPhone && (p.singenuityId == null || p.singenuityId <= 0),
    );
    expect(broken).toEqual([]);
  });

  it("quest-fishing-pontoon is marked bookByPhone (singenuityId === 0)", () => {
    const p = getProduct("quest-fishing-pontoon");
    expect(p).toBeDefined();
    expect(p!.bookByPhone).toBe(true);
    expect(p!.singenuityId).toBe(0);
  });

  it("all products have at least one pricing entry", () => {
    PRODUCTS.forEach((p) => expect(p.pricing.length).toBeGreaterThan(0));
  });
});
