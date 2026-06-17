import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Boat Storage & HydroHoist Lift",
  description:
    "Boat storage, HydroHoist boat lift, and berthing at Lake Sonoma Marina. Contact us about availability and required forms.",
  path: "/storage",
});

export default function StoragePage() {
  return (
    <div className="container-page py-12">
      <header className="max-w-2xl">
        <h1 className="text-3xl font-extrabold text-lake-900">Boat Storage &amp; Berthing</h1>
        <p className="mt-2 text-pine-700">
          Keep your boat on the water all season. We offer slip berthing, dry storage, and
          HydroHoist boat lifts at Lake Sonoma Marina.
        </p>
      </header>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <section className="card p-5">
          <h2 className="text-lg font-bold text-lake-900">Berthing &amp; slips</h2>
          <p className="mt-2 text-sm text-pine-900/90">
            Seasonal and longer-term berthing options to keep your boat ready whenever you are.
          </p>
        </section>
        <section className="card p-5">
          <h2 className="text-lg font-bold text-lake-900">HydroHoist boat lift</h2>
          <p className="mt-2 text-sm text-pine-900/90">
            Protect your hull and make launching effortless with a HydroHoist lift in your slip.
          </p>
        </section>
        <section className="card p-5">
          <h2 className="text-lg font-bold text-lake-900">Dry storage</h2>
          <p className="mt-2 text-sm text-pine-900/90">
            Secure on-site storage options. Availability varies by season — reach out for current
            openings.
          </p>
        </section>
      </div>

      <section className="mt-10 rounded-2xl bg-lake-50 p-6">
        <h2 className="text-xl font-bold text-lake-900">Ask about availability</h2>
        <p className="mt-2 max-w-2xl text-pine-900/90">
          To reserve a slip or trailer storage, submit a Seasonal or Annual Berthing Agreement
          along with the corresponding Membership Fee as a deposit. Tell us what you&apos;re looking
          for and we&apos;ll follow up.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href={SITE.phoneHref} className="btn-primary">Call {SITE.phone}</a>
          <a href={`mailto:${SITE.email}?subject=Boat%20storage%20inquiry`} className="btn-secondary">
            Email us
          </a>
          <Link href="/forms" className="btn-secondary">Forms &amp; Agreements</Link>
        </div>
      </section>
    </div>
  );
}
