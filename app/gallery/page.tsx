"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const allPhotos = [
  { id: 1,  category: "Cabins",        label: "Osprey Point — Main Living Area",   c1: "#1a2f4a", c2: "#0d4f3c", num: "01" },
  { id: 2,  category: "Cabins",        label: "Cedar Ridge — Master Bedroom",       c1: "#1a3a2a", c2: "#2d5a3d", num: "02" },
  { id: 3,  category: "Cabins",        label: "Vineyard Villa — Great Room",        c1: "#2d1a4a", c2: "#1a2d5a", num: "03" },
  { id: 4,  category: "Cabins",        label: "Heron's Landing Exterior",           c1: "#0d3a3a", c2: "#1a4f4a", num: "04" },
  { id: 5,  category: "Cabins",        label: "Redwood Haven — Private Deck",       c1: "#3a2a1a", c2: "#5a4a2d", num: "05" },
  { id: 6,  category: "Lake & Nature", label: "Golden Hour on Lake Sonoma",         c1: "#4a2a0d", c2: "#8a4a1a", num: "06" },
  { id: 7,  category: "Lake & Nature", label: "Morning Mist Over the Lake",         c1: "#1a2a3a", c2: "#0d1f3a", num: "07" },
  { id: 8,  category: "Lake & Nature", label: "Old Growth Redwood Trail",           c1: "#0d3a1a", c2: "#1a4f2a", num: "08" },
  { id: 9,  category: "Lake & Nature", label: "Wildflower Meadow at Dusk",          c1: "#3a2d0d", c2: "#2d3a0d", num: "09" },
  { id: 10, category: "Lake & Nature", label: "Osprey in Flight",                   c1: "#0d1f3a", c2: "#1a2d4a", num: "10" },
  { id: 11, category: "Experiences",   label: "Private Wine Tasting",               c1: "#3a0d1a", c2: "#2d0d3a", num: "11" },
  { id: 12, category: "Experiences",   label: "Kayak at Dawn",                      c1: "#0d2d3a", c2: "#0d3a2d", num: "12" },
  { id: 13, category: "Experiences",   label: "In-Cabin Couples Massage",           c1: "#3a0d2a", c2: "#2d0d1f", num: "13" },
  { id: 14, category: "Experiences",   label: "Vineyard Horseback Ride",            c1: "#3a2a0d", c2: "#4a3a0d", num: "14" },
  { id: 15, category: "Experiences",   label: "Private Stargazing Night",           c1: "#0d0d2d", c2: "#1a0d3a", num: "15" },
  { id: 16, category: "Dining",        label: "Farm-to-Table Dinner Service",       c1: "#2a1a0d", c2: "#3a2d0d", num: "16" },
  { id: 17, category: "Dining",        label: "Chef Kitchen Details",               c1: "#1f1f1f", c2: "#2a2a2a", num: "17" },
  { id: 18, category: "Dining",        label: "Wine Cellar Collection",             c1: "#2d0d1a", c2: "#3a0d2a", num: "18" },
  { id: 19, category: "Dining",        label: "Outdoor BBQ Evening",                c1: "#3a1a0d", c2: "#4a1a0d", num: "19" },
  { id: 20, category: "Amenities",     label: "Private Hot Tub Under Stars",        c1: "#0d0d2a", c2: "#0d1a2a", num: "20" },
  { id: 21, category: "Amenities",     label: "Sauna at Cedar Ridge",               c1: "#2d1a0d", c2: "#3a2a1a", num: "21" },
  { id: 22, category: "Amenities",     label: "Infinity Pool Views",                c1: "#0d2a2a", c2: "#0d1f2d", num: "22" },
  { id: 23, category: "Amenities",     label: "Fire Pit Evening Gathering",         c1: "#2d0d0d", c2: "#3a1a0d", num: "23" },
  { id: 24, category: "Amenities",     label: "Private Dock at Sunset",             c1: "#3a1f0d", c2: "#4a2d0d", num: "24" },
];

const CATS = ["All", "Cabins", "Lake & Nature", "Experiences", "Dining", "Amenities"];

