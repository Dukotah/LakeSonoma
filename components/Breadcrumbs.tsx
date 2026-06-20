import Link from "next/link";

export interface BreadcrumbItem {
  /** Display label for this crumb. */
  label: string;
  /**
   * If provided, the crumb is rendered as a link.
   * Omit (or leave undefined) for the current/active page crumb.
   */
  href?: string;
}

/**
 * Accessible breadcrumb trail. Pass an ordered array of items; the last item
 * is always treated as the current page (`aria-current="page"`, no link).
 *
 * @param className - Optional extra classes applied to the wrapping `<nav>`.
 *                    Defaults to `"pt-6 pb-4"`. Pass `"pt-6 pb-8"` for pages
 *                    that need more bottom space (e.g. product detail pages).
 *
 * Usage:
 *   <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Patios & Day-Use" }]} />
 */
export function Breadcrumbs({
  items,
  className = "pt-6 pb-4",
}: {
  items: BreadcrumbItem[];
  className?: string;
}) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-pine-500">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return [
            <li key={`item-${i}`} {...(isLast ? { "aria-current": "page" as const } : {})}>
              {isLast || !item.href ? (
                <span className={isLast ? "font-medium text-pine-900" : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className="transition-colors hover:text-lake-700">
                  {item.label}
                </Link>
              )}
            </li>,
            !isLast && (
              <li key={`sep-${i}`} aria-hidden="true" className="select-none text-pine-300">
                /
              </li>
            ),
          ];
        })}
      </ol>
    </nav>
  );
}
