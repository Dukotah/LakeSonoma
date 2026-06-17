"use client";

import { SITE } from "@/data/site";
import { READ_ON_SONOMA } from "@/data/content";

/**
 * Read On Sonoma reward redemption form — extracted as a Client Component
 * because it uses an onSubmit event handler. The form is currently disabled
 * (submit button is aria-disabled) until a backend / form service is wired up.
 *
 * TODO (developer): replace the onSubmit stub with a real server action or
 * third-party form service (Resend, Formspree, etc.) before going live.
 */
export function ReadOnSonomaForm() {
  return (
    <form
      aria-label="Read On Sonoma reward redemption form"
      onSubmit={(e) => e.preventDefault()}
      noValidate
      className="space-y-6"
    >
      <p
        role="status"
        className="rounded-2xl border border-lake-200 bg-lake-50 px-5 py-3 text-sm text-lake-800"
      >
        <strong>Note:</strong> This form is not yet active. To redeem your reward please
        call us at{" "}
        <a href={SITE.phoneHref} className="font-semibold underline">
          {SITE.phone}
        </a>{" "}
        or email{" "}
        <a href={`mailto:${SITE.email}`} className="font-semibold underline">
          {SITE.email}
        </a>
        .
      </p>

      {/* Parent / guardian */}
      <fieldset>
        <legend className="text-sm font-semibold text-pine-800 mb-4">
          Parent / Guardian Information
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="parentName" className="text-sm font-semibold text-pine-800">
              Parent / Driver Name{" "}
              <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input
              id="parentName"
              name="parentName"
              type="text"
              required
              aria-required="true"
              autoComplete="name"
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="parentEmail" className="text-sm font-semibold text-pine-800">
              Email{" "}
              <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input
              id="parentEmail"
              name="parentEmail"
              type="email"
              required
              aria-required="true"
              autoComplete="email"
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
            />
          </div>
          <div className="flex flex-col gap-1.5 sm:col-span-2">
            <label htmlFor="parentPhone" className="text-sm font-semibold text-pine-800">
              Phone{" "}
              <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input
              id="parentPhone"
              name="parentPhone"
              type="tel"
              required
              aria-required="true"
              autoComplete="tel"
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
            />
          </div>
        </div>
      </fieldset>

      {/* Student info */}
      <fieldset>
        <legend className="text-sm font-semibold text-pine-800 mb-4">
          Student Information
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="studentName" className="text-sm font-semibold text-pine-800">
              Student Name{" "}
              <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input
              id="studentName"
              name="studentName"
              type="text"
              required
              aria-required="true"
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="schoolLibrary"
              className="text-sm font-semibold text-pine-800"
            >
              School / Library Branch{" "}
              <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input
              id="schoolLibrary"
              name="schoolLibrary"
              type="text"
              required
              aria-required="true"
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
            />
          </div>
        </div>
      </fieldset>

      {/* Reward tier */}
      <fieldset>
        <legend className="text-sm font-semibold text-pine-800 mb-3">
          Preferred Reward Tier{" "}
          <span aria-hidden="true" className="text-lake-600">*</span>
        </legend>
        <div className="space-y-3">
          {READ_ON_SONOMA.tiers.map((tier) => (
            <label
              key={tier.level}
              className="flex items-start gap-3 cursor-pointer rounded-2xl border border-sand-200 bg-white px-4 py-3.5 hover:border-lake-400 hover:bg-lake-50 transition has-[:checked]:border-lake-500 has-[:checked]:bg-lake-50"
            >
              <input
                type="radio"
                name="rewardTier"
                value={tier.level}
                required
                aria-required="true"
                className="mt-0.5 accent-lake-600"
              />
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
        <legend className="text-sm font-semibold text-pine-800 mb-4">
          Visit Preferences
        </legend>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label
              htmlFor="requestedTime"
              className="text-sm font-semibold text-pine-800"
            >
              Preferred Time of Day
            </label>
            <input
              id="requestedTime"
              name="requestedTime"
              type="text"
              placeholder="e.g. Morning, Early afternoon"
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 placeholder-pine-400 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="visitDate" className="text-sm font-semibold text-pine-800">
              Requested Date{" "}
              <span aria-hidden="true" className="text-lake-600">*</span>
            </label>
            <input
              id="visitDate"
              name="visitDate"
              type="date"
              required
              aria-required="true"
              className="rounded-xl border border-sand-300 bg-white px-4 py-3 text-pine-900 shadow-sm transition focus:border-lake-500 focus:outline-none focus:ring-2 focus:ring-lake-400/40"
            />
          </div>
        </div>
        <p className="mt-2 text-xs text-pine-500">
          Weekdays only — we will confirm availability after reviewing your request.
        </p>
      </fieldset>

      <p className="text-xs text-pine-500">
        <span aria-hidden="true" className="text-lake-600">*</span> Required fields
      </p>

      <button
        type="submit"
        disabled
        aria-disabled="true"
        className="btn-primary opacity-50 cursor-not-allowed"
        title="Form submission not yet enabled — please call or email directly"
      >
        Submit redemption request
      </button>
    </form>
  );
}
