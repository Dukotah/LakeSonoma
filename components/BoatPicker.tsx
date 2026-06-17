"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, CATEGORY_LABELS, fromPrice, type Category } from "@/data/marina";
import { bookingUrl } from "@/lib/singenuity";

const ORDER: Category[] = ["pontoon", "watersport", "sport", "fishing", "jetski", "paddle", "patio"];

/**
 * Sticky, always-visible booking entry. Clicking it opens a picker of every
 * item — each row deep-links to that item's Singenuity date page. This replaces
 * the old dead/generic "Book Now" entry point.
 */
export function BoatPicker() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", onKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Sticky launcher (mobile + desktop) */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 rounded-full bg-lake-600 px-5 py-3 font-semibold text-white shadow-lg transition hover:bg-lake-700 sm:bottom-6 sm:right-6"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        🛥️ Book a boat
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Choose a boat to book"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-5 shadow-xl sm:rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-bold text-lake-900">Pick a boat or patio to book</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 text-pine-900 hover:bg-lake-50"
                aria-label="Close booking picker"
              >
                ✕
              </button>
            </div>

            {ORDER.map((cat) => {
              const items = PRODUCTS.filter((p) => p.category === cat);
              if (!items.length) return null;
              return (
                <div key={cat} className="mb-5">
                  <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-lake-600">
                    {CATEGORY_LABELS[cat]}
                  </h3>
                  <ul className="divide-y divide-lake-50">
                    {items.map((p) => {
                      const from = fromPrice(p);
                      return (
                        <li key={p.singenuityId} className="flex items-center justify-between gap-3 py-2">
                          <Link
                            href={`/product/${p.slug}`}
                            className="text-pine-900 hover:text-lake-700 hover:underline"
                            onClick={() => setOpen(false)}
                          >
                            {p.name}
                            {from !== undefined && (
                              <span className="ml-2 text-sm text-pine-700">from ${from}</span>
                            )}
                            {p.priceTBD && (
                              <span className="ml-2 text-sm text-pine-700">inquire for pricing</span>
                            )}
                          </Link>
                          <a
                            href={bookingUrl(p.singenuityId)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 rounded-full bg-lake-600 px-4 py-1.5 text-sm font-semibold text-white hover:bg-lake-700"
                            aria-label={`Book ${p.name} (opens in a new tab)`}
                          >
                            Book ↗
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
