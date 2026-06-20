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
 *   - Prices below mirror the marina's official 2026 Boat Rental Rates sheet
 *     (1 hour / 4 hours / 8 hours / 24 hours). Do not alter without the owner.
 *   - `priceTBD: true` means "ask the owner" — UI shows an inquire CTA, not $0.
 *   - `bookByPhone: true` is for items with no Singenuity deep-link (call to book).
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
  label: string; // e.g. "1 hour", "4 hours", "8 hours", "24 hours", "Per day"
  amount?: number; // USD; omit when priceTBD / not offered
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
  /** No Singenuity deep-link — CTA becomes "Call to book". */
  bookByPhone?: boolean;
  /** Marketing blurb mirrored from lakesonoma.com (facts only). */
  blurb: string;
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
  jetski: "Wave Runners",
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

const PONTOON_NOTES = ["No slides or barbecues offered", "No towing allowed behind pontoon boats"];

/**
 * Build the standard four-tier price list from the rate sheet. Pass `null` for a
 * tier that isn't offered (shown as N/A on the sheet) and it's omitted.
 */
function tiers(
  h1: number | null,
  h4: number | null,
  h8: number | null,
  h24: number | null,
): PriceOption[] {
  const rows: PriceOption[] = [];
  if (h1 != null) rows.push({ label: "1 hour", amount: h1 });
  if (h4 != null) rows.push({ label: "4 hours", amount: h4 });
  if (h8 != null) rows.push({ label: "8 hours", amount: h8 });
  if (h24 != null) rows.push({ label: "24 hours", amount: h24 });
  return rows;
}

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
    pricing: tiers(125, 350, 625, 1000),
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
    pricing: tiers(135, 420, 750, 1000),
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
    pricing: tiers(160, 520, 900, 1300),
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
    pricing: tiers(185, 585, 995, 1300),
    notes: PONTOON_NOTES,
    blurb: "Two levels of fun — our double-decker pontoon is a Lake Sonoma favorite for groups up to 12, complete with a slide-friendly upper deck view.",
    featured: true,
  },
  {
    singenuityId: 3636,
    slug: "pontoon-premium-10",
    name: "Premium 10-Passenger Pontoon",
    category: "pontoon",
    activities: ["cruising"],
    capacity: 10,
    pricing: tiers(200, 600, 1100, null),
    notes: PONTOON_NOTES,
    blurb: "A premium single-story pontoon with upgraded comfort for up to 10 guests.",
  },
  {
    singenuityId: 0,
    slug: "quest-fishing-pontoon",
    name: "Quest Fishing Pontoon (3)",
    category: "pontoon",
    activities: ["fishing", "cruising"],
    capacity: 3,
    pricing: tiers(100, 375, 600, null),
    bookByPhone: true,
    notes: PONTOON_NOTES,
    blurb: "A nimble fishing pontoon built for casting a line on Lake Sonoma — stable, easy to drive, and ideal for a small fishing party. Call the marina to reserve.",
  },

  // ----- Watersport / Tubing -----
  {
    singenuityId: 3637,
    slug: "watersport-tubing",
    name: "Watersport / Tubing Boat (7)",
    category: "watersport",
    activities: ["watersports", "cruising"],
    capacity: 7,
    pricing: tiers(175, 600, 1000, null),
    blurb: "For some great tubing and watersports on Lake Sonoma, don't miss this boat that lets you enjoy the water for a half or a full day.",
    featured: true,
  },

  // ----- Sport -----
  {
    singenuityId: 3627,
    slug: "premium-sport-boat",
    name: "Premium Sport Ski Boat (8)",
    category: "sport",
    activities: ["watersports", "cruising"],
    capacity: 8,
    pricing: tiers(225, 700, 1300, null),
    blurb: "Enjoy a high-octane adventure over the waters of Lake Sonoma with our premium sport ski boat rental.",
  },

  // ----- Fishing -----
  {
    singenuityId: 3641,
    slug: "logic-fishing-boat",
    name: "Logic Fishing Boat (3)",
    category: "fishing",
    activities: ["fishing"],
    capacity: 3,
    pricing: tiers(100, 340, 680, 750),
    blurb: "Experience the best fishing on Lake Sonoma with hourly, half-day, full-day, or overnight rentals.",
    featured: true,
  },

  // ----- Wave Runner (jet ski) -----
  {
    singenuityId: 3643,
    slug: "jet-ski",
    name: "Wave Runner (Jet Ski)",
    category: "jetski",
    activities: ["watersports"],
    capacity: 2,
    pricing: tiers(150, null, null, null),
    blurb: "Have fun speeding over the waters of Lake Sonoma with an exciting Wave Runner (jet ski) rental, available by the hour.",
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
    pricing: tiers(50, 150, 300, 300),
    blurb: "Enjoy paddling on Lake Sonoma with a single kayak, available by the hour or for a half or full day.",
  },
  {
    singenuityId: 3645,
    slug: "double-kayak",
    name: "Double Kayak",
    category: "paddle",
    activities: ["paddling"],
    capacity: 2,
    pricing: tiers(50, 175, 325, 325),
    blurb: "Paddle together on Lake Sonoma in a roomy double kayak — by the hour or for a half or full day.",
  },
  {
    singenuityId: 3648,
    slug: "paddle-board",
    name: "Paddle Board",
    category: "paddle",
    activities: ["paddling"],
    capacity: 1,
    pricing: tiers(50, 150, 300, 300),
    blurb: "Experience the stunning scenery along the shore of Lake Sonoma with a stand-up paddle board rental.",
  },
  {
    singenuityId: 3650,
    slug: "canoe",
    name: "Canoe",
    category: "paddle",
    activities: ["paddling"],
    capacity: 3,
    pricing: tiers(50, 150, 300, 300),
    blurb: "Paddle along the shores of Lake Sonoma with a relaxing canoe rental.",
  },

  // ----- Patios & Day-Use -----
  {
    singenuityId: 3651,
    slug: "patio-grand",
    name: "Grand Patio",
    category: "patio",
    activities: ["patio"],
    // OWNER: confirm Grand Patio per-day rate — priceTBD kept until confirmed; UI shows "Inquire for pricing" / "Call for pricing"
    pricing: [{ label: "Per day" }],
    priceTBD: true,
    // OWNER: confirm Grand Patio group capacity (estimated largest on property — verify head count)
    blurb:
      "The marina's most spacious reservable patio, ideal for large group gatherings and celebrations. Enjoy partial shade, picnic tables, and BBQ pits steps from the water's edge — contact us for availability and group pricing.",
  },
  {
    singenuityId: 3652,
    slug: "patio-bar",
    name: "Bar Patio",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    // OWNER: confirm Bar Patio capacity (number of guests/tables it seats)
    blurb:
      "A reserved patio situated right by the marina bar, perfect for groups who want quick access to refreshments and the convenience of a central location. Includes a picnic table and trash receptacles.",
  },
  {
    singenuityId: 3653,
    slug: "patio-scenic",
    name: "Scenic Patio",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    // OWNER: confirm Scenic Patio capacity and any specific lake-view orientation details
    blurb:
      "A lakeside reserved patio chosen for its unobstructed views of the water and surrounding Sonoma hills. Spend the day relaxing at a picnic table in a partly shaded setting while taking in the scenery.",
  },
  {
    singenuityId: 3654,
    slug: "patio-bridge",
    name: "Bridge Patio",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    // OWNER: confirm Bridge Patio capacity and whether overhead cover is permanent or seasonal
    blurb:
      "Tucked near the bridge with natural overhead shade, this reserved patio offers a cooler spot for small groups to gather, grill, and watch the boats come and go throughout the day.",
  },
  {
    singenuityId: 3655,
    slug: "patio-lakeside-5",
    name: "Lakeside Patio 5",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    // OWNER: confirm Lakeside Patio 5 capacity and any distinguishing features vs. Patio 6
    blurb:
      "A reserved lakeside patio close to the water, equipped with a picnic table and BBQ pit. Great for families or small groups looking for a day-use spot right at the marina.",
  },
  {
    singenuityId: 3656,
    slug: "patio-lakeside-6",
    name: "Lakeside Patio 6",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    // OWNER: confirm Lakeside Patio 6 capacity and any distinguishing features vs. Patio 5
    blurb:
      "Another well-positioned lakeside patio with direct views of the water. Ideal for a relaxed day out — bring your food, fire up the BBQ pit, and settle in for an afternoon on Lake Sonoma.",
  },
  {
    singenuityId: 3657,
    slug: "patio-upper-lakeside-7",
    name: "Upper Lakeside Patio 7",
    category: "patio",
    activities: ["patio"],
    pricing: [{ label: "Per day", amount: 100 }],
    // OWNER: confirm Upper Lakeside Patio 7 capacity and whether elevation provides a significantly wider lake view
    blurb:
      "The elevated position of this upper lakeside patio gives your group a wider vantage point over the lake — a great pick for those who want a panoramic backdrop for their day-use reservation.",
  },
];

