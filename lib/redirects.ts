/**
 * Old WordPress URL -> new URL map (301 permanent) to protect search rankings.
 *
 * IMPORTANT: do NOT add a broad `/product/:path*` catch-all — the new product
 * detail pages live under `/product/<slug>` and a catch-all would intercept them.
 * Only map the specific OLD slugs that actually existed on the WordPress site.
 */
export const redirects = [
  // Old rental indexes
  { source: "/boat-rentals", destination: "/rentals", permanent: true },
  { source: "/boat-rentals/:path*", destination: "/rentals", permanent: true },
  { source: "/patio-rentals", destination: "/patios", permanent: true },
  { source: "/patio-rentals/:path*", destination: "/patios", permanent: true },

  // Old single-product pages -> closest new page
  { source: "/product/pontoon", destination: "/rentals?category=pontoon", permanent: true },
  { source: "/product/fishing", destination: "/product/logic-fishing-boat", permanent: true },
  { source: "/product/premium-sport-rental", destination: "/product/premium-sport-boat", permanent: true },
  { source: "/product/tubing", destination: "/product/watersport-tubing", permanent: true },
  { source: "/product/kayak", destination: "/rentals?category=paddle", permanent: true },
  { source: "/product/paddleboard", destination: "/product/paddle-board", permanent: true },
  { source: "/product/patio-reservations", destination: "/patios", permanent: true },
  // Note: /product/canoe and /product/jet-ski already match the new slugs, so
  // they resolve directly — no redirect needed (a self-redirect would loop).

  // Old blog slug
  { source: "/read-on", destination: "/read-on-sonoma", permanent: true },

  // Old WordPress info pages -> new equivalents
  { source: "/boat-storage", destination: "/storage", permanent: true },
  { source: "/forms-agreements", destination: "/forms", permanent: true },
  { source: "/forms-agreements/:path*", destination: "/forms", permanent: true },
  { source: "/hydrohoist-boat-lift", destination: "/hydrohoist", permanent: true },
  { source: "/policies-rules", destination: "/policies", permanent: true },
  { source: "/privacy-policy", destination: "/privacy", permanent: true },
  { source: "/privacy-policy-2", destination: "/privacy", permanent: true },
  { source: "/terms-of-service", destination: "/terms", permanent: true },
];
