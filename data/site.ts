/**
 * Business info, hours, social links, reviews, and navigation.
 * All values verified from lakesonoma.com / the project brief. Do not invent.
 */

export const SITE = {
  name: "Lake Sonoma Marina",
  shortName: "Lake Sonoma Marina",
  description:
    "Boat rentals, patio day-use reservations, and boat storage at Lake Sonoma in Geyserville, CA. Book pontoons, fishing boats, jet skis, kayaks and more.",
  url: "https://lake-sonoma.vercel.app",
  phone: "(707) 433-2200",
  phoneHref: "tel:+17074332200",
  email: "staff@lakesonoma.com",
  address: {
    street: "4200 Skaggs Springs Road",
    city: "Geyserville",
    region: "CA",
    postalCode: "95441",
    full: "4200 Skaggs Springs Road, Geyserville, CA 95441",
  },
  // Google Maps embed/query for the marina address.
  mapQuery: "Lake Sonoma Marina, 4200 Skaggs Springs Road, Geyserville, CA 95441",
} as const;

export const HOURS = [
  { season: "Summer", value: "8:00 AM – 7:00 PM" },
  { season: "Winter", value: "9:00 AM – 3:00 PM" },
];

export const SOCIAL = {
  facebook: "https://www.facebook.com/lakesonomamarina/",
  instagram: "https://www.instagram.com/lakesonomamarina/",
  tripadvisor:
    "https://www.tripadvisor.com/Attraction_Review-g32482-d321137-Reviews-Lake_Sonoma-Healdsburg_Sonoma_County_California.html",
};

/**
 * Real guest reviews currently published on lakesonoma.com (verified, not invented).
 * TODO (owner): confirm source platform per quote and add more from
 * Google / Facebook / TripAdvisor profiles. Leave this array empty to hide the
 * section entirely — the UI will not render fabricated filler.
 */
export interface Review {
  quote: string;
  author: string;
  source?: string;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "This place is an absolute gem! Super peaceful, laid-back, and just what we needed for the perfect weekend escape.",
    author: "Jayne G.",
  },
  {
    quote:
      "Great place to rent a boat for the day or have a picnic. The prices are affordable and the staff is super friendly.",
    author: "Russell O.",
  },
  {
    quote:
      "Beautiful! Easy and beautiful drive, gorgeous views, tons of places to relax and take it all in.",
    author: "Priscilla L.",
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "Rentals", href: "/rentals" },
  { label: "Patios & Day-Use", href: "/patios" },
  { label: "Storage", href: "/storage" },
  { label: "FAQs", href: "/faqs" },
  { label: "Policies", href: "/policies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/read-on-sonoma" },
  { label: "Contact", href: "/contact" },
];
