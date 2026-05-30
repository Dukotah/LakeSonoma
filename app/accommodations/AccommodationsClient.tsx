"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bed, Bath, Users, Star, Search, SlidersHorizontal } from "lucide-react";

const allCabins = [
  { id: "osprey-point", name: "Osprey Point", type: "Lakeside Cabin", typeKey: "lakeside", beds: 3, baths: 2, guests: 6, price: 495, rating: 4.97, reviews: 143, tag: "Most Popular", amenities: ["Hot Tub", "Lake Access", "Kayaks", "Fire Pit", "WiFi"], desc: "Panoramic lake views from every room. The crown jewel of our lakeside collection." },
  { id: "herons-landing", name: "Heron's Landing", type: "Lakeside Cabin", typeKey: "lakeside", beds: 2, baths: 2, guests: 4, price: 445, rating: 4.92, reviews: 98, tag: null, amenities: ["Private Dock", "Lake Access", "Fire Pit", "WiFi"], desc: "An intimate lakeside escape for two couples or a small family." },
  { id: "lakeview-lodge", name: "Lakeview Lodge", type: "Lakeside Cabin", typeKey: "lakeside", beds: 4, baths: 3, guests: 8, price: 695, rating: 4.94, reviews: 76, tag: "New", amenities: ["Hot Tub", "Lake Access", "Kayaks", "Canoe", "WiFi", "Game Room"], desc: "Our largest lakeside property with a wraparound deck and private beach." },
  { id: "waters-edge", name: "Water's Edge", type: "Lakeside Cabin", typeKey: "lakeside", beds: 2, baths: 1, guests: 4, price: 395, rating: 4.88, reviews: 112, tag: null, amenities: ["Lake Access", "Fire Pit", "WiFi"], desc: "Cozy and romantic with direct lake access and stunning sunset views." },
  { id: "cedar-ridge", name: "Cedar Ridge", type: "Forest Retreat", typeKey: "forest", beds: 4, baths: 3, guests: 8, price: 695, rating: 4.95, reviews: 87, tag: "Best for Families", amenities: ["Sauna", "Hot Tub", "Fire Pit", "Game Room", "WiFi"], desc: "Surrounded by ancient redwoods in complete privacy." },
  { id: "redwood-haven", name: "Redwood Haven", type: "Forest Retreat", typeKey: "forest", beds: 3, baths: 2, guests: 6, price: 545, rating: 4.91, reviews: 64, tag: null, amenities: ["Outdoor Shower", "Fire Pit", "WiFi", "Hammock"], desc: "Perched among old-growth redwoods with a magical forest atmosphere." },
  { id: "sunset-ridge", name: "Sunset Ridge", type: "Forest Retreat", typeKey: "forest", beds: 2, baths: 2, guests: 4, price: 395, rating: 4.9, reviews: 55, tag: null, amenities: ["Fire Pit", "WiFi", "BBQ", "Hammock"], desc: "Hilltop forest retreat with valley and vineyard views at golden hour." },
  { id: "pine-hollow", name: "Pine Hollow", type: "Forest Retreat", typeKey: "forest", beds: 3, baths: 2, guests: 6, price: 475, rating: 4.89, reviews: 43, tag: null, amenities: ["Hot Tub", "Fire Pit", "WiFi", "Outdoor Kitchen"], desc: "Hidden gem surrounded by towering pines with a chef&apos;s outdoor kitchen." },
  { id: "vineyard-villa", name: "Vineyard Villa", type: "Estate House", typeKey: "estate", beds: 5, baths: 4, guests: 10, price: 995, rating: 5.0, reviews: 42, tag: "Ultimate Luxury", amenities: ["Pool", "Wine Cellar", "Home Theater", "Butler Service", "WiFi"], desc: "A full estate with vineyard vistas and resort amenities." },
  { id: "estate-house", name: "The Oak Estate", type: "Estate House", typeKey: "estate", beds: 6, baths: 5, guests: 12, price: 1295, rating: 4.98, reviews: 28, tag: "Most Exclusive", amenities: ["Pool & Spa", "Wine Cellar", "Theater", "Chef Kitchen", "Concierge"], desc: "Our most exclusive property for milestone celebrations and full group retreats." },
  { id: "harvest-house", name: "Harvest House", type: "Estate House", typeKey: "estate", beds: 4, baths: 3, guests: 8, price: 795, rating: 4.96, reviews: 36, tag: null, amenities: ["Private Pool", "Vineyard Views", "Fire Pit", "WiFi"], desc: "Surrounded by working vines with a private pool and morning fog views." },
  { id: "canyon-retreat", name: "Canyon Retreat", type: "Forest Retreat", typeKey: "forest", beds: 2, baths: 2, guests: 4, price: 345, rating: 4.85, reviews: 51, tag: "Best Value", amenities: ["Fire Pit", "WiFi", "Hammock", "BBQ"], desc: "Our most affordable retreat without sacrificing comfort or character." },
];

const filters = ["All", "Lakeside Cabin", "Forest Retreat", "Estate House"];

