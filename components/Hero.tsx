import Image from "next/image";
import type { ReactNode } from "react";
import { IMAGES } from "@/data/imagery";
import { Container } from "@/components/Container";

type Height = "full" | "tall" | "medium" | "compact";

const HEIGHT_CLASS: Record<Height, string> = {
  full: "min-h-[92vh]",
  tall: "min-h-[78vh]",
  medium: "min-h-[60vh]",
  compact: "min-h-[44vh]",
};

/**
 * Full-bleed cinematic hero: a background photo from the imagery manifest with a
 * soft dark gradient overlay for legible text, an elegant serif headline, optional
 * eyebrow + subtitle, and a CTA slot (children).
 *
 * If `image` is not a known imagery key, the hero degrades gracefully to a
 * tasteful brand gradient (.photo-fallback) — never a broken image.
 */
export function Hero({
  image,
  title,
  subtitle,
  eyebrow,
  children,
  height = "tall",
  align = "left",
  priority = false,
}: {
  /** Key into data/imagery IMAGES (e.g. "hero", "lake-landscape"). */
  image: string;
  title: ReactNode;
  subtitle?: ReactNode;
  eyebrow?: string;
  /** CTA slot rendered under the subtitle. */
  children?: ReactNode;
  height?: Height;
  align?: "left" | "center";
  /** Set true for the above-the-fold homepage hero (LCP image). */
  priority?: boolean;
}) {
  const src = IMAGES[image];
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className={`relative isolate flex ${HEIGHT_CLASS[height]} w-full overflow-hidden`}>
      {/* Background media (or graceful fallback gradient). */}
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          priority={priority}
          sizes="100vw"
          className="-z-10 object-cover"
        />
      ) : (
        <div aria-hidden="true" className="photo-fallback absolute inset-0 -z-10" />
      )}

      {/* Soft dark gradient for legibility. */}
      <div aria-hidden="true" className="photo-overlay absolute inset-0 -z-10" />

      <Container className={`flex flex-1 flex-col justify-end pb-16 pt-28 sm:pb-24 ${alignClass}`}>
        <div className={`max-w-3xl ${align === "center" ? "mx-auto" : ""}`}>
          {eyebrow && <p className="eyebrow mb-4 !text-sand-200">{eyebrow}</p>}
          <h1 className="text-display-xl font-medium text-white drop-shadow-sm">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-sand-50/90 sm:text-xl">
              {subtitle}
            </p>
          )}
          {children && (
            <div
              className={`mt-8 flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""}`}
            >
              {children}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
