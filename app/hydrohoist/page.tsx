import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { HYDROHOIST } from "@/data/content";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMeta({
  title: "HydroHoist Boat Lift — Lake Sonoma Marina",
  description:
    "Lake Sonoma Marina is a proud supplier of HydroHoist Boat Lifts. Keep your boat out of the water and ready to launch. Call the billing office for pricing.",
  path: "/hydrohoist",
});

const BENEFITS = [
  {
    title: "Protect your hull",
    body: "Keeping your boat lifted out of the water prevents algae and growth on the hull and reduces corrosion and wear.",
  },
  {
    title: "Ready in seconds",
    body: "Lower, launch, and lift back out without trailering — your boat stays at the slip and ready to go.",
  },
  {
    title: "Bought through the marina",
    body: "Purchase your HydroHoist lift directly through Lake Sonoma Marina, with local support right here on the water.",
  },
];

export default function HydroHoistPage() {
  return (
    <>
      <Hero
        image="marina-docks"
        eyebrow="At the Marina"
        title="HydroHoist Boat Lifts"
        subtitle="Lake Sonoma Marina is now a proud supplier of HydroHoist Boat Lifts."
        height="medium"
      >
        <a href={HYDROHOIST.phoneHref} className="btn-ghost-light">
          Call {HYDROHOIST.phone}
        </a>
      </Hero>

      <Section tone="white" spacing="default">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <Reveal>
            <p className="eyebrow">{HYDROHOIST.heading}</p>
            <h2 className="mt-2 text-display-md font-medium text-pine-900">
              Keep your boat lifted, protected, and ready
            </h2>
            <p className="mt-4 max-w-prose text-lg leading-relaxed text-pine-700">{HYDROHOIST.body}</p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {BENEFITS.map((b) => (
                <div key={b.title}>
                  <h3 className="text-base font-semibold text-pine-900">{b.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-pine-600">{b.body}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-4xl bg-pine-900 p-8 text-sand-50 shadow-lift">
              <p className="eyebrow !text-sand-300">Pricing & Info</p>
              <h3 className="mt-2 text-display-sm font-medium text-white">Interested in a lift?</h3>
              <p className="mt-3 text-sand-200">{HYDROHOIST.cta}</p>
              <a href={HYDROHOIST.phoneHref} className="btn-ghost-light mt-6">
                {HYDROHOIST.phone}
              </a>
              <p className="mt-6 border-t border-white/10 pt-6 text-sm text-sand-300">
                Already store a boat with us?{" "}
                <Link href="/storage" className="font-semibold text-white hover:underline">
                  See storage & berthing →
                </Link>
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
