"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  {
    label: "Stay",
    href: "/accommodations",
    children: [
      { label: "Lakeside Cabins", href: "/accommodations#lakeside" },
      { label: "Forest Retreats", href: "/accommodations#forest" },
      { label: "The Estate House", href: "/accommodations#estate" },
    ],
  },
  {
    label: "Experiences",
    href: "/activities",
    children: [
      { label: "Wine & Dining", href: "/activities#wine" },
      { label: "Water Activities", href: "/activities#water" },
      { label: "Spa & Wellness", href: "/activities#spa" },
      { label: "Outdoor Adventures", href: "/activities#outdoor" },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ background: scrolled ? "var(--forest-700)" : "rgba(255,255,255,0.15)", border: "1px solid rgba(212,175,55,0.6)" }}>
              <span className="text-gold-400 font-serif font-bold text-sm" style={{ color: "#D4AF37" }}>LS</span>
            </div>
            <div>
              <div className={`font-serif font-bold text-xl leading-none transition-colors ${scrolled ? "text-gray-900" : "text-white"}`}
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                Lake Sonoma
              </div>
              <div className={`text-xs tracking-[0.2em] uppercase transition-colors ${scrolled ? "text-gray-500" : "text-white/70"}`}>
                Resort & Retreat
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.label} className="relative"
                onMouseEnter={() => link.children && setOpenDropdown(link.label)}
                onMouseLeave={() => setOpenDropdown(null)}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-1 text-sm font-medium tracking-wide transition-colors hover:text-gold-500 ${
                    scrolled ? "text-gray-700" : "text-white/90"
                  }`}
                  style={openDropdown === link.label ? { color: "#D4AF37" } : {}}
                >
                  {link.label}
                  {link.children && <ChevronDown size={14} className={`transition-transform ${openDropdown === link.label ? "rotate-180" : ""}`} />}
                </Link>
                <AnimatePresence>
                  {link.children && openDropdown === link.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-52 bg-white shadow-2xl rounded-sm border border-gray-100 py-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 transition-colors"
                          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+17075551234" className={`flex items-center gap-2 text-sm transition-colors ${scrolled ? "text-gray-600 hover:text-green-800" : "text-white/80 hover:text-white"}`}>
              <Phone size={14} />
              <span>(707) 555-1234</span>
            </a>
            <Link href="/#booking" className="btn-primary text-xs py-3 px-6" style={{
              background: "#D4AF37",
              color: "white",
              display: "inline-flex",
              alignItems: "center",
              padding: "0.75rem 1.5rem",
              fontWeight: 600,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              transition: "all 0.3s",
            }}>
              Book Your Stay
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className={`lg:hidden p-2 rounded transition-colors ${scrolled ? "text-gray-700" : "text-white"}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link) => (
                <div key={link.label}>
                  <Link
                    href={link.href}
                    className="block py-3 text-gray-800 font-medium border-b border-gray-100 hover:text-green-800 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                  {link.children && (
                    <div className="pl-4 space-y-1 py-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-green-800 transition-colors"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link href="/#booking" className="block w-full text-center py-4 font-semibold text-sm tracking-wider uppercase text-white"
                  style={{ background: "#D4AF37" }}
                  onClick={() => setMobileOpen(false)}>
                  Book Your Stay
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
