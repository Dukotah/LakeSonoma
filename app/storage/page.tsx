import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, BILLING_OFFICE } from "@/data/site";
import { POLICY_GROUPS, STORAGE } from "@/data/content";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMeta({
  title: "Boat Storage & Berthing — Lake Sonoma Marina",
  description:
    "Slip berthing, dry storage, and HydroHoist boat lift at Lake Sonoma Marina. Seasonal and annual berthing agreements. Contact us about availability.",
  path: "/storage",
});

// Pull only slip & membership policy groups from the verified content source.
const SLIP_POLICY = POLICY_GROUPS.find((g) => g.title === "Slip Holder Policies");
const MEMBERSHIP_POLICY = POLICY_GROUPS.find((g) => g.title === "Membership");

const STORAGE_OPTIONS = [
  {
    id: "slips",
    eyebrow: "Wet Storage",
    heading: "Slip Berthing",
    price: "Billed monthly by length",
    body: "Keep your boat in the water, ready to launch the moment you arrive. Covered and uncovered slips, charged by boat length or slip length (whichever is greater). Choose seasonal or annual berthing — returning members keep first right to their prior slip.",
    details: [
      "Seasonal berthing — minimum 6 consecutive months",
      "Annual berthing — minimum 12 consecutive months",
      "Marina store discount + lakeside parking with seasonal/annual terms",
      "Membership Fee deposit required with Berthing Agreement",
      "Payments due before the 10th of each month",
    ],
  },
  {
    id: "dry-storage",
    eyebrow: "Dry Storage",
    heading: "Dry Boat Storage",
    price: "Monthly",
    body: "On-site dry storage for your boat on a month-to-month basis — close at hand and easy to launch when you visit.",
    details: [
      "On-site secured storage area",
      "Month-to-month basis",
      "Easy access for self-launch on a day-use visit",
    ],
  },
  {
    id: "trailer-storage",
    eyebrow: "Trailer Storage",
    heading: "Trailer Storage",
    price: "$85 / month",
    body: "Leave the trailer with us and travel light. On-site trailer storage on a simple month-to-month basis.",
    details: ["On-site trailer storage", "Month-to-month basis", "$85 per month"],
  },
];

