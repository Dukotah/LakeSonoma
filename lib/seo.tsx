import type { Metadata } from "next";
import { SITE, HOURS, REVIEWS, SOCIAL } from "@/data/site";
import { singenuityImage, SINGENUITY_BASE } from "@/lib/singenuity";
import { productImage } from "@/data/imagery";
import { fromPrice, type Product } from "@/data/marina";

/** Approximate marina coordinates (Geyserville, CA) for LocalBusiness geo. */
const GEO = { lat: 38.7169, lng: -123.0186 };

/**
 * Per-page metadata helper with sensible OpenGraph defaults.
 *
 * Note: Next.js OpenGraph type is limited to its own type union (no "product").
 * Product-level semantic markup is handled via schema.org JSON-LD (productJsonLd).
 * Pass ogType "article" for content pages; "website" (default) for everything else.
 */
export function pageMeta(opts: {
  title: string;
  description: string;
  path?: string;
  /** Override the og:type (defaults to "website"). */
  ogType?: "website" | "article";
}): Metadata {
  const url = opts.path ? `${SITE.url}${opts.path}` : SITE.url;
  const ogImage = {
    url: `${SITE.url}/opengraph-image`,
    width: 1200,
    height: 630,
    alt: SITE.name,
  };
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      type: opts.ogType ?? "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: [ogImage.url],
    },
  };
}

/** Aggregate rating built from the real published reviews (never fabricated). */
function aggregateRating() {
  const rated = REVIEWS.filter((r) => typeof r.stars === "number");
  if (!rated.length) return undefined;
  const avg = rated.reduce((s, r) => s + (r.stars ?? 0), 0) / rated.length;
  return {
    "@type": "AggregateRating",
    ratingValue: Number(avg.toFixed(1)),
    reviewCount: rated.length,
    bestRating: 5,
    worstRating: 1,
  };
}

/** schema.org LocalBusiness for the marina (rendered once in the root layout). */
export function localBusinessJsonLd() {
  const rating = aggregateRating();
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    image: `${SITE.url}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: GEO.lat, longitude: GEO.lng },
    hasMap: `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}`,
    sameAs: [SOCIAL.facebook, SOCIAL.instagram, SOCIAL.tripadvisor],
    areaServed: [
      { "@type": "Lake", name: "Lake Sonoma" },
      { "@type": "AdministrativeArea", name: "Sonoma County" },
      { "@type": "AdministrativeArea", name: "Northern California" },
    ],
    paymentAccepted: "Cash, Credit Card",
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SINGENUITY_BASE}/`,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Boat Rental Reservation",
      },
    },
    openingHoursSpecification: HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      description: `${h.season}: ${h.value}`,
    })),
    ...(rating && { aggregateRating: rating }),
    review: REVIEWS.map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: r.stars ?? 5, bestRating: 5 },
      author: { "@type": "Person", name: r.author },
      reviewBody: r.quote,
    })),
  };
}

/** schema.org FAQPage for the FAQs page. */
export function faqPageJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** schema.org BreadcrumbList. Pass ordered { name, path } crumbs. */
export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE.url}${c.path}`,
    })),
  };
}

/**
 * schema.org Product for a rental/patio. Includes price via Offer.
 * aggregateRating is intentionally omitted until the owner supplies verified
 * rating data — we never fabricate ratings.
 */
export function productJsonLd(p: Product) {
  const amounts = p.pricing
    .map((o) => o.amount)
    .filter((a): a is number => typeof a === "number");
  const low = amounts.length ? Math.min(...amounts) : undefined;
  const high = amounts.length ? Math.max(...amounts) : undefined;
  const offers =
    low === undefined
      ? undefined
      : low === high
        ? {
            "@type": "Offer",
            price: low,
            priceCurrency: "USD",
            availability: "https://schema.org/InStock",
            url: `${SITE.url}/product/${p.slug}`,
          }
        : {
            "@type": "AggregateOffer",
            lowPrice: low,
            highPrice: high,
            priceCurrency: "USD",
            offerCount: amounts.length,
            availability: "https://schema.org/InStock",
            url: `${SITE.url}/product/${p.slug}`,
          };
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.blurb,
    brand: { "@type": "Brand", name: SITE.name },
    image: productImage(p.slug)
      ? `${SITE.url}${productImage(p.slug)}`
      : singenuityImage(p.singenuityId),
    ...(offers && { offers }),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
