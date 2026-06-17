import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { SITE, HOURS, SOCIAL } from "@/data/site";
import { CONTACT } from "@/data/content";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = pageMeta({
  title: "Contact & Directions — Lake Sonoma Marina",
  description:
    "Contact Lake Sonoma Marina — phone, email, address, hours, and directions to 4200 Skaggs Springs Road, Geyserville, CA.",
  path: "/contact",
});

export default function ContactPage() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`;

  return (
    <>
      <Hero
        image="lake-landscape"
        eyebrow="We'd love to hear from you"
        height="compact"
        title="Contact &amp; Directions"
        subtitle={CONTACT.message}
      />

      <Section tone="default" spacing="loose">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: NAP + Hours + Social */}
          <div className="space-y-10">
            <Reveal>
              <div>
                <p className="eyebrow mb-3">Get in touch</p>
                <h2 className="text-display-sm font-medium text-pine-900 mb-5">
                  {SITE.name}
                </h2>
                <address className="not-italic space-y-2 text-pine-700 leading-relaxed">
                  <p>{SITE.address.full}</p>
                  <p>
                    <a
                      href={SITE.phoneHref}
                      className="font-semibold text-lake-700 hover:text-lake-900 transition-colors"
                    >
                      {SITE.phone}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="font-semibold text-lake-700 hover:text-lake-900 transition-colors"
                    >
                      {SITE.email}
                    </a>
                  </p>
                </address>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div>
                <p className="eyebrow mb-3">Hours</p>
                <ul className="space-y-1.5" aria-label="Operating hours">
                  {HOURS.map((h) => (
                    <li key={h.season} className="text-pine-700">
                      <span className="font-semibold text-pine-900">{h.season}:</span> {h.value}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div>
                <p className="eyebrow mb-3">Follow us</p>
                <ul className="flex flex-wrap gap-5" aria-label="Social media links">
                  <li>
                    <a
                      href={SOCIAL.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-lake-700 hover:text-lake-900 transition-colors"
                    >
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIAL.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-lake-700 hover:text-lake-900 transition-colors"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href={SOCIAL.tripadvisor}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-lake-700 hover:text-lake-900 transition-colors"
                    >
                      TripAdvisor
                    </a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>

          {/* Right: map */}
          <Reveal delay={60}>
            <div className="aspect-[4/3] overflow-hidden rounded-4xl border border-lake-100 shadow-card">
              <iframe
                title="Map to Lake Sonoma Marina"
                src={mapSrc}
                className="h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-4 text-center">
              <a
                href={CONTACT.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold text-lake-700 hover:text-lake-900 transition-colors"
              >
                Open in Google Maps →
              </a>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Contact form */}
      <Section tone="sand" spacing="loose">
        <Container size="narrow">
          <Reveal>
            <p className="eyebrow mb-4">Send a message</p>
            <h2 className="text-display-sm font-medium text-pine-900 mb-2">
              How can we help?
            </h2>
            <p className="text-pine-600 mb-8 leading-relaxed">
              Fill out the form below and our team will get back to you as soon as possible.
            </p>
          </Reveal>

          {/*
            TODO (developer): wire ContactForm to a backend or form service (e.g. Resend,
            Formspree, or a Next.js server action) before going live. Fields are listed
            in data/content.ts CONTACT.formFields.
          */}
          <Reveal delay={80}>
            <ContactForm />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
