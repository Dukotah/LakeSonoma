"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bed, Bath, Users, Wifi, Flame, Waves, ChevronRight, Star } from "lucide-react";

const cabins = [
  {
    id: "osprey-point",
    name: "Osprey Point",
    type: "Lakeside Cabin",
    tagline: "Panoramic lake views from every room",
    beds: 3,
    baths: 2,
    guests: 6,
    sqft: "1,800",
    price: 495,
    rating: 4.97,
    reviews: 143,
    amenities: ["Private Hot Tub", "Lake Access", "Kayaks Included", "Fire Pit", "WiFi", "Chef Kitchen"],
    color: "from-blue-900 to-teal-800",
    accent: "#52b788",
    tag: "Most Popular",
  },
  {
    id: "cedar-ridge",
    name: "Cedar Ridge",
    type: "Forest Retreat",
    tagline: "Surrounded by ancient redwoods in complete privacy",
    beds: 4,
    baths: 3,
    guests: 8,
    sqft: "2,400",
    price: 695,
    rating: 4.95,
    reviews: 87,
    amenities: ["Soaking Tub", "Outdoor Shower", "Sauna", "Fire Pit", "WiFi", "Game Room"],
    color: "from-green-900 to-forest-800",
    accent: "#40916c",
    tag: "Best for Families",
  },
  {
    id: "vineyard-villa",
    name: "Vineyard Villa",
    type: "The Estate House",
    tagline: "A full estate with vineyard vistas and resort amenities",
    beds: 5,
    baths: 4,
    guests: 10,
    sqft: "3,200",
    price: 995,
    rating: 5.0,
    reviews: 42,
    amenities: ["Pool & Spa", "Wine Cellar", "Home Theater", "Lake Views", "Butler Service", "Private Chef Available"],
    color: "from-purple-900 to-navy-800",
    accent: "#D4AF37",
    tag: "Ultimate Luxury",
  },
];

export default function FeaturedCabins() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3" style={{ color: "#D4AF37" }}>
              Our Accommodations
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              Handcrafted Retreats
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link href="/accommodations"
              className="flex items-center gap-2 font-semibold text-sm tracking-wide hover:gap-3 transition-all"
              style={{ color: "#1B4332" }}>
              View All 12 Cabins <ChevronRight size={16} />
            </Link>
          </motion.div>
        </div>

        {/* Cabins grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {cabins.map((cabin, i) => (
            <motion.div
              key={cabin.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 bg-white border border-gray-100"
            >
              {/* Image area */}
              <div className={`relative h-72 bg-gradient-to-br ${cabin.color} overflow-hidden`}>
                {/* Tag */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white rounded-sm"
                  style={{ background: cabin.accent }}>
                  {cabin.tag}
                </div>
                {/* Decorative landscape */}
                <div className="absolute inset-0">
                  <svg viewBox="0 0 600 300" className="absolute bottom-0 w-full" preserveAspectRatio="none">
                    <path d={cabin.type === "Lakeside Cabin"
                      ? "M0,300 L0,180 L60,140 L120,160 L200,100 L280,140 L360,90 L440,130 L520,110 L600,150 L600,300 Z"
                      : cabin.type === "Forest Retreat"
                      ? "M0,300 L0,160 L40,100 L80,140 L120,80 L160,120 L200,60 L240,100 L280,40 L320,90 L360,50 L400,100 L440,70 L480,110 L520,80 L560,120 L600,100 L600,300 Z"
                      : "M0,300 L0,200 L100,140 L200,170 L300,120 L400,160 L500,130 L600,170 L600,300 Z"}
                      fill="rgba(0,0,0,0.3)" />
                  </svg>
                  {cabin.type === "Lakeside Cabin" && (
                    <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
                      background: "linear-gradient(0deg, rgba(30,80,120,0.8) 0%, transparent 100%)",
                    }}>
                      {[...Array(4)].map((_, j) => (
                        <div key={j} className="absolute left-8 right-8 h-px"
                          style={{ top: `${j * 25 + 10}%`, background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)" }} />
                      ))}
                    </div>
                  )}
                  {/* Cabin icon */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15">
                    <svg viewBox="0 0 100 80" className="w-40 h-32 text-white fill-current">
                      <polygon points="50,5 5,40 95,40" />
                      <rect x="20" y="40" width="60" height="35" />
                      <rect x="40" y="55" width="20" height="20" />
                    </svg>
                  </div>
                </div>
                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 bg-white/95 rounded-sm px-3 py-1.5">
                  <Star size={12} fill="#D4AF37" color="#D4AF37" />
                  <span className="text-xs font-semibold text-gray-800">{cabin.rating}</span>
                  <span className="text-xs text-gray-500">({cabin.reviews})</span>
                </div>
                {/* Price */}
                <div className="absolute bottom-4 right-4 bg-white/95 rounded-sm px-3 py-1.5 text-right">
                  <div className="text-xs text-gray-500">from</div>
                  <div className="text-base font-bold" style={{ color: "#1B4332" }}>${cabin.price}<span className="text-xs font-normal text-gray-500">/night</span></div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: "#D4AF37" }}>{cabin.type}</div>
                <h3 className="text-2xl font-serif mb-1" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>{cabin.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{cabin.tagline}</p>

                {/* Stats */}
                <div className="flex gap-4 mb-5 py-4 border-y border-gray-100">
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Bed size={14} className="text-gray-400" />{cabin.beds} BR
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Bath size={14} className="text-gray-400" />{cabin.baths} BA
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-600">
                    <Users size={14} className="text-gray-400" />Up to {cabin.guests}
                  </div>
                  <div className="text-xs text-gray-600 ml-auto">{cabin.sqft} sq ft</div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {cabin.amenities.slice(0, 4).map((a) => (
                    <span key={a} className="text-xs px-2.5 py-1 rounded-sm font-medium"
                      style={{ background: "rgba(27,67,50,0.06)", color: "#1B4332" }}>
                      {a}
                    </span>
                  ))}
                  {cabin.amenities.length > 4 && (
                    <span className="text-xs px-2.5 py-1 rounded-sm font-medium text-gray-500 bg-gray-50">
                      +{cabin.amenities.length - 4} more
                    </span>
                  )}
                </div>

                {/* CTAs */}
                <div className="flex gap-3">
                  <Link href={`/accommodations/${cabin.id}`}
                    className="flex-1 text-center py-3 text-sm font-semibold uppercase tracking-wide border-2 transition-all duration-300"
                    style={{ border: "2px solid #1B4332", color: "#1B4332" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#1B4332"; e.currentTarget.style.color = "white"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1B4332"; }}>
                    View Details
                  </Link>
                  <Link href={`/accommodations/${cabin.id}#book`}
                    className="flex-1 text-center py-3 text-sm font-semibold uppercase tracking-wide text-white transition-all duration-300"
                    style={{ background: "#D4AF37" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#b8960a"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "#D4AF37"; }}>
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
