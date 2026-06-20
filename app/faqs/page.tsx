import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta, JsonLd } from "@/lib/seo";
import { SITE } from "@/data/site";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";

export const metadata: Metadata = pageMeta({
  title: "FAQs — Lake Sonoma Marina",
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
    <>
      <Hero
        image="lake-landscape"
        eyebrow="Questions?"
        height="compact"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before your day on the lake."
      />

      <Section tone="default" spacing="loose">
        <Container size="narrow">
          <div className="space-y-14">
            {FAQ_GROUPS.map((group, gi) => (
              <Reveal key={group.group} delay={gi * 60}>
                <section aria-labelledby={`faq-group-${gi}`}>
                  <h2
                    id={`faq-group-${gi}`}
                    className="text-display-sm font-medium text-pine-900 mb-6 pb-3 border-b border-sand-200"
                  >
                    {group.group}
                  </h2>

                  <dl className="space-y-0 divide-y divide-sand-100">
                    {group.items.map((f, fi) => (
                      <div key={fi} className="py-6">
                        <dt className="text-lg font-semibold text-pine-900 mb-2">{f.q}</dt>
                        <dd className="text-pine-600 leading-relaxed">{f.a}</dd>
                      </div>
                    ))}
                  </dl>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Still have questions band */}
      <Section tone="lake" spacing="tight">
        <Container size="narrow">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
              <div>
                <p className="eyebrow mb-1">Still have a question?</p>
                <p className="text-pine-800 leading-relaxed">
                  Our team is happy to help — call or email us directly.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a href={SITE.phoneHref} className="btn-primary">
                  {SITE.phone}
                </a>
                <Link href="/contact" className="btn-secondary">
                  Send a message
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <JsonLd data={faqJsonLd} />
    </>
  );
}
