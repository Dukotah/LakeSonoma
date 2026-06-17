import Link from "next/link";
import { PRODUCTS, ACTIVITY_LABELS, WHATS_INCLUDED, CANCELLATION_POLICY, type ActivityTag } from "@/data/marina";
import { REVIEWS, HOURS } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";

const FIND_BY_ACTIVITY: { tag: ActivityTag; icon: string }[] = [
  { tag: "cruising", icon: "🛥️" },
  { tag: "fishing", icon: "🎣" },
  { tag: "watersports", icon: "🌊" },
  { tag: "paddling", icon: "🛶" },
  { tag: "patio", icon: "⛱️" },
];

const GROUP_SIZES = [
  { label: "Just a few (1–5)", max: 5 },
  { label: "Medium group (6–10)", max: 10 },
  { label: "Big group (12)", max: 12 },
];

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-lake-700 to-lake-900 text-white">
        <div className="container-page py-16 sm:py-24">
          <p className="text-sm font-semibold uppercase tracking-widest text-lake-200">
            Geyserville, California
          </p>
          <h1 className="mt-2 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl">
            Your day on Lake Sonoma starts here.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-lake-100">
            Pontoons, fishing boats, jet skis, kayaks, and reservable lakeside patios —
            pick the right one for your group and book the exact boat in a couple of taps.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/rentals" className="btn-primary bg-white text-lake-800 hover:bg-lake-50">
              Browse rentals
            </Link>
            <Link href="/patios" className="btn-secondary border-white text-white hover:bg-white/10">
              Reserve a patio
            </Link>
          </div>
        </div>
      </section>

      {/* Find your boat helper */}
      <section className="container-page -mt-10 sm:-mt-12" aria-labelledby="find-your-boat">
        <div className="rounded-2xl border border-lake-100 bg-white p-6 shadow-lg">
          <h2 id="find-your-boat" className="text-xl font-bold text-lake-900">
            Find your boat
          </h2>
          <p className="mt-1 text-sm text-pine-700">What do you want to do on the water?</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {FIND_BY_ACTIVITY.map(({ tag, icon }) => (
              <Link
                key={tag}
                href={`/rentals?activity=${tag}`}
                className="inline-flex items-center gap-2 rounded-full border border-lake-200 px-4 py-2 text-sm font-medium text-pine-900 transition hover:border-lake-400 hover:bg-lake-50"
              >
                <span aria-hidden="true">{icon}</span> {ACTIVITY_LABELS[tag]}
              </Link>
            ))}
          </div>
          <p className="mt-5 text-sm text-pine-700">…or by group size:</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {GROUP_SIZES.map((g) => (
              <Link
                key={g.max}
                href={`/rentals?capacity=${g.max}`}
                className="inline-flex items-center gap-2 rounded-full border border-lake-200 px-4 py-2 text-sm font-medium text-pine-900 transition hover:border-lake-400 hover:bg-lake-50"
              >
                {g.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container-page py-14" aria-labelledby="featured">
        <div className="flex items-end justify-between">
          <h2 id="featured" className="text-2xl font-bold text-lake-900">Popular rentals</h2>
          <Link href="/rentals" className="text-sm font-semibold text-lake-700 hover:underline">
            View all rentals →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.singenuityId} product={p} />
          ))}
        </div>
      </section>

      {/* Trust band */}
      <section className="bg-sand-50">
        <div className="container-page grid gap-8 py-14 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold text-lake-900">What&apos;s included</h2>
            <ul className="mt-3 space-y-2 text-sm text-pine-900">
              {WHATS_INCLUDED.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-lake-600">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-lake-900">Easy cancellation</h2>
            <ul className="mt-3 space-y-2 text-sm text-pine-900">
              {CANCELLATION_POLICY.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-lake-600">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold text-lake-900">Open year-round</h2>
            <ul className="mt-3 space-y-2 text-sm text-pine-900">
              {HOURS.map((h) => (
                <li key={h.season}>
                  <span className="font-semibold">{h.season}:</span> {h.value}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-3 inline-block text-sm font-semibold text-lake-700 hover:underline">
              Plan your visit →
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews — only renders if real reviews exist (no fabricated filler). */}
      {REVIEWS.length > 0 && (
        <section className="container-page py-14" aria-labelledby="reviews">
          <h2 id="reviews" className="text-2xl font-bold text-lake-900">What guests say</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.author} className="rounded-2xl border border-lake-100 bg-white p-5 shadow-sm">
                <blockquote className="text-pine-900">“{r.quote}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-lake-700">
                  — {r.author}
                  {r.source && <span className="font-normal text-pine-700"> · {r.source}</span>}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
