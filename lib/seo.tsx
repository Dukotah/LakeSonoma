import type { Metadata } from "next";
import { SITE, HOURS } from "@/data/site";
import { singenuityImage } from "@/lib/singenuity";
import { fromPrice, type Product } from "@/data/marina";

/** Per-page metadata helper with sensible OpenGraph defaults. */
export function pageMeta(opts: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = opts.path ? `${SITE.url}${opts.path}` : SITE.url;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: SITE.name,
      type: "website",
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}

/** schema.org LocalBusiness for the marina (rendered once in the root layout). */
export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    telephone: SITE.phone,
    email: SITE.email,
    url: SITE.url,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: "US",
    },
    openingHoursSpecification: HOURS.map((h) => ({
      "@type": "OpeningHoursSpecification",
      description: `${h.season}: ${h.value}`,
    })),
  };
}

/**
 * schema.org Product for a rental/patio. Includes price via Offer.
 * aggregateRating is intentionally omitted until the owner supplies verified
 * rating data — we never fabricate ratings.
 */
export function productJsonLd(p: Product) {
  const price = fromPrice(p);
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: p.name,
    description: p.blurb,
    image: singenuityImage(p.singenuityId),
    ...(price !== undefined && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
    }),
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
