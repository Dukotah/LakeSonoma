import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMeta({
  title: "Lake Sonoma Visitor Guide — Boating, Fishing & Day Trips",
  description:
    "Everything you need to plan a day at Lake Sonoma near Healdsburg, CA — boating, fishing, the best things to do, what to bring, when to visit, and how to get there.",
  path: "/guide",
});

const SECTIONS = [
  {
    h: "Plan your day on the water",
    p: [
      "Lake Sonoma is a 2,700-acre reservoir tucked into the oak-covered hills of northern Sonoma County, a short drive from Healdsburg's wineries. It's a warm-water lake with miles of quiet coves — ideal for cruising, swimming, fishing, paddling, and watersports through the long Northern California summer.",
      "The marina is your launch point: rent a pontoon, ski boat, fishing boat, jet ski, kayak, paddleboard, or canoe, reserve a lakeside patio for the group, and grab supplies from the store and deli before you head out.",
    ],
  },
  {
    h: "Best things to do at Lake Sonoma",
    list: [
      "Cruise the coves on a pontoon — the most popular way to spend a relaxed day with family or friends.",
      "Fish for bass, catfish, and panfish — Lake Sonoma is a well-known warm-water fishery.",
      "Tube, wakeboard, or water-ski behind a sport or watersport boat.",
      "Paddle the shoreline by kayak, canoe, or stand-up paddleboard.",
      "Reserve a patio for a lakeside BBQ, birthday, or company outing.",
      "Visit the Milt Brandt Visitor Center and fish hatchery near the dam to learn about the lake's salmon and steelhead programs.",
    ],
  },
  {
    h: "What to bring",
    list: [
      "Sun protection — hat, sunglasses, and reef-safe sunscreen (shade is limited on the water).",
      "Plenty of water and snacks (or grab a sandwich from the marina deli).",
      "A cooler — beer, wine, soda, water, and ice are available at the store.",
      "Towels, a swimsuit, and a change of clothes.",
      "A valid government photo ID — boat operators must be 21+.",
      "Cash or card for day-use fees and the launch ramp.",
    ],
  },
  {
    h: "Best time to visit",
    p: [
      "Summer (Memorial Day through Labor Day) is peak season — warm, sunny, and busy, especially on weekends and holidays. Reserve boats and patios early for those dates.",
      "Late spring and early fall are quieter and beautiful, with comfortable temperatures and the lake at its fullest. The marina is open year-round, with reduced winter hours.",
    ],
  },
  {
    h: "Getting here",
    p: [
      "The marina is at 4200 Skaggs Springs Road, Geyserville, CA 95441 — about 20 minutes from downtown Healdsburg, roughly 40 minutes from Santa Rosa, and about 1.5–2 hours from the San Francisco Bay Area. The drive in along Dry Creek and Skaggs Springs Road is scenic and easy.",
      "Make a weekend of it: Lake Sonoma sits in the heart of Dry Creek Valley wine country, so it pairs perfectly with a winery visit or a stay in Healdsburg.",
    ],
  },
];

export default function GuidePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Lake Sonoma Guide", path: "/guide" },
        ])}
      />

      <Hero
        image="hero"
        eyebrow="Visitor Guide"
        height="medium"
        title="Your guide to Lake Sonoma"
        subtitle="How to plan the perfect day on the water — what to do, what to bring, when to come, and how to get here."
      >
        <Link href="/rentals" className="btn-ghost-light">
          Browse boat rentals
        </Link>
        <Link href="/pricing" className="btn-ghost-light">
          See prices
        </Link>
      </Hero>

      <Section tone="white" spacing="loose">
        <Container size="narrow">
          <div className="space-y-12">
            {SECTIONS.map((s, i) => (
              <Reveal key={s.h} delay={Math.min(i * 50, 200)}>
                <section>
                  <h2 className="text-display-sm font-medium text-pine-900">{s.h}</h2>
                  {s.p?.map((para, j) => (
                    <p key={j} className="mt-4 leading-relaxed text-pine-700">
                      {para}
                    </p>
                  ))}
                  {s.list && (
                    <ul className="mt-5 space-y-3">
                      {s.list.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-pine-700">
                          <span aria-hidden="true" className="mt-0.5 shrink-0 text-lake-600">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="pine" spacing="default">
        <Reveal className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-display-sm font-medium text-sand-50">Ready to get on the water?</h2>
            <p className="mt-2 text-sand-200">Pick your boat or patio and reserve your date.</p>
          </div>
          <div className="flex flex-shrink-0 flex-wrap gap-3">
            <Link href="/rentals" className="btn-ghost-light">
              Book a boat
            </Link>
            <Link href="/faqs" className="btn-ghost-light">
              Read the FAQs
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
