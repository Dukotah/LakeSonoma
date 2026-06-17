import Link from "next/link";
import type { Metadata } from "next";
import { PATIOS, DAY_USE_FEES } from "@/data/marina";
import { ProductCard } from "@/components/ProductCard";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Patios & Day-Use Reservations",
  description:
    "Reserve a lakeside patio for the day at Lake Sonoma Marina, or learn about launch ramp, hand launch, and parking day-use fees.",
  path: "/patios",
});

export default function PatiosPage() {
  return (
    <div className="container-page py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-extrabold text-lake-900">Patios &amp; Day-Use</h1>
        <p className="mt-2 text-pine-700">
          Reserve a patio for your group, or just come for the day. Reservable patios book on
          the same secure platform as our boats — each link takes you straight to that patio&apos;s
          calendar.
        </p>
      </header>

      <section className="mt-8" aria-labelledby="reservable">
        <h2 id="reservable" className="text-2xl font-bold text-lake-900">Reservable patios</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PATIOS.map((p) => (
            <ProductCard key={p.singenuityId} product={p} />
          ))}
        </div>
      </section>

      <section className="mt-12 rounded-2xl bg-sand-50 p-6" aria-labelledby="dayuse">
        <h2 id="dayuse" className="text-xl font-bold text-lake-900">Day-use fees</h2>
        <ul className="mt-3 grid gap-2 sm:grid-cols-3">
          {DAY_USE_FEES.map((f) => (
            <li key={f.label} className="flex items-baseline justify-between rounded-lg bg-white p-3">
              <span className="text-pine-900">{f.label}</span>
              <span className="text-lg font-bold text-lake-800">${f.amount}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-pine-700">
          Questions about day-use or large groups? Call{" "}
          <a href={SITE.phoneHref} className="font-semibold text-lake-700 hover:underline">{SITE.phone}</a>{" "}
          or <Link href="/contact" className="font-semibold text-lake-700 hover:underline">contact us</Link>.
        </p>
      </section>
    </div>
  );
}
