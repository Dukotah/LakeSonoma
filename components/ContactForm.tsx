"use client";

import { SITE } from "@/data/site";
import { CONTACT } from "@/data/content";

/**
 * Contact form — extracted as a Client Component because it uses an
 * onSubmit event handler. The form is currently disabled (submit button is
 * aria-disabled) until a backend / form service is wired up.
 *
 * TODO (developer): replace the onSubmit stub with a real server action or
 * third-party form service (Resend, Formspree, etc.) before going live.
 */
export function ContactForm() {
  return (
    <form
      aria-label="Contact form"
      onSubmit={(e) => e.preventDefault()}
      noValidate
      className="space-y-6"
    >
      <p
        role="status"
        className="rounded-2xl border border-lake-200 bg-lake-50 px-5 py-3 text-sm text-lake-800"
      >
        <strong>Note:</strong> This form is not yet connected to a mail service —
        please call us at{" "}
        <a href={SITE.phoneHref} className="font-semibold underline">
          {SITE.phone}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${SITE.email}`} className="font-semibold underline">
          {SITE.email}
        </a>{" "}
        in the meantime.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {CONTACT.formFields
          .filter((f) => f.type !== "textarea")
          .map((field) => (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label
                htmlFor={field.name}
                className="text-sm font-semibold text-pine-800"
              >
                {field.label}
                {field.required && (
                  <span aria-hidden="true" className="ml-1 text-lake-600">
                    *
                  </span>
                )}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                required={field.required}
                autoComplete={
                  field.name === "firstName"
                    ? "given-name"
                    : field.name === "lastName"
                    ? "family-name"
                    : field.name === "phone"
                    ? "tel"
                    : field.name === "email"
                    ? "email"
                    : undefined
                }
                aria-required={field.required}
                className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 placeholder-pine-400 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
              />
            </div>
          ))}
      </div>

      {CONTACT.formFields
        .filter((f) => f.type === "textarea")
        .map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label
              htmlFor={field.name}
              className="text-sm font-semibold text-pine-800"
            >
              {field.label}
              {field.required && (
                <span aria-hidden="true" className="ml-1 text-lake-600">
                  *
                </span>
              )}
            </label>
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              aria-required={field.required}
              rows={5}
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 placeholder-pine-400 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40 resize-none"
            />
          </div>
        ))}

      <p className="text-xs text-pine-500">
        <span aria-hidden="true" className="text-lake-600">*</span>{" "}
        Required fields
      </p>

      <button
        type="submit"
        disabled
        aria-disabled="true"
        className="btn-primary opacity-50 cursor-not-allowed"
        title="Form submission not yet enabled — please call or email directly"
      >
        Send message
      </button>
    </form>
  );
}
