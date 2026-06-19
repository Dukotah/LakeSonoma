import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  PRODUCTS,
  PONTOONS,
  getProduct,
  fromPrice,
  CATEGORY_LABELS,
  WHATS_INCLUDED,
  OPERATOR_RULES,
  CANCELLATION_POLICY,
} from "@/data/marina";
import { singenuityImage, bookingUrl } from "@/lib/singenuity";
import { productImage } from "@/data/imagery";
import { BookButton } from "@/components/BookButton";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { pageMeta, productJsonLd, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { ProductCard } from "@/components/ProductCard";
import { SITE } from "@/data/site";

/* ── Static generation ──────────────────────────────────────────────────── */

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const from = fromPrice(p);
  return pageMeta({
    title: `${p.name} — Lake Sonoma Marina`,
    description:
      `Rent the ${p.name} at Lake Sonoma Marina` +
      `${p.capacity ? ` (up to ${p.capacity} people)` : ""}` +
      `${from !== undefined ? ` from $${from}` : ""}. ${p.blurb}`,
    path: `/product/${p.slug}`,
  });
}

/* ── Page ───────────────────────────────────────────────────────────────── */

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const isPontoon = product.category === "pontoon";
  const from = fromPrice(product);
  // Cross-sell: same-category siblings, else featured — never the current item.
  const sameCat = PRODUCTS.filter((p) => p.slug !== product.slug && p.category === product.category);
  const related = (sameCat.length >= 2 && !isPontoon
    ? sameCat
    : PRODUCTS.filter((p) => p.featured && p.slug !== product.slug)
  ).slice(0, 3);
  const backHref =
    product.category === "patio" ? "/patios" : `/rentals?category=${product.category}`;
  const backLabel =
    product.category === "patio" ? "Patios & Day-Use" : CATEGORY_LABELS[product.category];

  return (
    <>
      {/* ── Breadcrumb + gallery hero ──────────────────────────────── */}
      <Section tone="white" spacing="none" headerOffset>
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="pt-6 pb-8">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-pine-500">
              <li>
                <Link href="/" className="transition-colors hover:text-lake-700">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="select-none text-pine-300">
                /
              </li>
              <li>
                <Link href={backHref} className="transition-colors hover:text-lake-700">
                  {backLabel}
                </Link>
              </li>
              <li aria-hidden="true" className="select-none text-pine-300">
                /
              </li>
              <li className="font-medium text-pine-900" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          {/* Two-column layout: gallery + booking panel */}
          <div className="grid gap-10 pb-16 lg:grid-cols-[1fr_420px] lg:items-start lg:gap-16">
            {/* Gallery */}
            <div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-4xl bg-lake-50 shadow-card">
                <Image
                  src={productImage(product.slug) ?? singenuityImage(product.singenuityId, 1000, 750)}
                  alt={`${product.name} on Lake Sonoma`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>

              {/* Category + blurb below image on desktop */}
              <div className="mt-8 hidden lg:block">
                <p className="eyebrow mb-3">{CATEGORY_LABELS[product.category]}</p>
                <p className="text-lg leading-relaxed text-pine-700">{product.blurb}</p>
              </div>
            </div>

            {/* Booking panel (sticky on desktop) */}
            <aside className="lg:sticky lg:top-28" aria-label="Booking details">
              <p className="eyebrow mb-2">{CATEGORY_LABELS[product.category]}</p>
              <h1 className="text-display-md font-medium text-pine-900">{product.name}</h1>

              {product.capacity !== undefined && (
                <p className="mt-2 text-pine-500">
                  Up to {product.capacity}{" "}
                  {product.capacity === 1 ? "guest" : "guests"}
                </p>
              )}

              {/* Blurb — visible on mobile only (desktop shows below image) */}
              <p className="mt-4 text-base leading-relaxed text-pine-700 lg:hidden">
                {product.blurb}
              </p>

              {/* Pricing card */}
              <div className="mt-6 rounded-4xl border border-sand-200 bg-sand-50 p-6 shadow-soft">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-pine-500">
                  Pricing
                </h2>

                {product.priceTBD ? (
                  <div className="mt-3">
                    <p className="text-2xl font-medium text-pine-900">
                      Call for pricing
                    </p>
                    <p className="mt-1 text-sm text-pine-500">
                      Pricing varies — please call or check availability.
                    </p>
                    <a
                      href={SITE.phoneHref}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-lake-700 underline-offset-4 hover:underline"
                    >
                      {SITE.phone}
                    </a>
                  </div>
                ) : (
                  <ul className="mt-3 divide-y divide-sand-200">
                    {product.pricing.map((opt) => (
                      <li
                        key={opt.label}
                        className="flex items-baseline justify-between py-2.5 first:pt-0 last:pb-0"
                      >
                        <span className="text-sm text-pine-700">{opt.label}</span>
                        <span className="text-xl font-medium text-pine-900">
                          {opt.amount !== undefined ? `$${opt.amount}` : "Inquire"}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}

                <p className="mt-3 border-t border-sand-200 pt-4 text-xs text-pine-400">
                  Rates exclude fuel and sales tax. A driver&apos;s license and credit card are
                  required at check-in.
                </p>
              </div>

              {/* Primary CTA */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <BookButton
                  singenuityId={product.singenuityId}
                  bookByPhone={product.bookByPhone}
                  productName={product.name}
                  className="btn-primary flex-1 text-center"
                />
                <a
                  href={SITE.phoneHref}
                  className="btn-secondary flex-1 text-center"
                  aria-label={`Call Lake Sonoma Marina at ${SITE.phone}`}
                >
                  Call {SITE.phone}
                </a>
              </div>
              <p className="mt-2 text-xs text-pine-400">
                Booking opens securely on Singenuity in a new tab.
              </p>
              <p className="mt-3 flex items-center gap-2 rounded-xl bg-sand-100 px-3 py-2 text-xs font-medium text-pine-700">
                <span aria-hidden="true">☀️</span>
                Summer weekends book up fast — reserve early to lock in your date.
              </p>

              {/* From price summary */}
              {from !== undefined && (
                <p className="mt-4 text-sm text-pine-500">
                  Starting from{" "}
                  <span className="font-semibold text-pine-800">${from}</span>{" "}
                  / {product.pricing[0]?.label?.toLowerCase() ?? "rental"}
                </p>
              )}
            </aside>
          </div>
        </Container>
      </Section>

      {/* ── What's included + Operator rules ──────────────────────── */}
      <Section tone="sand" spacing="loose">
        <div className="grid gap-12 md:grid-cols-2">
          {/* What's included */}
          <Reveal>
            <section aria-labelledby="included-heading">
              <p className="eyebrow mb-3">Every reservation</p>
              <h2
                id="included-heading"
                className="text-display-sm font-medium text-pine-900"
              >
                What&apos;s included
              </h2>
              <ul className="mt-6 space-y-3">
                {WHATS_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 text-pine-700">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 text-lake-600"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>

          {/* Operator & product notes */}
          <Reveal delay={80}>
            <section aria-labelledby="rules-heading">
              <p className="eyebrow mb-3">Good to know</p>
              <h2
                id="rules-heading"
                className="text-display-sm font-medium text-pine-900"
              >
                Operator rules
              </h2>
              <ul className="mt-6 space-y-3">
                {OPERATOR_RULES.map((item) => (
                  <li key={item} className="flex gap-3 text-pine-700">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 text-lake-400"
                    >
                      ·
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
                {product.notes &&
                  product.notes.length > 0 &&
                  product.notes.map((note) => (
                    <li key={note} className="flex gap-3 text-pine-700">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex-shrink-0 text-lake-600"
                      >
                        ·
                      </span>
                      <span className="font-medium">{note}</span>
                    </li>
                  ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </Section>

      {/* ── Pontoon comparison table (pontoon category only) ───────── */}
      {isPontoon && (
        <Section tone="white" spacing="loose">
          <Reveal>
            <section aria-labelledby="compare-heading">
              <p className="eyebrow mb-3">Pontoon fleet</p>
              <h2
                id="compare-heading"
                className="text-display-sm font-medium text-pine-900"
              >
                Compare our pontoons
              </h2>
              <p className="mt-2 text-pine-500">
                All pontoons include the same great amenities — choose the size that fits
                your group.
              </p>

              <div className="mt-8 overflow-x-auto rounded-4xl border border-sand-200 shadow-soft">
                <table className="w-full min-w-[540px] border-collapse text-left text-sm">
                  <caption className="sr-only">
                    Capacity and half-day price for each pontoon at Lake Sonoma Marina
                  </caption>
                  <thead>
                    <tr className="border-b border-sand-200 bg-sand-50">
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-pine-700"
                      >
                        Pontoon
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 font-semibold text-pine-700"
                      >
                        Capacity
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-4 font-semibold text-pine-700"
                      >
                        From
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-4 font-semibold text-pine-700"
                      >
                        Book
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {PONTOONS.map((p) => {
                      const price = fromPrice(p);
                      const isCurrent = p.slug === product.slug;
                      return (
                        <tr
                          key={p.singenuityId}
                          className={
                            "border-b border-sand-100 last:border-0 transition-colors " +
                            (isCurrent
                              ? "bg-lake-50"
                              : "hover:bg-sand-50/60")
                          }
                        >
                          <th
                            scope="row"
                            className="px-6 py-4 font-medium text-pine-900"
                          >
                            <Link
                              href={`/product/${p.slug}`}
                              className="transition-colors hover:text-lake-700 hover:underline"
                            >
                              {p.name}
                            </Link>
                            {isCurrent && (
                              <span className="ml-2 rounded-full bg-lake-100 px-2 py-0.5 text-xs font-medium text-lake-700">
                                viewing
                              </span>
                            )}
                          </th>
                          <td className="px-4 py-4 text-pine-700">
                            {p.capacity !== undefined
                              ? `Up to ${p.capacity}`
                              : "—"}
                          </td>
                          <td className="px-4 py-4 font-semibold text-pine-900">
                            {price !== undefined ? `$${price}` : "Inquire"}
                          </td>
                          <td className="px-6 py-4">
                            {p.bookByPhone ? (
                              <a
                                href={SITE.phoneHref}
                                className="btn-primary inline-block px-4 py-1.5 text-xs"
                                aria-label={`Call to book ${p.name}`}
                              >
                                Call ☎
                              </a>
                            ) : (
                              <a
                                href={bookingUrl(p.singenuityId)}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary inline-block px-4 py-1.5 text-xs"
                                aria-label={`Book ${p.name} (opens booking in a new tab)`}
                              >
                                Book ↗
                              </a>
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </section>
          </Reveal>
        </Section>
      )}

      {/* ── Cross-sell: related rentals ───────────────────────────── */}
      {related.length > 0 && (
        <Section tone="white" spacing="loose">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="eyebrow mb-3">More ways to get on the water</p>
                <h2 className="text-display-sm font-medium text-pine-900">You might also like</h2>
              </div>
              <Link
                href="/rentals"
                className="text-sm font-semibold text-lake-700 underline-offset-4 hover:underline"
              >
                View all rentals →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.singenuityId} delay={i * 80}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </Section>
      )}

      {/* ── Cancellation policy ───────────────────────────────────── */}
      <Section tone="pine" spacing="default">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="eyebrow mb-3 !text-sand-300">Flexibility</p>
              <h2 className="text-display-sm font-medium text-white">
                Cancellation policy
              </h2>
              <ul className="mt-6 space-y-3">
                {CANCELLATION_POLICY.map((item) => (
                  <li key={item} className="flex gap-3 text-sand-100/80">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex-shrink-0 text-lake-300"
                    >
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/policies"
                className="mt-5 inline-block text-sm font-semibold text-lake-300 underline-offset-4 hover:underline"
              >
                Full policies &amp; rules →
              </Link>
            </div>

            {/* Repeat prominent CTA */}
            <div className="rounded-4xl bg-white/10 p-8 text-center backdrop-blur-sm">
              <p className="text-sm font-medium text-sand-200">Ready to go?</p>
              <BookButton
                singenuityId={product.singenuityId}
                bookByPhone={product.bookByPhone}
                productName={product.name}
                className="btn-ghost-light mt-4 w-full text-center"
                label="Check availability"
              />
              <a
                href={SITE.phoneHref}
                className="mt-3 block text-sm text-sand-300 underline-offset-4 hover:underline"
              >
                Or call {SITE.phone}
              </a>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* ── Structured data ─────────────────────────────────────────── */}
      <JsonLd data={productJsonLd(product)} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: backLabel, path: backHref },
          { name: product.name, path: `/product/${product.slug}` },
        ])}
      />
    </>
  );
}
