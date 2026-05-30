"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Heart, Share2 } from "lucide-react";

const footerLinks = {
  Stay: [
    { label: "Lakeside Cabins", href: "/accommodations#lakeside" },
    { label: "Forest Retreats", href: "/accommodations#forest" },
    { label: "The Estate House", href: "/accommodations#estate" },
    { label: "All Properties", href: "/accommodations" },
    { label: "Availability Calendar", href: "/#booking-widget" },
  ],
  Experiences: [
    { label: "Wine & Dining", href: "/activities#wine" },
    { label: "Water Activities", href: "/activities#water" },
    { label: "Spa & Wellness", href: "/activities#spa" },
    { label: "Outdoor Adventures", href: "/activities#outdoor" },
    { label: "All Experiences", href: "/activities" },
  ],
  Info: [
    { label: "About Us", href: "/#about" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Local Area Guide", href: "/#local" },
    { label: "Gift Cards", href: "/contact" },
  ],
  Policies: [
    { label: "Booking Policy", href: "/contact#policies" },
    { label: "Cancellation Policy", href: "/contact#policies" },
    { label: "Pet Policy", href: "/contact#policies" },
    { label: "FAQ", href: "/contact#faq" },
    { label: "Privacy Policy", href: "/contact#privacy" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#0a1e30" }}>
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: "rgba(212,175,55,0.15)", border: "1px solid rgba(212,175,55,0.4)" }}>
                <span className="font-serif font-bold text-sm" style={{ color: "#D4AF37" }}>LS</span>
              </div>
              <div>
                <div className="font-serif font-bold text-xl text-white leading-none"
                  style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>Lake Sonoma</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/40">Resort & Retreat</div>
              </div>
            </Link>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Luxury lakeside retreats in the heart of Sonoma wine country.
              Where the lake meets the vine, and every moment becomes a memory.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Globe, label: "Website" },
                { icon: Heart, label: "Favorites" },
                { icon: Share2, label: "Share" },
              ].map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
                  className="w-9 h-9 rounded-sm flex items-center justify-center transition-all"
                  style={{ background: "rgba(255,255,255,0.07)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,175,55,0.2)"; (e.currentTarget.firstChild as SVGElement).style.color = "#D4AF37"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; (e.currentTarget.firstChild as SVGElement).style.color = "rgba(255,255,255,0.5)"; }}>
                  <Icon size={16} style={{ color: "rgba(255,255,255,0.5)", transition: "color 0.2s" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <div className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5">{category}</div>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}
                      className="text-white/45 text-sm hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a href="tel:+17075551234" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: "rgba(212,175,55,0.15)" }}>
                <Phone size={14} style={{ color: "#D4AF37" }} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-[0.1em]">Call Us</div>
                <div className="text-white/70 text-sm group-hover:text-white transition-colors">(707) 555-1234</div>
              </div>
            </a>
            <a href="mailto:hello@lakesonoma.com" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: "rgba(212,175,55,0.15)" }}>
                <Mail size={14} style={{ color: "#D4AF37" }} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-[0.1em]">Email</div>
                <div className="text-white/70 text-sm group-hover:text-white transition-colors">hello@lakesonoma.com</div>
              </div>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center shrink-0"
                style={{ background: "rgba(212,175,55,0.15)" }}>
                <MapPin size={14} style={{ color: "#D4AF37" }} />
              </div>
              <div>
                <div className="text-xs text-white/40 uppercase tracking-[0.1em]">Location</div>
                <div className="text-white/70 text-sm">Geyserville, CA 95441</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-white/30 text-xs">
              © {new Date().getFullYear()} Lake Sonoma Resort & Retreat. All rights reserved.
            </div>
            <div className="flex gap-6 text-white/30 text-xs">
              <Link href="/contact#privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
              <Link href="/contact#policies" className="hover:text-white/60 transition-colors">Terms</Link>
              <Link href="/contact#policies" className="hover:text-white/60 transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
