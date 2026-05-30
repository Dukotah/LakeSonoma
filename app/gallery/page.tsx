"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const allPhotos = [
  // Cabins
  { id: 1, category: "Cabins", label: "Osprey Point — Main Living Area", color: "from-blue-900 to-teal-800", emoji: "🏡", aspect: "wide" },
  { id: 2, category: "Cabins", label: "Cedar Ridge — Master Bedroom", color: "from-green-900 to-emerald-800", emoji: "🛏️", aspect: "square" },
  { id: 3, category: "Cabins", label: "Vineyard Villa — Great Room", color: "from-purple-900 to-indigo-900", emoji: "🏰", aspect: "tall" },
  { id: 4, category: "Cabins", label: "Heron's Landing Exterior", color: "from-teal-900 to-cyan-800", emoji: "🏠", aspect: "wide" },
  { id: 5, category: "Cabins", label: "Redwood Haven — Deck", color: "from-stone-800 to-amber-900", emoji: "🌿", aspect: "square" },
  // Lake & Nature
  { id: 6, category: "Lake & Nature", label: "Golden Hour on Lake Sonoma", color: "from-amber-900 to-orange-800", emoji: "🌅", aspect: "wide" },
  { id: 7, category: "Lake & Nature", label: "Morning Mist Over the Lake", color: "from-slate-700 to-blue-900", emoji: "🌫️", aspect: "tall" },
  { id: 8, category: "Lake & Nature", label: "Old Growth Redwood Trail", color: "from-green-800 to-emerald-700", emoji: "🌲", aspect: "square" },
  { id: 9, category: "Lake & Nature", label: "Wildflower Meadow", color: "from-yellow-800 to-green-800", emoji: "🌸", aspect: "wide" },
  { id: 10, category: "Lake & Nature", label: "Osprey in Flight", color: "from-sky-900 to-blue-800", emoji: "🦅", aspect: "square" },
  // Experiences
  { id: 11, category: "Experiences", label: "Private Wine Tasting", color: "from-red-900 to-purple-900", emoji: "🍷", aspect: "wide" },
  { id: 12, category: "Experiences", label: "Kayak at Dawn", color: "from-cyan-900 to-teal-800", emoji: "🚣", aspect: "tall" },
  { id: 13, category: "Experiences", label: "In-Cabin Massage", color: "from-rose-900 to-pink-800", emoji: "✨", aspect: "square" },
  { id: 14, category: "Experiences", label: "Vineyard Horseback Ride", color: "from-amber-800 to-yellow-900", emoji: "🐎", aspect: "wide" },
  { id: 15, category: "Experiences", label: "Stargazing Night", color: "from-indigo-900 to-violet-900", emoji: "🔭", aspect: "square" },
  // Dining
  { id: 16, category: "Dining", label: "Farm-to-Table Dinner", color: "from-stone-900 to-amber-900", emoji: "🍽️", aspect: "wide" },
  { id: 17, category: "Dining", label: "Chef Kitchen Details", color: "from-zinc-800 to-gray-900", emoji: "👨‍🍳", aspect: "square" },
  { id: 18, category: "Dining", label: "Wine Cellar Collection", color: "from-purple-950 to-red-900", emoji: "🍾", aspect: "tall" },
  { id: 19, category: "Dining", label: "Outdoor BBQ Evening", color: "from-orange-900 to-red-900", emoji: "🔥", aspect: "wide" },
  // Amenities
  { id: 20, category: "Amenities", label: "Private Hot Tub Under Stars", color: "from-blue-950 to-slate-900", emoji: "🛁", aspect: "wide" },
  { id: 21, category: "Amenities", label: "Sauna at Cedar Ridge", color: "from-amber-900 to-stone-800", emoji: "🧖", aspect: "square" },
  { id: 22, category: "Amenities", label: "Infinity Pool Views", color: "from-teal-900 to-blue-900", emoji: "🏊", aspect: "tall" },
  { id: 23, category: "Amenities", label: "Fire Pit Evening", color: "from-red-900 to-orange-900", emoji: "🔥", aspect: "wide" },
  { id: 24, category: "Amenities", label: "Private Dock at Sunset", color: "from-orange-800 to-amber-900", emoji: "⛵", aspect: "square" },
];

const categories = ["All", "Cabins", "Lake & Nature", "Experiences", "Dining", "Amenities"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = filter === "All" ? allPhotos : allPhotos.filter((p) => p.category === filter);
  const currentIdx = lightbox !== null ? photos.findIndex((p) => p.id === lightbox) : -1;

  const prev = () => {
    if (currentIdx > 0) setLightbox(photos[currentIdx - 1].id);
    else setLightbox(photos[photos.length - 1].id);
  };
  const next = () => {
    if (currentIdx < photos.length - 1) setLightbox(photos[currentIdx + 1].id);
    else setLightbox(photos[0].id);
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-16 text-center" style={{ background: "linear-gradient(135deg, #0F2942 0%, #1B4332 100%)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#D4AF37" }}>Photo Gallery</div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>Life at Lake Sonoma</h1>
          <p className="text-white/60 max-w-xl mx-auto">A visual journey through our resort, its surroundings, and the experiences that await you.</p>
        </motion.div>
      </div>

      {/* Filter */}
      <div className="sticky top-16 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-2 flex-wrap">
            {categories.map((c) => (
              <button key={c} onClick={() => setFilter(c)}
                className="px-4 py-2 text-sm font-medium rounded-sm transition-all"
                style={{
                  background: filter === c ? "#1B4332" : "transparent",
                  color: filter === c ? "white" : "#374151",
                  border: `1px solid ${filter === c ? "#1B4332" : "#e5e7eb"}`,
                }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-12" style={{ background: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
            {photos.map((photo, i) => (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
                className={`relative overflow-hidden rounded-sm cursor-pointer group break-inside-avoid mb-3 ${
                  photo.aspect === "tall" ? "h-72" : photo.aspect === "wide" ? "h-48" : "h-56"
                }`}
                onClick={() => setLightbox(photo.id)}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${photo.color} transition-transform duration-700 group-hover:scale-110`} />
                <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20 group-hover:opacity-40 transition-opacity">
                  {photo.emoji}
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div>
                    <div className="text-xs text-white/60 uppercase tracking-[0.1em]">{photo.category}</div>
                    <div className="text-white text-sm font-medium">{photo.label}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const photo = photos.find((p) => p.id === lightbox)!;
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              style={{ background: "rgba(0,0,0,0.95)" }}
              onClick={() => setLightbox(null)}
            >
              <button onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
                <ChevronLeft size={20} />
              </button>
              <motion.div
                key={lightbox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`relative rounded-sm overflow-hidden max-w-3xl w-full bg-gradient-to-br ${photo.color}`}
                style={{ height: "75vh" }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20">{photo.emoji}</div>
                <div className="absolute bottom-0 left-0 right-0 p-8" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)" }}>
                  <div className="text-xs text-white/50 uppercase tracking-[0.2em] mb-1">{photo.category}</div>
                  <div className="text-white text-xl font-serif" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{photo.label}</div>
                  <div className="text-white/40 text-xs mt-1">{currentIdx + 1} of {photos.length}</div>
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 flex items-center justify-center text-white transition-colors"
                  onClick={() => setLightbox(null)}>
                  <X size={16} />
                </button>
              </motion.div>
              <button onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
                <ChevronRight size={20} />
              </button>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <Footer />
    </>
  );
}
