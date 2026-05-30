"use client";

import { motion } from "framer-motion";
import { Waves, Utensils, Sparkles, Mountain, Wine, Dumbbell, Flame, Wifi, Car, Dog, Camera, Sailboat } from "lucide-react";

const amenities = [
  { icon: Waves,    title: "Private Lake Access",    desc: "Direct shoreline with dock, kayaks, paddleboards, and canoes." },
  { icon: Utensils, title: "Chef-Grade Kitchens",    desc: "Sub-Zero refrigerators, Wolf ranges, every tool for memorable meals." },
  { icon: Sparkles, title: "In-Cabin Spa Services",  desc: "Soaking tubs, saunas, and massage upon request at any hour." },
  { icon: Mountain, title: "35+ Miles of Trails",    desc: "Private hiking network through old-growth redwoods and meadows." },
  { icon: Wine,     title: "Wine Concierge",         desc: "Welcome wines, private vineyard tours, and exclusive tastings arranged." },
  { icon: Dumbbell, title: "Fitness & Yoga",         desc: "Full gym with Peloton, free weights, and a redwood yoga studio." },
  { icon: Flame,    title: "Stone Fireplaces",       desc: "Every cabin features a central stone fireplace and outdoor fire pit." },
  { icon: Wifi,     title: "Fiber Internet",         desc: "High-speed connectivity throughout. Disconnect only if you choose to." },
  { icon: Car,      title: "Private Parking",        desc: "Secure parking for up to four vehicles per cabin." },
  { icon: Dog,      title: "Pet-Friendly Options",   desc: "Select cabins welcome dogs. Ask about our premium pet amenities." },
  { icon: Camera,   title: "Photography Sessions",   desc: "Professional portrait sessions at golden hour on the lake." },
  { icon: Sailboat, title: "Guided Lake Tours",      desc: "Sunset pontoon cruises and guided fishing with local experts." },
];

export default function AmenitiesSection() {
  return (
    <section
      className="relative overflow-hidden py-28 md:py-36"
      style={{ background: "var(--ink)" }}
    >
      {/* Subtle diagonal pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, rgba(255,255,255,0.012) 0px, rgba(255,255,255,0.012) 1px, transparent 1px, transparent 40px)",
        }}
      />
      {/* Green glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 15% 50%, rgba(29,74,40,0.35) 0%, transparent 55%)",
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 85% 30%, rgba(26,58,42,0.25) 0%, transparent 50%)",
      }} />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow block mb-4"
            >
              Everything Included
            </motion.span>
            <div className="section-rule" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-serif text-white"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)" }}
            >
              Resort Amenities<br />& Services
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{ color: "rgba(255,255,255,0.45)", maxWidth: 380, lineHeight: 1.75, fontSize: "0.95rem" }}
          >
            Every amenity is included in your stay. No hidden fees, no à-la-carte surprises —
            just exceptional experiences from the moment you arrive.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px"
          style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.06)" }}>
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.5 }}
              className="group flex gap-5 p-8 transition-all duration-300 cursor-default"
              style={{ background: "var(--ink)" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(29,58,38,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "var(--ink)"; }}
            >
              <div
                className="shrink-0 w-9 h-9 flex items-center justify-center transition-colors duration-300"
                style={{ background: "rgba(201,168,76,0.1)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <item.icon size={16} style={{ color: "var(--gold)" }} />
              </div>
              <div>
                <div className="font-semibold mb-1.5 text-sm text-white" style={{ letterSpacing: "0.01em" }}>{item.title}</div>
                <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.8rem", lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.9rem" }}>
            Have specific requirements? Our concierge team will make it happen.
          </p>
          <a
            href="/contact"
            className="shrink-0 px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase transition-all"
            style={{ border: "1.5px solid rgba(201,168,76,0.5)", color: "var(--gold)", background: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.1)"; e.currentTarget.style.borderColor = "var(--gold)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(201,168,76,0.5)"; }}
          >
            Speak with Concierge
          </a>
        </motion.div>
      </div>
    </section>
  );
}
