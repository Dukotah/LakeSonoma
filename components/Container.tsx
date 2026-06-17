import type { ElementType, ReactNode } from "react";

/**
 * Horizontal layout primitive: centers content and applies the editorial
 * gutters + max width. Use inside <Section> (or anywhere a centered column
 * is needed). `size="narrow"` is handy for long-form prose.
 */
export function Container({
  children,
  className = "",
  size = "default",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
  as?: ElementType;
}) {
  const max =
    size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-[1320px]" : "max-w-content";
  return (
    <Tag className={`mx-auto w-full ${max} px-5 sm:px-6 lg:px-8${className ? ` ${className}` : ""}`}>
      {children}
    </Tag>
  );
}
