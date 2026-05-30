"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Bed, Bath, Users, Star, Search, ArrowUpRight } from "lucide-react";

const allCabins = [
  { id: "osprey-point",   name: "Osprey Point",    type: "Lakeside Cabin",  typeKey: "lakeside", beds: 3, baths: 2, guests: 6,  price: 495,  rating: 4.97, reviews: 143, tag: "Most Popular",    amenities: ["Hot Tub", "Lake Access", "Kayaks", "Fire Pit"],          desc: "Panoramic lake views. The crown jewel of our lakeside collection.",    bg: "linear-gradient(145deg, #051a12, #0d3020, #1a5535, #2a7a4a)" },
  { id: "herons-landing", name: "Heron's Landing",  type: "Lakeside Cabin",  typeKey: "lakeside", beds: 2, baths: 2, guests: 4,  price: 445,  rating: 4.92, reviews: 98,  tag: null,              amenities: ["Private Dock", "Lake Access", "Fire Pit"],                desc: "An intimate lakeside escape for couples or a small family.",           bg: "linear-gradient(145deg, #051620, #0a2c3a, #104555, #185e70)" },
  { id: "lakeview-lodge", name: "Lakeview Lodge",   type: "Lakeside Cabin",  typeKey: "lakeside", beds: 4, baths: 3, guests: 8,  price: 695,  rating: 4.94, reviews: 76,  tag: "New",             amenities: ["Hot Tub", "Private Beach", "Kayaks", "Game Room"],        desc: "Our largest lakeside property with a wraparound deck and private beach.",bg: "linear-gradient(145deg, #031820, #073040, #0c4a60, #126580)" },
  { id: "waters-edge",    name: "Water's Edge",     type: "Lakeside Cabin",  typeKey: "lakeside", beds: 2, baths: 1, guests: 4,  price: 395,  rating: 4.88, reviews: 112, tag: null,              amenities: ["Lake Access", "Fire Pit", "WiFi"],                         desc: "Cozy and romantic with direct lake access and stunning sunsets.",      bg: "linear-gradient(145deg, #041420, #083040, #0e4c62, #166882)" },
  { id: "cedar-ridge",    name: "Cedar Ridge",      type: "Forest Retreat",  typeKey: "forest",   beds: 4, baths: 3, guests: 8,  price: 695,  rating: 4.95, reviews: 87,  tag: "Best for Families",amenities: ["Sauna", "Hot Tub", "Fire Pit", "Game Room"],              desc: "Surrounded by ancient redwoods in complete privacy.",                 bg: "linear-gradient(145deg, #030e08, #081a0f, #122b1a, #1e4228)" },
  { id: "redwood-haven",  name: "Redwood Haven",    type: "Forest Retreat",  typeKey: "forest",   beds: 3, baths: 2, guests: 6,  price: 545,  rating: 4.91, reviews: 64,  tag: null,              amenities: ["Outdoor Shower", "Fire Pit", "Hammock"],                   desc: "Perched among old-growth redwoods with a magical forest atmosphere.",  bg: "linear-gradient(145deg, #060f08, #0c1e10, #142e18, #1c3e22)" },
  { id: "sunset-ridge",   name: "Sunset Ridge",     type: "Forest Retreat",  typeKey: "forest",   beds: 2, baths: 2, guests: 4,  price: 395,  rating: 4.90, reviews: 55,  tag: null,              amenities: ["Valley Views", "Fire Pit", "BBQ"],                         desc: "Hilltop retreat with sweeping vineyard valley views at golden hour.",  bg: "linear-gradient(145deg, #1a0a05, #2d1508, #42200c, #582c10)" },
  { id: "pine-hollow",    name: "Pine Hollow",      type: "Forest Retreat",  typeKey: "forest",   beds: 3, baths: 2, guests: 6,  price: 475,  rating: 4.89, reviews: 43,  tag: null,              amenities: ["Hot Tub", "Fire Pit", "Outdoor Kitchen"],                  desc: "Hidden gem surrounded by towering pines with an outdoor chef's kitchen.",bg: "linear-gradient(145deg, #080c05, #10180a, #182810, #203616)" },
  { id: "vineyard-villa", name: "Vineyard Villa",   type: "Estate House",    typeKey: "estate",   beds: 5, baths: 4, guests: 10, price: 995,  rating: 5.00, reviews: 42,  tag: "Ultimate Luxury", amenities: ["Pool", "Wine Cellar", "Theater", "Butler"],               desc: "A full estate with vineyard vistas and resort-level amenities.",       bg: "linear-gradient(145deg, #0a0614, #160a28, #281545, #3d1a70)" },
  { id: "oak-estate",     name: "The Oak Estate",   type: "Estate House",    typeKey: "estate",   beds: 6, baths: 5, guests: 12, price: 1295, rating: 4.98, reviews: 28,  tag: "Most Exclusive",  amenities: ["Pool & Spa", "Concierge", "Chef Kitchen", "Theater"],     desc: "Our most exclusive estate for milestone celebrations.",               bg: "linear-gradient(145deg, #080414, #121028, #1e1845, #2e2265)" },
  { id: "harvest-house",  name: "Harvest House",    type: "Estate House",    typeKey: "estate",   beds: 4, baths: 3, guests: 8,  price: 795,  rating: 4.96, reviews: 36,  tag: null,              amenities: ["Private Pool", "Vineyard Views", "Fire Pit"],             desc: "Surrounded by working vines with a private pool and morning fog views.",bg: "linear-gradient(145deg, #140618, #22082a, #340f40, #481658)" },
  { id: "canyon-retreat", name: "Canyon Retreat",   type: "Forest Retreat",  typeKey: "forest",   beds: 2, baths: 2, guests: 4,  price: 345,  rating: 4.85, reviews: 51,  tag: "Best Value",      amenities: ["Fire Pit", "WiFi", "Hammock"],                             desc: "Our most affordable retreat — zero compromise on comfort or character.", bg: "linear-gradient(145deg, #0c1208, #162010, #202e16, #2a3e1e)" },
];