export default function AccommodationsClient() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState("popular");
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);

  const filtered = allCabins
    .filter((c) => activeFilter === "All" || c.type === activeFilter)
    .filter((c) => c.price <= maxPrice)
    .filter((c) => !search || c.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return b.reviews - a.reviews;
    });

  return (
    <>
      {/* Hero */}
      <div className="relative pt-32 pb-16" style={{ background: "linear-gradient(135deg, #0F2942 0%, #1B4332 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#D4AF37" }}>Our Properties</div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              All Accommodations
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              12 handcrafted retreats. Each uniquely positioned, thoughtfully designed, and ready to host your perfect escape.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Type filters */}
            <div className="flex gap-2 flex-wrap">
              {filters.map((f) => (
                <button key={f}
                  onClick={() => setActiveFilter(f)}
                  className="px-4 py-2 text-sm font-medium rounded-sm transition-all duration-200"
                  style={{
                    background: activeFilter === f ? "#1B4332" : "transparent",
                    color: activeFilter === f ? "white" : "#374151",
                    border: `1px solid ${activeFilter === f ? "#1B4332" : "#e5e7eb"}`,
                  }}>
                  {f}
                </button>
              ))}
            </div>

            {/* Search + Sort */}
            <div className="flex gap-3 items-center">
              <div className="relative">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search cabins..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-4 py-2 text-sm border border-gray-200 rounded-sm focus:outline-none focus:border-green-800 w-44"
                />
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="flex items-center gap-2 px-3 py-2 text-sm border border-gray-200 rounded-sm focus:outline-none text-gray-700 bg-white"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
                <option value="price-asc">Price: Low → High</option>
                <option value="price-desc">Price: High → Low</option>
              </select>
            </div>
          </div>

          {/* Price range */}
          <div className="mt-3 flex items-center gap-3">
            <SlidersHorizontal size={14} className="text-gray-400" />
            <span className="text-xs text-gray-500">Max price:</span>
            <input type="range" min={300} max={2000} step={50} value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-32 accent-green-800" />
            <span className="text-xs font-semibold text-gray-700">${maxPrice}/night</span>
            <span className="text-xs text-gray-400 ml-2">{filtered.length} cabin{filtered.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section id="lakeside" className="py-16" style={{ background: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {filtered.map((cabin, i) => (
              <motion.div
                key={cabin.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 overflow-hidden border border-gray-100"
              >
                {/* Image */}
                <div className={`relative h-64 overflow-hidden ${
                  cabin.typeKey === "lakeside" ? "bg-gradient-to-br from-blue-900 to-teal-800" :
                  cabin.typeKey === "forest" ? "bg-gradient-to-br from-green-900 to-emerald-800" :
                  "bg-gradient-to-br from-purple-900 to-indigo-900"
                }`}>
                  {cabin.tag && (
                    <div className="absolute top-3 left-3 z-10 px-3 py-1 text-xs font-semibold tracking-wide uppercase text-white rounded-sm"
                      style={{ background: "#D4AF37" }}>
                      {cabin.tag}
                    </div>
                  )}
                  <div className="absolute inset-0 flex items-center justify-center text-5xl opacity-20">
                    {cabin.typeKey === "lakeside" ? "🏡" : cabin.typeKey === "forest" ? "🌲" : "🏰"}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 bg-white/95 rounded-sm px-2.5 py-1">
                      <Star size={11} fill="#D4AF37" color="#D4AF37" />
                      <span className="text-xs font-semibold">{cabin.rating}</span>
                      <span className="text-xs text-gray-500">({cabin.reviews})</span>
                    </div>
                    <div className="bg-white/95 rounded-sm px-2.5 py-1">
                      <span className="text-xs text-gray-500">from </span>
                      <span className="text-sm font-bold" style={{ color: "#1B4332" }}>${cabin.price}</span>
                      <span className="text-xs text-gray-500">/nt</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] mb-1" style={{ color: "#D4AF37" }}>{cabin.type}</div>
                  <h3 className="text-xl font-serif mb-1" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>{cabin.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{cabin.desc}</p>

                  <div className="flex gap-4 py-3 border-y border-gray-100 mb-4">
                    <div className="flex items-center gap-1 text-xs text-gray-600"><Bed size={12} /> {cabin.beds} BR</div>
                    <div className="flex items-center gap-1 text-xs text-gray-600"><Bath size={12} /> {cabin.baths} BA</div>
                    <div className="flex items-center gap-1 text-xs text-gray-600"><Users size={12} /> Up to {cabin.guests}</div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {cabin.amenities.slice(0, 3).map((a) => (
                      <span key={a} className="text-xs px-2 py-1 rounded-sm"
                        style={{ background: "rgba(27,67,50,0.06)", color: "#1B4332" }}>{a}</span>
                    ))}
                    {cabin.amenities.length > 3 && (
                      <span className="text-xs px-2 py-1 bg-gray-50 text-gray-500 rounded-sm">+{cabin.amenities.length - 3}</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/accommodations/${cabin.id}`}
                      className="flex-1 text-center py-2.5 text-xs font-semibold uppercase tracking-wide border transition-all"
                      style={{ border: "1.5px solid #1B4332", color: "#1B4332" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#1B4332"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1B4332"; }}>
                      View Details
                    </Link>
                    <Link href={`/#booking-widget`}
                      className="flex-1 text-center py-2.5 text-xs font-semibold uppercase tracking-wide text-white"
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

          {filtered.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <div className="text-4xl mb-4">🔍</div>
              <div className="font-serif text-xl mb-2">No cabins match your filters</div>
              <button onClick={() => { setActiveFilter("All"); setMaxPrice(2000); setSearch(""); }}
                className="mt-4 px-6 py-3 text-sm font-semibold text-white"
                style={{ background: "#1B4332" }}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
