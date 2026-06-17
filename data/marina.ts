/**
 * ============================================================================
 *  LAKE SONOMA MARINA — SINGLE SOURCE OF TRUTH
 * ============================================================================
 *  Edit boats, prices, capacities, and photos HERE and nowhere else. Every page,
 *  CTA, comparison table, sitemap entry, and structured-data block reads from
 *  this file. See README.md for an editing walkthrough.
 *
 *  RULES
 *   - Never invent prices, specs, photos, reviews, or Singenuity IDs.
 *   - All `singenuityId` + `price` values are VERIFIED. Do not alter without
 *     confirming with the owner.
 *   - Descriptions (`blurb`) and durations mirror the live lakesonoma.com.
 *   - `priceTBD: true` means "ask the owner" — UI shows an inquire CTA, not $0.
 *   - Unknown fields (e.g. stereo) are left undefined so the UI omits them.
 * ============================================================================
 */

export type Category =
  | "pontoon"
  | "watersport"
  | "sport"
  | "fishing"
  | "jetski"
  | "paddle"
  | "patio";

export type ActivityTag = "cruising" | "fishing" | "watersports" | "paddling" | "patio";

export interface PriceOption {
  label: string; // e.g. "Half-day", "Per hour", "Per day"
  amount?: number; // USD; omit when priceTBD
}

export interface Product {
  singenuityId: number;
  slug: string;
  name: string;
  category: Category;
  activities: ActivityTag[];
  capacity?: number;
  pricing: PriceOption[];
  priceTBD?: boolean;
  /** Marketing blurb mirrored from lakesonoma.com (facts only). */
  blurb: string;
  /** Rental duration options offered (from the live site). */
  durations?: string[];
  /** Extra notes/restrictions (e.g. pontoon towing rules). */
  notes?: string[];
  stereo?: boolean; // undefined = unconfirmed (UI omits)
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  pontoon: "Pontoon Boats",
  watersport: "Watersport / Tubing",
  sport: "Sport Boats",
  fishing: "Fishing Boats",
  jetski: "Jet Skis",
  paddle: "Kayaks & Paddle Craft",
  patio: "Patios & Day-Use",
};

export const ACTIVITY_LABELS: Record<ActivityTag, string> = {
  cruising: "Cruising & relaxing",
  fishing: "Fishing",
  watersports: "Watersports & tubing",
  paddling: "Paddling",
  patio: "Patio / picnic on the water",
};

const PONTOON_DURATIONS = ["Half-Day", "Full-Day", "Overnight"];
const PONTOON_NOTES = ["No slides or barbecues offered", "No towing allowed behind pontoon boats"];

