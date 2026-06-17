import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "Forms & Agreements",
  description:
    "Rental and berthing forms and agreements for Lake Sonoma Marina. Contact us to receive the documents you need.",
  path: "/forms",
});

/**
 * TODO (owner): add direct links/PDFs for each real form (rental agreement,
 * berthing agreement, liability waiver, etc.). Until then this routes people to
 * contact so nothing links to a dead/placeholder file.
 */
export default function FormsPage() {
  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-lake-900">Forms &amp; Agreements</h1>
      <p className="mt-2 max-w-2xl text-pine-700">
        Rental and berthing agreements are completed at check-in or provided on request. If you
        need a document in advance, reach out and we&apos;ll send it over.
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <a href={SITE.phoneHref} className="btn-primary">Call {SITE.phone}</a>
        <a href={`mailto:${SITE.email}?subject=Forms%20request`} className="btn-secondary">
          Request a form
        </a>
        <Link href="/storage" className="btn-secondary">Storage &amp; berthing</Link>
      </div>
    </div>
  );
}
