"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { label: "Stay",        href: "/accommodations" },
  { label: "Experiences", href: "/activities" },
  { label: "Gallery",     href: "/gallery" },
  { label: "About",       href: "/#about" },
  { label: "Contact",     href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled]   = useState(false);
  const [open,    setOpen]        = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(13,31,23,0.97)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(201,168,76,0.12)" : "none",
        padding: scrolled ? "0" : "0",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div
            className="w-9 h-9 flex items-center justify-center"
            style={{
              background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
              clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
            }}
          >
            <span style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontStyle: "italic", color: "var(--ink)", fontSize: "0.85rem", fontWeight: 700 }}>
              LS
            </span>
          </div>
          <div>
            <div style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "white", fontSize: "1.15rem", fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
              Lake Sonoma
            </div>
            <div style={{ color: "var(--gold)", fontSize: "0.58rem", letterSpacing: "0.24em", textTransform: "uppercase", lineHeight: 1 }}>
              Resort & Retreat
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="relative group text-xs font-semibold tracking-[0.16em] uppercase transition-colors"
              style={{ color: "rgba(255,255,255,0.75)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.75)")}
            >
              {l.label}
              <span
                className="absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                style={{ background: "var(--gold)" }}
              />
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="tel:+17075551234"
            className="flex items-center gap-2 text-xs tracking-wide transition-colors"
            style={{ color: "rgba(255,255,255,0.5)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
          >
            <Phone size={12} />
            (707) 555-1234
          </a>
          <Link href="/#booking-widget" className="btn-gold" style={{ padding: "0.75rem 1.8rem", fontSize: "0.68rem" }}>
            Reserve Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: "rgba(13,31,23,0.98)", borderTop: "1px solid rgba(201,168,76,0.12)" }}
          >
            <div className="px-8 py-8 space-y-6">
              {links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block text-sm font-semibold tracking-[0.18em] uppercase"
                  style={{ color: "rgba(255,255,255,0.8)" }}
                >
                  {l.label}
                </Link>
              ))}
              <Link href="/#booking-widget" onClick={() => setOpen(false)} className="btn-gold mt-4 w-full justify-center">
                Reserve Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
