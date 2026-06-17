import Link from "next/link";
import Image from "next/image";
import {
  PRODUCTS,
  ACTIVITY_LABELS,
  WHATS_INCLUDED,
  CANCELLATION_POLICY,
  type ActivityTag,
} from "@/data/marina";
import { REVIEWS, REVIEW_PLATFORMS, ABOUT_INTRO, STORE_ITEMS, SITE, HOURS } from "@/data/site";
import { IMAGES } from "@/data/imagery";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { pageMeta, localBusinessJsonLd, JsonLd } from "@/lib/seo";

export const metadata = pageMeta({
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  path: "/",
});

const FIND_BY_ACTIVITY: { tag: ActivityTag; label: string; icon: string }[] = [
  { tag: "cruising", label: "Cruising", icon: "🛥️" },
  { tag: "fishing", label: "Fishing", icon: "🎣" },
  { tag: "watersports", label: "Watersports", icon: "🌊" },
  { tag: "paddling", label: "Paddling", icon: "🛶" },
  { tag: "patio", label: "Patio & Picnic", icon: "⛱️" },
];

const GROUP_SIZES = [
  { label: "Solo or pair (1–2)", max: 2 },
  { label: "Small group (3–5)", max: 5 },
  { label: "Medium group (6–10)", max: 10 },
  { label: "Large group (12)", max: 12 },
];

function Stars({ count = 5 }: { count?: number }) {
  return (
    <span className="text-sand-400 text-base tracking-wider" aria-label={`${count} out of 5 stars`}>
      {"★".repeat(count)}
    </span>
  );
}

