import Link from "next/link";
import {
  PRODUCTS,
  ACTIVITY_LABELS,
  WHATS_INCLUDED,
  CANCELLATION_POLICY,
  type ActivityTag,
} from "@/data/marina";
import { REVIEWS, REVIEW_PLATFORMS, ABOUT_INTRO, STORE_ITEMS, SITE, HOURS } from "@/data/site";
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

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="text-sand-400" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
    </span>
  );
}

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.featured);

  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden bg-gradient-to-b from-lake-700 to-lake-950 text-white">
        <div className="container-page py-20 sm:py-28">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
            Lake Sonoma Marina
          </h1>
          <p className="mt-3 max-w-2xl text-lg font-medium text-lake-100 sm:text-xl">
            {SITE.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/rentals" className="btn-primary bg-white text-lake-800 hover:bg-lake-50">
              Book Now
            </Link>
            <Link href="/patios" className="btn-secondary border-white text-white hover:bg-white/10">
              Patios & Day-Use
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- Find your boat (functional upgrade) ---------- */}
      <section className="container-page -mt-10 sm:-mt-12" aria-labelledby="find-your-boat">
        <div className="rounded-2xl border border-lake-100 bg-white p-6 shadow-lg">
          <h2 id="find-your-boat" className="text-xl font-bold text-lake-900">Find your boat</h2>
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

      {/* ---------- About band ---------- */}
      <section className="container-page py-16" aria-labelledby="about-intro">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 id="about-intro" className="text-3xl font-bold text-lake-900">
              {ABOUT_INTRO.heading}
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pine-900/90">{ABOUT_INTRO.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">Learn More</Link>
              <Link href="/faqs" className="btn-secondary">View FAQs</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-sand-50 p-6">
            <h3 className="text-lg font-bold text-lake-900">Marina Store &amp; Deli</h3>
            <p className="mt-1 text-sm text-pine-700">
              Your one-stop shop for everything you need for a fun day on the lake:
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-pine-900">
              {STORE_ITEMS.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true" className="text-lake-600">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---------- Featured Boat Rentals ---------- */}
      <section className="bg-lake-50/60 py-16" aria-labelledby="featured">
        <div className="container-page">
          <p className="text-sm font-semibold uppercase tracking-widest text-lake-600">Featured</p>
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 id="featured" className="text-3xl font-bold text-lake-900">Boat Rentals</h2>
            <Link href="/rentals" className="text-sm font-semibold text-lake-700 hover:underline">
              View all rentals →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProductCard key={p.singenuityId} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Reviews ---------- */}
      {REVIEWS.length > 0 && (
        <section className="container-page py-16" aria-labelledby="reviews">
          <p className="text-sm font-semibold uppercase tracking-widest text-lake-600">Our Reviews</p>
          <h2 id="reviews" className="text-3xl font-bold text-lake-900">
            Best Boat Rentals in Healdsburg, CA
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {REVIEWS.map((r) => (
              <figure key={r.author} className="rounded-2xl border border-lake-100 bg-white p-5 shadow-sm">
                <Stars count={r.stars ?? 5} />
                <blockquote className="mt-2 text-pine-900">“{r.quote}”</blockquote>
                <figcaption className="mt-3 text-sm font-semibold text-lake-700">— {r.author}</figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-6 text-sm text-pine-700">
            As reviewed on {REVIEW_PLATFORMS.join(", ")}.
          </p>
        </section>
      )}

      {/* ---------- CTA band ---------- */}
      <section className="bg-gradient-to-r from-lake-700 to-lake-900 text-white">
        <div className="container-page flex flex-col items-center gap-5 py-14 text-center">
          <h2 className="text-3xl font-extrabold">Experience Lake Sonoma!</h2>
          <p className="max-w-xl text-lake-100">
            Pick your boat or patio and reserve the exact date in just a few taps.
          </p>
          <Link href="/rentals" className="btn-primary bg-white text-lake-800 hover:bg-lake-50">
            Book Now
          </Link>
        </div>
      </section>

      {/* ---------- Trust band (functional upgrade) ---------- */}
      <section className="container-page grid gap-8 py-14 md:grid-cols-3">
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
      </section>
    </>
  );
}
