import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, HOURS } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "About",
  description:
    "Lake Sonoma Marina is your home base for boat rentals, lakeside patios, and boat storage on beautiful Lake Sonoma in Geyserville, California.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-lake-900">About Lake Sonoma Marina</h1>
      <div className="mt-4 max-w-3xl space-y-4 text-pine-900/90">
        <p>
          Tucked into the hills above Healdsburg, Lake Sonoma is one of the North Bay&apos;s most
          beautiful places to get out on the water. From our marina in Geyserville, we make a day
          on the lake easy — whether you want to cruise on a pontoon, chase bass on a fishing boat,
          carve the water on a jet ski, or simply paddle a quiet cove.
        </p>
        <p>
          We rent boats and paddle craft for every kind of group, offer reservable lakeside patios
          for picnics and gatherings, and provide boat storage and berthing so regulars can keep
          their boat ready all season.
        </p>
      </div>

      <section className="mt-8 rounded-2xl bg-lake-50 p-6">
        <h2 className="text-xl font-bold text-lake-900">Visit us</h2>
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
      </section>
    </div>
  );
}
