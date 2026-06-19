/**
 * imagery.ts — Image manifest for Lake Sonoma Marina website.
 *
 * SOURCE: All photos below are the marina's OWN photography, mirrored from the
 * live lakesonoma.com (WordPress media library) and stored locally under
 * /public/images/wp/. These are the real lake, marina, boats, and patios —
 * NOT stock art. Filenames are kept verbatim from the source for traceability.
 *
 * - Section/lifestyle imagery is keyed by name in IMAGES (consumed by <Hero/>
 *   and homepage bands).
 * - Per-product imagery lives in PRODUCT_IMAGES, keyed by the marina.ts slug,
 *   resolved via productImage(slug). Products with no dedicated source photo
 *   reuse the closest real one (noted inline).
 */

const WP = "/images/wp";

export const IMAGES: Record<string, string> = {
  // Sweeping panorama of the marina tucked into the Sonoma hills — homepage hero.
  hero: `${WP}/cd71c3623c1d50ca17727ea912a9a954.jpeg`,
  // Aerial of the blue-canopied covered slips on the water.
  "marina-docks": `${WP}/f5e92ce993c46cf91a5ff142f28efab7.jpeg`,
  // Wide lake landscape (reuses the aerial for a clean, on-brand wide shot).
  "lake-landscape": `${WP}/f5e92ce993c46cf91a5ff142f28efab7.jpeg`,
  // Lush lawn + walkway down to the docks — warm, inviting "about" band.
  "family-boating": `${WP}/f30472fd86f85bb4a3cd3de3d9a3b65e.jpeg`,
  // Dramatic aerial for the closing CTA band.
  "sunset-dock": `${WP}/f5e92ce993c46cf91a5ff142f28efab7.jpeg`,
  // Covered slips / storage — the aerial best shows the slip rows.
  "storage-slips": `${WP}/f5e92ce993c46cf91a5ff142f28efab7.jpeg`,
  // Lakeside reserved patio (current Singenuity photo).
  "picnic-patio": "/images/singenuity/3653.jpg",
  // Paddle craft (current Singenuity paddle board).
  "kayak-paddle": "/images/singenuity/3648.jpg",
  // Jet-ski on the water (lifestyle — WP action shot reads better than the catalog still).
  "jet-ski": `${WP}/image3-scaled-e1687138490952.jpeg`,
  // Center-console fishing boat (current Singenuity photo).
  "fishing-boat": "/images/singenuity/3641.jpg",
  // Pontoon (current Singenuity 10-person photo).
  "pontoon-on-water": "/images/singenuity/3633.jpg",
  // Policies & rules backdrop.
  "policies-bg": `${WP}/Policies-and-rules-bg.jpg`,
};

/**
 * Per-product photography, keyed by marina.ts slug. These are the CURRENT photos
 * of each actual rental/patio, pulled fresh from Singenuity (the marina's live
 * booking platform) by entity ID and stored locally under /images/singenuity/.
 * Every unit has its own up-to-date photo — no reuse, no stale WP-era images.
 * To refresh: re-download res.cloudinary.com/singenuity/.../entities/images/{id}/original.
 */
const SG = "/images/singenuity";
export const PRODUCT_IMAGES: Record<string, string> = {
  "pontoon-5-person": `${SG}/3624.jpg`,
  "pontoon-10-person": `${SG}/3633.jpg`,
  "pontoon-12-person": `${SG}/3634.jpg`,
  "pontoon-double-decker": `${SG}/3635.jpg`,
  "pontoon-premium-10": `${SG}/3636.jpg`,
  "quest-fishing-pontoon": `${SG}/3633.jpg`, // stand-in: a pontoon photo (no dedicated Quest photo yet)
  "watersport-tubing": `${SG}/3637.jpg`,
  "premium-sport-boat": `${SG}/3627.jpg`,
  "logic-fishing-boat": `${SG}/3641.jpg`,
  "jet-ski": `${SG}/3643.jpg`,
  "single-kayak": `${SG}/3644.jpg`,
  "double-kayak": `${SG}/3645.jpg`,
  "paddle-board": `${SG}/3648.jpg`,
  canoe: `${SG}/3650.jpg`,
  "patio-grand": `${SG}/3651.jpg`,
  "patio-bar": `${SG}/3652.jpg`,
  "patio-scenic": `${SG}/3653.jpg`,
  "patio-bridge": `${SG}/3654.jpg`,
  "patio-lakeside-5": `${SG}/3655.jpg`,
  "patio-lakeside-6": `${SG}/3656.jpg`,
  "patio-upper-lakeside-7": `${SG}/3657.jpg`,
};

/**
 * Resolve a product's photo by slug. Returns undefined when no local photo is
 * mapped, so callers can fall back to the Singenuity/Cloudinary image.
 */
export function productImage(slug: string): string | undefined {
  return PRODUCT_IMAGES[slug];
}

/** Brand logo — crisp inline SVG lives in <Logo/>; this is the standalone file. */
export const LOGO = "/images/logo.svg";
