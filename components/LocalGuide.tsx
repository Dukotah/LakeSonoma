"use client";

import { motion } from "framer-motion";
import { MapPin, Clock } from "lucide-react";

const spots = [
  { name: "Alexander Valley Wineries", dist: "8 mi", time: "12 min", cat: "Wine",   color: "#7c3aed" },
  { name: "Healdsburg Plaza",          dist: "14 mi", time: "20 min", cat: "Town",   color: "#0284c7" },
  { name: "Lake Sonoma Trails",        dist: "0.5 mi",time: "1 min",  cat: "Nature", color: "#15803d" },
  { name: "Dry Creek Valley",          dist: "6 mi",  time: "10 min", cat: "Wine",   color: "#7c3aed" },
  { name: "Russian River Valley",      dist: "20 mi", time: "28 min", cat: "Wine",   color: "#7c3aed" },
  { name: "Armstrong Redwoods",        dist: "25 mi", time: "35 min", cat: "Nature", color: "#15803d" },
  { name: "Bodega Bay Coast",          dist: "45 mi", time: "55 min", cat: "Coast",  color: "#0369a1" },
  { name: "Cloverdale Market",         dist: "18 mi", time: "22 min", cat: "Food",   color: "#b45309" },
];

export default function LocalGuide() {
  return (
    <section id="about" className="bg-linen py-28 md:py-36">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="mb-20">
          <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="eyebrow block mb-4">
            Location & Area Guide
          </motion.span>
          <div className="section-rule" />
          <div className="grid lg:grid-cols-2 gap-8 items-end">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="heading-serif" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", color: "var(--ink)" }}>
              Everything Wine Country<br />Has to Offer
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ color: "var(--stone)", lineHeight: 1.8, fontSize: "1rem", maxWidth: 420 }}>
              Situated at the heart of Northern California&apos;s most celebrated wine region,
              our resort gives you effortless access to world-class wineries, ancient forests,
              and pristine coastline — all within an hour.
            </motion.p>
          </div>
        </div>

        {/* Two-col layout */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">

          {/* Map panel */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative overflow-hidden"
            style={{ height: 520 }}>

            {/* Topographic map scene */}
            <div className="absolute inset-0"
              style={{ background: "linear-gradient(160deg, #041a0e 0%, #0a2d1a 25%, #0f3d22 45%, #165030 65%, #1a5c36 80%, #0f3d22 100%)" }} />

            {/* Topo rings */}
            {[...Array(8)].map((_, i) => (
              <div key={i} className="absolute rounded-full pointer-events-none"
                style={{
                  width: `${(i + 1) * 12}%`,
                  height: `${(i + 1) * 12}%`,
                  border: "1px solid rgba(201,168,76,0.08)",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                }} />
            ))}

            {/* Roads */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <line x1="0" y1="50%" x2="100%" y2="48%" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeDasharray="8,5" />
              <line x1="35%" y1="0" x2="40%" y2="100%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" strokeDasharray="6,4" />
              <path d="M 0 70% Q 30% 65% 50% 50% T 100% 40%" stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none" strokeDasharray="6,4" />
            </svg>

            {/* Attraction dots */}
            {[
              { x: "50%", y: "50%", label: "Lake Sonoma Resort", main: true },
              { x: "62%", y: "38%", label: "Alexander Valley" },
              { x: "68%", y: "58%", label: "Healdsburg" },
              { x: "35%", y: "44%", label: "Dry Creek Valley" },
              { x: "28%", y: "65%", label: "Russian River" },
              { x: "20%", y: "30%", label: "Armstrong Redwoods" },
            ].map((dot, i) => (
              <div key={i} className="absolute" style={{ left: dot.x, top: dot.y, transform: "translate(-50%, -50%)" }}>
                {dot.main ? (
                  <div className="relative">
                    <div className="w-4 h-4 rounded-full animate-ping absolute"
                      style={{ background: "rgba(201,168,76,0.4)" }} />
                    <div className="w-4 h-4 rounded-full relative"
                      style={{ background: "var(--gold)", boxShadow: "0 0 12px rgba(201,168,76,0.8)" }} />
                  </div>
                ) : (
                  <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,255,255,0.5)" }} />
                )}
                {dot.main && (
                  <div className="absolute left-5 top-1/2 -translate-y-1/2 whitespace-nowrap px-2.5 py-1.5"
                    style={{ background: "rgba(4,18,10,0.9)", backdropFilter: "blur(8px)" }}>
                    <div style={{ color: "var(--gold)", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em" }}>YOU ARE HERE</div>
                    <div style={{ color: "white", fontSize: "0.72rem", marginTop: 1 }}>{dot.label}</div>
                  </div>
                )}
              </div>
            ))}

            {/* Overlay gradient */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(0deg, rgba(4,18,10,0.6) 0%, transparent 60%)" }} />

            {/* Address card */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
              <div>
                <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase" }}>Address</div>
                <div className="font-semibold text-white mt-0.5" style={{ fontSize: "0.9rem" }}>Geyserville, CA 95441</div>
              </div>
              <a href="https://maps.google.com/?q=Lake+Sonoma+California"
                target="_blank" rel="noopener noreferrer"
                className="px-4 py-2.5 text-xs font-bold tracking-[0.14em] uppercase transition-all"
                style={{ border: "1.5px solid rgba(201,168,76,0.5)", color: "var(--gold)", background: "transparent" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(201,168,76,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                Get Directions
              </a>
            </div>
          </motion.div>

          {/* Attractions list */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="space-y-2">
            {spots.map((s, i) => (
              <motion.div key={s.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-5 px-6 py-5 transition-all duration-300 cursor-default"
                style={{
                  background: "white",
                  border: "1px solid var(--cream-dark)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.background = "var(--cream)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--cream-dark)"; e.currentTarget.style.background = "white"; }}
              >
                {/* Category dot */}
                <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: s.color }} />

                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-sm" style={{ color: "var(--ink)", marginBottom: 1 }}>{s.name}</div>
                  <div style={{ color: "var(--stone)", fontSize: "0.72rem", letterSpacing: "0.06em" }}>{s.cat}</div>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="flex items-center gap-1.5" style={{ color: "var(--stone)", fontSize: "0.75rem" }}>
                    <MapPin size={11} />
                    {s.dist}
                  </div>
                  <div className="flex items-center gap-1.5" style={{ color: "var(--stone)", fontSize: "0.75rem" }}>
                    <Clock size={11} />
                    {s.time}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Driving note */}
            <div className="mt-6 px-6 py-5" style={{ background: "var(--ink)" }}>
              <div className="eyebrow mb-2" style={{ color: "var(--gold)" }}>Getting Here</div>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", lineHeight: 1.7 }}>
                We&apos;re 75 minutes north of San Francisco via US-101. Private airport transfers
                from SFO or STS can be arranged through our concierge team.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
