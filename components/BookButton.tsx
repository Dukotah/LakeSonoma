import { bookingUrl } from "@/lib/singenuity";

/**
 * The canonical booking CTA. ALWAYS deep-links to a specific Singenuity item by
 * id — there is no code path here that can produce the old generic catalog link.
 * Opens in a new tab per owner preference.
 */
export function BookButton({
  singenuityId,
  label = "Check Availability & Book",
  className = "btn-primary",
  productName,
}: {
  singenuityId: number;
  label?: string;
  className?: string;
  productName?: string;
}) {
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
