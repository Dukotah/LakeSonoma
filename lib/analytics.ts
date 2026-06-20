/**
 * Thin analytics wrapper over @vercel/analytics `track`.
 * Guards for SSR (track is a no-op on the server) and for environments where
 * the analytics script hasn't loaded yet (avoids hard throw).
 */

// Lazy import so Next.js does not bundle the client-side tracking script on
// the server. We call the function only inside guards that confirm we're in
// a browser context.
function safeTrack(name: string, props?: Record<string, string | number | boolean | null>): void {
  if (typeof window === "undefined") return; // SSR guard
  try {
    // Dynamically import so the module is only evaluated client-side.
    // We use the synchronous window.va queue that @vercel/analytics sets up
    // so events are queued even before the script fully initialises.
    if (typeof window.va === "function") {
      window.va("event", { name, ...props });
    } else {
      // Fallback: push onto the pre-init queue if it exists.
      (window.vaq = window.vaq ?? []).push(["event", { name, ...props }]);
    }
  } catch {
    // Analytics must never break the booking flow.
  }
}

/**
 * Track a booking intent (user clicked a Book / Call-to-book CTA).
 * @param productName  Display name of the product, e.g. "5-Person Pontoon".
 * @param category     Product category slug, e.g. "pontoon".
 */
export function trackBooking(productName: string, category: string): void {
  safeTrack("booking_click", { product: productName, category });
}

/**
 * Track a form submission success event.
 * @param formName  Logical name of the form, e.g. "contact", "storage_inquiry".
 */
export function trackFormSubmit(formName: string): void {
  safeTrack("form_submit", { form: formName });
}
