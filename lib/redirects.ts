/**
 * Old WordPress URL -> new URL map (301 permanent) to protect search rankings.
 * Add a line here whenever an old slug changes. Product-specific old slugs that
 * we discover later can be appended; unknown old paths simply 404 as before.
 */
export const redirects = [
  { source: "/boat-rentals", destination: "/rentals", permanent: true },
  { source: "/boat-rentals/:path*", destination: "/rentals", permanent: true },
  { source: "/patio-rentals", destination: "/patios", permanent: true },
  { source: "/patio-rentals/:path*", destination: "/patios", permanent: true },
  // Old generic product index -> filtered rentals
  { source: "/product/pontoon", destination: "/rentals?category=pontoon", permanent: true },
  { source: "/product/pontoon/:path*", destination: "/rentals?category=pontoon", permanent: true },
  { source: "/product/:path*", destination: "/rentals", permanent: true },
  // Old blog slug
  { source: "/read-on", destination: "/read-on-sonoma", permanent: true },
];