const FILTERS = ["All", "Lakeside Cabin", "Forest Retreat", "Estate House"];

export default function AccommodationsClient() {
  const [filter,   setFilter]   = useState("All");
  const [sort,     setSort]     = useState("popular");
  const [search,   setSearch]   = useState("");
  const [maxPrice, setMaxPrice] = useState(2000);

  const cabins = allCabins
    .filter((c) => filter === "All" || c.type === filter)
    .filter((c) => c.price <= maxPrice)
    .filter((c) => !search || c.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sort === "price-asc" ? a.price - b.price :
      sort === "price-desc" ? b.price - a.price :
      sort === "rating" ? b.rating - a.rating :
      b.reviews - a.reviews
    );

  return (
    <>
      {/* Hero */}
      <div className="relative pt-40 pb-20 overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "radial-gradient(ellipse at 20% 60%, rgba(29,74,40,0.3) 0%, transparent 55%)",
        }} />
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 text-center relative z-10">
          <span className="eyebrow block mb-5">Our Properties</span>
          <div className="section-rule mx-auto" />
          <h1 className="display-serif text-white" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", marginBottom: "1.25rem" }}>
            All Accommodations
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, margin: "0 auto", lineHeight: 1.75 }}>
            Twelve handcrafted retreats — each uniquely positioned, thoughtfully designed,
            and ready to host your perfect escape.
          </p>
        </div>
      </div>

      {/* Filter bar */}
      <div className="sticky top-[72px] z-20"
        style={{ background: "white", borderBottom: "1px solid var(--cream-dark)", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            {/* Type pills */}
            <div className="flex gap-2 flex-wrap">
              {FILTERS.map((f) => (
                <button key={f} onClick={() => setFilter(f)}
                  className="px-4 py-2 text-xs font-semibold tracking-[0.1em] uppercase transition-all"
                  style={{
                    background: filter === f ? "var(--forest)" : "transparent",
                    color: filter === f ? "white" : "var(--stone)",
                    border: `1px solid ${filter === f ? "var(--forest)" : "var(--cream-dark)"}`,
                  }}>
                  {f}
                </button>
              ))}
            </div>

            <div className="flex gap-3 items-center">
              <div className="relative">
                <Search size={12} className="absolute left-3 top-1/2 -translate-y-1/2" style={{ color: "var(--stone)" }} />
                <input type="text" placeholder="Search…" value={search} onChange={(e) => setSearch(e.target.value)}
                  className="pl-8 pr-4 py-2 text-xs focus:outline-none transition-colors w-36"
                  style={{ border: "1px solid var(--cream-dark)", color: "var(--ink)", background: "var(--cream)" }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
              </div>
              <select value={sort} onChange={(e) => setSort(e.target.value)}
                className="px-3 py-2 text-xs focus:outline-none bg-white"
                style={{ border: "1px solid var(--cream-dark)", color: "var(--ink)" }}>
                <option value="popular">Most Popular</option>
                <option value="rating">Top Rated</option>
                <option value="price-asc">Price ↑</option>
                <option value="price-desc">Price ↓</option>
              </select>
            </div>
          </div>

          {/* Price slider */}
          <div className="mt-3 flex items-center gap-4">
            <span style={{ color: "var(--stone)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Max price</span>
            <input type="range" min={300} max={2000} step={50} value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-32 accent-green-800" />
            <span style={{ color: "var(--ink)", fontSize: "0.78rem", fontWeight: 600 }}>${maxPrice}/nt</span>
            <span style={{ color: "var(--stone)", fontSize: "0.72rem" }}>· {cabins.length} cabin{cabins.length !== 1 ? "s" : ""}</span>
          </div>
        </div>
      </div>

      {/* Grid */}
      <section id="lakeside" className="py-20" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {cabins.map((cabin, i) => (
              <motion.div key={cabin.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="cabin-card group"
                style={{ border: "1px solid var(--cream-dark)" }}>

                {/* Image */}
                <div className="cabin-card-img relative overflow-hidden" style={{ height: 260 }}>
                  <div className="absolute inset-0 w-full h-full" style={{ background: cabin.bg }}>
                    {/* Stars */}
                    {[...Array(15)].map((_, j) => (
                      <div key={j} className="absolute rounded-full bg-white"
                        style={{ width: `${Math.random()*1.2+0.4}px`, height: `${Math.random()*1.2+0.4}px`, left: `${Math.random()*100}%`, top: `${Math.random()*50}%`, opacity: Math.random()*0.5+0.1 }} />
                    ))}
                    {/* Silhouette */}
                    <svg className="absolute" style={{ bottom: "28%", left: "18%", width: 70 }} viewBox="0 0 100 80">
                      <polygon points="50,4 4,38 96,38" fill="rgba(0,0,0,0.9)" />
                      <rect x="12" y="38" width="76" height="38" fill="rgba(0,0,0,0.9)" />
                      <rect x="40" y="54" width="20" height="22" fill="rgba(201,168,76,0.35)" />
                    </svg>
                    <div className="absolute bottom-0 left-0 right-0 h-[30%]"
                      style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 100%)" }} />
                  </div>

                  {cabin.tag && (
                    <div className="absolute top-4 left-4 z-10 px-3 py-1 text-xs font-bold tracking-[0.1em] uppercase"
                      style={{ background: "var(--gold)", color: "var(--ink)" }}>
                      {cabin.tag}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                    <div className="flex items-center gap-1.5 px-2.5 py-1.5"
                      style={{ background: "rgba(13,31,23,0.85)", backdropFilter: "blur(10px)" }}>
                      <Star size={10} fill="var(--gold)" color="var(--gold)" />
                      <span style={{ color: "white", fontSize: "0.72rem", fontWeight: 600 }}>{cabin.rating}</span>
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.68rem" }}>({cabin.reviews})</span>
                    </div>
                    <div className="px-2.5 py-1.5"
                      style={{ background: "rgba(13,31,23,0.85)", backdropFilter: "blur(10px)" }}>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.62rem" }}>from </span>
                      <span style={{ color: "white", fontSize: "0.9rem", fontWeight: 700 }}>${cabin.price}</span>
                      <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.68rem" }}>/nt</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 bg-white">
                  <div className="eyebrow mb-1" style={{ color: "var(--gold-dim)" }}>{cabin.type}</div>
                  <h3 className="heading-serif mb-1" style={{ fontSize: "1.4rem", color: "var(--ink)" }}>{cabin.name}</h3>
                  <p style={{ color: "var(--stone)", fontSize: "0.82rem", lineHeight: 1.6, marginBottom: "1rem" }}>{cabin.desc}</p>

                  <div className="flex gap-4 py-3" style={{ borderTop: "1px solid var(--cream-dark)", borderBottom: "1px solid var(--cream-dark)", marginBottom: "1rem" }}>
                    {[
                      { Icon: Bed,   v: `${cabin.beds} BD` },
                      { Icon: Bath,  v: `${cabin.baths} BA` },
                      { Icon: Users, v: `Up to ${cabin.guests}` },
                    ].map(({ Icon, v }) => (
                      <div key={v} className="flex items-center gap-1.5" style={{ color: "var(--stone)", fontSize: "0.72rem" }}>
                        <Icon size={12} />{v}
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {cabin.amenities.slice(0, 3).map((a) => (
                      <span key={a} className="text-xs px-2.5 py-1"
                        style={{ background: "var(--cream)", color: "var(--ink-mid)", fontSize: "0.68rem", letterSpacing: "0.04em" }}>{a}</span>
                    ))}
                    {cabin.amenities.length > 3 && (
                      <span className="text-xs px-2.5 py-1" style={{ background: "var(--cream)", color: "var(--stone)", fontSize: "0.68rem" }}>+{cabin.amenities.length - 3}</span>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Link href={`/accommodations/${cabin.id}`}
                      className="flex-1 text-center py-2.5 text-xs font-bold tracking-[0.12em] uppercase transition-all group/btn flex items-center justify-center gap-1.5"
                      style={{ border: "1.5px solid var(--forest)", color: "var(--forest)", background: "transparent" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--forest)"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--forest)"; }}>
                      Details <ArrowUpRight size={11} />
                    </Link>
                    <Link href="/#booking-widget"
                      className="flex-1 text-center py-2.5 text-xs font-bold tracking-[0.12em] uppercase transition-all"
                      style={{ background: "var(--gold)", color: "var(--ink)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "var(--gold-lt)"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "var(--gold)"; }}>
                      Book Now
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {cabins.length === 0 && (
            <div className="text-center py-24">
              <div className="heading-serif mb-3" style={{ fontSize: "1.6rem", color: "var(--ink)" }}>No cabins match</div>
              <p style={{ color: "var(--stone)", marginBottom: "1.5rem" }}>Try adjusting your filters</p>
              <button onClick={() => { setFilter("All"); setMaxPrice(2000); setSearch(""); }}
                className="btn-outline-ink">Reset Filters</button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
