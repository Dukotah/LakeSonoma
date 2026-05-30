"use client";

import Link from "next/link";
import { Phone, Mail, MapPin, Globe, Share2, Heart } from "lucide-react";

const cols = {
  Stay: [
    { l: "Lakeside Cabins",   h: "/accommodations#lakeside" },
    { l: "Forest Retreats",   h: "/accommodations#forest"   },
    { l: "The Estate House",  h: "/accommodations#estate"   },
    { l: "All 12 Properties", h: "/accommodations"          },
    { l: "Check Availability",h: "/#booking-widget"         },
  ],
  Experiences: [
    { l: "Wine & Dining",    h: "/activities#wine"    },
    { l: "Water Activities", h: "/activities#water"   },
    { l: "Spa & Wellness",   h: "/activities#spa"     },
    { l: "Outdoor Adventure",h: "/activities#outdoor" },
    { l: "All Experiences",  h: "/activities"         },
  ],
  Discover: [
    { l: "Photo Gallery",   h: "/gallery"  },
    { l: "Area Guide",      h: "/#about"   },
    { l: "Guest Reviews",   h: "/#reviews" },
    { l: "Gift Cards",      h: "/contact"  },
    { l: "Press & Awards",  h: "/contact"  },
  ],
  Policies: [
    { l: "Booking Policy",      h: "/contact#policies" },
    { l: "Cancellation Policy", h: "/contact#policies" },
    { l: "Pet Policy",          h: "/contact#policies" },
    { l: "FAQ",                 h: "/contact#faq"      },
    { l: "Privacy Policy",      h: "/contact#privacy"  },
  ],
};

const socials = [
  { icon: Globe,  label: "Website" },
  { icon: Heart,  label: "Save"    },
  { icon: Share2, label: "Share"   },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)" }}>

      {/* Gold rule */}
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent 0%, var(--gold) 30%, var(--gold-lt) 50%, var(--gold) 70%, transparent 100%)" }} />

      {/* Main content */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 pt-20 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-16">

          {/* Brand column */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-7">
              <div
                className="w-10 h-10 flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                  clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              >
                <span style={{ fontFamily: "var(--font-playfair, Georgia, serif)", fontStyle: "italic", color: "var(--ink)", fontSize: "0.9rem", fontWeight: 700 }}>LS</span>
              </div>
              <div>
                <div className="heading-serif text-white" style={{ fontSize: "1.2rem", lineHeight: 1.1 }}>Lake Sonoma</div>
                <div className="eyebrow" style={{ color: "var(--gold)", fontSize: "0.56rem" }}>Resort & Retreat</div>
              </div>
            </Link>

            <p style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Luxury lakeside retreats in the heart of Sonoma wine country.
              Where the lake meets the vine, and every moment becomes a memory.
            </p>

            {/* Socials */}
            <div className="flex gap-2.5 mb-10">
              {socials.map(({ icon: Icon, label }) => (
                <a key={label} href="#" aria-label={label}
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
                  }}>
                  <Icon size={15} />
                </a>
              ))}
            </div>

            {/* Contact */}
            <div className="space-y-3">
              {[
                { icon: Phone, text: "(707) 555-1234",            href: "tel:+17075551234" },
                { icon: Mail,  text: "hello@lakesonoma.com",       href: "mailto:hello@lakesonoma.com" },
                { icon: MapPin,text: "Geyserville, CA 95441",      href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <a key={text} href={href}
                  className="flex items-center gap-3 text-sm transition-colors"
                  style={{ color: "rgba(255,255,255,0.38)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.38)")}>
                  <Icon size={13} style={{ flexShrink: 0 }} />
                  {text}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {Object.entries(cols).map(([heading, links]) => (
              <div key={heading}>
                <div className="eyebrow mb-5" style={{ color: "rgba(255,255,255,0.25)" }}>{heading}</div>
                <ul className="space-y-3">
                  {links.map((l) => (
                    <li key={l.l}>
                      <Link href={l.h}
                        className="text-sm transition-colors"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                        {l.l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.72rem" }}>
            © {new Date().getFullYear()} Lake Sonoma Resort & Retreat. All rights reserved.
          </span>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Sitemap"].map((t) => (
              <Link key={t} href="/contact"
                className="text-xs transition-colors"
                style={{ color: "rgba(255,255,255,0.2)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.2)")}>
                {t}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
