import Link from "next/link";
import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, BILLING_OFFICE } from "@/data/site";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = pageMeta({
  title: "Forms & Agreements — Lake Sonoma Marina",
  description:
    "Rental and berthing forms and agreements for Lake Sonoma Marina. Request documents by phone or email — contact us and we'll send what you need.",
  path: "/forms",
});

/**
 * TODO (owner): replace the "Request form" list items with direct PDF links
 * once documents are hosted. Until then, all CTAs route to phone/email so
 * nothing links to a dead file.
 */
const FORM_GROUPS = [
  {
    id: "rental",
    heading: "Rental Agreements",
    description:
      "Rental agreements and liability waivers are signed at the dock during check-in. If you'd like a copy in advance — for review, a group leader, or a school group — contact us and we'll email it over.",
    forms: [
      { label: "Boat Rental Agreement", note: "Signed at check-in" },
      { label: "Liability & Assumption of Risk Waiver", note: "Signed at check-in" },
      { label: "Read On Sonoma Reward Redemption Form", note: "Request via email" },
    ],
    cta: { label: "Request rental documents", subject: "Rental%20forms%20request" },
  },
  {
    id: "berthing",
    heading: "Berthing & Storage Agreements",
    description:
      "To reserve a slip or dry-storage space, you'll need to complete a Seasonal or Annual Berthing Agreement along with the Membership Fee deposit. Request the packet below and we'll walk you through it.",
    forms: [
      { label: "Seasonal Berthing Agreement (6-month minimum)", note: "Request from marina office" },
      { label: "Annual Berthing Agreement (12-month minimum)", note: "Request from marina office" },
      { label: "Short-Term / Month-to-Month Agreement", note: "Request from marina office" },
      { label: "Membership Fee Schedule", note: "Ask staff for current rates" },
      { label: "Proof of Insurance (required at signing & renewal)", note: "Provide at check-in" },
    ],
    cta: { label: "Request berthing packet", subject: "Berthing%20agreement%20request" },
  },
  {
    id: "contractor",
    heading: "Contractor & Maintenance Authorization",
    description:
      "Outside contractors must be approved by Marina management before performing any work dockside. All contractors are required to carry insurance. Contact the office to begin the authorization process.",
    forms: [
      { label: "Outside Contractor Authorization Form", note: "Contact marina office" },
      { label: "Contractor Insurance Verification", note: "Submitted by contractor" },
    ],
    cta: { label: "Authorize a contractor", subject: "Contractor%20authorization%20request" },
  },
];

