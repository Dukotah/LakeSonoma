import { bookingUrl } from "@/lib/singenuity";
import { SITE } from "@/data/site";

/**
 * The canonical booking CTA. By default it ALWAYS deep-links to a specific
 * Singenuity item by id — there is no code path that produces the old generic
 * catalog link. Opens in a new tab per owner preference.
 *
 * For items with no Singenuity deep-link (e.g. the Quest Fishing Pontoon), pass
 * `bookByPhone` and the CTA becomes a tap-to-call link instead.
 */
export function BookButton({
  singenuityId,
  label = "Check Availability & Book",
  className = "btn-primary",
  productName,
  bookByPhone = false,
}: {
  singenuityId: number;
  label?: string;
  className?: string;
  productName?: string;
  bookByPhone?: boolean;
}) {
  if (bookByPhone) {
    return (
      <a
        href={SITE.phoneHref}
        className={className}
        aria-label={productName ? `Call to book ${productName}` : "Call to book"}
      >
        Call to book
        <span aria-hidden="true"> ☎</span>
      </a>
    );
  }
  return (
    <a
      href={bookingUrl(singenuityId)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={
        productName ? `${label} — ${productName} (opens booking in a new tab)` : label
      }
    >
      {label}
      <span aria-hidden="true">↗</span>
    </a>
  );
}
