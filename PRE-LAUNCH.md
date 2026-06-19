# Lake Sonoma Marina — Pre-Launch Checklist

Run through this before pitching / going live.

## 🔴 Needs the owner (can't be done in code)
- [ ] **Point the site at the real domain** (`lakesonoma.com`). Update `SITE.url` in `data/site.ts` and configure DNS in Vercel.
- [ ] **Add the Web3Forms key** so Contact / Read-On-Sonoma / Newsletter actually send.
      Get a free key at https://web3forms.com (use `staff@lakesonoma.com`), then set
      `NEXT_PUBLIC_WEB3FORMS_KEY` in Vercel → Settings → Environment Variables and in `.env.local`.
      See `.env.example`.
- [ ] **Confirm the Grand Patio price** (`data/marina.ts` → `patio-grand`) — currently "call for pricing".
- [ ] **Confirm hours, phone, address, and all prices** are current with the marina.
- [ ] **Submit the sitemap** to Google Search Console (`/sitemap.xml`) and verify the domain.
- [ ] (Optional) Real photos of staff / the store & deli for the About page, and any press/partnership logos.
- [ ] (Optional) Per-boat specs (length, motor, seating) if you want them on product pages.
- [ ] Have counsel skim the ported Privacy Policy / Terms of Service.

## ✅ Done in the build
- [x] Faithful vector logo (color + white), favicon, apple-touch icon, web manifest, theme color
- [x] Social share image (OpenGraph + Twitter), site-wide
- [x] Structured data: LocalBusiness + aggregateRating + reviews, Product, FAQPage, Breadcrumbs
- [x] Forms wired to Web3Forms (contact, rewards, newsletter) with success/error states
- [x] Real boat photos from Singenuity; real agreement PDFs; HydroHoist, Privacy, Terms pages
- [x] Pricing page + 2026 price sheet; group/events CTA; product cross-sell; booking urgency cue
- [x] Lean top nav + active states; full discovery via footer; Lake Sonoma visitor guide
- [x] Vercel Analytics; cookie consent; wave-divider brand motif; custom 404
- [x] Images pruned (~10 MB removed) and downscaled; preconnect to Singenuity/Cloudinary
- [x] 301 redirects from all old WordPress URLs

## 🧪 Manual QA pass (do on a real phone + desktop)
- [ ] Every "Book Now" deep-links to the correct Singenuity item (click all rentals + patios)
- [ ] All 7 agreement PDFs download; 2026 price sheet opens
- [ ] Contact, Read-On-Sonoma, and newsletter forms submit and arrive by email (after key is set)
- [ ] Map + directions work on Contact; tap-to-call and text-us links work on mobile
- [ ] Header/mobile menu, sticky Book button, and footer links all work
- [ ] 404 page renders for a bad URL; old WP URLs redirect correctly
- [ ] Run Lighthouse (target 90+ on Performance, Accessibility, Best Practices, SEO)
- [ ] Keyboard-only nav + screen-reader spot check; color-contrast check