export default function HomePage() {
  const featured = PRODUCTS.filter((p) => p.featured);
  const aboutImg = IMAGES["family-boating"];
  const ctaBgImg = IMAGES["sunset-dock"];

  return (
    <>
      <JsonLd data={localBusinessJsonLd()} />

      {/* ---------------------------------------------------------------- HERO */}
      <Hero
        image="hero"
        eyebrow="Healdsburg, CA"
        title="Lake Sonoma Marina"
        subtitle={SITE.tagline}
        height="full"
        priority
      >
        <Link href="/rentals" className="btn-primary">
          Book Now
        </Link>
        <Link href="/patios" className="btn-ghost-light">
          Patios &amp; Day-Use
        </Link>
      </Hero>

      {/* ------------------------------------------------- FIND YOUR BOAT */}
      {/* Floats up over the hero on larger screens */}
      <div className="relative z-10 -mt-16 mb-0 px-5 sm:px-6 lg:px-8">
        <Container>
          <Reveal>
            <div
              className="rounded-4xl border border-pine-100 bg-white/95 px-8 py-8 shadow-lift backdrop-blur-sm"
              aria-labelledby="find-your-boat"
            >
              <h2
                id="find-your-boat"
                className="text-display-sm font-medium text-pine-900"
              >
                Find your perfect rental
              </h2>
              <p className="mt-1 text-sm text-pine-500">
                What do you want to do on the water?
              </p>

              {/* Activity chips */}
              <div className="mt-5 flex flex-wrap gap-2" role="list" aria-label="Filter by activity">
                {FIND_BY_ACTIVITY.map(({ tag, label, icon }) => (
                  <Link
                    key={tag}
                    href={`/rentals?activity=${tag}`}
                    role="listitem"
                    className="inline-flex items-center gap-2 rounded-full border border-lake-200 bg-lake-50/60 px-5 py-2.5 text-sm font-medium text-pine-800 transition-all duration-200 ease-soft-out hover:border-lake-500 hover:bg-lake-100 hover:text-pine-900 hover:shadow-soft focus-visible:outline focus-visible:outline-3"
                  >
                    <span aria-hidden="true">{icon}</span>
                    {label}
                  </Link>
                ))}
              </div>

              {/* Group size chips */}
              <p className="mt-6 text-sm font-medium text-pine-600">
                Or browse by group size:
              </p>
              <div className="mt-3 flex flex-wrap gap-2" role="list" aria-label="Filter by group size">
                {GROUP_SIZES.map((g) => (
                  <Link
                    key={g.max}
                    href={`/rentals?capacity=${g.max}`}
                    role="listitem"
                    className="inline-flex items-center rounded-full border border-sand-300 bg-sand-50 px-5 py-2.5 text-sm font-medium text-pine-700 transition-all duration-200 ease-soft-out hover:border-sand-400 hover:bg-sand-100 hover:text-pine-900 hover:shadow-soft focus-visible:outline focus-visible:outline-3"
                  >
                    {g.label}
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </div>

      {/* -------------------------------------------------- ABOUT BAND */}
      <Section tone="white" spacing="loose">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text column */}
          <Reveal>
            <div>
              <p className="eyebrow mb-4">About Us</p>
              <h2 className="text-pine-900">{ABOUT_INTRO.heading}</h2>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-pine-600">
                {ABOUT_INTRO.body}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Learn More
                </Link>
                <Link href="/faqs" className="btn-secondary">
                  View FAQs
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Right column: store card + photo */}
          <div className="flex flex-col gap-6">
            {/* Marina Store & Deli card */}
            <Reveal delay={120}>
              <div className="rounded-4xl border border-sand-200 bg-sand-50 px-7 py-7">
                <h3 className="text-pine-900">Marina Store &amp; Deli</h3>
                <p className="mt-2 text-sm text-pine-500">
                  Everything you need for a fun day on the lake — all in one place.
                </p>
                <ul
                  className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-pine-700"
                  aria-label="Store items available at the marina"
                >
                  {STORE_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span aria-hidden="true" className="mt-0.5 text-lake-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Lifestyle photo */}
            <Reveal delay={240}>
              {aboutImg ? (
                <div className="relative aspect-[16/9] overflow-hidden rounded-4xl">
                  <Image
                    src={aboutImg}
                    alt="Families enjoying a day out on Lake Sonoma"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  aria-hidden="true"
                  className="photo-fallback aspect-[16/9] rounded-4xl"
                />
              )}
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------ FEATURED BOAT RENTALS */}
      <Section tone="sand" spacing="loose">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow mb-3">Featured</p>
              <h2 className="text-pine-900">Boat Rentals</h2>
            </div>
            <Link
              href="/rentals"
              className="text-sm font-semibold text-lake-700 underline-offset-4 hover:text-lake-800 hover:underline focus-visible:outline focus-visible:outline-3"
              aria-label="View all boat rentals"
            >
              View all rentals →
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => (
            <Reveal key={p.singenuityId} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div className="mt-10 flex justify-center">
            <Link href="/rentals" className="btn-primary">
              Explore the Full Fleet
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* ---------------------------------------------------- REVIEWS */}
      {REVIEWS.length > 0 && (
        <Section tone="white" spacing="loose">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow mb-4">Our Reviews</p>
              <h2 className="text-pine-900">
                Best Boat Rentals in Healdsburg, CA
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.author} delay={i * 80}>
                <figure className="flex h-full flex-col rounded-4xl border border-pine-100 bg-sand-50 px-7 py-7 shadow-soft">
                  <Stars count={r.stars ?? 5} />
                  <blockquote className="mt-4 flex-1 text-base leading-relaxed text-pine-700">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-5 text-sm font-semibold text-lake-700">
                    — {r.author}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal delay={200}>
            <p className="mt-10 text-center text-sm text-pine-400">
              As reviewed on{" "}
              {REVIEW_PLATFORMS.map((platform, i) => (
                <span key={platform}>
                  <span className="font-semibold text-pine-600">{platform}</span>
                  {i < REVIEW_PLATFORMS.length - 1 && (
                    <span aria-hidden="true"> · </span>
                  )}
                </span>
              ))}
            </p>
          </Reveal>
        </Section>
      )}

      {/* ------------------------------------------- EXPERIENCE CTA BAND */}
      <section
        className="relative isolate flex min-h-[44vh] w-full items-center overflow-hidden"
        aria-label="Book your Lake Sonoma experience"
      >
        {/* Background photo */}
        {ctaBgImg ? (
          <Image
            src={ctaBgImg}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover"
          />
        ) : (
          <div aria-hidden="true" className="photo-fallback absolute inset-0 -z-10" />
        )}
        <div aria-hidden="true" className="photo-overlay absolute inset-0 -z-10" />

        <Container>
          <Reveal>
            <div className="mx-auto max-w-2xl py-20 text-center sm:py-28">
              <p className="eyebrow mb-4 !text-sand-200">Lake Sonoma Marina</p>
              <h2 className="text-display-lg font-medium text-white drop-shadow-sm">
                Experience Lake Sonoma!
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-sand-100/90">
                Pick your boat or patio and reserve the exact date — it only takes a minute.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link href="/rentals" className="btn-primary">
                  Book Now
                </Link>
                <Link href="/patios" className="btn-ghost-light">
                  Patios &amp; Day-Use
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* -------------------------------------------------- TRUST STRIP */}
      <Section tone="pine" spacing="default">
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {/* What's included */}
          <Reveal>
            <div>
              <h2 className="text-display-sm font-medium text-sand-100">
                What&apos;s included
              </h2>
              <ul className="mt-5 space-y-3" aria-label="Items included with every rental">
                {WHATS_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-pine-200">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-lake-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Cancellation policy */}
          <Reveal delay={100}>
            <div>
              <h2 className="text-display-sm font-medium text-sand-100">
                Easy cancellation
              </h2>
              <ul className="mt-5 space-y-3" aria-label="Cancellation policy details">
                {CANCELLATION_POLICY.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-pine-200">
                    <span aria-hidden="true" className="mt-0.5 shrink-0 text-lake-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Hours */}
          <Reveal delay={200}>
            <div>
              <h2 className="text-display-sm font-medium text-sand-100">
                Open year&#8209;round
              </h2>
              <ul className="mt-5 space-y-3" aria-label="Marina operating hours">
                {HOURS.map((h) => (
                  <li key={h.season} className="text-sm leading-relaxed text-pine-200">
                    <span className="font-semibold text-sand-200">{h.season}:</span>{" "}
                    {h.value}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-pine-400">
                {SITE.address.city}, {SITE.address.region} ·{" "}
                <a
                  href={SITE.phoneHref}
                  className="font-medium text-lake-300 underline-offset-4 hover:text-lake-200 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-lake-400"
                >
                  {SITE.phone}
                </a>
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-block text-sm font-semibold text-lake-300 underline-offset-4 hover:text-lake-200 hover:underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-lake-400"
                aria-label="Plan your visit to Lake Sonoma Marina"
              >
                Plan your visit →
              </Link>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
