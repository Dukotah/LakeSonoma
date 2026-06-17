import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, HOURS, BILLING_OFFICE, STORE_ITEMS, ABOUT_INTRO } from "@/data/site";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMeta({
  title: "About Lake Sonoma Marina",
  description:
    "Lake Sonoma Marina — boat rentals, a full marina store & deli, gas and rental dock, and friendly staff on beautiful Lake Sonoma in Sonoma County.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Hero
        image="marina-docks"
        eyebrow="Healdsburg, CA"
        height="medium"
        title="Sonoma County's Premier Marina"
        subtitle="Open year-round for rentals, day-use, storage, and everything the lake has to offer."
      >
        <Link href="/rentals" className="btn-ghost-light">
          Explore the fleet
        </Link>
        <Link href="/contact" className="btn-ghost-light">
          Get directions
        </Link>
      </Hero>

      {/* About intro */}
      <Section tone="default" spacing="loose">
        <Reveal>
          <p className="eyebrow mb-4">Our story</p>
          <h2 className="text-display-md font-medium text-pine-900 max-w-2xl">
            {ABOUT_INTRO.heading}
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-pine-700">
            {ABOUT_INTRO.body}
          </p>
        </Reveal>
      </Section>

      {/* Marina Store & Deli + Gas & Rental Dock */}
      <Section tone="sand" spacing="loose">
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal>
            <article className="flex flex-col h-full rounded-4xl bg-white shadow-card p-8 sm:p-10">
              <p className="eyebrow mb-3">On-site</p>
              <h2 className="text-display-sm font-medium text-pine-900">Marina Store &amp; Deli</h2>
              <p className="mt-4 text-pine-700 leading-relaxed">
                The marina store is your one-stop shop for everything you need for a fun day on
                the lake. Skip the pre-trip grocery run — we have you covered.
              </p>
              <ul className="mt-6 grid grid-cols-2 gap-3" aria-label="Store inventory">
                {STORE_ITEMS.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-pine-800 text-sm">
                    <span
                      aria-hidden="true"
                      className="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lake-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={100}>
            <article className="flex flex-col h-full rounded-4xl bg-white shadow-card p-8 sm:p-10">
              <p className="eyebrow mb-3">On the water</p>
              <h2 className="text-display-sm font-medium text-pine-900">Gas &amp; Rental Dock</h2>
              <p className="mt-4 text-pine-700 leading-relaxed">
                We offer a wide variety of boats for rental — pontoon boats, ski boats, fishing
                boats, canoes, kayaks, jet skis, and all the accessories to go with them.
              </p>
              <p className="mt-4 text-pine-700 leading-relaxed">
                Our dock team will answer any questions and make sure your boating experience is
                as fun and safe as possible. At the gas pump, dock hands greet you to make your
                fill-up quick and easy so you can be on your way.
              </p>
              <div className="mt-auto pt-6">
                <Link href="/rentals" className="btn-primary inline-block">
                  View all rentals
                </Link>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* Visit the marina + Billing office */}
      <Section tone="white" spacing="loose">
        <Reveal>
          <h2 className="text-display-md font-medium text-pine-900 mb-10">Find us</h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2">
          {/* Marina address */}
          <Reveal delay={60}>
            <div className="rounded-4xl bg-lake-50 p-8 sm:p-10 h-full">
              <p className="eyebrow mb-3">The marina</p>
              <h3 className="text-xl font-semibold text-pine-900">{SITE.name}</h3>
              <address className="mt-4 not-italic text-pine-800 leading-relaxed">
                {SITE.address.street}
                <br />
                {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              </address>
              <p className="mt-3">
                <a
                  href={SITE.phoneHref}
                  className="font-semibold text-lake-700 hover:text-lake-900 transition-colors"
                >
                  {SITE.phone}
                </a>
              </p>
              <div className="mt-5 space-y-1">
                {HOURS.map((h) => (
                  <p key={h.season} className="text-sm text-pine-700">
                    <span className="font-semibold text-pine-800">{h.season}:</span> {h.value}
                  </p>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-block text-sm font-semibold text-lake-700 hover:text-lake-900 transition-colors"
              >
                Directions &amp; contact →
              </Link>
            </div>
          </Reveal>

          {/* Billing office */}
          <Reveal delay={140}>
            <div className="rounded-4xl bg-sand-100 p-8 sm:p-10 h-full">
              <p className="eyebrow mb-3">Billing inquiries</p>
              <h3 className="text-xl font-semibold text-pine-900">{BILLING_OFFICE.name}</h3>
              <p className="mt-3 text-sm text-pine-600">
                Located in {BILLING_OFFICE.location}
              </p>
              <address className="mt-2 not-italic text-pine-800 leading-relaxed">
                {BILLING_OFFICE.address}
              </address>
              <p className="mt-3">
                <a
                  href={BILLING_OFFICE.phoneHref}
                  className="font-semibold text-lake-700 hover:text-lake-900 transition-colors"
                >
                  {BILLING_OFFICE.phone}
                </a>
              </p>
              <p className="mt-4 text-sm text-pine-600 leading-relaxed">{BILLING_OFFICE.note}</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA band */}
      <Section tone="pine" spacing="loose">
        <Container size="narrow">
          <Reveal>
            <div className="text-center">
              <p className="eyebrow !text-sand-300 mb-4">Ready to go?</p>
              <h2 className="text-display-md font-medium text-white">
                Your perfect lake day starts here.
              </h2>
              <p className="mt-5 text-sand-200 max-w-xl mx-auto text-lg leading-relaxed">
                Browse pontoons, sport boats, kayaks, and more — then book directly through our
                Singenuity reservation system.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <Link href="/rentals" className="btn-ghost-light">
                  Browse rentals
                </Link>
                <Link href="/patios" className="btn-ghost-light">
                  Reserve a patio
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
