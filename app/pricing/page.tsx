import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta, breadcrumbJsonLd, JsonLd } from "@/lib/seo";
import {
  PRODUCTS,
  CATEGORY_LABELS,
  fromPrice,
  DAY_USE_FEES,
  EQUIPMENT_RENTALS,
  RENTAL_DISCLAIMERS,
  type Category,
} from "@/data/marina";
import { BookButton } from "@/components/BookButton";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMeta({
  title: "Rental Prices & Rates — Lake Sonoma Marina",
  description:
    "Boat rental, patio, day-use, and pass pricing at Lake Sonoma Marina. Pontoons from $350, jet skis from $150/hr, kayaks $50/hr, day-use fees, Annual Ramp Pass $450, Day-Use Pass $250.",
  path: "/pricing",
});

const ORDER: Category[] = ["pontoon", "watersport", "sport", "fishing", "jetski", "paddle", "patio"];

const PASSES = [
  { label: "Annual Ramp Pass", price: "$450 / yr", note: "Vehicle + trailer, one calendar year" },
  { label: "Annual Day-Use Pass", price: "$250 / yr", note: "Vehicle only, hand launch ok" },
  { label: "Trailer Storage", price: "$85 / mo", note: "Month-to-month" },
];

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />

      <Section tone="pine" spacing="default" headerOffset>
        <Reveal>
          <p className="eyebrow !text-sand-300">Rates</p>
          <h1 className="mt-2 text-display-lg font-medium text-white">Prices &amp; Rates</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sand-200">
            Transparent pricing for every rental, patio, and pass. Rates shown are the lowest
            available for each item; full-day and overnight options are available on request.
            Prices are subject to change — confirm at booking.
          </p>
        </Reveal>
      </Section>

      {/* Rentals by category */}
      <Section tone="white" spacing="default">
        <div className="space-y-12">
          {ORDER.map((cat) => {
            const items = PRODUCTS.filter((p) => p.category === cat);
            if (!items.length) return null;
            return (
              <Reveal key={cat}>
                <div>
                  <h2 className="text-display-sm font-medium text-pine-900">{CATEGORY_LABELS[cat]}</h2>
                  <div className="mt-4 overflow-x-auto rounded-3xl border border-sand-100">
                    <table className="w-full min-w-[480px] text-left text-sm">
                      <caption className="sr-only">
                        {CATEGORY_LABELS[cat]} rental prices at Lake Sonoma Marina
                      </caption>
                      <thead className="bg-sand-50 text-pine-500">
                        <tr>
                          <th scope="col" className="px-5 py-3 font-semibold">Rental</th>
                          <th scope="col" className="px-5 py-3 font-semibold">Capacity</th>
                          <th scope="col" className="px-5 py-3 font-semibold">From</th>
                          <th scope="col" className="px-5 py-3 font-semibold text-right">Book</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-sand-100">
                        {items.map((p) => {
                          const from = fromPrice(p);
                          const unit = p.pricing[0]?.label?.toLowerCase() ?? "";
                          return (
                            <tr key={p.singenuityId} className="bg-white">
                              <td className="px-5 py-3.5 font-medium text-pine-900">
                                <Link href={`/product/${p.slug}`} className="hover:text-lake-700">
                                  {p.name}
                                </Link>
                              </td>
                              <td className="px-5 py-3.5 text-pine-600">
                                {p.capacity ? `Up to ${p.capacity}` : "—"}
                              </td>
                              <td className="px-5 py-3.5 font-semibold text-lake-700">
                                {p.priceTBD || from === undefined ? (
                                  "Inquire"
                                ) : (
                                  <>
                                    ${from}
                                    <span className="font-normal text-pine-500"> / {unit}</span>
                                  </>
                                )}
                              </td>
                              <td className="px-5 py-3.5 text-right">
                                <BookButton
                                  singenuityId={p.singenuityId}
                                  bookByPhone={p.bookByPhone}
                                  label="Book"
                                  productName={p.name}
                                  className="btn-primary px-4 py-2 text-xs"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Equipment rentals + disclaimers */}
      <Section tone="white" spacing="default">
        <Reveal>
          <h2 className="text-display-sm font-medium text-pine-900">Equipment rentals</h2>
          <p className="mt-2 text-pine-600">Add tow toys and gear to your boat rental.</p>
          <div className="mt-4 overflow-x-auto rounded-3xl border border-sand-100">
            <table className="w-full min-w-[560px] text-left text-sm">
              <caption className="sr-only">Equipment rental prices at Lake Sonoma Marina</caption>
              <thead className="bg-sand-50 text-pine-500">
                <tr>
                  <th scope="col" className="px-5 py-3 font-semibold">Equipment</th>
                  <th scope="col" className="px-5 py-3 font-semibold">1 hr</th>
                  <th scope="col" className="px-5 py-3 font-semibold">4 hr</th>
                  <th scope="col" className="px-5 py-3 font-semibold">8 hr</th>
                  <th scope="col" className="px-5 py-3 font-semibold">24 hr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                {EQUIPMENT_RENTALS.map((e) => {
                  const amt = (label: string) =>
                    e.pricing.find((p) => p.label === label)?.amount;
                  return (
                    <tr key={e.name} className="bg-white">
                      <td className="px-5 py-3 font-medium text-pine-900">{e.name}</td>
                      {["1 hour", "4 hours", "8 hours", "24 hours"].map((l) => (
                        <td key={l} className="px-5 py-3 text-pine-700">
                          {amt(l) !== undefined ? `$${amt(l)}` : "—"}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 space-y-2 text-sm text-pine-600">
            {RENTAL_DISCLAIMERS.map((d) => (
              <li key={d} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-0.5 text-lake-600">
                  •
                </span>
                {d}
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {/* Day-use fees + passes */}
      <Section tone="sand" spacing="default">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-4xl bg-white p-8 shadow-card">
              <h2 className="text-display-sm font-medium text-pine-900">Day-use fees</h2>
              <ul className="mt-5 divide-y divide-sand-100">
                {DAY_USE_FEES.map((f) => (
                  <li key={f.label} className="flex items-center justify-between py-3">
                    <span className="text-pine-700">{f.label}</span>
                    <span className="font-semibold text-lake-700">${f.amount}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-4xl bg-white p-8 shadow-card">
              <h2 className="text-display-sm font-medium text-pine-900">Passes &amp; storage</h2>
              <ul className="mt-5 divide-y divide-sand-100">
                {PASSES.map((p) => (
                  <li key={p.label} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-pine-700">
                      {p.label}
                      <span className="block text-xs text-pine-400">{p.note}</span>
                    </span>
                    <span className="shrink-0 font-semibold text-lake-700">{p.price}</span>
                  </li>
                ))}
              </ul>
              <Link href="/forms" className="btn-secondary mt-6 inline-flex px-5 py-2.5 text-sm">
                Pass &amp; storage agreements →
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 rounded-4xl bg-pine-900 p-8 text-center text-sand-50 shadow-lift">
            <p className="eyebrow !text-sand-300">Official rate sheet</p>
            <h2 className="mt-2 text-display-sm font-medium text-white">2026 price sheet</h2>
            <p className="mx-auto mt-3 max-w-xl text-sand-200">
              Download the marina&apos;s full 2026 price sheet for every rate in one place.
            </p>
            <a
              href="/forms/2026-price-sheet.png"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost-light mt-6"
            >
              View 2026 price sheet ↗
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
