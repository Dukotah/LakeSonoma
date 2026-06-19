import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, BILLING_OFFICE } from "@/data/site";
import { AGREEMENT_GROUPS } from "@/data/content";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMeta({
  title: "Forms & Agreements — Lake Sonoma Marina",
  description:
    "Download berthing, storage, ramp-pass, and day-use agreements for Lake Sonoma Marina. Annual Ramp Pass $450, Annual Day-Use Pass $250, trailer storage $85/mo.",
  path: "/forms",
});

export default function FormsPage() {
  return (
    <>
      {/* ── Page header ── */}
      <Section tone="pine" spacing="default" headerOffset>
        <Reveal>
          <p className="eyebrow !text-sand-300">Documents & Paperwork</p>
          <h1 className="mt-2 text-display-lg font-medium text-white">Forms &amp; Agreements</h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sand-200">
            Download the agreement you need, sign it, and submit it with payment to the
            marina. Berthing reservations require the Membership Fee deposit. Questions on
            billing? Call the billing office below.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={BILLING_OFFICE.phoneHref} className="btn-ghost-light">
              Billing office {BILLING_OFFICE.phone}
            </a>
            <a href={`mailto:billing@lakesonoma.com?subject=Forms%20request`} className="btn-ghost-light">
              billing@lakesonoma.com
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ── Agreement groups ── */}
      <Section tone="white" spacing="loose" id="documents">
        <div className="space-y-16">
          {AGREEMENT_GROUPS.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 60}>
              <article className="grid gap-8 lg:grid-cols-[1fr_2fr]" aria-labelledby={`${group.id}-heading`}>
                <div>
                  <h2 id={`${group.id}-heading`} className="text-display-sm font-medium text-pine-900">
                    {group.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-pine-700">{group.description}</p>
                </div>

                <ul className="space-y-4" aria-label={`${group.heading} documents`}>
                  {group.items.map((doc) => (
                    <li
                      key={doc.name}
                      className="rounded-3xl border border-sand-100 bg-sand-50 p-6 shadow-soft"
                    >
                      <div className="flex flex-wrap items-start justify-between gap-3">
                        <h3 className="text-lg font-semibold text-pine-900">{doc.name}</h3>
                        {doc.price && (
                          <span className="flex-shrink-0 rounded-full bg-lake-50 px-3 py-1 text-sm font-semibold text-lake-700">
                            {doc.price}
                          </span>
                        )}
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-pine-600">{doc.blurb}</p>
                      <div className="mt-4">
                        {doc.pdf ? (
                          <a
                            href={doc.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary px-5 py-2.5 text-sm"
                            aria-label={`Download ${doc.name} (PDF)`}
                          >
                            Download PDF
                            <span aria-hidden="true"> ↓</span>
                          </a>
                        ) : (
                          <p className="text-sm font-medium text-lake-700">{doc.via}</p>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </article>
              {gi < AGREEMENT_GROUPS.length - 1 && <hr className="mt-16 border-sand-100" />}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── How to submit + billing office ── */}
      <Section tone="sand" spacing="default" id="submit">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-4xl bg-pine-900 p-8 text-sand-50 shadow-lift">
              <p className="eyebrow !text-sand-300">How to submit</p>
              <h2 className="mt-2 text-display-sm font-medium text-white">Sending in your agreement</h2>
              <ol className="mt-4 space-y-2 text-sand-200">
                <li>1. Download and complete the agreement.</li>
                <li>2. Email the signed copy to billing@lakesonoma.com, or bring it to the Marina Store.</li>
                <li>3. Submit payment (and the Membership Fee deposit for berthing) to finalize.</li>
              </ol>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:billing@lakesonoma.com?subject=Signed%20agreement" className="btn-ghost-light">
                  Email signed agreement
                </a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-4xl bg-white p-8 shadow-card">
              <p className="eyebrow">Billing Inquiries</p>
              <h3 className="mt-2 text-display-sm font-medium text-pine-900">{BILLING_OFFICE.name}</h3>
              <p className="mt-2 text-sm text-pine-600">
                For questions about slip invoices, payments, or membership billing — contact the
                billing office directly.
              </p>
              <address className="mt-4 space-y-1 not-italic text-pine-800">
                <p className="text-sm">{BILLING_OFFICE.location}:</p>
                <p>{BILLING_OFFICE.address}</p>
                <p>
                  <a href={BILLING_OFFICE.phoneHref} className="font-semibold text-lake-700 hover:underline">
                    {BILLING_OFFICE.phone}
                  </a>
                </p>
              </address>
              <p className="mt-4 text-sm leading-relaxed text-pine-600">{BILLING_OFFICE.note}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/storage" className="font-semibold text-lake-700 hover:underline">
              Storage &amp; berthing overview →
            </Link>
            <Link href="/policies" className="font-semibold text-lake-700 hover:underline">
              Full marina policies →
            </Link>
            <Link href="/contact" className="font-semibold text-lake-700 hover:underline">
              Contact us →
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
