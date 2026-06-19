# Lake Sonoma Marina — Owner's Editing Guide

A plain-English guide to updating the website. Almost everything you'll want to
change lives in a few **data files** under `data/` — no design or code knowledge needed.

## The files you'll edit

| What you want to change | File | What to edit |
|---|---|---|
| Boat/patio names, **prices**, capacities | `data/marina.ts` | the `PRODUCTS` list |
| Equipment rental prices (ski, tube, etc.) | `data/marina.ts` | `EQUIPMENT_RENTALS` |
| Day-use fees, passes, rules, disclaimers | `data/marina.ts` | `DAY_USE_FEES`, `RENTAL_DISCLAIMERS`, etc. |
| Phone, email, address, hours, social links | `data/site.ts` | `SITE`, `HOURS`, `SOCIAL` |
| Guest reviews | `data/site.ts` | `REVIEWS` |
| FAQs, policies, Read-On-Sonoma, storage, agreements | `data/content.ts` | the matching block |
| Which photo each boat uses | `data/imagery.ts` | `PRODUCT_IMAGES` |

### Change a price
In `data/marina.ts`, find the boat and edit its `pricing` — the four tiers are
`1 hour / 4 hours / 8 hours / 24 hours`:
```ts
pricing: tiers(125, 350, 625, 1000), // 1hr, 4hr, 8hr, 24hr — use null if not offered
```

### Add a boat
Copy an existing entry in `PRODUCTS`, then set its `singenuityId` (the booking
platform's item ID), `slug`, `name`, `category`, `capacity`, and `pricing`.
If a boat has no online booking link yet, add `bookByPhone: true` and its
"Book" button becomes "Call to book".

### Swap a boat's photo
1. Put the image in `public/images/singenuity/` (name it `<id>.jpg`), **or** anywhere under `public/images/`.
2. In `data/imagery.ts`, point that boat's slug at the file in `PRODUCT_IMAGES`.

## Forms (contact, rewards, newsletter)
These email the marina via **Web3Forms**. To turn them on:
1. Go to https://web3forms.com, enter `staff@lakesonoma.com`, copy the **Access Key**.
2. Add it as `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel → Settings → Environment Variables
   (and in a local `.env.local` file — see `.env.example`).
Until set, the forms show a friendly "call/email us" message instead of sending.

## Booking
The site never takes payment — every "Book Now" deep-links to the exact item on
**Singenuity**, where availability and checkout happen. The link is built from each
boat's `singenuityId`, so it can never fall back to a generic catalog page.

## Publishing changes
The site is hosted on **Vercel**. When changes are pushed to the `main` branch,
Vercel rebuilds and deploys automatically (usually within a couple of minutes).

## Handy commands (for a developer)
```bash
npm install      # one-time setup
npm run dev      # preview locally at http://localhost:3000
npm run build    # production build (do NOT run while `npm run dev` is live)
```

See `PRE-LAUNCH.md` for the go-live checklist.
