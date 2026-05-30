"use client";

import { motion } from "framer-motion";
import {
  Waves, Utensils, Sparkles, Mountain, Wine, Dumbbell,
  Flame, Wifi, Car, Dog, Camera, Sailboat
} from "lucide-react";

const amenities = [
  { icon: Waves, title: "Private Lake Access", desc: "Direct shoreline access with dock, kayaks, paddleboards, and canoes included." },
  { icon: Utensils, title: "Chef-Grade Kitchens", desc: "Sub-Zero refrigerators, Wolf ranges, and every tool for memorable meals." },
  { icon: Sparkles, title: "Spa Experiences", desc: "In-cabin spa services available. Soaking tubs, saunas, and massage upon request." },
  { icon: Mountain, title: "Hiking & Trails", desc: "Access to 35+ miles of private trails through old-growth redwoods and meadows." },
  { icon: Wine, title: "Wine Concierge", desc: "Curated welcome wines, vineyard tour arrangements, and private tastings." },
  { icon: Dumbbell, title: "Fitness Center", desc: "Full gym facility with Peloton bikes, free weights, and yoga studio." },
  { icon: Flame, title: "Fire Pits & Fireplaces", desc: "Every cabin features a stone fireplace and private outdoor fire pit." },
  { icon: Wifi, title: "High-Speed WiFi", desc: "Fiber internet throughout. Stay connected or completely unplug — your choice." },
  { icon: Car, title: "Complimentary Parking", desc: "Secure private parking for up to 4 vehicles per cabin." },
  { icon: Dog, title: "Pet-Friendly Options", desc: "Select cabins welcome your furry family members. Ask about our pet amenities." },
  { icon: Camera, title: "Photography Sessions", desc: "Professional sunset portrait sessions available for couples and families." },
  { icon: Sailboat, title: "Guided Lake Tours", desc: "Sunset pontoon tours and guided fishing excursions with local guides." },
];

export default function AmenitiesSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#1B4332" }}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3" style={{ color: "#D4AF37" }}>
            What&apos;s Included
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            Resort Amenities & Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto mt-4 text-lg">
            Every stay comes with access to our full suite of amenities. No surprises, no hidden fees —
            just exceptional experiences from arrival to departure.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {amenities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex gap-4 p-5 rounded-sm border border-white/10 hover:border-gold-500 hover:bg-white/5 transition-all duration-300"
              style={{ cursor: "default" }}
            >
              <div className="shrink-0 w-10 h-10 rounded-sm flex items-center justify-center transition-colors"
                style={{ background: "rgba(212,175,55,0.15)" }}>
                <item.icon size={18} style={{ color: "#D4AF37" }} />
              </div>
              <div>
                <div className="text-white font-semibold text-sm mb-1">{item.title}</div>
                <div className="text-white/50 text-xs leading-relaxed">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16">
          <p className="text-white/60 mb-6">Have specific requirements? Our concierge team is here to customize your stay.</p>
          <a href="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 font-semibold text-sm tracking-[0.15em] uppercase transition-all duration-300"
            style={{ border: "2px solid #D4AF37", color: "#D4AF37" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#D4AF37"; e.currentTarget.style.color = "#1B4332"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#D4AF37"; }}>
            Speak with Concierge
          </a>
        </motion.div>
      </div>
    </section>
  );
}
