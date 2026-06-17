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
 *   - All `singenuityId` + `price` values below are VERIFIED. Do not alter them
 *     without confirming with the owner.
 *   - `priceTBD: true` means "ask the owner" — the UI shows an inquire CTA, not $0.
 *   - Unknown fields (e.g. stereo, some capacities) are left undefined on purpose
 *     so the UI omits them rather than guessing. See TODO list in README.
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

/** Buckets used by the homepage "Find your boat" helper. */
export type ActivityTag =
  | "cruising"
  | "fishing"
  | "watersports"
  | "paddling"
  | "patio";

export interface PriceOption {
  /** e.g. "Half-day", "Full day", "Per hour", "Per day" */
  label: string;
  /** USD; omit when priceTBD */
  amount?: number;
}

export interface Product {
  singenuityId: number;
  slug: string;
  name: string;
  category: Category;
  activities: ActivityTag[];
  /** Max people; undefined when not verified. */
  capacity?: number;
  pricing: PriceOption[];
  priceTBD?: boolean;
  /** Short marketing blurb (facts only). */
  blurb: string;
  /** Stereo present? undefined = unconfirmed (UI omits). */
  stereo?: boolean;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  pontoon: "Pontoon Boats",
  watersport: "Watersport Boats",
  sport: "Sport Boats",
  fishing: "Fishing Boats",
  jetski: "Jet Skis",
  paddle: "Paddle Craft",
  patio: "Patios & Day-Use",
};

export const ACTIVITY_LABELS: Record<ActivityTag, string> = {
  cruising: "Cruising & relaxing",
  fishing: "Fishing",
  watersports: "Watersports & tubing",
  paddling: "Paddling",
  patio: "Patio / picnic on the water",
};

/** ---------------------------------------------------------------- PRODUCTS */
export const PRODUCTS: Product[] = [
  // ----- Pontoons -----
  {
    singenuityId: 3624,
    slug: "pontoon-5-person",
    name: "5-Person Pontoon",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 5,
    pricing: [{ label: "Half-day", amount: 350 }],
    blurb: "Our most popular small-group pontoon — easy to drive and perfect for a relaxed cruise.",
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
    blurb: "Roomy pontoon with space for the whole crew to spread out and enjoy the lake.",
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
    blurb: "Big-group pontoon for a day on the water with family and friends.",
  },
  {
    singenuityId: 3635,
    slug: "pontoon-double-decker",
    name: "Double Decker Pontoon (12)",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 12,
    pricing: [{ label: "Half-day", amount: 585 }],
    blurb: "Two levels of fun — upper deck and slide make this a Lake Sonoma favorite.",
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
    blurb: "Premium single-story pontoon with upgraded comfort for up to 10 guests.",
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
    blurb: "Built for tubing and towed fun — bring the crew and make a splash.",
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
    blurb: "Our top-tier sport boat for watersports and high-energy days on the lake.",
  },

  // ----- Fishing -----
  {
    singenuityId: 3641,
    slug: "logic-fishing-boat",
    name: "Logic Fishing Boat",
    category: "fishing",
    activities: ["fishing"],
    pricing: [{ label: "Half-day", amount: 340 }],
    blurb: "Rigged for anglers — head out for Lake Sonoma's bass, catfish, and more.",
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
    blurb: "Fast, agile, and a blast — rent by the hour for two riders.",
    featured: true,
  },

  // ----- Paddle craft -----
  {
    singenuityId: 3644,
    slug: "single-kayak",
    name: "Single Kayak",
    category: "paddle",
    activities: ["paddling"],
    capacity: 1,
    pricing: [{ label: "Per hour", amount: 50 }],
    blurb: "Explore the coves at your own pace in a stable single kayak.",
  },
  {
    singenuityId: 3645,
    slug: "double-kayak",
    name: "Double Kayak",
    category: "paddle",
    activities: ["paddling"],
    capacity: 2,
    pricing: [{ label: "Per hour", amount: 50 }],
    blurb: "Paddle together — a roomy two-seat kayak for partners or parent and child.",
  },
  {
    singenuityId: 3648,
    slug: "paddle-board",
    name: "Paddle Board",
    category: "paddle",
    activities: ["paddling"],
    capacity: 1,
    pricing: [{ label: "Per hour", amount: 50 }],
    blurb: "Stand-up paddle boarding on calm Lake Sonoma water.",
  },
  {
    singenuityId: 3650,
    slug: "canoe",
    name: "Canoe (2)",
    category: "paddle",
    activities: ["paddling"],
    capacity: 2,
    pricing: [{ label: "Per hour", amount: 50 }],
    blurb: "Classic two-person canoe for a quiet paddle along the shoreline.",
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
    blurb: "Reserve a patio by the bar for an easy day-use spot.",
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

/** Operator & check-in rules (verified). */
export const OPERATOR_RULES: string[] = [
  "Boat operators must be 21+ with a valid government-issued photo ID",
  "A boating safety card is recommended but not required",
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
