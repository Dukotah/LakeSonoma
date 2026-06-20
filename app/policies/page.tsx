import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import {
  CANCELLATION_POLICY,
  OPERATOR_RULES,
  WHATS_INCLUDED,
  DAY_USE_FEES,
} from "@/data/marina";
import { POLICY_GROUPS } from "@/data/content";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMeta({
  title: "Policies & Rules — Lake Sonoma Marina",
  description:
    "Lake Sonoma Marina rental policies — operator requirements, what's included, day-use fees, cancellation policy, and full slip-holder rules.",
  path: "/policies",
});

/** Small bulleted list used in summary cards. */
function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5" role="list">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-pine-700 leading-relaxed">
          <span
            aria-hidden="true"
            className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lake-500"
          />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PoliciesPage() {
  return (
    <>
      <Hero
        image="policies-bg"
        eyebrow="Marina rules & guidelines"
        height="compact"
        title="Policies &amp; Rules"
        subtitle="A safe, clean marina for everyone — please read before your visit."
      />

      {/* Quick-reference cards */}
      <Section tone="default" spacing="loose">
        <Reveal>
          <p className="eyebrow mb-4">Rental quick-reference</p>
          <h2 className="text-display-md font-medium text-pine-900 mb-10">
            Know before you go
          </h2>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Operator requirements */}
          <Reveal delay={0}>
            <article className="rounded-4xl bg-white shadow-card p-6 h-full">
              <h3 className="text-base font-semibold text-pine-900 border-b border-sand-100 pb-3 mb-1">
                Operator Requirements
              </h3>
              <BulletList items={OPERATOR_RULES} />
            </article>
          </Reveal>

          {/* What's included */}
          <Reveal delay={80}>
            <article className="rounded-4xl bg-white shadow-card p-6 h-full">
              <h3 className="text-base font-semibold text-pine-900 border-b border-sand-100 pb-3 mb-1">
                What&apos;s Included
              </h3>
              <BulletList items={WHATS_INCLUDED} />
            </article>
          </Reveal>

          {/* Day-use fees */}
          <Reveal delay={160}>
            <article className="rounded-4xl bg-white shadow-card p-6 h-full">
              <h3 className="text-base font-semibold text-pine-900 border-b border-sand-100 pb-3 mb-1">
                Day-Use Fees
              </h3>
              <ul className="mt-4 space-y-2.5" role="list">
                {DAY_USE_FEES.map((f) => (
                  <li
                    key={f.label}
                    className="flex items-center justify-between text-pine-700 text-sm"
                  >
                    <span>{f.label}</span>
                    <span className="font-semibold text-pine-900">${f.amount}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          {/* Cancellation */}
          <Reveal delay={240}>
            <article className="rounded-4xl bg-white shadow-card p-6 h-full">
              <h3 className="text-base font-semibold text-pine-900 border-b border-sand-100 pb-3 mb-1">
                Cancellation Policy
              </h3>
              <BulletList items={CANCELLATION_POLICY} />
            </article>
          </Reveal>
        </div>
      </Section>

      {/* Full slip-holder policies (accordion-style details/summary) */}
      <Section tone="sand" spacing="loose">
        <Reveal>
          <p className="eyebrow mb-4">Slip holders &amp; members</p>
          <h2 className="text-display-md font-medium text-pine-900 mb-2">
            Full Marina Policies
          </h2>
          <p className="text-pine-600 leading-relaxed mb-10 max-w-2xl">
            Applicable to all slip holders and marina members. Expand each section to read the
            complete set of rules.
          </p>
        </Reveal>

        <Container size="narrow">
          <div className="space-y-3">
            {POLICY_GROUPS.map((group, i) => (
              <Reveal key={group.title} delay={i * 40}>
                <details className="group rounded-3xl bg-white shadow-soft overflow-hidden">
                  <summary
                    className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-pine-900 transition hover:bg-lake-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lake-400 focus-visible:ring-inset"
                    aria-expanded="false"
                  >
                    <span className="font-semibold text-base">{group.title}</span>
                    {/* Chevron icon — rotates when open via group-open */}
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 text-lake-500 transition-transform duration-200 group-open:rotate-180"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                        className="transition-transform duration-200 group-open:rotate-180"
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="currentColor"
                          strokeWidth="1.75"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </summary>

                  <div className="px-6 pb-6 pt-2">
                    {group.intro && (
                      <p className="mb-4 text-sm text-pine-600 leading-relaxed bg-lake-50 rounded-2xl px-4 py-3">
                        {group.intro}
                      </p>
                    )}
                    <ul className="space-y-3" role="list">
                      {group.items.map((item) => (
                        <li key={item} className="flex gap-3 text-pine-700 text-sm leading-relaxed">
                          <span
                            aria-hidden="true"
                            className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-lake-400"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Footer note */}
      <Section tone="white" spacing="tight">
        <Container size="narrow">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
              <p className="text-pine-600 text-sm leading-relaxed max-w-xl">
                Policies are subject to change. Contact the marina office with any questions or to
                request a copy of the full Berthing Agreement.
              </p>
              <Link href="/contact" className="btn-secondary flex-shrink-0">
                Contact us
              </Link>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
