"use client";

import { useState } from "react";
import { WEB3FORMS_ENABLED, submitToWeb3Forms, type SubmitState } from "@/lib/web3forms";
import { trackFormSubmit } from "@/lib/analytics";

/**
 * Footer newsletter capture. Submits to Web3Forms (tagged as a newsletter
 * signup) so the marina builds a marketing list. Degrades gracefully when no
 * Web3Forms key is set (button disabled with a hint).
 */
export function NewsletterForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return;
    setState("submitting");
    const ok = await submitToWeb3Forms({
      subject: "Newsletter signup — Lake Sonoma Marina",
      from_name: "Newsletter signup",
      Email: fd.get("email") ?? "",
    });
    if (ok) {
      trackFormSubmit("newsletter");
      setState("success");
      form.reset();
    } else {
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <p role="status" className="text-sm text-sand-200">
        🎉 You&apos;re on the list — see you on the water!
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-2" aria-label="Newsletter signup">
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          placeholder="you@email.com"
          className="min-w-0 flex-1 rounded-full border border-pine-700 bg-pine-900 px-4 py-2.5 text-sm text-white placeholder-pine-500 focus:border-lake-400 focus:outline-none focus:ring-2 focus:ring-lake-500/40"
        />
        <button
          type="submit"
          disabled={state === "submitting" || !WEB3FORMS_ENABLED}
          className="shrink-0 rounded-full bg-lake-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-lake-500 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {state === "submitting" ? "…" : "Sign up"}
        </button>
      </div>
      {state === "error" && (
        <p role="alert" className="text-xs text-red-300">
          Couldn&apos;t sign you up — please try again.
        </p>
      )}
      {!WEB3FORMS_ENABLED && (
        <p className="text-xs text-pine-400">Newsletter activates once the form key is set.</p>
      )}
    </form>
  );
}
