import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, HOURS, SOCIAL } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Contact & Directions",
  description:
    "Contact Lake Sonoma Marina — phone, email, address, hours, and directions to 4200 Skaggs Springs Road, Geyserville, CA.",
  path: "/contact",
});

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-lake-900">Contact &amp; Directions</h1>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-bold text-lake-900">Get in touch</h2>
          <address className="mt-3 not-italic text-pine-900">
            <p className="font-semibold">{SITE.name}</p>
            <p>{SITE.address.full}</p>
            <p className="mt-2">
              Phone:{" "}
              <a href={SITE.phoneHref} className="font-semibold text-lake-700 hover:underline">{SITE.phone}</a>
            </p>
            <p>
              Email:{" "}
              <a href={`mailto:${SITE.email}`} className="font-semibold text-lake-700 hover:underline">{SITE.email}</a>
            </p>
          </address>

          <h2 className="mt-6 text-lg font-bold text-lake-900">Hours</h2>
          <ul className="mt-2 text-pine-900">
            {HOURS.map((h) => (
              <li key={h.season}><span className="font-semibold">{h.season}:</span> {h.value}</li>
            ))}
          </ul>

          <h2 className="mt-6 text-lg font-bold text-lake-900">Follow us</h2>
          <ul className="mt-2 flex gap-4 text-lake-700">
            <li><a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Facebook</a></li>
            <li><a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">Instagram</a></li>
            <li><a href={SOCIAL.tripadvisor} target="_blank" rel="noopener noreferrer" className="font-semibold hover:underline">TripAdvisor</a></li>
          </ul>
        </div>

        <div>
          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-lake-100">
            <iframe
              title="Map to Lake Sonoma Marina"
              src={mapSrc}
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
