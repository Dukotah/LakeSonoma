import type { ElementType, ReactNode } from "react";
import { Container } from "@/components/Container";

type Tone = "default" | "sand" | "pine" | "lake" | "white";

const TONE_CLASS: Record<Tone, string> = {
  default: "bg-sand-50 text-pine-800",
  white: "bg-white text-pine-800",
  sand: "bg-sand-100 text-pine-800",
  lake: "bg-lake-50 text-pine-800",
  pine: "bg-pine-900 text-sand-50",
};

type Spacing = "default" | "tight" | "loose" | "none";

const SPACING_CLASS: Record<Spacing, string> = {
  none: "",
  tight: "py-12 sm:py-16",
  default: "py-16 sm:py-24",
  loose: "py-24 sm:py-32",
};

/**
 * Vertical rhythm primitive: a full-width band with generous editorial padding
 * and an optional background tone. Wraps children in a <Container> by default;
 * pass `bleed` to opt out (e.g. for full-bleed media).
 */
export function Section({
  children,
  className = "",
  tone = "default",
  spacing = "default",
  bleed = false,
  containerSize = "default",
  headerOffset = false,
  as: Tag = "section",
  id,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  spacing?: Spacing;
  /** Skip the inner Container (children manage their own width). */
  bleed?: boolean;
  containerSize?: "default" | "narrow" | "wide";
  /**
   * Add top padding to clear the fixed Header. Use on the FIRST section of any
   * page that does NOT open with a full-bleed <Hero> (the Hero clears it itself).
   */
  headerOffset?: boolean;
  as?: ElementType;
  id?: string;
}) {
  return (
    <Tag
      id={id}
      className={`${TONE_CLASS[tone]} ${SPACING_CLASS[spacing]}${
        headerOffset ? " pt-28 sm:pt-32" : ""
      }${className ? ` ${className}` : ""}`}
    >
      {bleed ? children : <Container size={containerSize}>{children}</Container>}
    </Tag>
  );
}
