import Link from "next/link";
import type { Metadata } from "next";
import {
  PATIOS,
  DAY_USE_FEES,
  DAY_USE_INCLUDES,
  DAY_USE_HOURS,
} from "@/data/marina";
import { SITE } from "@/data/site";
import { ProductCard } from "@/components/ProductCard";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Patio & Day-Use Reservations — Lake Sonoma Marina",
  description:
    "Reserve a lakeside patio at Lake Sonoma Marina for BBQs, picnics, and group gatherings. Day-use areas open daily. View fees and book your spot online.",
  path: "/patios",
});

export default function PatiosPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Hero
        image="picnic-patio"
        eyebrow="Patios & Day-Use"
        height="medium"
        title="A lakeside table waiting for you."
        subtitle="Reserve one of our private patios for the day — BBQs, picnic tables, and unobstructed lake views included."
      >
        <a
          href="#reservable-patios"
          className="btn-ghost-light"
          aria-label="Browse reservable patios"
        >
          Browse patios
        </a>
        <Link href="/rentals" className="btn-ghost-light">
          Add a boat rental
        </Link>
      </Hero>

      {/* ── Day-use amenities band ────────────────────────────────── */}
      <Section tone="sand" spacing="default" id="day-use">
        <Reveal>
          <p className="eyebrow">Day-Use Areas</p>
          <h2 className="mt-2 text-display-md font-medium">
            Open every day, rain or shine.
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pine-700">
            Our day-use picnic areas are open daily{" "}
            <strong className="text-pine-900">{DAY_USE_HOURS}</strong> and
            require no reservation for general access. Each patio area includes:
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {DAY_USE_INCLUDES.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <div className="flex items-start gap-3 rounded-2xl bg-white p-5 shadow-soft">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-lake-100 text-lake-700 text-sm font-bold"
                >
                  ✓
                </span>
                <span className="text-pine-800">{item}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={400}>
          <p className="mt-8 text-sm text-pine-600">
            Volleyball option also available — ask staff on arrival.
          </p>
        </Reveal>
      </Section>

      {/* ── Reservable patios grid ────────────────────────────────── */}
      <Section tone="white" spacing="loose" id="reservable-patios">
        <Reveal>
          <p className="eyebrow">Reserve Your Spot</p>
          <h2 className="mt-2 text-display-md font-medium">
            Private reservable patios
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pine-700">
            Guarantee your spot for the day. Each booking links directly to that
            patio&apos;s availability calendar — pick a date and you&apos;re set.
            The Grand Patio accommodates large gatherings; contact us for
            custom pricing.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PATIOS.map((p, i) => (
            <Reveal key={p.singenuityId} delay={i * 80}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Day-use fees table ────────────────────────────────────── */}
      <Section tone="sand" spacing="default" id="day-use-fees">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <p className="eyebrow">Fees</p>
            <h2 className="mt-2 text-display-md font-medium">
              Day-use fees
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pine-700">
              Whether you&apos;re launching a trailered boat, hand-launching a
              kayak, or simply parking for the day — here are the current
              day-use fees.
            </p>
            <p className="mt-4 text-sm text-pine-600">
              Slip holders with a valid membership pass launch free on the
              private ramp. Additional vehicles are charged the day-use parking
              fee.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div
              className="overflow-hidden rounded-4xl bg-white shadow-card"
              role="table"
              aria-label="Day-use fee schedule"
            >
              <div
                className="grid grid-cols-2 bg-pine-900 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-sand-200"
                role="row"
              >
                <span role="columnheader">Service</span>
                <span className="text-right" role="columnheader">
                  Fee
                </span>
              </div>
              {DAY_USE_FEES.map((f, i) => (
                <div
                  key={f.label}
                  className={`grid grid-cols-2 px-6 py-4 ${
                    i < DAY_USE_FEES.length - 1
                      ? "border-b border-sand-100"
                      : ""
                  }`}
                  role="row"
                >
                  <span className="text-pine-800" role="cell">
                    {f.label}
                  </span>
                  <span
                    className="text-right text-lg font-semibold text-lake-800"
                    role="cell"
                  >
                    ${f.amount}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── CTA / contact band ───────────────────────────────────── */}
      <Section tone="pine" spacing="tight">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-display-sm font-medium text-sand-50">
              Questions about patios or groups?
            </h2>
            <p className="mt-2 text-sand-200">
              Call the marina directly or drop us a note and we&apos;ll get
              back to you quickly.
            </p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn-ghost-light">
              {SITE.phone}
            </a>
            <Link href="/contact" className="btn-ghost-light">
              Send a message
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
