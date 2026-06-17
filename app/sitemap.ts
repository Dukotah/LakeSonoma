import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/data/marina";
import { SITE } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/rentals",
    "/patios",
    "/storage",
    "/forms",
    "/faqs",
    "/policies",
    "/about",
    "/contact",
    "/read-on-sonoma",
  ];

  const staticEntries = staticPaths.map((path) => ({
    url: `${SITE.url}${path}`,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  const productEntries = PRODUCTS.map((p) => ({
    url: `${SITE.url}/product/${p.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticEntries, ...productEntries];
}
