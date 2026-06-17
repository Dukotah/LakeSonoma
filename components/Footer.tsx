import Link from "next/link";
import { SITE, SOCIAL, HOURS, NAV } from "@/data/site";
import { DAY_USE_FEES } from "@/data/marina";

export function Footer() {
  // Dynamic year — fixes the old site's footer stuck on 2020.
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 border-t border-lake-100 bg-lake-950 text-lake-100">
      <div className="container-page grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="flex items-center gap-2 text-lg font-bold text-white">
            <span aria-hidden="true">⛵</span> Lake Sonoma Marina
          </h2>
          <address className="mt-3 not-italic text-sm leading-relaxed text-lake-200">
            {SITE.address.street}
            <br />
            {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
            <br />
            <a href={SITE.phoneHref} className="hover:text-white">{SITE.phone}</a>
            <br />
            <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
          </address>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-lake-300">Explore</h3>
          <ul className="mt-3 space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-lake-200 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/forms" className="text-lake-200 hover:text-white">Forms &amp; Agreements</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-lake-300">Hours &amp; Day-Use</h3>
          <ul className="mt-3 space-y-1 text-sm text-lake-200">
            {HOURS.map((h) => (
              <li key={h.season}>
                <span className="font-medium text-white">{h.season}:</span> {h.value}
              </li>
            ))}
          </ul>
          <ul className="mt-3 space-y-1 text-sm text-lake-200">
            {DAY_USE_FEES.map((f) => (
              <li key={f.label}>{f.label}: ${f.amount}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-lake-300">Follow</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" className="text-lake-200 hover:text-white">Facebook</a></li>
            <li><a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="text-lake-200 hover:text-white">Instagram</a></li>
            <li><a href={SOCIAL.tripadvisor} target="_blank" rel="noopener noreferrer" className="text-lake-200 hover:text-white">TripAdvisor</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-lake-800">
        <div className="container-page flex flex-col gap-2 py-4 text-xs text-lake-300 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Lake Sonoma Marina. All rights reserved.</p>
          <p>Bookings &amp; payments processed securely via Singenuity.</p>
        </div>
      </div>
    </footer>
  );
}