/** ---------------------------------------------------------------- PRODUCTS */
export const PRODUCTS: Product[] = [
  // ----- Pontoons (1–12 people; single and double-decker) -----
  {
    singenuityId: 3624,
    slug: "pontoon-5-person",
    name: "5-Person Pontoon",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 5,
    pricing: [{ label: "Half-day", amount: 350 }],
    durations: PONTOON_DURATIONS,
    notes: PONTOON_NOTES,
    blurb: "Enjoy a leisurely float on Lake Sonoma with a fun pontoon boat rental — our most popular small-group boat, easy to drive and perfect for a relaxed cruise.",
    featured: true,
  },
  {
    singenuityId: 3633,
    slug: "pontoon-10-person",
    name: "10-Person Pontoon",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 10,
    pricing: [{ label: "Half-day", amount: 420 }],
    durations: PONTOON_DURATIONS,
    notes: PONTOON_NOTES,
    blurb: "A roomy pontoon with space for the whole crew to spread out and enjoy a day on the water.",
    featured: true,
  },
  {
    singenuityId: 3634,
    slug: "pontoon-12-person",
    name: "12-Person Pontoon",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 12,
    pricing: [{ label: "Half-day", amount: 520 }],
    durations: PONTOON_DURATIONS,
    notes: PONTOON_NOTES,
    blurb: "Our big-group pontoon for a fun time on Lake Sonoma with the whole family.",
  },
  {
    singenuityId: 3635,
    slug: "pontoon-double-decker",
    name: "Double Decker Pontoon (12)",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 12,
    pricing: [{ label: "Half-day", amount: 585 }],
    durations: PONTOON_DURATIONS,
    notes: PONTOON_NOTES,
    blurb: "Two levels of fun — our double-decker pontoon is a Lake Sonoma favorite for groups up to 12.",
    featured: true,
  },
  {
    singenuityId: 3636,
    slug: "pontoon-premium-10",
    name: "Premium 10-Passenger Single Story",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 10,
    pricing: [{ label: "Half-day", amount: 600 }],
    durations: PONTOON_DURATIONS,
    notes: PONTOON_NOTES,
    blurb: "A premium single-story pontoon with upgraded comfort for up to 10 guests.",
  },

  // ----- Watersport / Tubing -----
  {
    singenuityId: 3637,
    slug: "watersport-tubing",
    name: "Watersport / Tubing Boat (7)",
    category: "watersport",
    activities: ["watersports", "cruising"],
    capacity: 7,
    pricing: [{ label: "Half-day", amount: 600 }],
    durations: ["Half-Day", "Full-Day"],
    blurb: "For some great tubing and watersports on Lake Sonoma, don't miss this boat that lets you enjoy the water for a half or a full day.",
    featured: true,
  },

  // ----- Sport -----
  {
    singenuityId: 3627,
    slug: "premium-sport-boat",
    name: "Premium Sport Boat (8)",
    category: "sport",
    activities: ["watersports", "cruising"],
    capacity: 8,
    pricing: [{ label: "Half-day", amount: 700 }],
    durations: ["Half-Day", "Full-Day"],
    blurb: "Enjoy a high-octane adventure over the waters of Lake Sonoma with our premium sport boat rental.",
  },

  // ----- Fishing -----
  {
    singenuityId: 3641,
    slug: "logic-fishing-boat",
    name: "Logic Fishing Boat",
    category: "fishing",
    activities: ["fishing"],
    capacity: 3,
    pricing: [{ label: "Half-day", amount: 340 }],
    durations: ["Half-Day", "Full-Day", "Overnight"],
    blurb: "Experience the best fishing on Lake Sonoma with half-day, full-day, or overnight rentals.",
    featured: true,
  },

  // ----- Jet Ski -----
  {
    singenuityId: 3643,
    slug: "jet-ski",
    name: "Jet Ski (2)",
    category: "jetski",
    activities: ["watersports"],
    capacity: 2,
    pricing: [{ label: "Per hour", amount: 150 }],
    durations: ["1–4 Hours"],
    blurb: "Have fun speeding over the waters of Lake Sonoma with an exciting jet ski rental.",
    featured: true,
  },

  // ----- Kayaks & Paddle craft -----
  {
    singenuityId: 3644,
    slug: "single-kayak",
    name: "Single Kayak",
    category: "paddle",
    activities: ["paddling"],
    capacity: 1,
    pricing: [{ label: "Per hour", amount: 50 }],
    durations: ["Hourly", "Half-Day", "Full-Day"],
    blurb: "Enjoy paddling on Lake Sonoma with a single kayak, available for hourly or half and full-day rentals.",
  },
  {
    singenuityId: 3645,
    slug: "double-kayak",
    name: "Double Kayak",
    category: "paddle",
    activities: ["paddling"],
    capacity: 2,
    pricing: [{ label: "Per hour", amount: 50 }],
    durations: ["Hourly", "Half-Day", "Full-Day"],
    blurb: "Paddle together on Lake Sonoma in a roomy double kayak — hourly or half and full-day rentals.",
  },
  {
    singenuityId: 3648,
    slug: "paddle-board",
    name: "Paddle Board",
    category: "paddle",
    activities: ["paddling"],
    capacity: 1,
    pricing: [{ label: "Per hour", amount: 50 }],
    durations: ["1–4 Hours"],
    blurb: "Experience the stunning scenery along the shore of Lake Sonoma with a stand-up paddle board rental.",
  },
  {
    singenuityId: 3650,
    slug: "canoe",
    name: "Canoe",
    category: "paddle",
    activities: ["paddling"],
    capacity: 2,
    pricing: [{ label: "Per hour", amount: 50 }],
    durations: ["Half-Day", "Full-Day", "Overnight"],
    blurb: "Paddle along the shores of Lake Sonoma with a relaxing canoe rental.",
  },

  // ----- Patios & Day-Use -----
  {
    singenuityId: 3651,
    slug: "patio-grand",
    name: "Grand Patio",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day" }],
    priceTBD: true,
    blurb: "Our largest reservable patio for groups and gatherings on the water.",
  },
  {
    singenuityId: 3652,
    slug: "patio-bar",
    name: "Bar Patio",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    blurb: "Reserve a patio by the bar for an easy lakeside day-use spot.",
  },
  {
    singenuityId: 3653,
    slug: "patio-scenic",
    name: "Scenic Patio",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    blurb: "A scenic reserved patio with lake views.",
  },
  {
    singenuityId: 3654,
    slug: "patio-bridge",
    name: "Bridge Patio",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    blurb: "Reserved patio near the bridge — a shaded place to gather.",
  },
  {
    singenuityId: 3655,
    slug: "patio-lakeside-5",
    name: "Lakeside Patio 5",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    blurb: "Lakeside reserved patio for your day on the water.",
  },
  {
    singenuityId: 3656,
    slug: "patio-lakeside-6",
    name: "Lakeside Patio 6",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    blurb: "Lakeside reserved patio for your day on the water.",
  },
  {
    singenuityId: 3657,
    slug: "patio-upper-lakeside-7",
    name: "Upper Lakeside Patio 7",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    blurb: "Upper lakeside reserved patio with elevated views.",
  },
];

