"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const experiences = [
  {
    category: "Wine & Dining",
    href: "/activities#wine",
    headline: "Private Wine Country Immersion",
    description: "Explore 50+ boutique wineries in Alexander Valley. Our wine concierge arranges exclusive barrel tastings, vineyard picnics, and pairings with local artisan chefs.",
    highlights: ["Private cellar tours", "Harvest experiences", "Chef-led tastings", "Wine education"],
    color: "from-purple-950 to-indigo-900",
    accent: "#9333ea",
    number: "01",
  },
  {
    category: "Water Activities",
    href: "/activities#water",
    headline: "The Lake is Your Playground",
    description: "2,700-acre Lake Sonoma offers world-class bass fishing, kayaking, paddleboarding, and swimming. Launch from your private dock at sunrise.",
    highlights: ["Kayak & paddleboard", "Guided fishing", "Sunset pontoon tours", "Swimming coves"],
    color: "from-blue-950 to-teal-900",
    accent: "#0ea5e9",
    number: "02",
  },
  {
    category: "Spa & Wellness",
    href: "/activities#spa",
    headline: "Restore Mind, Body & Spirit",
    description: "From in-cabin massage therapy to forest bathing sessions, our wellness offerings are designed to leave you profoundly restored.",
    highlights: ["In-cabin massage", "Sound bath sessions", "Yoga in the redwoods", "Couples retreats"],
    color: "from-rose-950 to-pink-900",
    accent: "#e11d48",
    number: "03",
  },
  {
    category: "Outdoor Adventures",
    href: "/activities#outdoor",
    headline: "Explore Wild Sonoma",
    description: "Guided hikes through old-growth forest, mountain biking on single-track trails, stargazing with a private astronomer — adventure in every direction.",
    highlights: ["Guided hike tours", "Mountain biking", "Stargazing nights", "Wildlife photography"],
    color: "from-green-950 to-emerald-900",
    accent: "#10b981",
    number: "04",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="py-24 md:py-32" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3" style={{ color: "#D4AF37" }}>
            Curated Experiences
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            More Than a Stay
          </motion.h2>
        </div>

        {/* Experiences */}
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-0 rounded-sm overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500`}
            >
              {/* Visual panel */}
              <div className={`relative lg:w-2/5 h-72 lg:h-auto bg-gradient-to-br ${exp.color} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)",
                    backgroundSize: "30px 30px",
                  }} />
                <div className="relative z-10 text-center text-white p-8">
                  <div className="text-8xl font-serif font-bold opacity-20 absolute top-4 right-8"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{exp.number}</div>
                  <div className="text-xs tracking-[0.3em] uppercase mb-3" style={{ color: exp.accent }}>
                    {exp.category}
                  </div>
                  <div className="text-5xl mb-4">
                    {exp.category === "Wine & Dining" ? "🍷" :
                     exp.category === "Water Activities" ? "🚣" :
                     exp.category === "Spa & Wellness" ? "✨" : "🏔️"}
                  </div>
                  <div className="text-white/60 text-sm">Available year-round</div>
                </div>
              </div>

              {/* Content panel */}
              <div className="lg:w-3/5 bg-white p-8 md:p-12 flex flex-col justify-center">
                <div className="text-xs font-semibold tracking-[0.2em] uppercase mb-3" style={{ color: exp.accent }}>
                  {exp.category}
                </div>
                <h3 className="text-3xl font-serif mb-4" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                  {exp.headline}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                  {exp.description}
                </p>
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {exp.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: `${exp.accent}20` }}>
                        <div className="w-1.5 h-1.5 rounded-full" style={{ background: exp.accent }} />
                      </div>
                      {h}
                    </div>
                  ))}
                </div>
                <Link href={exp.href}
                  className="inline-flex items-center gap-2 font-semibold text-sm tracking-wide group"
                  style={{ color: "#1B4332" }}>
                  <span>Explore {exp.category}</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
