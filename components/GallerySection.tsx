"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

const galleryItems = [
  { id: 1, label: "Lakeside Cabin — Osprey Point", color: "from-blue-900 to-teal-800", aspect: "tall", emoji: "🏡" },
  { id: 2, label: "Golden Hour on the Lake", color: "from-amber-900 to-orange-800", aspect: "wide", emoji: "🌅" },
  { id: 3, label: "Cedar Ridge Forest Bath", color: "from-green-900 to-emerald-800", aspect: "square", emoji: "🌲" },
  { id: 4, label: "Private Hot Tub at Dusk", color: "from-purple-900 to-blue-900", aspect: "square", emoji: "🛁" },
  { id: 5, label: "Vineyard Villa Pool", color: "from-teal-900 to-cyan-800", aspect: "tall", emoji: "🏊" },
  { id: 6, label: "Chef Kitchen Details", color: "from-stone-800 to-gray-900", aspect: "wide", emoji: "👨‍🍳" },
  { id: 7, label: "Morning Kayak on the Lake", color: "from-sky-900 to-blue-800", aspect: "wide", emoji: "🚣" },
  { id: 8, label: "Fire Pit Evening", color: "from-red-900 to-orange-900", aspect: "square", emoji: "🔥" },
  { id: 9, label: "Vineyard Views", color: "from-green-800 to-lime-900", aspect: "tall", emoji: "🍇" },
];

export default function GallerySection() {
  const [selected, setSelected] = useState<(typeof galleryItems)[0] | null>(null);

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3" style={{ color: "#D4AF37" }}>
              Photo Gallery
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              Life at the Lake
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link href="/gallery"
              className="flex items-center gap-2 font-semibold text-sm tracking-wide"
              style={{ color: "#1B4332" }}>
              View Full Gallery →
            </Link>
          </motion.div>
        </div>

        {/* Masonry grid */}
        <div className="columns-2 md:columns-3 gap-3 space-y-3">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden rounded-sm cursor-pointer group break-inside-avoid mb-3
                ${item.aspect === "tall" ? "h-80 md:h-96" : item.aspect === "wide" ? "h-52 md:h-60" : "h-64 md:h-72"}`}
              onClick={() => setSelected(item)}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-105`} />
              {/* Decorative pattern */}
              <div className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0%, transparent 60%)",
                }} />
              {/* Emoji representation */}
              <div className="absolute inset-0 flex items-center justify-center text-6xl md:text-7xl opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                {item.emoji}
              </div>
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-medium">{item.label}</span>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: "rgba(0,0,0,0.9)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-2xl w-full rounded-sm overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`relative h-96 bg-gradient-to-br ${selected.color} flex items-center justify-center`}>
                <span className="text-9xl opacity-40">{selected.emoji}</span>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="text-white">
                    <div className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "#D4AF37" }}>Lake Sonoma Resort</div>
                    <div className="text-xl font-serif" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{selected.label}</div>
                  </div>
                </div>
              </div>
              <button
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                onClick={() => setSelected(null)}
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