/** What every rental reservation includes (verified). */
export const WHATS_INCLUDED: string[] = [
  "1 complimentary parking pass per reservation",
  "USCG-approved safety gear and life jackets (infant through adult)",
];

/** Day-use patio amenities (verbatim from the live site). */
export const DAY_USE_INCLUDES: string[] = [
  "BBQ pits",
  "Partly shaded area",
  "Picnic tables",
  "Trash receptacles",
];

/** Day-use patio hours (verbatim from the live site). */
export const DAY_USE_HOURS = "8:00 AM – 8:00 PM";

/** Operator, safety & check-in rules (verified). */
export const OPERATOR_RULES: string[] = [
  "Boat operators must be 21+ with a valid government-issued photo ID",
  "A boating safety card is recommended but not required",
  "Children under 12 must be accompanied by an adult at all times",
  "Life jackets are required for all children under 13 while underway",
  "Please arrive 30 minutes early for check-in",
];

/** Day-use fees (verified). */
export const DAY_USE_FEES = [
  { label: "Launch Ramp", amount: 25 },
  { label: "Hand Launch", amount: 20 },
  { label: "Daily Parking", amount: 20 },
];

/** Cancellation policy (verified). */
export const CANCELLATION_POLICY = [
  "Full refund when cancelled 7 or more days in advance",
  "50% refund when cancelled within 7 days",
  "Non-refundable within 24 hours of the reservation",
];

/** --------------------------------------------------------------- HELPERS */
export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function productsByCategory(category: Category): Product[] {
  return PRODUCTS.filter((p) => p.category === category);
}

export function productsByActivity(activity: ActivityTag): Product[] {
  return PRODUCTS.filter((p) => p.activities.includes(activity));
}

export const PONTOONS = productsByCategory("pontoon");
export const RENTALS = PRODUCTS.filter((p) => p.category !== "patio");
export const PATIOS = productsByCategory("patio");

/** Lowest verified price for a product (for "from $X" labels). */
export function fromPrice(p: Product): number | undefined {
  const amounts = p.pricing
    .map((o) => o.amount)
    .filter((a): a is number => typeof a === "number");
  return amounts.length ? Math.min(...amounts) : undefined;
}
