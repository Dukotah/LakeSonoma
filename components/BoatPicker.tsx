"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { PRODUCTS, CATEGORY_LABELS, fromPrice, type Category } from "@/data/marina";
import { bookingUrl } from "@/lib/singenuity";

const ORDER: Category[] = ["pontoon", "watersport", "sport", "fishing", "jetski", "paddle", "patio"];

/**
 * Sticky, always-visible booking entry. Clicking it opens a picker of every
 * item — each row deep-links to that item's Singenuity date page (NEW TAB). This
 * replaces the old dead/generic "Book Now" entry point. Booking deep-link logic
 * (bookingUrl(id)) is intentionally preserved exactly.
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
        className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-lake-700 px-6 py-3.5 text-sm font-semibold text-white shadow-lift transition-all duration-300 ease-soft-out hover:-translate-y-0.5 hover:bg-lake-800 sm:bottom-7 sm:right-7"
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        <span aria-hidden="true">⛵</span> Book a Boat
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-pine-950/60 backdrop-blur-sm animate-fade-in sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-label="Choose a boat to book"
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-4xl bg-sand-50 p-6 shadow-lift sm:rounded-4xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow mb-1">Reserve your day</p>
                <h2 className="font-serif text-2xl font-medium text-pine-900">
                  Pick a boat or patio
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full text-pine-700 transition-colors hover:bg-pine-100"
                aria-label="Close booking picker"
              >
                <span aria-hidden="true" className="text-lg">✕</span>
              </button>
            </div>

            {ORDER.map((cat) => {
              const items = PRODUCTS.filter((p) => p.category === cat);
              if (!items.length) return null;
              return (
                <div key={cat} className="mb-7 last:mb-0">
                  <h3 className="mb-2 text-eyebrow font-semibold uppercase text-lake-600">
                    {CATEGORY_LABELS[cat]}
                  </h3>
                  <ul className="divide-y divide-pine-100">
                    {items.map((p) => {
                      const from = fromPrice(p);
                      return (
                        <li
                          key={p.singenuityId}
                          className="flex items-center justify-between gap-3 py-3"
                        >
                          <Link
                            href={`/product/${p.slug}`}
                            className="text-pine-800 transition-colors hover:text-lake-700"
                            onClick={() => setOpen(false)}
                          >
                            <span className="font-medium">{p.name}</span>
                            {from !== undefined && (
                              <span className="ml-2 text-sm text-pine-500">from ${from}</span>
                            )}
                            {p.priceTBD && (
                              <span className="ml-2 text-sm text-pine-500">inquire for pricing</span>
                            )}
                          </Link>
                          <a
                            href={bookingUrl(p.singenuityId)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="shrink-0 rounded-full bg-lake-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-lake-800"
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