export default function FormsPage() {
  return (
    <>
      {/* ── Page header (no Hero — use Section with headerOffset) ── */}
      <Section tone="pine" spacing="default" headerOffset>
        <Reveal>
          <p className="eyebrow !text-sand-300">Documents & Paperwork</p>
          <h1 className="mt-2 text-display-lg font-medium text-white">
            Forms &amp; Agreements
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-sand-200">
            Rental and berthing agreements are completed at check-in or
            provided on request. If you need a document in advance, reach out
            and we&apos;ll send it over.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={SITE.phoneHref} className="btn-ghost-light">
              Call {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}?subject=Forms%20request`}
              className="btn-ghost-light"
            >
              Email a request
            </a>
          </div>
        </Reveal>
      </Section>

      {/* ── Form groups ──────────────────────────────────────────── */}
      <Section tone="white" spacing="loose" id="documents">
        <div className="space-y-16">
          {FORM_GROUPS.map((group, gi) => (
            <Reveal key={group.id} delay={gi * 80}>
              <article
                className="grid gap-8 lg:grid-cols-[1fr_2fr]"
                aria-labelledby={`${group.id}-heading`}
              >
                {/* Left: description + CTA */}
                <div>
                  <p className="eyebrow">{group.id === "rental" ? "Rentals" : group.id === "berthing" ? "Berthing & Storage" : "Contractors"}</p>
                  <h2
                    id={`${group.id}-heading`}
                    className="mt-2 text-display-sm font-medium text-pine-900"
                  >
                    {group.heading}
                  </h2>
                  <p className="mt-3 leading-relaxed text-pine-700">
                    {group.description}
                  </p>
                  <a
                    href={`mailto:${SITE.email}?subject=${group.cta.subject}`}
                    className="btn-primary mt-5 inline-flex"
                  >
                    {group.cta.label}
                  </a>
                </div>

                {/* Right: form list */}
                <div className="rounded-4xl bg-sand-50 p-7 shadow-soft">
                  <p className="text-sm font-semibold uppercase tracking-wider text-pine-500">
                    Documents in this group
                  </p>
                  <ul className="mt-4 space-y-3" aria-label={`${group.heading} documents`}>
                    {group.forms.map((form) => (
                      <li
                        key={form.label}
                        className="flex items-start justify-between gap-4 rounded-2xl bg-white px-5 py-3 shadow-soft"
                      >
                        <span className="font-medium text-pine-900">
                          {form.label}
                        </span>
                        <span className="flex-shrink-0 rounded-full bg-lake-50 px-3 py-0.5 text-xs font-semibold text-lake-700">
                          {form.note}
                        </span>
                      </li>
                    ))}
                  </ul>
                  {/* TODO (owner): replace badge text with <a href="..."> once PDFs are hosted */}
                  <p className="mt-4 text-xs text-pine-400">
                    PDF links will be added once documents are published online.
                    Until then, request by phone or email.
                  </p>
                </div>
              </article>

              {gi < FORM_GROUPS.length - 1 && (
                <hr className="mt-16 border-sand-100" />
              )}
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ── Contact + Billing office ──────────────────────────────── */}
      <Section tone="sand" spacing="default" id="contact-for-forms">
        <div className="grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-4xl bg-pine-900 p-8 text-sand-50 shadow-lift">
              <p className="eyebrow !text-sand-300">Get in Touch</p>
              <h2 className="mt-2 text-display-sm font-medium text-white">
                Need a form fast?
              </h2>
              <p className="mt-3 text-sand-200">
                Call or email the marina — we can have any document to you
                within the hour on a business day.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={SITE.phoneHref} className="btn-ghost-light">
                  {SITE.phone}
                </a>
                <a
                  href={`mailto:${SITE.email}?subject=Forms%20request`}
                  className="btn-ghost-light"
                >
                  {SITE.email}
                </a>
              </div>
              <address className="mt-6 not-italic border-t border-white/10 pt-6 text-sm text-sand-300">
                {SITE.address.full}
              </address>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-4xl bg-white p-8 shadow-card">
              <p className="eyebrow">Billing Inquiries</p>
              <h3 className="mt-2 text-display-sm font-medium text-pine-900">
                {BILLING_OFFICE.name}
              </h3>
              <p className="mt-2 text-sm text-pine-600">
                For questions about slip rental invoices, payments, or membership
                billing — contact the billing office directly.
              </p>
              <address className="mt-4 not-italic space-y-1 text-pine-800">
                <p className="text-sm">{BILLING_OFFICE.location}:</p>
                <p>{BILLING_OFFICE.address}</p>
                <p>
                  <a
                    href={BILLING_OFFICE.phoneHref}
                    className="font-semibold text-lake-700 hover:underline"
                  >
                    {BILLING_OFFICE.phone}
                  </a>
                </p>
              </address>
              <p className="mt-4 text-sm leading-relaxed text-pine-600">
                {BILLING_OFFICE.note}
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/storage"
              className="font-semibold text-lake-700 hover:underline"
            >
              Storage &amp; berthing overview →
            </Link>
            <Link
              href="/policies"
              className="font-semibold text-lake-700 hover:underline"
            >
              Full marina policies →
            </Link>
            <Link
              href="/contact"
              className="font-semibold text-lake-700 hover:underline"
            >
              Contact form →
            </Link>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
