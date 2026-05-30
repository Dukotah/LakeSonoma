"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bed, Bath, Users, Star, ChevronRight, Wifi, Flame, Waves } from "lucide-react";

const cabins: Record<string, {
  name: string; type: string; tagline: string; desc: string;
  beds: number; baths: number; guests: number; sqft: string;
  price: number; rating: number; reviews: number;
  amenities: string[]; rules: string[];
  bg: string;
}> = {
  "osprey-point": {
    name: "Osprey Point", type: "Lakeside Cabin",
    tagline: "Panoramic lake views from every room",
    desc: "Osprey Point is the jewel of our lakeside collection — perched directly on the shoreline with wraparound windows that frame the water from every angle. Wake to shimmering reflections, end the day in a private hot tub as the stars emerge above the lake.",
    beds: 3, baths: 2, guests: 6, sqft: "1,800", price: 495, rating: 4.97, reviews: 143,
    amenities: ["Private Hot Tub", "Kayaks & Paddleboards", "Private Dock", "Lake Access", "Chef Kitchen", "Fire Pit", "High-Speed WiFi", "Smart TV", "Washer/Dryer", "BBQ Grill"],
    rules: ["No smoking", "Pets allowed (dogs only, $75 fee)", "No parties/events", "Check-in 4pm / Check-out 11am"],
    bg: "linear-gradient(145deg, #051a12, #0d3020, #1a5535, #2a7a4a)",
  },
  "cedar-ridge": {
    name: "Cedar Ridge", type: "Forest Retreat",
    tagline: "Surrounded by ancient redwoods in complete privacy",
    desc: "Cedar Ridge sits at the heart of a private 40-acre forest parcel. Ancient redwood and cedar create a cathedral of trees that guarantees complete solitude. The sauna, outdoor shower, and fire pit make this the ultimate digital detox destination.",
    beds: 4, baths: 3, guests: 8, sqft: "2,400", price: 695, rating: 4.95, reviews: 87,
    amenities: ["Private Sauna", "Outdoor Shower", "Hot Tub", "Game Room", "Fire Pit", "WiFi", "Chef Kitchen", "BBQ", "Hammocks", "Forest Trails"],
    rules: ["No smoking", "Pets allowed", "No parties", "Check-in 4pm / Check-out 11am"],
    bg: "linear-gradient(145deg, #030e08, #081a0f, #122b1a, #1e4228)",
  },
  "vineyard-villa": {
    name: "Vineyard Villa", type: "Estate House",
    tagline: "An entire estate, entirely yours",
    desc: "The Vineyard Villa is our most celebrated property — a 3,200 sq ft estate set among 8 acres of active vines. Every amenity of a five-star resort, from the private pool to the wine cellar stocked with local bottles, is yours exclusively.",
    beds: 5, baths: 4, guests: 10, sqft: "3,200", price: 995, rating: 5.0, reviews: 42,
    amenities: ["Private Pool & Spa", "Wine Cellar", "Home Theater", "Butler Available", "Private Chef Available", "Lake Views", "Fire Pit", "WiFi", "Multiple Decks", "EV Charger"],
    rules: ["No smoking", "Pets negotiable", "Events with permit", "Check-in 4pm / Check-out 11am"],
    bg: "linear-gradient(145deg, #0a0614, #160a28, #281545, #3d1a70)",
  },
  "herons-landing": {
    name: "Heron's Landing", type: "Lakeside Cabin",
    tagline: "Intimate lakeside romance",
    desc: "Heron's Landing is our most romantic lakeside cabin — compact, perfectly designed, and right at the water's edge. The ideal retreat for couples.",
    beds: 2, baths: 2, guests: 4, sqft: "1,200", price: 445, rating: 4.92, reviews: 98,
    amenities: ["Private Dock", "Lake Access", "Fire Pit", "WiFi", "Smart TV", "Kayaks"],
    rules: ["No smoking", "No pets", "No parties", "Check-in 4pm / Check-out 11am"],
    bg: "linear-gradient(145deg, #051620, #0a2c3a, #104555, #185e70)",
  },
  "redwood-haven": {
    name: "Redwood Haven", type: "Forest Retreat",
    tagline: "Perched among old-growth redwoods",
    desc: "Redwood Haven offers a magical forest atmosphere with an outdoor shower beneath the canopy — an experience you won't forget.",
    beds: 3, baths: 2, guests: 6, sqft: "1,600", price: 545, rating: 4.91, reviews: 64,
    amenities: ["Outdoor Shower", "Fire Pit", "WiFi", "Hammock", "BBQ", "Chef Kitchen"],
    rules: ["No smoking", "Dogs allowed", "No parties", "Check-in 4pm / Check-out 11am"],
    bg: "linear-gradient(145deg, #060f08, #0c1e10, #142e18, #1c3e22)",
  },
  "sunset-ridge": {
    name: "Sunset Ridge", type: "Forest Retreat",
    tagline: "Hilltop vineyard valley views",
    desc: "Sunset Ridge commands a hilltop position with sweeping views over the Alexander Valley. Watch the vines turn gold every evening from your private deck.",
    beds: 2, baths: 2, guests: 4, sqft: "1,400", price: 395, rating: 4.9, reviews: 55,
    amenities: ["Valley Views", "Fire Pit", "WiFi", "BBQ", "Hammock", "Smart TV"],
    rules: ["No smoking", "No pets", "No parties", "Check-in 4pm / Check-out 11am"],
    bg: "linear-gradient(145deg, #1a0a05, #2d1508, #42200c, #582c10)",
  },
};

