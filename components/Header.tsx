"use client";

import { useState } from "react";
import Link from "next/link";
import { NAV, SITE } from "@/data/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-lake-100 bg-white/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lake-800">
          <span aria-hidden="true" className="text-2xl">⛵</span>
          <span className="leading-tight">
            Lake Sonoma<span className="block text-xs font-medium text-pine-700">Marina</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-5 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-pine-900 hover:text-lake-700"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={SITE.phoneHref} className="text-sm font-semibold text-lake-700">
            {SITE.phone}
          </a>
          <Link href="/rentals" className="btn-primary px-5 py-2 text-sm">
            Book a boat
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="rounded-lg p-2 text-lake-800 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="text-2xl">{open ? "✕" : "☰"}</span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="border-t border-lake-100 bg-white lg:hidden"
        >
          <ul className="container-page flex flex-col py-2">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-3 text-base font-medium text-pine-900 hover:text-lake-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-2 py-3">
              <a href={SITE.phoneHref} className="font-semibold text-lake-700">
                Call {SITE.phone}
              </a>
              <Link href="/rentals" className="btn-primary" onClick={() => setOpen(false)}>
                Book a boat
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
