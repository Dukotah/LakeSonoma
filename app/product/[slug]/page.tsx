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
import { BookButton } from "@/components/BookButton";
import { pageMeta, productJsonLd, JsonLd } from "@/lib/seo";
import { SITE } from "@/data/site";

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
    title: p.name,
    description:
      `Rent the ${p.name} at Lake Sonoma Marina${p.capacity ? ` (up to ${p.capacity} people)` : ""}` +
      `${from !== undefined ? ` from $${from}` : ""}. ${p.blurb}`,
    path: `/product/${p.slug}`,
  });
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const isPontoon = product.category === "pontoon";

  return (
    <div className="container-page py-10">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="text-sm text-pine-700">
        <ol className="flex flex-wrap items-center gap-1">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li aria-hidden="true">/</li>
          <li>
            <Link
              href={product.category === "patio" ? "/patios" : `/rentals?category=${product.category}`}
              className="hover:underline"
            >
              {CATEGORY_LABELS[product.category]}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="font-medium text-pine-900" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        {/* Gallery */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-lake-50">
          <Image
            src={singenuityImage(product.singenuityId, 1000, 750)}
            alt={`${product.name} at Lake Sonoma Marina`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Booking panel */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-lake-600">
            {CATEGORY_LABELS[product.category]}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold text-lake-900">{product.name}</h1>
          {product.capacity !== undefined && (
            <p className="mt-2 text-pine-700">Seats up to {product.capacity} people</p>
          )}
          <p className="mt-3 text-pine-900/90">{product.blurb}</p>

          {/* Pricing */}
          <div className="mt-5 rounded-xl border border-lake-100 bg-lake-50/60 p-4">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-pine-700">Pricing</h2>
            {product.priceTBD ? (
              <p className="mt-2 text-pine-900">
                Pricing varies — please call{" "}
                <a href={SITE.phoneHref} className="font-semibold text-lake-700 hover:underline">
                  {SITE.phone}
                </a>{" "}
                or check availability for current rates.
              </p>
            ) : (
              <ul className="mt-2 space-y-1">
                {product.pricing.map((opt) => (
                  <li key={opt.label} className="flex items-baseline justify-between">
                    <span className="text-pine-900">{opt.label}</span>
                    <span className="text-lg font-bold text-lake-800">
                      {opt.amount !== undefined ? `$${opt.amount}` : "Inquire"}
                    </span>
                  </li>
                ))}
              </ul>
            )}
            <p className="mt-2 text-xs text-pine-700">
              Additional durations and exact availability are shown on the booking page.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-5 flex flex-wrap gap-3">
            <BookButton singenuityId={product.singenuityId} productName={product.name} />
            <a href={SITE.phoneHref} className="btn-secondary">
              Call {SITE.phone}
            </a>
          </div>
          <p className="mt-2 text-xs text-pine-700">
            Booking opens securely on Singenuity in a new tab.
          </p>
        </div>
      </div>

      {/* Details: included + rules */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <section aria-labelledby="included">
          <h2 id="included" className="text-xl font-bold text-lake-900">What&apos;s included</h2>
          <ul className="mt-3 space-y-2 text-pine-900">
            {WHATS_INCLUDED.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-lake-600">✓</span> {item}
              </li>
            ))}
          </ul>
        </section>
        <section aria-labelledby="rules">
          <h2 id="rules" className="text-xl font-bold text-lake-900">Good to know</h2>
          <ul className="mt-3 space-y-2 text-pine-900">
            {OPERATOR_RULES.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-lake-600">•</span> {item}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Pontoon comparison */}
      {isPontoon && <PontoonComparison currentSlug={product.slug} />}

      {/* Cancellation summary */}
      <section className="mt-12 rounded-2xl bg-sand-50 p-6" aria-labelledby="cancel">
        <h2 id="cancel" className="text-lg font-bold text-lake-900">Cancellation policy</h2>
        <ul className="mt-3 grid gap-2 text-sm text-pine-900 sm:grid-cols-3">
          {CANCELLATION_POLICY.map((item) => (
            <li key={item} className="flex gap-2">
              <span aria-hidden="true" className="text-lake-600">✓</span> {item}
            </li>
          ))}
        </ul>
        <Link href="/policies" className="mt-3 inline-block text-sm font-semibold text-lake-700 hover:underline">
          Full policies &amp; rules →
        </Link>
      </section>

      <JsonLd data={productJsonLd(product)} />
    </div>
  );
}

function PontoonComparison({ currentSlug }: { currentSlug: string }) {
  return (
    <section className="mt-12" aria-labelledby="compare">
      <h2 id="compare" className="text-xl font-bold text-lake-900">Compare our pontoons</h2>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left text-sm">
          <caption className="sr-only">Capacity and half-day price for each pontoon</caption>
          <thead>
            <tr className="border-b border-lake-200 text-pine-700">
              <th scope="col" className="py-2 pr-4 font-semibold">Pontoon</th>
              <th scope="col" className="py-2 pr-4 font-semibold">Capacity</th>
              <th scope="col" className="py-2 pr-4 font-semibold">Half-day</th>
              <th scope="col" className="py-2 font-semibold">Book</th>
            </tr>
          </thead>
          <tbody>
            {PONTOONS.map((p) => {
              const price = fromPrice(p);
              const isCurrent = p.slug === currentSlug;
              return (
                <tr
                  key={p.singenuityId}
                  className={"border-b border-lake-100 " + (isCurrent ? "bg-lake-50" : "")}
                >
                  <th scope="row" className="py-2 pr-4 font-medium text-pine-900">
                    <Link href={`/product/${p.slug}`} className="hover:text-lake-700 hover:underline">
                      {p.name}
                    </Link>
                    {isCurrent && <span className="ml-2 text-xs text-lake-600">(viewing)</span>}
                  </th>
                  <td className="py-2 pr-4 text-pine-900">{p.capacity ?? "—"}</td>
                  <td className="py-2 pr-4 font-semibold text-lake-800">
                    {price !== undefined ? `$${price}` : "Inquire"}
                  </td>
                  <td className="py-2">
                    <a
                      href={bookingUrl(p.singenuityId)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full bg-lake-600 px-3 py-1 text-xs font-semibold text-white hover:bg-lake-700"
                    >
                      Book ↗
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