const relatedCabins = [
  { id: "osprey-point",  name: "Osprey Point",  type: "Lakeside Cabin",  price: 495, bg: "linear-gradient(145deg, #051a12, #1a5535)" },
  { id: "cedar-ridge",   name: "Cedar Ridge",   type: "Forest Retreat",  price: 695, bg: "linear-gradient(145deg, #030e08, #1e4228)" },
  { id: "vineyard-villa",name: "Vineyard Villa", type: "Estate House",    price: 995, bg: "linear-gradient(145deg, #0a0614, #3d1a70)" },
];

export default function CabinClient({ slug }: { slug: string }) {
  const cabin = cabins[slug];

  if (!cabin) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24" style={{ background: "var(--cream)" }}>
        <div className="text-center">
          <div className="heading-serif mb-4" style={{ fontSize: "2rem", color: "var(--ink)" }}>Cabin Not Found</div>
          <Link href="/accommodations" className="btn-gold">View All Cabins</Link>
        </div>
      </div>
    );
  }

  const nights = 3;
  const subtotal   = cabin.price * nights;
  const cleaning   = 185;
  const serviceFee = Math.round(subtotal * 0.12);
  const total      = subtotal + cleaning + serviceFee;

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-[72px] bg-white" style={{ borderBottom: "1px solid var(--cream-dark)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-3 flex items-center gap-2"
          style={{ color: "var(--stone)", fontSize: "0.72rem" }}>
          <Link href="/" className="hover:text-green-900 transition-colors">Home</Link>
          <ChevronRight size={11} />
          <Link href="/accommodations" className="hover:text-green-900 transition-colors">Accommodations</Link>
          <ChevronRight size={11} />
          <span style={{ color: "var(--forest)" }}>{cabin.name}</span>
        </div>
      </div>

      {/* Hero */}
      <div className="relative overflow-hidden" style={{ height: "clamp(360px, 55vw, 560px)" }}>
        <div className="absolute inset-0" style={{ background: cabin.bg }}>
          {/* Stars */}
          {[...Array(40)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{ width: `${Math.random()*1.5+0.4}px`, height: `${Math.random()*1.5+0.4}px`, left: `${Math.random()*100}%`, top: `${Math.random()*60}%`, opacity: Math.random()*0.5+0.1 }} />
          ))}
          {/* Cabin silhouette */}
          <svg className="absolute" style={{ bottom: "22%", left: "30%", width: 150 }} viewBox="0 0 120 100">
            <polygon points="60,5 5,45 115,45" fill="rgba(0,0,0,0.9)" />
            <rect x="15" y="45" width="90" height="50" fill="rgba(0,0,0,0.9)" />
            <rect x="45" y="62" width="24" height="28" fill="rgba(201,168,76,0.4)" />
            <rect x="22" y="54" width="20" height="15" fill="rgba(201,168,76,0.2)" />
            <rect x="78" y="54" width="20" height="15" fill="rgba(201,168,76,0.2)" />
          </svg>
          <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.65) 0%, transparent 55%)" }} />
        </div>

        <div className="absolute bottom-10 left-0 right-0">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <span className="eyebrow block mb-2" style={{ color: "var(--gold)" }}>{cabin.type}</span>
            <h1 className="display-serif text-white" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)" }}>{cabin.name}</h1>
            <p style={{ color: "rgba(255,255,255,0.6)", marginTop: "0.75rem", fontSize: "1.05rem" }}>{cabin.tagline}</p>
          </div>
        </div>

        <div className="absolute top-8 right-8 flex items-center gap-1.5 px-3 py-2"
          style={{ background: "rgba(13,31,23,0.85)", backdropFilter: "blur(10px)" }}>
          <Star size={13} fill="var(--gold)" color="var(--gold)" />
          <span style={{ color: "white", fontWeight: 700, fontSize: "0.85rem" }}>{cabin.rating}</span>
          <span style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>({cabin.reviews} reviews)</span>
        </div>
      </div>

      {/* Body */}
      <section className="py-16" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-[1fr_360px] gap-12">

            {/* Left */}
            <div className="space-y-12">
              {/* Stats */}
              <div className="flex flex-wrap gap-8 py-6"
                style={{ borderBottom: "1px solid var(--cream-dark)" }}>
                {[
                  { icon: Bed,   v: `${cabin.beds} Bedrooms` },
                  { icon: Bath,  v: `${cabin.baths} Bathrooms` },
                  { icon: Users, v: `Up to ${cabin.guests} Guests` },
                ].map(({ icon: Icon, v }) => (
                  <div key={v} className="flex items-center gap-2.5" style={{ color: "var(--ink)" }}>
                    <Icon size={18} style={{ color: "var(--stone)" }} />
                    <span className="font-medium">{v}</span>
                  </div>
                ))}
                <span style={{ color: "var(--stone)", fontSize: "0.85rem", marginLeft: "auto" }}>{cabin.sqft} sq ft</span>
              </div>

              {/* Description */}
              <div>
                <h2 className="heading-serif mb-5" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>About This Retreat</h2>
                <p style={{ color: "var(--stone)", lineHeight: 1.85, fontSize: "1.05rem" }}>{cabin.desc}</p>
              </div>

              {/* Amenities */}
              <div>
                <h2 className="heading-serif mb-6" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>What&apos;s Included</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cabin.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2.5 text-sm"
                      style={{ color: "var(--ink-mid)" }}>
                      <div className="w-4 h-4 flex items-center justify-center shrink-0"
                        style={{ background: "var(--gold)", color: "var(--ink)" }}>
                        <span style={{ fontSize: "0.5rem", fontWeight: 900 }}>✓</span>
                      </div>
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              {/* Rules */}
              <div>
                <h2 className="heading-serif mb-5" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>House Rules</h2>
                <ul className="space-y-2.5">
                  {cabin.rules.map((r) => (
                    <li key={r} className="flex items-center gap-3 text-sm" style={{ color: "var(--stone)" }}>
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key features */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { icon: Waves, title: "Water Access",      desc: "Private lake / nature access included" },
                  { icon: Wifi,  title: "Fiber Internet",    desc: "High-speed WiFi throughout" },
                  { icon: Flame, title: "Fire Features",     desc: "Fireplace & outdoor fire pit" },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="p-5" style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
                    <Icon size={18} style={{ color: "var(--gold)", marginBottom: "0.75rem" }} />
                    <div className="font-semibold text-sm mb-1" style={{ color: "var(--ink)" }}>{title}</div>
                    <div style={{ color: "var(--stone)", fontSize: "0.78rem" }}>{desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking sidebar */}
            <div className="space-y-5 lg:sticky lg:top-24 self-start">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
                <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--forest), var(--gold), var(--forest))" }} />
                <div className="p-6">
                  <div className="flex items-end gap-1.5 mb-1">
                    <span className="heading-serif" style={{ fontSize: "2rem", color: "var(--forest)" }}>${cabin.price}</span>
                    <span style={{ color: "var(--stone)", fontSize: "0.82rem", paddingBottom: 4 }}>/night</span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-6">
                    <Star size={12} fill="var(--gold)" color="var(--gold)" />
                    <span className="font-semibold text-sm">{cabin.rating}</span>
                    <span style={{ color: "var(--stone)", fontSize: "0.75rem" }}>· {cabin.reviews} reviews</span>
                  </div>

                  {/* Sample pricing */}
                  <div className="p-4 mb-5" style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)" }}>
                    <div className="font-medium text-sm mb-3" style={{ color: "var(--ink)" }}>Sample 3-night stay</div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span style={{ color: "var(--stone)" }}>${cabin.price} × 3 nights</span><span>${subtotal}</span></div>
                      <div className="flex justify-between"><span style={{ color: "var(--stone)" }}>Cleaning fee</span><span>${cleaning}</span></div>
                      <div className="flex justify-between"><span style={{ color: "var(--stone)" }}>Service fee</span><span>${serviceFee}</span></div>
                      <div className="flex justify-between font-bold" style={{ borderTop: "1px solid var(--cream-dark)", paddingTop: 8, marginTop: 4, color: "var(--forest)" }}>
                        <span style={{ color: "var(--ink)" }}>Total</span>
                        <span>${total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <Link href="/#booking-widget" id="book"
                    className="btn-gold w-full justify-center block text-center">
                    Reserve This Cabin
                  </Link>
                  <Link href="/contact"
                    className="btn-outline-ink w-full justify-center block text-center mt-3">
                    Ask a Question
                  </Link>
                  <p style={{ color: "var(--stone)", fontSize: "0.72rem", textAlign: "center", marginTop: "0.75rem" }}>
                    Free cancellation up to 14 days before check-in
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related */}
          <div className="mt-20">
            <h2 className="heading-serif mb-8" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>You May Also Like</h2>
            <div className="flex gap-5 overflow-x-auto pb-2">
              {relatedCabins.filter((c) => c.id !== slug).map((c) => (
                <Link key={c.id} href={`/accommodations/${c.id}`}
                  className="shrink-0 w-64 transition-all hover:-translate-y-1"
                  style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
                  <div className="h-36 relative overflow-hidden" style={{ background: c.bg }}>
                    <div className="absolute inset-0 flex items-center justify-center opacity-20">
                      <svg viewBox="0 0 100 80" className="w-20 h-16 fill-white">
                        <polygon points="50,4 4,38 96,38" />
                        <rect x="12" y="38" width="76" height="38" />
                      </svg>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="eyebrow mb-0.5" style={{ color: "var(--stone)" }}>{c.type}</div>
                    <div className="heading-serif mb-1" style={{ fontSize: "1.1rem", color: "var(--ink)" }}>{c.name}</div>
                    <div className="font-bold text-sm" style={{ color: "var(--forest)" }}>From ${c.price}/night</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
