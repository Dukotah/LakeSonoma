/**
 * Anti-bot honeypot input. Hidden from real users; bots fill it in.
 * The parent form's submit handler should bail early if `fd.get("botcheck")` is truthy.
 */
export function HoneypotField() {
  return (
    <input
      type="checkbox"
      name="botcheck"
      tabIndex={-1}
      autoComplete="off"
      className="hidden"
      aria-hidden="true"
    />
  );
}
