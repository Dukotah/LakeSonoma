# Lake Sonoma Marina — Website

Marketing, discovery, and **booking-routing** site for **Lake Sonoma Marina**
(boat rentals, lakeside patios, and boat storage in Geyserville, CA).

- **Address:** 4200 Skaggs Springs Road, Geyserville, CA 95441
- **Phone:** (707) 433-2200 · **Email:** staff@lakesonoma.com
- **Booking/payments:** handled **externally by Singenuity** — https://book.singenuity.com/758/
  This site is the marketing/routing layer; it never handles payments or card data.

## Tech stack

- **Next.js (App Router) + TypeScript + Tailwind CSS** — fast, low-maintenance, deploys to Vercel.
- All product/business content lives in plain data files (no database).

```bash
npm install
npm run dev      # local dev at http://localhost:3000
npm run build    # production build
```

## ✏️ How to edit the site (the important part)

Everything an owner normally changes lives in **two files**:

### 1. Boats, patios, prices, capacities — `data/marina.ts`

This is the **single source of truth**. Each rental/patio is one entry:

```ts
{
  singenuityId: 3624,          // the Singenuity item ID — DO NOT guess
  slug: "pontoon-5-person",    // the page URL: /product/pontoon-5-person
  name: "5-Person Pontoon",
  category: "pontoon",
  activities: ["cruising"],    // drives the "Find your boat" helper
  capacity: 5,
  pricing: [{ label: "Half-day", amount: 350 }],
  blurb: "…",
}
```

- **To change a price:** edit `amount`.
- **To add a boat:** copy an entry, set its real `singenuityId`, `slug`, `name`, `pricing`.
- **Photos** come automatically from Singenuity using the `singenuityId` (see below).
- Use `priceTBD: true` (and omit `amount`) for "call for pricing" items.

### 2. Business info, hours, reviews, social, nav — `data/site.ts`

Phone, email, address, hours, social links, the testimonials shown on the homepage,
and the navigation menu.

## 🔗 How booking deep-links are built (the bug this rebuild fixes)

The old site linked **every** "Book Now" to the generic catalog
`https://book.singenuity.com/758/`. Here, a booking link is **always** generated from a
product's `singenuityId`:

```
https://book.singenuity.com/758/activity/details/{ID}/date
```

This lives in `lib/singenuity.ts` (`bookingUrl(id)`). Because every CTA calls that function
with the product's verified ID, a generic/broken booking link is **structurally impossible**.
Never hardcode the catalog URL on a product button.

## 🖼️ Photos

Boat photos are pulled from Singenuity's Cloudinary using each item's ID:

```
https://res.cloudinary.com/singenuity/w_800,h_600,c_fill/v1/prod/1560/758/entities/images/{ID}/original
```

(see `lib/singenuity.ts` → `singenuityImage(id)`). To use your own higher-res photos instead,
swap that function to point at `/public` image paths.

## 🔁 Redirects

Old WordPress URLs → new URLs are mapped in `lib/redirects.ts` (301 permanent) to protect
search rankings. Add a line there if any old slug changes.

## ⚠️ TODO — needs owner input (open questions from the brief)

These are intentionally **not guessed**. Fill them in and the site updates automatically:

1. **Grand Patio price** (`data/marina.ts`, `patio-grand`) — currently `priceTBD` / "call for pricing".
2. **Photo rights** — confirm we may reuse the Singenuity/Cloudinary boat images.
3. **Reviews** (`data/site.ts → REVIEWS`) — 3 real quotes from the current site are in place;
   confirm source platforms and add more from Google / Facebook / TripAdvisor.
4. **Per-boat stereo yes/no** — unknown, so omitted. Add a `stereo: true/false` field per boat if wanted.
5. **Some capacities** (e.g. Logic Fishing Boat, patios) — left blank where unverified.
6. **Forms & agreements** (`app/forms/page.tsx`) — add real PDF links when available.
7. **Blog posts** (`app/read-on-sonoma/`) — migrate existing posts or wire a Markdown/CMS source.
8. **Analytics / pixels / newsletter** — none wired yet; add when chosen.
9. **Full duration pricing** (full-day / overnight) — only verified half-day/hourly prices are shown;
   add more `pricing` rows per boat when confirmed.

## Decisions locked with the owner (2026-06-17)

- Booking links open Singenuity in a **new tab**.
- Reuse Singenuity/Cloudinary **photos** (pending rights confirmation).
- **Refreshed-but-familiar** lake-blue identity.
- **Hand-picked static** real reviews (no live feed).
- English only; storage/berthing is informational + inquiry CTA.

---

> The previous build attempt is preserved on the `archive/first-attempt` branch.