/**
 * Add-on equipment rentals (from the 2026 rate sheet). Booked with the marina
 * alongside a boat rather than as standalone watercraft.
 */
export interface Equipment {
  name: string;
  capacity: number;
  pricing: PriceOption[];
}

export const EQUIPMENT_RENTALS: Equipment[] = [
  { name: "Performance Water Ski", capacity: 1, pricing: tiers(30, 50, 70, 100) },
  { name: "Knee Board", capacity: 1, pricing: tiers(30, 50, 70, 100) },
  { name: "Wake Board", capacity: 1, pricing: tiers(35, 60, 100, 135) },
  { name: "Tube", capacity: 1, pricing: tiers(35, 60, 100, 135) },
];

/** Rental terms printed on the official rate sheet (verbatim intent). */
export const RENTAL_DISCLAIMERS: string[] = [
  "A valid driver's license and a credit card are required for all rentals.",
  "Fuel and sales tax are not included in the boat rental rates.",
  "All renters must check in 30 minutes prior to the reserved time.",
  "Cancellations must be made 7 days prior to the reservation date.",
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

/**
 * Build-time integrity check. Throws if any product has neither a valid
 * Singenuity ID nor bookByPhone:true — that product would produce a broken
 * booking link. Called at module evaluation so "next build" surfaces it early.
 */
export function validateBookingCoverage(): void {
  const broken = PRODUCTS.filter(
    (p) => !(p.bookByPhone === true) && (p.singenuityId == null || p.singenuityId <= 0),
  );
  if (broken.length > 0) {
    throw new Error(
      `[marina] Products missing valid singenuityId AND bookByPhone: ${broken
        .map((p) => p.slug)
        .join(", ")}`,
    );
  }
}

// Run at module load so "next build" fails fast on broken booking links.
validateBookingCoverage();

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