export default function StoragePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <Hero
        image="policies-bg"
        eyebrow="Boat Storage"
        height="medium"
        title="Your boat at home on the lake."
        subtitle="Slip berthing, dry storage, and HydroHoist boat lifts — everything you need to keep your boat at Lake Sonoma, ready whenever you are."
      >
        <a href="#inquiry" className="btn-ghost-light">
          Ask about availability
        </a>
        <Link href="/forms" className="btn-ghost-light">
          Forms &amp; agreements
        </Link>
      </Hero>

      {/* ── Slip & dry storage options ───────────────────────────── */}
      <Section tone="white" spacing="loose" id="storage-options">
        <Reveal>
          <p className="eyebrow">Storage Options</p>
          <h2 className="mt-2 text-display-md font-medium">
            Choose how you store
          </h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pine-700">
            Whether you want your boat floating in a slip or trailered on dry
            land, we have a storage solution for your season.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {STORAGE_OPTIONS.map((opt, i) => (
            <Reveal key={opt.id} delay={i * 100}>
              <article
                className="flex h-full flex-col rounded-4xl bg-sand-50 p-8 shadow-card"
                aria-labelledby={`${opt.id}-heading`}
              >
                <p className="eyebrow">{opt.eyebrow}</p>
                <h3
                  id={`${opt.id}-heading`}
                  className="mt-2 text-display-sm font-medium text-pine-900"
                >
                  {opt.heading}
                </h3>
                <p className="mt-1 text-sm font-semibold text-lake-700">{opt.price}</p>
                <p className="mt-3 leading-relaxed text-pine-700">{opt.body}</p>
                <ul className="mt-5 flex-1 space-y-2" aria-label={`${opt.heading} details`}>
                  {opt.details.map((d) => (
                    <li key={d} className="flex items-start gap-3 text-sm text-pine-800">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-lake-100 text-lake-700 text-xs font-bold"
                      >
                        ✓
                      </span>
                      {d}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Fees & terms ─────────────────────────────────────────── */}
      <Section tone="sand" spacing="default" id="storage-terms">
        <Reveal>
          <div className="rounded-4xl bg-white p-8 shadow-soft">
            <p className="eyebrow">Fees &amp; Terms</p>
            <h2 className="mt-2 text-display-sm font-medium text-pine-900">
              Good to know before you reserve
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {STORAGE.terms.map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-pine-800">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-lake-100 text-xs font-bold text-lake-700"
                  >
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-sm text-pine-600">
              Agreements &amp; payment go to the billing office:{" "}
              <a href={`mailto:${STORAGE.contact.email}`} className="font-semibold text-lake-700 hover:underline">
                {STORAGE.contact.email}
              </a>{" "}
              ·{" "}
              <a href={STORAGE.contact.phoneHref} className="font-semibold text-lake-700 hover:underline">
                {STORAGE.contact.phone}
              </a>
              . Download agreements on the{" "}
              <Link href="/forms" className="font-semibold text-lake-700 hover:underline">
                Forms &amp; Agreements
              </Link>{" "}
              page.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* ── HydroHoist boat lift ─────────────────────────────────── */}
      <Section tone="sand" spacing="default" id="hydrohoist">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <p className="eyebrow">Boat Lifts</p>
            <h2 className="mt-2 text-display-md font-medium">
              HydroHoist Boat Lift
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-pine-700">
              Protect your hull from fouling, corrosion, and waterline staining
              with a HydroHoist boat lift installed in your slip. HydroHoist
              lifts hold the boat safely above the waterline when not in use —
              so you lower into the water only when you&apos;re ready to run.
            </p>
            <p className="mt-4 leading-relaxed text-pine-700">
              Launching and docking become effortless: pull up, tie off, and the
              lift does the rest. Many slip holders consider a lift the single
              best upgrade for protecting a boat kept in a fresh-water slip.
            </p>
            <p className="mt-4 text-sm text-pine-600">
              HydroHoist lift availability and sizing varies by slip. Contact
              the marina office to confirm fit and current inventory.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/hydrohoist" className="btn-primary">
                HydroHoist details
              </Link>
              <a href={SITE.phoneHref} className="btn-secondary">
                Call {SITE.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="space-y-4 rounded-4xl bg-white p-8 shadow-card">
              <h3 className="text-lg font-semibold text-pine-900">
                Why HydroHoist?
              </h3>
              {[
                {
                  title: "Hull protection",
                  desc: "Keeps the hull above the waterline to prevent algae, zebra mussel, and corrosion build-up.",
                },
                {
                  title: "Effortless launching",
                  desc: "Lower the boat hydraulically in seconds — no ramp wait, no manual effort.",
                },
                {
                  title: "Reduced maintenance",
                  desc: "Less time scrubbing the bottom means more time on the water and lower annual haul-out costs.",
                },
                {
                  title: "Dock security",
                  desc: "A lifted boat sits stable in the slip and is less exposed to surge and dock rub.",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`pb-4 ${i < 3 ? "border-b border-sand-100" : ""}`}
                >
                  <p className="font-semibold text-pine-900">{item.title}</p>
                  <p className="mt-1 text-sm text-pine-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ── How to reserve / Berthing Agreement ─────────────────── */}
      <Section tone="lake" spacing="default" id="how-to-reserve">
        <Reveal>
          <p className="eyebrow">Reserving a Slip</p>
          <h2 className="mt-2 text-display-md font-medium">
            How berthing agreements work
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {[
            {
              step: "01",
              heading: "Check availability",
              body: "Call the marina or send an email to find out what slip sizes are currently open for your desired term.",
            },
            {
              step: "02",
              heading: "Sign the Berthing Agreement",
              body: "Complete a Seasonal or Annual Berthing Agreement — request the form from the marina office or ask us to send it via email.",
            },
            {
              step: "03",
              heading: "Submit Membership Fee deposit",
              body: "A one-time, non-transferable Membership Fee is required to activate the agreement. Returning seasonal members retain priority for their prior slip.",
            },
          ].map((item, i) => (
            <Reveal key={item.step} delay={i * 100}>
              <div className="rounded-4xl bg-white/70 p-7 shadow-soft backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="text-4xl font-serif font-medium text-lake-200"
                >
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-pine-900">
                  {item.heading}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-pine-700">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {MEMBERSHIP_POLICY && (
          <Reveal delay={300}>
            <div className="mt-10 rounded-4xl bg-white/70 p-7 shadow-soft backdrop-blur-sm">
              <h3 className="font-semibold text-pine-900">
                Membership tiers at a glance
              </h3>
              {MEMBERSHIP_POLICY.intro && (
                <p className="mt-2 text-sm text-pine-700">
                  {MEMBERSHIP_POLICY.intro}
                </p>
              )}
              <ul className="mt-4 space-y-2">
                {MEMBERSHIP_POLICY.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-pine-800"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-lake-100 text-lake-700 text-xs font-bold"
                    >
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-pine-600">
                Rates are subject to change without notice. Contact us for
                current pricing.
              </p>
            </div>
          </Reveal>
        )}
      </Section>

      {/* ── Slip holder conduct / policies ──────────────────────── */}
      {SLIP_POLICY && (
        <Section tone="white" spacing="default" id="slip-policies">
          <Reveal>
            <p className="eyebrow">Marina Rules</p>
            <h2 className="mt-2 text-display-md font-medium">
              Slip holder policies
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-pine-700">
              All slip holders are expected to follow marina rules to keep the
              facility safe and enjoyable for everyone.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {SLIP_POLICY.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-sand-50 p-4 text-sm text-pine-800"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-lake-100 text-lake-700 text-xs font-bold"
                  >
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={240}>
            <p className="mt-6 text-sm text-pine-600">
              Full rules and regulations are provided in your Berthing Agreement
              packet.{" "}
              <Link
                href="/policies"
                className="font-semibold text-lake-700 hover:underline"
              >
                View all marina policies →
              </Link>
            </p>
          </Reveal>
        </Section>
      )}

      {/* ── Inquiry CTA + Billing office ─────────────────────────── */}
      <Section tone="sand" spacing="default" id="inquiry">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-4xl bg-pine-900 p-8 text-sand-50 shadow-lift">
              <p className="eyebrow !text-sand-300">Ask About Availability</p>
              <h2 className="mt-2 text-display-sm font-medium text-white">
                Ready to keep your boat at Lake Sonoma?
              </h2>
              <p className="mt-3 text-sand-200">
                Slip and dry-storage openings fill quickly, especially for the
                summer season. Reach out early to secure your spot.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={SITE.phoneHref} className="btn-ghost-light">
                  Call {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Boat%20storage%20inquiry`}
                  className="btn-ghost-light"
                >
                  Email us
                </a>
              </div>
              <div className="mt-6 border-t border-white/10 pt-6 text-sm text-sand-300">
                <p className="font-semibold text-sand-200">Marina address:</p>
                <address className="mt-1 not-italic">{SITE.address.full}</address>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link
                  href="/forms"
                  className="font-semibold text-lake-300 hover:text-lake-200 hover:underline"
                >
                  Forms &amp; agreements →
                </Link>
                <Link
                  href="/policies"
                  className="font-semibold text-lake-300 hover:text-lake-200 hover:underline"
                >
                  Marina policies →
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-4xl bg-white p-8 shadow-card">
              <p className="eyebrow">Billing Inquiries</p>
              <h3 className="mt-2 text-display-sm font-medium text-pine-900">
                {BILLING_OFFICE.name}
              </h3>
              <p className="mt-2 text-sm text-pine-600">
                Located in {BILLING_OFFICE.location}
              </p>
              <address className="mt-3 not-italic space-y-1 text-pine-800">
                <p>{BILLING_OFFICE.address}</p>
                <p>
                  <a
                    href={BILLING_OFFICE.phoneHref}
                    className="font-semibold text-lake-700 hover:underline"
                  >
                    {BILLING_OFFICE.phone}
                  </a>
                </p>
              </address>
              <p className="mt-4 text-sm leading-relaxed text-pine-600">
                {BILLING_OFFICE.note}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
