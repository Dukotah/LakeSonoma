"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PRIMARY_NAV, NAV, SITE } from "@/data/site";
import { Logo } from "@/components/Logo";

/**
 * Editorial site header. Renders transparent over the hero, then transitions to a
 * solid, soft-shadowed bar once the page scrolls. Uses the marina logo when
 * available, otherwise an elegant serif wordmark. Includes an accessible,
 * focus-trapped-friendly mobile menu, the phone number, and a Book CTA.
 */
export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll + close on Escape while the mobile menu is open.
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

  // Solid styling whenever scrolled OR the mobile menu is open.
  const solid = scrolled || open;
  const linkColor = solid
    ? "text-pine-800 hover:text-lake-700"
    : "text-white/90 hover:text-white";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ease-soft-out ${
        solid
          ? "border-b border-pine-100 bg-sand-50/90 shadow-soft backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-content items-center justify-between gap-4 px-5 sm:px-6 lg:px-8">
        <Brand solid={solid} />

        {/* Desktop nav (intentionally lean) */}
        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {PRIMARY_NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative text-sm font-medium tracking-wide transition-colors ${linkColor} after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-current after:transition-all after:duration-300 ${
                  active ? "after:w-full" : "after:w-0 hover:after:w-full"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={SITE.phoneHref}
            className={`text-sm font-semibold transition-colors ${
              solid ? "text-lake-700 hover:text-lake-800" : "text-white hover:text-sand-200"
            }`}
          >
            {SITE.phone}
          </a>
          <Link href="/rentals" className="btn-primary px-6 py-2.5 text-sm">
            Book a Boat
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors lg:hidden ${
            solid ? "text-pine-800 hover:bg-pine-100" : "text-white hover:bg-white/15"
          }`}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span aria-hidden="true" className="text-2xl leading-none">
            {open ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Primary mobile"
          className="border-t border-pine-100 bg-sand-50 lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-content flex-col px-5 py-3 sm:px-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block border-b border-pine-100/70 py-3.5 text-base font-medium text-pine-800 transition-colors hover:text-lake-700"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex flex-col gap-3 pt-5">
              <a href={SITE.phoneHref} className="font-semibold text-lake-700">
                Call {SITE.phone}
              </a>
              <Link href="/rentals" className="btn-primary" onClick={() => setOpen(false)}>
                Book a Boat
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

function Brand({ solid }: { solid: boolean }) {
  return (
    <Link href="/" aria-label={`${SITE.name} — home`} className="transition-opacity hover:opacity-90">
      <Logo tone={solid ? "brand" : "light"} />
    </Link>
  );
}
