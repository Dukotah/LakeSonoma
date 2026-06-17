/**
 * Business info, hours, social links, reviews, and navigation.
 * Copy mirrored from the live lakesonoma.com (verified). Do not invent.
 */

export const SITE = {
  name: "Lake Sonoma Marina",
  shortName: "Lake Sonoma Marina",
  tagline: "Private Boat Rentals & Storage in Healdsburg, CA",
  description:
    "Boat rentals, patio day-use reservations, and boat storage at Lake Sonoma in Healdsburg/Geyserville, CA. Pontoons, ski boats, fishing boats, jet skis, kayaks and more — open year-round.",
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
  mapQuery: "Lake Sonoma Marina, 4200 Skaggs Springs Road, Geyserville, CA 95441",
} as const;

/** Slip-rental billing office (separate from the marina). Verified from About page. */
export const BILLING_OFFICE = {
  name: "Lake Sonoma Marina Billing Office",
  location: "Wikiup Professional Park",
  address: "104 Wikiup Drive, Santa Rosa, CA 95403",
  phone: "(707) 526-7272",
  phoneHref: "tel:+17075267272",
  note: "For questions about slip rental invoices or billing. Payments can be made at either location. Office hours may vary — please call to make an appointment.",
};

/** Homepage "about" band — verbatim from lakesonoma.com. */
export const ABOUT_INTRO = {
  heading: "Healdsburg's Premier Marina Experience",
  body: "Lake Sonoma Marina is set in the heart of beautiful Sonoma County. We are open year-round and offer everything from boat rentals (patio boats, ski boats, fishing boats, and kayaks) to day use picnic areas with BBQ pits and an option for volleyball. Own your own boat? Store it in one of our slips for easy access. Don't bother bringing a lunch because our deli can make you a sandwich or hotdog and we have plenty to drink, including beer, water, soda and wine.",
};

/** Marina Store & Deli highlights — verbatim from About page. */
export const STORE_ITEMS = [
  "Deli",
  "Fishing supplies",
  "Camping necessities",
  "Local beer & wine",
  "Ice",
  "Boating supplies",
  "And more!",
];

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

/** Review platforms the marina is featured on (per homepage badges). */
export const REVIEW_PLATFORMS = ["Google", "Yelp", "TripAdvisor"];

/**
 * Real guest reviews published on lakesonoma.com (verified, not invented).
 * The off-topic/garbled campground review on the original site was omitted.
 * TODO (owner): confirm platform attribution per quote and refresh periodically.
 */
export interface Review {
  quote: string;
  author: string;
  stars?: number;
}

export const REVIEWS: Review[] = [
  {
    quote:
      "This place is an absolute gem! Super peaceful, laid-back, and just what we needed for the perfect weekend escape. The lake is gorgeous, clean, wide open, and ideal for tubing, wakeboarding, or just floating and soaking up the sun!",
    author: "Jayne G.",
    stars: 5,
  },
  {
    quote:
      "Great place to rent a boat for the day or have a picnic. The prices are affordable and the staff is super friendly and helpful. We will definitely be back the next time we are in the area.",
    author: "Russell O.",
    stars: 5,
  },
  {
    quote:
      "Beautiful! Easy and beautiful drive, gorgeous views, tons of places to relax and take it all in, amazing event venue with tons of parking. Highly, highly, highly recommend!!",
    author: "Priscilla L.",
    stars: 5,
  },
  {
    quote:
      "Lovely serene drive from Healdsburg to the lake. Recommend a visit and walk around the marina. Do not miss the visitor center to learn about state efforts to bring steelhead and salmon back to the region.",
    author: "Sue K.",
    stars: 5,
  },
  {
    quote:
      "We drove up the mountain and went to the view points and were wowed by the gorgeous perspectives. We took a lot of photos. This is a huge area and a real treasure.",
    author: "Thomas V.",
    stars: 5,
  },
];

export interface NavItem {
  label: string;
  href: string;
}

export const NAV: NavItem[] = [
  { label: "Boat Rentals", href: "/rentals" },
  { label: "Patio Rentals", href: "/patios" },
  { label: "Storage", href: "/storage" },
  { label: "FAQs", href: "/faqs" },
  { label: "Policies", href: "/policies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/read-on-sonoma" },
  { label: "Contact", href: "/contact" },
];
