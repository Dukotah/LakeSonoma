import type { Metadata } from "next";
import { pageMeta, JsonLd } from "@/lib/seo";
import { SITE } from "@/data/site";

export const metadata: Metadata = pageMeta({
  title: "FAQs",
  description:
    "Frequently asked questions about Lake Sonoma Marina — location, hours, boat types, fuel & docking, day-use fees, slip reservations, pets, and safety.",
  path: "/faqs",
});

/** Verbatim from lakesonoma.com/faqs (verified). Grouped as on the original site. */
const FAQ_GROUPS: { group: string; items: { q: string; a: string }[] }[] = [
  {
    group: "Location & Hours",
    items: [
      {
        q: "Where is Lake Sonoma Marina located?",
        a: "Our marina is situated at 4200 Skaggs Springs Road, Geyserville, CA 95441. For billing inquiries, please contact our Billing Office at 104 Wikiup Drive, Santa Rosa, CA 95403.",
      },
      {
        q: "What are the marina's operating hours?",
        a: "During the summer months, we're open daily from 8:00 AM to 7:00 PM. In the winter, our hours are 9:00 AM to 3:00 PM.",
      },
    ],
  },
  {
    group: "Boat Rentals & Services",
    items: [
      {
        q: "What types of boats are available for rent?",
        a: "We offer a variety of boats to suit your needs: patio boats (5 to 12 passengers), ski boats (7 to 8 passengers), fishing boats (2 to 3 passengers), canoes, kayaks, and stand-up paddleboards, and jet skis.",
      },
      {
        q: "Do you provide fuel and docking services?",
        a: "Yes, we have a fuel dock and offer docking services. Our friendly dock staff is available to assist you with fueling and docking.",
      },
    ],
  },
  {
    group: "Fees & Reservations",
    items: [
      {
        q: "What are the day-use fees?",
        a: "Launch Ramp: $25, Hand Launch: $20, Daily Parking: $20. Please note that these fees must be paid upon arrival.",
      },
      {
        q: "How can I reserve a slip or trailer storage?",
        a: "To reserve a slip or trailer storage, please submit a Seasonal or Annual Berthing Agreement along with the corresponding Membership Fee as a deposit.",
      },
    ],
  },
  {
    group: "Pets & Safety",
    items: [
      {
        q: "Are pets allowed at the marina?",
        a: "Yes, pets are welcome but must be kept on a leash at all times. Please ensure your pet is under control and clean up after them.",
      },
      {
        q: "What safety measures are in place?",
        a: "Children under 12 must be accompanied by an adult at all times. Life jackets are required for all children under 13 while underway on vessels.",
      },
    ],
  },
  {
    group: "Cancellation Policy",
    items: [
      {
        q: "What is your cancellation policy?",
        a: "Full refunds for cancellations made seven or more days ahead, 50% refunds for cancellations within seven days, and no refunds for cancellations within 24 hours.",
      },
    ],
  },
];

const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);

export default function FaqsPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: ALL_FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="container-page py-12">
      <p className="text-sm font-semibold uppercase tracking-widest text-lake-600">Questions?</p>
      <h1 className="text-3xl font-extrabold text-lake-900">Get your answers</h1>

      <div className="mt-8 max-w-3xl space-y-10">
        {FAQ_GROUPS.map((group) => (
          <section key={group.group} aria-labelledby={`grp-${group.group}`}>
            <h2 id={`grp-${group.group}`} className="text-lg font-bold text-lake-700">
              {group.group}
            </h2>
            <dl className="mt-3 divide-y divide-lake-100 border-t border-lake-100">
              {group.items.map((f) => (
                <div key={f.q} className="py-4">
                  <dt className="font-semibold text-lake-900">{f.q}</dt>
                  <dd className="mt-1 text-pine-900/90">{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <p className="mt-8 text-pine-700">
        Still have a question? Call{" "}
        <a href={SITE.phoneHref} className="font-semibold text-lake-700 hover:underline">{SITE.phone}</a>{" "}
        or email{" "}
        <a href={`mailto:${SITE.email}`} className="font-semibold text-lake-700 hover:underline">{SITE.email}</a>.
      </p>
      <JsonLd data={faqJsonLd} />
    </div>
  );
}
