import { Section } from "@/components/Section";
import { Reveal } from "@/components/Reveal";

export interface LegalSection {
  heading: string;
  /** Paragraphs; a line beginning with "• " renders as a bullet. */
  paragraphs: string[];
}

/**
 * Shared renderer for long-form legal pages (Privacy Policy, Terms of Service).
 * Editorial header band + readable prose column.
 */
export function LegalContent({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Section tone="pine" spacing="default" headerOffset>
        <Reveal>
          <p className="eyebrow !text-sand-300">Legal</p>
          <h1 className="mt-2 text-display-lg font-medium text-white">{title}</h1>
          <p className="mt-3 text-sm text-sand-300">Last updated: {updated}</p>
        </Reveal>
      </Section>

      <Section tone="white" spacing="default">
        <div className="mx-auto max-w-prose">
          <Reveal>
            <p className="text-lg leading-relaxed text-pine-700">{intro}</p>
          </Reveal>
          {sections.map((s, i) => (
            <Reveal key={s.heading} delay={Math.min(i * 40, 200)}>
              <section className="mt-10">
                <h2 className="text-display-sm font-medium text-pine-900">{s.heading}</h2>
                <div className="mt-3 space-y-3">
                  {s.paragraphs.map((p, j) =>
                    p.startsWith("• ") ? (
                      <p key={j} className="flex gap-2 leading-relaxed text-pine-700">
                        <span aria-hidden="true" className="text-lake-600">
                          •
                        </span>
                        <span>{p.slice(2)}</span>
                      </p>
                    ) : (
                      <p key={j} className="leading-relaxed text-pine-700">
                        {p}
                      </p>
                    ),
                  )}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
