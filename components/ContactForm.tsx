"use client";

import { useState } from "react";
import { SITE } from "@/data/site";
import { CONTACT } from "@/data/content";
import {
  WEB3FORMS_ENABLED,
  submitToWeb3Forms,
  type SubmitState,
} from "@/lib/web3forms";
import { trackFormSubmit } from "@/lib/analytics";

const inputClass =
  "rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 placeholder-pine-500 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40";

/**
 * Contact form — submits to Web3Forms (emails staff@lakesonoma.com). Shows
 * inline success/error states. If no Web3Forms key is configured, it degrades
 * to a "call/email us" notice so it never silently drops a message.
 */
export function ContactForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return; // honeypot
    setState("submitting");
    const payload: Record<string, unknown> = {
      subject: "New contact enquiry — Lake Sonoma Marina",
      from_name: `${fd.get("firstName") ?? ""} ${fd.get("lastName") ?? ""}`.trim(),
    };
    CONTACT.formFields.forEach((f) => (payload[f.label] = fd.get(f.name) ?? ""));
    const ok = await submitToWeb3Forms(payload);
    if (ok) {
      trackFormSubmit("contact");
      setState("success");
      form.reset();
    } else {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl border border-lake-200 bg-lake-50 px-6 py-8 text-center"
      >
        <p className="text-display-sm font-medium text-pine-900">Thank you!</p>
        <p className="mt-2 text-pine-700">
          Your message is on its way to the marina. We&apos;ll be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form aria-label="Contact form" onSubmit={onSubmit} noValidate className="space-y-6">
      {!WEB3FORMS_ENABLED && (
        <p
          role="status"
          className="rounded-2xl border border-lake-200 bg-lake-50 px-5 py-3 text-sm text-lake-800"
        >
          <strong>Note:</strong> the message service isn&apos;t configured yet — please call{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">
            {SITE.phone}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${SITE.email}`} className="font-semibold underline">
            {SITE.email}
          </a>
          .
        </p>
      )}

      {/* Honeypot (hidden from humans) */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid gap-6 sm:grid-cols-2">
        {CONTACT.formFields
          .filter((f) => f.type !== "textarea")
          .map((field) => (
            <div key={field.name} className="flex flex-col gap-1.5">
              <label htmlFor={field.name} className="text-sm font-semibold text-pine-800">
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
                aria-invalid={state === "error" ? true : undefined}
                aria-describedby={state === "error" ? "contact-form-error" : undefined}
                className={inputClass}
              />
            </div>
          ))}
      </div>

      {CONTACT.formFields
        .filter((f) => f.type === "textarea")
        .map((field) => (
          <div key={field.name} className="flex flex-col gap-1.5">
            <label htmlFor={field.name} className="text-sm font-semibold text-pine-800">
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
              aria-invalid={state === "error" ? true : undefined}
              aria-describedby={state === "error" ? "contact-form-error" : undefined}
              rows={5}
              className={`${inputClass} resize-none`}
            />
          </div>
        ))}

      <p className="text-xs text-pine-500">
        <span aria-hidden="true" className="text-lake-600">
          *
        </span>{" "}
        Required fields
      </p>

      {state === "error" && (
        <p
          id="contact-form-error"
          role="alert"
          aria-live="assertive"
          className="text-sm font-medium text-red-700"
        >
          Something went wrong sending your message. Please try again, or call{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">
            {SITE.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting" || !WEB3FORMS_ENABLED}
        className="btn-primary inline-flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-50"
        aria-busy={state === "submitting"}
      >
        {state === "submitting" && (
          <svg
            aria-hidden="true"
            className="h-4 w-4 animate-spin"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        {state === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
