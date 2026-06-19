import { SITE } from "@/data/site";

/**
 * Lake Sonoma brand lockup — a faithful, high-resolution vector remake of the
 * marina's original logo (the sailboat-in-disc mark, the "Lake Sonoma Resort
 * Area" script wordmark, and the trailing wave line). Produced by color-tracing
 * the original artwork, so it is 100% the same design but crisp at any size.
 *
 * Two prebuilt variants live in /public/images:
 *   logo.svg        — navy + light-blue (for light backgrounds / scrolled header)
 *   logo-white.svg  — white (for photographic / dark backgrounds, e.g. the hero)
 *
 * Pass `tone="light"` over dark/photo backgrounds; `tone="brand"` otherwise.
 */
export function Logo({
  tone = "brand",
  className = "h-11 w-auto",
}: {
  tone?: "brand" | "light";
  className?: string;
}) {
  const src = tone === "light" ? "/images/logo-white.svg" : "/images/logo.svg";
  return (
    // Plain <img>: the file is a static SVG, no optimization needed.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={SITE.name}
      draggable={false}
      className={`select-none ${className}`}
    />
  );
}
