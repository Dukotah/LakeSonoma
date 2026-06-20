import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/marina";
import { SITE } from "@/data/site";

/** Paths that get a high priority (0.9) — key commercial pages. */
const HIGH_PRIORITY_PATHS = new Set(["/rentals", "/patios", "/pricing"]);

/** Paths that get a medium-high priority (0.8) — useful ancillary pages. */
const MEDIUM_HIGH_PRIORITY_PATHS = new Set([
  "/storage",
  "/hydrohoist",
  "/guide",
  "/faqs",
  "/about",
  "/contact",
]);

/** Legal/policy pages get a lower priority (0.4). */
const LOW_PRIORITY_PATHS = new Set(["/privacy", "/terms", "/policies"]);

function staticPriority(path: string): number {
  if (path === "") return 1;
  if (HIGH_PRIORITY_PATHS.has(path)) return 0.9;
  if (MEDIUM_HIGH_PRIORITY_PATHS.has(path)) return 0.8;
  if (LOW_PRIORITY_PATHS.has(path)) return 0.4;
  return 0.6;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/rentals",
    "/patios",
    "/pricing",
    "/storage",
    "/forms",
    "/hydrohoist",
    "/faqs",
    "/policies",
    "/about",
    "/contact",
    "/guide",
    "/read-on-sonoma",
    "/privacy",
    "/terms",
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: staticPriority(path),
  }));

  const productEntries = PRODUCTS.map((p) => ({
    url: `${SITE.url}/product/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...productEntries];
}
