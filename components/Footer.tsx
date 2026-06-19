import Link from "next/link";
import { SITE, SOCIAL, HOURS, NAV } from "@/data/site";
import { DAY_USE_FEES } from "@/data/marina";
import { Logo } from "@/components/Logo";
import { NewsletterForm } from "@/components/NewsletterForm";

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
            <Logo tone="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-pine-300">{SITE.tagline}</p>
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

            <div className="mt-6 max-w-xs">
              <p className="text-eyebrow font-semibold uppercase text-sand-300">
                On-the-water updates
              </p>
              <p className="mt-2 text-sm text-pine-300">
                Seasonal hours, deals &amp; events — no spam.
              </p>
              <div className="mt-3">
                <NewsletterForm />
              </div>
            </div>
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
                <Link href="/pricing" className="text-pine-300 transition-colors hover:text-white">
                  Prices &amp; Rates
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-pine-300 transition-colors hover:text-white">
                  Lake Sonoma Guide
                </Link>
              </li>
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
            <div className="mt-4 flex gap-3">
              {[
                {
                  href: SOCIAL.facebook,
                  label: "Facebook",
                  path: "M22 12.06C22 6.5 17.52 2 11.94 2 6.36 2 1.88 6.5 1.88 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.78v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.78-3.9 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z",
                },
                {
                  href: SOCIAL.instagram,
                  label: "Instagram",
                  path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16Zm0 3.34A6.5 6.5 0 1 0 18.5 12 6.5 6.5 0 0 0 12 5.5Zm0 10.72A4.22 4.22 0 1 1 16.22 12 4.22 4.22 0 0 1 12 16.22ZM18.8 5.7a1.52 1.52 0 1 1-1.52-1.52A1.52 1.52 0 0 1 18.8 5.7Z",
                },
                {
                  href: SOCIAL.tripadvisor,
                  label: "TripAdvisor",
                  path: "M12 6.5c-2.6 0-5 .6-7.1 1.7H1l1.6 1.8a4 4 0 1 0 5.5 5.7c1 .9 1.9 1.8 1.9 1.8s.9-.9 1.9-1.8a4 4 0 1 0 5.5-5.7L23 8.2h-3.9C17 7.1 14.6 6.5 12 6.5Zm-5.5 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1.3a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Zm11 1.3a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Zm0-1.3a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4Z",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-pine-800 text-pine-200 transition-colors hover:bg-lake-600 hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-pine-800">
        <div className="mx-auto flex w-full max-w-content flex-col gap-2 px-5 py-5 text-xs text-pine-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/privacy" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
            <span>Bookings via Singenuity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
