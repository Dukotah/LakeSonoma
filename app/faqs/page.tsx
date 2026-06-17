import type { Metadata } from "next";
import { pageMeta, JsonLd } from "@/lib/seo";
import { SITE, HOURS } from "@/data/site";
import { WHATS_INCLUDED, OPERATOR_RULES, CANCELLATION_POLICY, DAY_USE_FEES } from "@/data/marina";

export const metadata: Metadata = pageMeta({
  title: "FAQs",
  description:
    "Frequently asked questions about renting boats at Lake Sonoma Marina — who can drive, what's included, hours, parking, and cancellations.",
  path: "/faqs",
});

/** Built only from verified facts in the data files — no invented answers. */
const FAQS: { q: string; a: string }[] = [
  {
    q: "Who is allowed to operate a rental boat?",
    a: `Boat operators must be 21 or older and present a valid government-issued photo ID. A boating safety card is recommended but not required.`,
  },
  {
    q: "What's included with a boat rental?",
    a: `${WHATS_INCLUDED.join(". ")}.`,
  },
  {
    q: "What time should I arrive?",
    a: "Please arrive 30 minutes before your reservation time to complete check-in.",
  },
  {
    q: "What are your hours?",
    a: HOURS.map((h) => `${h.season}: ${h.value}`).join(". ") + ".",
  },
  {
    q: "What are the day-use fees?",
    a: DAY_USE_FEES.map((f) => `${f.label}: $${f.amount}`).join(", ") + ".",
  },
  {
    q: "What is your cancellation policy?",
    a: CANCELLATION_POLICY.join(". ") + ".",
  },
  {
    q: "How do I book?",
    a: "Choose your boat or patio on this site and click “Check Availability & Book.” You'll be taken to our secure booking platform to pick your date and pay.",
  },
];

export default function FaqsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="container-page py-12">
      <h1 className="text-3xl font-extrabold text-lake-900">Frequently asked questions</h1>
      <dl className="mt-8 max-w-3xl divide-y divide-lake-100">
        {FAQS.map((f) => (
          <div key={f.q} className="py-5">
            <dt className="text-lg font-semibold text-lake-900">{f.q}</dt>
            <dd className="mt-2 text-pine-900/90">{f.a}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-pine-700">
        Still have a question? Call{" "}
        <a href={SITE.phoneHref} className="font-semibold text-lake-700 hover:underline">{SITE.phone}</a>{" "}
        or email{" "}
        <a href={`mailto:${SITE.email}`} className="font-semibold text-lake-700 hover:underline">{SITE.email}</a>.
      </p>
      <JsonLd data={faqJsonLd} />
    </div>
  );
}
