"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Heart, Share2 } from "lucide-react";

const cols = {
  Stay: [
    { l: "Lakeside Cabins",   h: "/accommodations#lakeside" },
    { l: "Forest Retreats",   h: "/accommodations#forest" },
    { l: "The Estate House",  h: "/accommodations#estate" },
    { l: "All 12 Properties", h: "/accommodations" },
    { l: "Availability",      h: "/#booking-widget" },
  ],
  Experiences: [
    { l: "Wine & Dining",      h: "/activities#wine" },
    { l: "Water Activities",   h: "/activities#water" },
    { l: "Spa & Wellness",     h: "/activities#spa" },
    { l: "Outdoor Adventure",  h: "/activities#outdoor" },
  ],
  Info: [
    { l: "About Us",     h: "/#about" },
    { l: "Gallery",      h: "/gallery" },
    { l: "Reviews",      h: "/#reviews" },
    { l: "Local Guide",  h: "/#local" },
    { l: "Gift Cards",   h: "/contact" },
  ],
  Policies: [
    { l: "Booking Policy",      h: "/contact#policies" },
    { l: "Cancellation",        h: "/contact#policies" },
    { l: "Pet Policy",          h: "/contact#policies" },
    { l: "FAQ",                 h: "/contact#faq" },
    { l: "Privacy Policy",      h: "/contact#privacy" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "#060e09" }}>
      <div
        className="h-[3px]"
        style={{ background: "linear-gradient(90deg, transparent, var(--gold-dim), var(--gold), var(--gold-dim), transparent)" }}
      />

      {/* Main */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12">

          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
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
                <div style={{ fontFamily: "var(--font-playfair, Georgia, serif)", color: "white", fontSize: "1.1rem", fontWeight: 700, lineHeight: 1.1 }}>
                  Lake Sonoma
                </div>
                <div style={{ color: "var(--gold)", fontSize: "0.55rem", letterSpacing: "0.22em", textTransform: "uppercase" }}>
                  Resort & Retreat
                </div>
              </div>
            </Link>

            <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.85rem", lineHeight: 1.8, maxWidth: 280, marginBottom: "1.8rem" }}>
              Luxury lakeside retreats where the wild beauty of Northern California
              and curated hospitality exist in perfect balance.
            </p>

            {/* Social row */}
            <div className="flex gap-2.5">
              {[
                { icon: Globe,  label: "Website" },
                { icon: Heart,  label: "Save" },
                { icon: Share2, label: "Share" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center transition-all"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "var(--gold)";
                    e.currentTarget.style.color = "var(--gold)";
                    e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.35)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(cols).map(([head, links]) => (
            <div key={head}>
              <div
                className="text-xs font-bold tracking-[0.2em] uppercase mb-6"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                {head}
              </div>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.l}>
                    <Link
                      href={l.h}
                      className="text-xs transition-colors"
                      style={{ color: "rgba(255,255,255,0.32)", letterSpacing: "0.02em" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}
                    >
                      {l.l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div
          className="mt-16 pt-10 flex flex-wrap gap-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          {[
            { icon: Phone,  text: "(707) 555-1234",             href: "tel:+17075551234" },
            { icon: Mail,   text: "hello@lakesonoma.com",       href: "mailto:hello@lakesonoma.com" },
            { icon: MapPin, text: "Geyserville, CA 95441",      href: "#" },
          ].map(({ icon: Icon, text, href }) => (
            <a
              key={text}
              href={href}
              className="flex items-center gap-3 group transition-colors"
              style={{ color: "rgba(255,255,255,0.32)", fontSize: "0.82rem" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.32)")}
            >
              <Icon size={13} />
              {text}
            </a>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ color: "rgba(255,255,255,0.18)", fontSize: "0.72rem", letterSpacing: "0.04em" }}>
            © {new Date().getFullYear()} Lake Sonoma Resort & Retreat. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((t) => (
              <Link key={t} href="/contact#policies"
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.18)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.18)")}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
