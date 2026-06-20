"use client";

import { useEffect, useState, useCallback } from "react";
import Link from "next/link";

const KEY = "ls-cookie-consent";

/**
 * Lightweight, non-blocking cookie/analytics consent notice. Remembers the
 * choice in localStorage so it appears only once. Purely informational — we use
 * privacy-friendly Vercel Analytics, so this is a courtesy notice + privacy link.
 */
export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      /* localStorage unavailable — skip */
    }
  }, []);

  const dismiss = useCallback(() => {
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* ignore */
    }
    setShow(false);
  }, []);

  useEffect(() => {
    if (!show) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") dismiss();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [show, dismiss]);

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Cookie notice"
      aria-live="polite"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-2xl rounded-2xl border border-pine-200 bg-white/95 p-4 shadow-lift backdrop-blur sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
    >
      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-pine-700">
          We use privacy-friendly analytics to understand site traffic. See our{" "}
          <Link href="/privacy" className="font-semibold text-lake-700 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <button type="button" onClick={dismiss} className="btn-primary shrink-0 px-5 py-2 text-sm">
          Got it
        </button>
      </div>
    </div>
  );
}
