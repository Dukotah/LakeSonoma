"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    num: "01",
    category: "Wine & Dining",
    href: "/activities#wine",
    headline: "Private Wine Country Immersion",
    body: "Exclusive access to five family-owned wineries not open to the public. Barrel tastings, vineyard picnics, and pairings curated by our in-house sommelier.",
    highlights: ["Private cellar tours", "Harvest experiences", "Chef-led pairings", "Farmers market tour"],
    bg: "linear-gradient(145deg, #120620 0%, #1e0835 30%, #2d1055 60%, #3d1a70 80%)",
    accent: "#a78bfa",
  },
  {
    num: "02",
    category: "Water Activities",
    href: "/activities#water",
    headline: "The Lake is Your Playground",
    body: "2,700-acre Lake Sonoma offers world-class bass fishing, kayaking, paddleboarding, and swimming. Launch from your private dock at sunrise.",
    highlights: ["Guided sunrise kayak", "Fishing charter", "Sunset pontoon cruise", "Private swim coves"],
    bg: "linear-gradient(145deg, #031220 0%, #062035 30%, #0a3050 60%, #0f4568 80%)",
    accent: "#38bdf8",
  },
  {
    num: "03",
    category: "Spa & Wellness",
    href: "/activities#spa",
    headline: "Restore Mind, Body & Spirit",
    body: "In-cabin massage therapy, forest bathing, sound bath meditation under the stars, and private yoga on the lakeside deck.",
    highlights: ["In-cabin couples massage", "Sound bath nights", "Forest bathing guide", "Cold plunge & sauna"],
    bg: "linear-gradient(145deg, #1a0810 0%, #2d1020 30%, #421528 60%, #581e34 80%)",
    accent: "#f472b6",
  },
  {
    num: "04",
    category: "Outdoor Adventure",
    href: "/activities#outdoor",
    headline: "Explore Wild Sonoma",
    body: "Guided hikes through old-growth forest, mountain biking on single-track, horseback rides through the vines, and private stargazing with an astronomer.",
    highlights: ["Redwood guided hike", "Mountain biking", "Stargazing nights", "Vineyard horseback"],
    bg: "linear-gradient(145deg, #061408 0%, #0a2010 30%, #102e18 60%, #183d22 80%)",
    accent: "#4ade80",
  },
];

export default function ExperiencesSection() {
  return (
    <section className="bg-linen py-28 md:py-36">
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="eyebrow block mb-4">
              Curated Experiences
            </motion.span>
            <div className="section-rule" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="heading-serif" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", color: "var(--ink)" }}>
              More Than a Stay
            </motion.h2>
          </div>
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            style={{ color: "var(--stone)", maxWidth: 360, lineHeight: 1.75, fontSize: "0.95rem" }}>
            Every experience is thoughtfully curated, expertly guided, and available
            exclusively to Lake Sonoma guests.
          </motion.p>
        </div>

        {/* Experiences stack */}
        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group grid grid-cols-1 lg:grid-cols-[320px_1fr] overflow-hidden"
              style={{ border: "1px solid var(--cream-dark)" }}
            >
              {/* Visual panel */}
              <div
                className="relative overflow-hidden flex flex-col justify-between p-8"
                style={{ background: exp.bg, minHeight: 220 }}
              >
                {/* Decorative number */}
                <div
                  className="display-serif select-none absolute -bottom-4 -right-2 pointer-events-none"
                  style={{ fontSize: "9rem", lineHeight: 1, color: "rgba(255,255,255,0.04)" }}
                >
                  {exp.num}
                </div>
                <div>
                  <div className="eyebrow mb-3" style={{ color: exp.accent }}>{exp.category}</div>
                  <div className="display-serif text-white" style={{ fontSize: "1.05rem" }}>
                    Available Year-Round
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-6 relative z-10">
                  {exp.highlights.map((h) => (
                    <span key={h} className="px-3 py-1 text-xs" style={{
                      background: "rgba(255,255,255,0.08)",
                      border: `1px solid ${exp.accent}30`,
                      color: "rgba(255,255,255,0.7)",
                      letterSpacing: "0.06em",
                    }}>
                      {h}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content panel */}
              <div
                className="flex flex-col justify-between p-8 lg:p-12 transition-colors duration-300"
                style={{ background: "white" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--cream)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                <div>
                  <h3
                    className="heading-serif mb-5"
                    style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)", color: "var(--ink)" }}
                  >
                    {exp.headline}
                  </h3>
                  <p style={{ color: "var(--stone)", lineHeight: 1.8, fontSize: "1rem", maxWidth: 560 }}>
                    {exp.body}
                  </p>
                </div>
                <Link
                  href={exp.href}
                  className="inline-flex items-center gap-2 mt-8 text-xs font-bold tracking-[0.16em] uppercase transition-colors group/link"
                  style={{ color: "var(--forest)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-dim)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--forest)")}
                >
                  Explore {exp.category}
                  <ArrowUpRight size={13} className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