// Assigns each photo a grid span class for a varied masonry feel
const spans = ["row-span-1", "row-span-2", "row-span-1", "row-span-1", "row-span-2", "row-span-1"];

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const photos = filter === "All" ? allPhotos : allPhotos.filter((p) => p.category === filter);
  const currentIdx = lightbox !== null ? photos.findIndex((p) => p.id === lightbox) : -1;

  const prev = () => setLightbox(photos[(currentIdx - 1 + photos.length) % photos.length].id);
  const next = () => setLightbox(photos[(currentIdx + 1) % photos.length].id);

  return (
    <>
      <Navigation />

      {/* Hero */}
      <div className="relative pt-40 pb-24 overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 70% 50%, rgba(29,74,40,0.22) 0%, transparent 60%)" }} />
        <div className="absolute right-0 top-0 w-[480px] h-[480px] opacity-[0.025] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          <span className="eyebrow block mb-5">Photo Gallery</span>
          <div className="section-rule" />
          <h1 className="display-serif text-white" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>Life at<br />Lake Sonoma</h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 480, marginTop: "1.5rem", lineHeight: 1.8 }}>
            A visual journey through our resort, its surroundings, and the experiences that await you in wine country.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-[72px] z-30" style={{ background: "var(--ink)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-4 flex gap-2 overflow-x-auto">
          {CATS.map((c) => (
            <button key={c} onClick={() => setFilter(c)}
              className="shrink-0 px-5 py-2 text-xs font-semibold uppercase tracking-[0.15em] transition-all"
              style={{
                background: filter === c ? "var(--gold)" : "transparent",
                color: filter === c ? "var(--ink)" : "rgba(255,255,255,0.4)",
                border: `1px solid ${filter === c ? "var(--gold)" : "rgba(255,255,255,0.1)"}`,
              }}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] gap-3">
            <AnimatePresence>
              {photos.map((photo, i) => {
                const spanClass = spans[i % spans.length];
                return (
                  <motion.div key={photo.id} layout
                    initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35, delay: (i % 8) * 0.04 }}
                    className={`relative overflow-hidden cursor-pointer group ${spanClass}`}
                    onClick={() => setLightbox(photo.id)}>
                    {/* Gradient bg */}
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                      style={{ background: `linear-gradient(145deg, ${photo.c1} 0%, ${photo.c2} 100%)` }} />
                    {/* Dot texture */}
                    <div className="absolute inset-0 opacity-[0.06]"
                      style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                    {/* Number */}
                    <div className="absolute top-4 left-4 font-mono text-xs font-bold tracking-widest"
                      style={{ color: "rgba(255,255,255,0.15)" }}>{photo.num}</div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.75) 0%, transparent 55%)" }}>
                      <div className="eyebrow mb-1" style={{ color: "var(--gold)", fontSize: "0.55rem" }}>{photo.category}</div>
                      <div className="text-white text-xs font-semibold leading-tight">{photo.label}</div>
                    </div>
                    {/* Gold corner accent on hover */}
                    <div className="absolute top-0 left-0 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ borderTop: "2px solid var(--gold)", borderLeft: "2px solid var(--gold)" }} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (() => {
          const photo = photos.find((p) => p.id === lightbox)!;
          return (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center"
              style={{ background: "rgba(13,31,23,0.97)", backdropFilter: "blur(16px)" }}
              onClick={() => setLightbox(null)}>

              <button onClick={(e) => { e.stopPropagation(); prev(); }}
                className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                <ChevronLeft size={20} />
              </button>

              <motion.div key={lightbox} initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden max-w-4xl w-[90vw]"
                style={{ height: "78vh", border: "1px solid rgba(255,255,255,0.08)" }}
                onClick={(e) => e.stopPropagation()}>
                {/* Gold top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] z-10"
                  style={{ background: "linear-gradient(90deg, var(--forest), var(--gold), var(--forest))" }} />
                <div className="absolute inset-0"
                  style={{ background: `linear-gradient(145deg, ${photo.c1} 0%, ${photo.c2} 100%)` }} />
                <div className="absolute inset-0 opacity-[0.05]"
                  style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
                {/* Giant number */}
                <div className="absolute right-8 top-1/2 -translate-y-1/2 font-mono font-black select-none pointer-events-none"
                  style={{ fontSize: "18vw", color: "rgba(255,255,255,0.04)", lineHeight: 1 }}>{photo.num}</div>
                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-8"
                  style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.85) 0%, transparent 100%)" }}>
                  <div className="eyebrow mb-2" style={{ color: "var(--gold)" }}>{photo.category}</div>
                  <div className="heading-serif text-white" style={{ fontSize: "1.5rem" }}>{photo.label}</div>
                  <div className="mt-2 text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>{currentIdx + 1} / {photos.length}</div>
                </div>
                <button className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center transition-all z-10"
                  style={{ border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.6)" }}
                  onClick={() => setLightbox(null)}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                  <X size={15} />
                </button>
              </motion.div>

              <button onClick={(e) => { e.stopPropagation(); next(); }}
                className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center z-10 transition-all"
                style={{ border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
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
