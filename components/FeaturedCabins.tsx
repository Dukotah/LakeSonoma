"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bed, Bath, Users, Star, ArrowUpRight } from "lucide-react";

const cabins = [
  {
    id: "osprey-point",
    name: "Osprey Point",
    type: "Lakeside Cabin",
    tagline: "Panoramic lake views from every room",
    beds: 3, baths: 2, guests: 6,
    price: 495,
    rating: 4.97, reviews: 143,
    tag: "Most Popular",
    amenities: ["Private Hot Tub", "Lake Access", "Kayaks", "Fire Pit"],
    gradient: "linear-gradient(145deg, #051a12 0%, #0d3020 30%, #1a5535 60%, #2a7a4a 80%, #1a5535 100%)",
    accentColor: "#52b788",
  },
  {
    id: "cedar-ridge",
    name: "Cedar Ridge",
    type: "Forest Retreat",
    tagline: "Ancient redwoods. Total privacy. Pure restoration.",
    beds: 4, baths: 3, guests: 8,
    price: 695,
    rating: 4.95, reviews: 87,
    tag: "Best for Families",
    amenities: ["Private Sauna", "Outdoor Shower", "Hot Tub", "Game Room"],
    gradient: "linear-gradient(145deg, #030e08 0%, #081a0f 30%, #122b1a 60%, #1e4228 80%, #122b1a 100%)",
    accentColor: "#40916c",
  },
  {
    id: "vineyard-villa",
    name: "Vineyard Villa",
    type: "Estate House",
    tagline: "An entire estate, entirely yours",
    beds: 5, baths: 4, guests: 10,
    price: 995,
    rating: 5.0, reviews: 42,
    tag: "Ultimate Luxury",
    amenities: ["Private Pool", "Wine Cellar", "Home Theater", "Butler Available"],
    gradient: "linear-gradient(145deg, #0a0614 0%, #160a28 30%, #281545 60%, #3d1f68 75%, #281545 100%)",
    accentColor: "#c9a84c",
  },
];

function CabinScene({ gradient, index }: { gradient: string; index: number }) {
  const isLake   = index === 0;
  const isForest = index === 1;

  return (
    <div className="absolute inset-0" style={{ background: gradient }}>
      {/* Stars */}
      {Array.from({ length: 25 }, (_, i) => (
        <div key={i} className="absolute rounded-full bg-white"
          style={{
            width:  `${Math.random() * 1.5 + 0.4}px`,
            height: `${Math.random() * 1.5 + 0.4}px`,
            left:   `${Math.random() * 100}%`,
            top:    `${Math.random() * 50}%`,
            opacity: Math.random() * 0.6 + 0.15,
          }} />
      ))}

      {/* Moon/glow */}
      <div className="absolute" style={{
        width: 38, height: 38, top: "8%", right: "10%", borderRadius: "50%",
        background: "radial-gradient(circle at 35% 35%, #fdf6e3 0%, #e8d090 50%, rgba(201,168,76,0.1) 80%, transparent 100%)",
        boxShadow: "0 0 30px 8px rgba(201,168,76,0.12)",
      }} />

      {/* Horizon hills */}
      <svg className="absolute w-full" style={{ bottom: isForest ? "40%" : "35%" }} viewBox="0 0 600 120" preserveAspectRatio="none">
        <path
          d={isForest
            ? "M0,120 L0,70 C40,45 80,30 120,50 C160,68 200,20 240,38 C280,55 320,15 360,35 C400,55 440,25 480,42 L600,55 L600,120Z"
            : "M0,120 L0,80 C80,55 160,42 240,62 C320,80 400,38 480,55 L600,65 L600,120Z"}
          fill="rgba(0,0,0,0.7)" />
      </svg>

      {/* Tree silhouettes for forest */}
      {isForest && (
        <svg className="absolute w-full" style={{ bottom: "32%" }} viewBox="0 0 600 180" preserveAspectRatio="none">
          <path d="M0,180 L0,120 C15,95 28,78 38,68 C44,60 48,50 55,46 C60,42 65,48 70,44 C78,33 88,25 96,30 C102,20 112,14 118,22 C125,10 135,5 142,14 C150,0 162,-4 170,8 C180,150 210,158 240,148 C265,135 280,120 305,128 C325,135 340,118 360,110 C378,94 396,80 415,88 C435,95 450,80 468,73 C485,58 502,44 520,52 C540,60 555,44 575,38 L600,35 L600,180Z"
            fill="rgba(0,0,0,0.85)" />
        </svg>
      )}

      {/* Cabin silhouette */}
      <svg className="absolute" style={{ bottom: isLake ? "33%" : "34%", left: "20%", width: 90 }} viewBox="0 0 100 80">
        <polygon points="50,4 4,38 96,38" fill="rgba(0,0,0,0.95)" />
        <rect x="12" y="38" width="76" height="38" fill="rgba(0,0,0,0.95)" />
        <rect x="40" y="54" width="20" height="22" fill="rgba(201,168,76,0.4)" />
        <rect x="18" y="46" width="16" height="12" fill="rgba(201,168,76,0.2)" />
        <rect x="66" y="46" width="16" height="12" fill="rgba(201,168,76,0.2)" />
      </svg>

      {/* Lake / vineyard */}
      {isLake && (
        <div className="absolute left-0 right-0" style={{ bottom: "8%", height: "26%", background: "linear-gradient(180deg, rgba(5,20,14,0.2) 0%, rgba(3,12,9,0.92) 100%)" }}>
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className="absolute left-[5%] right-[5%]"
              style={{ top: `${i * 18 + 6}%`, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(255,255,255,0.1), rgba(201,168,76,0.3), transparent)" }} />
          ))}
        </div>
      )}
      {isForest && (
        <div className="absolute left-0 right-0" style={{ bottom: "0", height: "36%", background: "linear-gradient(180deg, transparent 0%, rgba(3,8,5,0.95) 100%)" }} />
      )}

      {/* Vineyard rows for estate */}
      {index === 2 && (
        <div className="absolute left-0 right-0" style={{ bottom: "10%", height: "30%" }}>
          {Array.from({ length: 8 }, (_, i) => (
            <div key={i} className="absolute left-0 right-0" style={{
              top: `${i * 12 + 2}%`, height: 1,
              background: "linear-gradient(90deg, transparent 5%, rgba(100,60,140,0.3) 20%, rgba(140,80,200,0.2) 50%, rgba(100,60,140,0.3) 80%, transparent 95%)",
            }} />
          ))}
          <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{ background: "linear-gradient(0deg, rgba(3,3,12,0.95) 0%, transparent 100%)" }} />
        </div>
      )}
    </div>
  );
}

