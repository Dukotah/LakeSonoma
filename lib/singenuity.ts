/**
 * Singenuity is the EXTERNAL booking/payment platform. This site never handles
 * payments or card data — it only routes users to the correct Singenuity page.
 *
 * The #1 bug in the old site: every "Book Now" linked to the generic catalog
 * (https://book.singenuity.com/758/). Here, a booking link is ALWAYS built from a
 * product's verified Singenuity ID, so a generic/broken link is structurally
 * impossible. Never hardcode the catalog URL on a product CTA — call bookingUrl(id).
 */

export const SINGENUITY_BASE = "https://book.singenuity.com/758";

/** Deep-link straight to a specific item's date-selection page. */
export function bookingUrl(singenuityId: number): string {
  return `${SINGENUITY_BASE}/activity/details/${singenuityId}/date`;
}

/** The generic catalog — only for "browse everything", never for a specific item. */
export function catalogUrl(): string {
  return `${SINGENUITY_BASE}/`;
}

/**
 * Singenuity hosts the marina's product photos on Cloudinary (the owner's own
 * booking platform). Used as a fallback when a local /images/singenuity photo
 * isn't present for an item.
 */
export function singenuityImage(singenuityId: number, w = 800, h = 600): string {
  return `https://res.cloudinary.com/singenuity/w_${w},h_${h},c_fill/v1/prod/1560/758/entities/images/${singenuityId}/original`;
}
