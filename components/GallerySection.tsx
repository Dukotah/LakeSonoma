"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";

const items = [
  { id: 1, label: "Osprey Point at Golden Hour",   cat: "Cabin",     color: "linear-gradient(145deg, #051c10, #0d3520, #1a5535, #2a7a4a)", emoji: "🏡", span: "col-span-2 row-span-2" },
  { id: 2, label: "Morning Mist on the Lake",       cat: "Nature",    color: "linear-gradient(145deg, #050e18, #0a1e30, #0f3045, #1a4860)", emoji: "🌫️", span: "" },
  { id: 3, label: "Private Hot Tub Under Stars",    cat: "Amenity",   color: "linear-gradient(145deg, #040812, #0a1028, #12203a, #1a2e50)", emoji: "🛁", span: "" },
  { id: 4, label: "Cedar Ridge Forest Path",        cat: "Nature",    color: "linear-gradient(145deg, #030e06, #071a0c, #0f2a14, #18401e)", emoji: "🌲", span: "" },
  { id: 5, label: "Vineyard Villa Pool",             cat: "Amenity",   color: "linear-gradient(145deg, #030820, #080f38, #101850, #1a2568)", emoji: "🏊", span: "" },
  { id: 6, label: "Sunset Wine Pairing Dinner",     cat: "Dining",    color: "linear-gradient(145deg, #1a0810, #2d1020, #421525, #581e30)", emoji: "🍷", span: "col-span-2" },
  { id: 7, label: "Guided Kayak at Dawn",           cat: "Activity",  color: "linear-gradient(145deg, #031820, #063040, #0a4858, #126570)", emoji: "🚣", span: "" },
  { id: 8, label: "Fire Pit Evening",               cat: "Cabin",     color: "linear-gradient(145deg, #1a0808, #300f0f, #481515, #601a1a)", emoji: "🔥", span: "" },
  { id: 9, label: "Redwood Haven Deck",             cat: "Cabin",     color: "linear-gradient(145deg, #0a1208, #142018, #1e3022, #284030)", emoji: "🌿", span: "" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<typeof items[0] | null>(null);

  return (
    <section className="py-28 md:py-36" style={{ background: "white" }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="eyebrow block mb-4">
              Photo Gallery
            </motion.span>
            <div className="section-rule" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="heading-serif" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", color: "var(--ink)" }}>
              Life at the Lake
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/gallery" className="hidden md:flex items-center gap-2 text-xs font-bold tracking-[0.14em] uppercase group" style={{ color: "var(--forest)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-dim)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--forest)")}>
              Full Gallery <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3" style={{ height: "clamp(480px, 60vw, 720px)" }}>
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              onClick={() => setSelected(item)}
              className={`relative overflow-hidden cursor-pointer group ${item.span}`}
            >
              <div
                className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                style={{ background: item.color }}
              />
              {/* Scene texture */}
              <div className="absolute inset-0 flex items-center justify-center" style={{ fontSize: "5rem", opacity: 0.12 }}>
                {item.emoji}
              </div>
              {/* Diagonal lines */}
              <svg className="absolute inset-0 w-full h-full opacity-5" preserveAspectRatio="none">
                <defs>
                  <pattern id={`lines-${item.id}`} patternUnits="userSpaceOnUse" width="20" height="20">
                    <line x1="0" y1="20" x2="20" y2="0" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill={`url(#lines-${item.id})`} />
              </svg>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-start justify-end p-5">
                <span className="eyebrow mb-1.5" style={{ color: "rgba(201,168,76,0.8)" }}>{item.cat}</span>
                <span className="text-white font-semibold text-sm leading-tight">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(0,0,0,0.92)", backdropFilter: "blur(16px)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.45 }}
              className="relative w-full max-w-3xl aspect-video overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute inset-0" style={{ background: selected.color }} />
              <div className="absolute inset-0 flex items-center justify-center" style={{ fontSize: "10rem", opacity: 0.12 }}>
                {selected.emoji}
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-10 py-8"
                style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}>
                <span className="eyebrow block mb-1.5">{selected.cat}</span>
                <div className="heading-serif text-white" style={{ fontSize: "1.5rem" }}>{selected.label}</div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center text-white transition-colors"
                style={{ background: "rgba(0,0,0,0.4)", backdropFilter: "blur(8px)" }}
              >
                <X size={16} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
