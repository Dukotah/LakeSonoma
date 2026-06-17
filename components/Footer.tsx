import Link from "next/link";
import { SITE, SOCIAL, HOURS, NAV } from "@/data/site";
import { DAY_USE_FEES } from "@/data/marina";

/**
 * Editorial multi-column footer. Pulls every value from the verified data files
 * (SITE, SOCIAL, HOURS, NAV, DAY_USE_FEES) and renders the copyright year live
 * via getFullYear() so it never goes stale.
 */
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-pine-950 text-pine-200">
      <div className="mx-auto w-full max-w-content px-5 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          {/* Brand + contact */}
          <div>
            <h2 className="font-serif text-2xl font-medium text-white">{SITE.name}</h2>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-pine-300">{SITE.tagline}</p>
            <address className="mt-5 not-italic text-sm leading-relaxed text-pine-300">
              {SITE.address.street}
              <br />
              {SITE.address.city}, {SITE.address.region} {SITE.address.postalCode}
              <br />
              <a href={SITE.phoneHref} className="mt-2 inline-block text-pine-100 hover:text-white">
                {SITE.phone}
              </a>
              <br />
              <a href={`mailto:${SITE.email}`} className="text-pine-100 hover:text-white">
                {SITE.email}
              </a>
            </address>
          </div>

          {/* Explore */}
          <nav aria-label="Footer">
            <h3 className="text-eyebrow font-semibold uppercase text-sand-300">Explore</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-pine-300 transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/forms" className="text-pine-300 transition-colors hover:text-white">
                  Forms &amp; Agreements
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hours & day-use */}
          <div>
            <h3 className="text-eyebrow font-semibold uppercase text-sand-300">Hours &amp; Day-Use</h3>
            <ul className="mt-4 space-y-1.5 text-sm text-pine-300">
              {HOURS.map((h) => (
                <li key={h.season}>
                  <span className="font-medium text-white">{h.season}:</span> {h.value}
                </li>
              ))}
            </ul>
            <ul className="mt-4 space-y-1.5 text-sm text-pine-300">
              {DAY_USE_FEES.map((f) => (
                <li key={f.label}>
                  {f.label}: <span className="text-pine-100">${f.amount}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h3 className="text-eyebrow font-semibold uppercase text-sand-300">Follow</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={SOCIAL.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pine-300 transition-colors hover:text-white"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pine-300 transition-colors hover:text-white"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href={SOCIAL.tripadvisor}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pine-300 transition-colors hover:text-white"
                >
                  TripAdvisor
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-pine-800">
        <div className="mx-auto flex w-full max-w-content flex-col gap-2 px-5 py-5 text-xs text-pine-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Bookings &amp; payments processed securely via Singenuity.</p>
        </div>
      </div>
    </footer>
  );
}
