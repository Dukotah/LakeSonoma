import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { SITE } from "@/data/site";
import { READ_ON_SONOMA } from "@/data/content";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";
import { Container } from "@/components/Container";
import { ReadOnSonomaForm } from "@/components/ReadOnSonomaForm";

export const metadata: Metadata = pageMeta({
  title: "Read On Sonoma — Kids' Reading Rewards | Lake Sonoma Marina",
  description:
    "Congratulations, young reader! Lake Sonoma Marina rewards Read On Sonoma participants with free paddle rentals and premium pontoon outings. Redeem your reward here.",
  path: "/read-on-sonoma",
});

export default function ReadOnSonomaPage() {
  return (
    <>
      <Hero
        image="kayak-paddle"
        eyebrow="Kids' reading rewards program"
        height="medium"
        title={READ_ON_SONOMA.heading}
        subtitle={READ_ON_SONOMA.intro}
      />

      {/* Reward tier cards */}
      <Section tone="default" spacing="loose">
        <Reveal>
          <p className="eyebrow mb-4">Your reward</p>
          <h2 className="text-display-md font-medium text-pine-900 mb-10">
            Two levels of adventure await.
          </h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">
          {READ_ON_SONOMA.tiers.map((tier, i) => (
            <Reveal key={tier.level} delay={i * 100}>
              <article className="flex flex-col rounded-4xl bg-white shadow-card overflow-hidden h-full">
                {/* Colour band accent */}
                <div
                  className={`h-2 w-full ${i === 0 ? "bg-lake-400" : "bg-pine-700"}`}
                  aria-hidden="true"
                />
                <div className="flex flex-col flex-1 p-8 sm:p-10">
                  <p
                    className={`eyebrow mb-3 ${
                      i === 0 ? "text-lake-600" : "text-pine-600"
                    }`}
                  >
                    {tier.level}
                  </p>
                  <h3 className="text-display-sm font-medium text-pine-900 mb-4">
                    {tier.name}
                  </h3>
                  <p className="text-pine-700 leading-relaxed flex-1">{tier.description}</p>
                  <div className="mt-8 pt-6 border-t border-sand-100">
                    <p className="text-sm text-pine-500">
                      To redeem, complete the form below with your reward tier selected.
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Redemption form */}
      <Section tone="sand" spacing="loose">
        <Container size="narrow">
          <Reveal>
            <p className="eyebrow mb-4">Ready to redeem?</p>
            <h2 className="text-display-sm font-medium text-pine-900 mb-2">
              Claim your lake day.
            </h2>
            <p className="text-pine-600 leading-relaxed mb-2 max-w-2xl">
              {READ_ON_SONOMA.redemptionNote}
            </p>
            <p className="text-sm text-pine-500 mb-8">
              Weekdays only — excluding major holidays. Subject to availability.
            </p>
          </Reveal>

          {/*
            TODO (developer): wire ReadOnSonomaForm to a backend or form service (e.g. Resend,
            a Next.js server action, or Formspree) before going live. All fields are
            specified by READ_ON_SONOMA.redemptionNote (data/content.ts).
          */}
          <Reveal delay={80}>
            <ReadOnSonomaForm />
          </Reveal>
        </Container>
      </Section>

      {/* Footer reassurance */}
      <Section tone="pine" spacing="tight">
        <Container size="narrow">
          <Reveal>
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:justify-between">
              <p className="text-sand-200 text-sm leading-relaxed max-w-xl">
                Questions about the Read On Sonoma program? Our team is happy to help — just give
                us a call or send an email.
              </p>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <a href={SITE.phoneHref} className="btn-ghost-light">
                  {SITE.phone}
                </a>
                <Link href="/contact" className="btn-ghost-light">
                  Email us
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}
