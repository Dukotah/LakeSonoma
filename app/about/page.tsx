import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, HOURS, BILLING_OFFICE, STORE_ITEMS, ABOUT_INTRO } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Lake Sonoma Marina — boat rentals, a full marina store & deli, gas and rental dock, and friendly staff on beautiful Lake Sonoma in Sonoma County.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-lake-900">About Lake Sonoma Marina</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-pine-900/90">{ABOUT_INTRO.body}</p>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <section className="card p-6">
          <h2 className="text-xl font-bold text-lake-900">Marina Store &amp; Deli</h2>
          <p className="mt-2 text-pine-900/90">
            The marina store is your one-stop shop for everything you need for a fun day on the lake!
          </p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-sm text-pine-900">
            {STORE_ITEMS.map((item) => (
              <li key={item} className="flex gap-2">
                <span aria-hidden="true" className="text-lake-600">✓</span> {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="card p-6">
          <h2 className="text-xl font-bold text-lake-900">Gas &amp; Rental Dock</h2>
          <p className="mt-2 text-pine-900/90">
            We offer a wide variety of boats for rental — patio boats, ski boats, fishing boats,
            canoes, kayaks, jet skis, and all the accessories to go with them.
          </p>
          <p className="mt-3 text-pine-900/90">
            Our dock employees will answer any questions and make sure your boating experience is as
            fun and safe as possible. At the gas pump, our dock hands greet you to make your fill-up
            quick and easy so you can be on your way.
          </p>
        </section>
      </div>

      <section className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl bg-lake-50 p-6">
          <h2 className="text-xl font-bold text-lake-900">Visit the marina</h2>
          <address className="mt-2 not-italic text-pine-900">
            {SITE.address.full}
            <br />
            <a href={SITE.phoneHref} className="font-semibold text-lake-700 hover:underline">{SITE.phone}</a>
          </address>
          <ul className="mt-3 text-sm text-pine-900">
            {HOURS.map((h) => (
              <li key={h.season}><span className="font-semibold">{h.season}:</span> {h.value}</li>
            ))}
          </ul>
          <Link href="/contact" className="mt-3 inline-block font-semibold text-lake-700 hover:underline">
            Directions &amp; contact →
          </Link>
        </div>

        <div className="rounded-2xl bg-sand-50 p-6">
          <h2 className="text-xl font-bold text-lake-900">{BILLING_OFFICE.name}</h2>
          <p className="mt-2 text-sm text-pine-700">
            Located in {BILLING_OFFICE.location}:
          </p>
          <address className="mt-1 not-italic text-pine-900">
            {BILLING_OFFICE.address}
            <br />
            <a href={BILLING_OFFICE.phoneHref} className="font-semibold text-lake-700 hover:underline">
              {BILLING_OFFICE.phone}
            </a>
          </address>
          <p className="mt-2 text-sm text-pine-700">{BILLING_OFFICE.note}</p>
        </div>
      </section>
    </div>
  );
}