export default function FeaturedCabins() {
  return (
    <section className="py-28 md:py-36" style={{ background: "white" }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow block mb-4"
            >
              Our Accommodations
            </motion.span>
            <div className="section-rule" />
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-serif"
              style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", color: "var(--ink)" }}
            >
              Handcrafted Retreats
            </motion.h2>
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <Link
              href="/accommodations"
              className="hidden md:flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors group"
              style={{ color: "var(--forest)" }}
            >
              View All 12 Cabins
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cabins.map((cabin, i) => (
            <motion.div
              key={cabin.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="cabin-card group"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              {/* Image area */}
              <div className="cabin-card-img relative overflow-hidden" style={{ height: 320 }}>
                <div className="absolute inset-0 w-full h-full">
                  <CabinScene gradient={cabin.gradient} index={i} />
                </div>

                {/* Tag */}
                <div
                  className="absolute top-5 left-5 z-10 px-3 py-1.5 text-xs font-bold tracking-[0.12em] uppercase"
                  style={{ background: "var(--gold)", color: "var(--ink)" }}
                >
                  {cabin.tag}
                </div>

                {/* Price badge */}
                <div
                  className="absolute bottom-5 right-5 z-10 px-4 py-2.5 text-right"
                  style={{ background: "rgba(13,31,23,0.85)", backdropFilter: "blur(12px)" }}
                >
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.6rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>from</div>
                  <div style={{ color: "white", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.1 }}>
                    ${cabin.price}<span style={{ fontSize: "0.75rem", fontWeight: 400, color: "rgba(255,255,255,0.5)" }}>/night</span>
                  </div>
                </div>

                {/* Rating */}
                <div
                  className="absolute bottom-5 left-5 z-10 flex items-center gap-1.5 px-3 py-1.5"
                  style={{ background: "rgba(13,31,23,0.85)", backdropFilter: "blur(12px)" }}
                >
                  <Star size={11} fill="var(--gold)" color="var(--gold)" />
                  <span style={{ color: "white", fontSize: "0.78rem", fontWeight: 600 }}>{cabin.rating}</span>
                  <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>({cabin.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <div
                  className="eyebrow mb-2"
                  style={{ color: cabin.accentColor }}
                >
                  {cabin.type}
                </div>
                <h3
                  className="heading-serif mb-2"
                  style={{ fontSize: "1.6rem", color: "var(--ink)" }}
                >
                  {cabin.name}
                </h3>
                <p style={{ color: "var(--stone)", fontSize: "0.9rem", marginBottom: "1.25rem", lineHeight: 1.6 }}>
                  {cabin.tagline}
                </p>

                {/* Stats row */}
                <div
                  className="flex gap-5 py-4 mb-5"
                  style={{ borderTop: "1px solid var(--cream-dark)", borderBottom: "1px solid var(--cream-dark)" }}
                >
                  {[
                    { icon: Bed,   v: `${cabin.beds} BD` },
                    { icon: Bath,  v: `${cabin.baths} BA` },
                    { icon: Users, v: `Up to ${cabin.guests}` },
                  ].map(({ icon: Icon, v }) => (
                    <div key={v} className="flex items-center gap-1.5" style={{ color: "var(--stone)", fontSize: "0.78rem" }}>
                      <Icon size={13} />
                      <span>{v}</span>
                    </div>
                  ))}
                </div>

                {/* Amenity pills */}
                <div className="flex flex-wrap gap-2 mb-7">
                  {cabin.amenities.map((a) => (
                    <span
                      key={a}
                      className="text-xs px-3 py-1.5 font-medium"
                      style={{
                        background: "var(--cream)",
                        color: "var(--ink-mid)",
                        fontSize: "0.7rem",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {a}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  <Link
                    href={`/accommodations/${cabin.id}`}
                    className="flex-1 text-center py-3 text-xs font-bold tracking-[0.14em] uppercase transition-all"
                    style={{ border: "1.5px solid var(--forest)", color: "var(--forest)", background: "transparent" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--forest)"; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--forest)"; }}
                  >
                    View Details
                  </Link>
                  <Link
                    href="/#booking-widget"
                    className="flex-1 text-center py-3 text-xs font-bold tracking-[0.14em] uppercase transition-all"
                    style={{ background: "var(--gold)", color: "var(--ink)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-lt)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; }}
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 text-center md:hidden">
          <Link href="/accommodations" className="btn-outline-ink">
            View All 12 Cabins
          </Link>
        </div>
      </div>
    </section>
  );
}
