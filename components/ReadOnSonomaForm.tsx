"use client";

import { useState } from "react";
import { SITE } from "@/data/site";
import { READ_ON_SONOMA } from "@/data/content";
import {
  WEB3FORMS_ENABLED,
  submitToWeb3Forms,
  type SubmitState,
} from "@/lib/web3forms";

const inputClass =
  "rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 placeholder-pine-400 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40";

/**
 * Read On Sonoma reward redemption form — submits to Web3Forms (emails the
 * marina). Inline success/error states; degrades to a call/email notice when no
 * Web3Forms key is configured.
 */
export function ReadOnSonomaForm() {
  const [state, setState] = useState<SubmitState>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const fd = new FormData(form);
    if (fd.get("botcheck")) return;
    setState("submitting");
    const ok = await submitToWeb3Forms({
      subject: "Read On Sonoma reward request — Lake Sonoma Marina",
      from_name: String(fd.get("parentName") ?? "Read On Sonoma family"),
      "Parent / Driver": fd.get("parentName") ?? "",
      Email: fd.get("parentEmail") ?? "",
      Phone: fd.get("parentPhone") ?? "",
      Student: fd.get("studentName") ?? "",
      "School / Library": fd.get("schoolLibrary") ?? "",
      "Reward Tier": fd.get("rewardTier") ?? "",
      "Preferred Time": fd.get("requestedTime") ?? "",
      "Requested Date": fd.get("visitDate") ?? "",
    });
    if (ok) {
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
        <p className="text-display-sm font-medium text-pine-900">Request received!</p>
        <p className="mt-2 text-pine-700">
          We&apos;ll confirm your Read On Sonoma reward visit by email or phone. See you on
          the water!
        </p>
      </div>
    );
  }

  return (
    <form
      aria-label="Read On Sonoma reward redemption form"
      onSubmit={onSubmit}
      noValidate
      className="space-y-6"
    >
      {!WEB3FORMS_ENABLED && (
        <p
          role="status"
          className="rounded-2xl border border-lake-200 bg-lake-50 px-5 py-3 text-sm text-lake-800"
        >
          <strong>Note:</strong> the reward service isn&apos;t configured yet — to redeem,
          call{" "}
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

      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {/* Parent / guardian */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold text-pine-800">
          Parent / Guardian Information
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="parentName" className="text-sm font-semibold text-pine-800">
              Parent / Driver Name <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input id="parentName" name="parentName" type="text" required autoComplete="name" className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="parentEmail" className="text-sm font-semibold text-pine-800">
              Email <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input id="parentEmail" name="parentEmail" type="email" required autoComplete="email" className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="parentPhone" className="text-sm font-semibold text-pine-800">
              Phone <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input id="parentPhone" name="parentPhone" type="tel" required autoComplete="tel" className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Student info */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold text-pine-800">Student Information</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="studentName" className="text-sm font-semibold text-pine-800">
              Student Name <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input id="studentName" name="studentName" type="text" required className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="schoolLibrary" className="text-sm font-semibold text-pine-800">
              School / Library Branch <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input id="schoolLibrary" name="schoolLibrary" type="text" required className={inputClass} />
          </div>
        </div>
      </fieldset>

      {/* Reward tier */}
      <fieldset>
        <legend className="mb-3 text-sm font-semibold text-pine-800">
          Preferred Reward Tier <span aria-hidden="true" className="text-lake-600">*</span>
        </legend>
        <div className="space-y-3">
          {READ_ON_SONOMA.tiers.map((tier) => (
            <label
              key={tier.level}
              className="flex cursor-pointer items-start gap-3 rounded-2xl border border-sand-200 bg-white px-4 py-3.5 transition hover:border-lake-400 hover:bg-lake-50 has-[:checked]:border-lake-500 has-[:checked]:bg-lake-50"
            >
              <input type="radio" name="rewardTier" value={tier.name} required className="mt-0.5 accent-lake-600" />
              <span>
                <span className="block font-semibold text-pine-900">{tier.name}</span>
                <span className="text-sm text-pine-600">{tier.description}</span>
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Visit timing */}
      <fieldset>
        <legend className="mb-4 text-sm font-semibold text-pine-800">Visit Preferences</legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="requestedTime" className="text-sm font-semibold text-pine-800">
              Preferred Time of Day
            </label>
            <input id="requestedTime" name="requestedTime" type="text" placeholder="e.g. Morning, Early afternoon" className={inputClass} />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="visitDate" className="text-sm font-semibold text-pine-800">
              Requested Date <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input id="visitDate" name="visitDate" type="date" required className={inputClass} />
          </div>
        </div>
        <p className="mt-2 text-xs text-pine-500">
          Weekdays only — we will confirm availability after reviewing your request.
        </p>
      </fieldset>

      <p className="text-xs text-pine-500">
        <span aria-hidden="true" className="text-lake-600">*</span> Required fields
      </p>

      {state === "error" && (
        <p role="alert" className="text-sm font-medium text-red-700">
          Something went wrong. Please try again, or call{" "}
          <a href={SITE.phoneHref} className="font-semibold underline">
            {SITE.phone}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={state === "submitting" || !WEB3FORMS_ENABLED}
        className="btn-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === "submitting" ? "Submitting…" : "Submit redemption request"}
      </button>
    </form>
  );
}
