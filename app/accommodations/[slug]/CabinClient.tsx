"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Bed, Bath, Users, Star, ChevronRight, Wifi, Flame, Waves } from "lucide-react";

const cabinData: Record<string, {
  name: string; type: string; tagline: string; desc: string;
  beds: number; baths: number; guests: number; sqft: string; price: number; rating: number; reviews: number;
  amenities: string[]; rules: string[]; color: string; emoji: string;
}> = {
  "osprey-point": {
    name: "Osprey Point", type: "Lakeside Cabin",
    tagline: "Panoramic lake views from every room",
    desc: "Osprey Point is the jewel of our lakeside collection. Perched directly on the shoreline with wraparound windows that frame the water from every angle. Wake to shimmering reflections, end the day with a private hot tub session as the stars emerge over the lake.",
    beds: 3, baths: 2, guests: 6, sqft: "1,800", price: 495, rating: 4.97, reviews: 143,
    amenities: ["Private Hot Tub", "Kayaks & Paddleboards", "Private Dock", "Lake Access", "Chef Kitchen", "Fire Pit", "High-Speed WiFi", "Smart TV", "Washer/Dryer", "BBQ Grill"],
    rules: ["No smoking", "Pets allowed (dogs only, $75 fee)", "No parties/events", "Check-in 4pm / Check-out 11am"],
    color: "from-blue-900 to-teal-800", emoji: "🏡",
  },
  "cedar-ridge": {
    name: "Cedar Ridge", type: "Forest Retreat",
    tagline: "Surrounded by ancient redwoods in complete privacy",
    desc: "Cedar Ridge sits at the heart of a private 40-acre forest parcel. Ancient redwood and cedar surround the cabin, creating a cathedral of trees that guarantees complete solitude. The sauna, outdoor shower, and fire pit make this the ultimate digital detox destination.",
    beds: 4, baths: 3, guests: 8, sqft: "2,400", price: 695, rating: 4.95, reviews: 87,
    amenities: ["Private Sauna", "Outdoor Shower", "Hot Tub", "Game Room", "Fire Pit", "WiFi", "Chef Kitchen", "BBQ", "Hammocks", "Forest Trails"],
    rules: ["No smoking", "Pets allowed", "No parties", "Check-in 4pm / Check-out 11am"],
    color: "from-green-900 to-emerald-800", emoji: "🌲",
  },
  "vineyard-villa": {
    name: "Vineyard Villa", type: "Estate House",
    tagline: "A full estate with vineyard vistas and resort amenities",
    desc: "The Vineyard Villa is our most celebrated property — a 3,200 sq ft estate set among 8 acres of active vines. Every amenity of a five-star resort, from the private pool to the wine cellar stocked with local bottles, is yours exclusively for the duration of your stay.",
    beds: 5, baths: 4, guests: 10, sqft: "3,200", price: 995, rating: 5.0, reviews: 42,
    amenities: ["Private Pool & Spa", "Wine Cellar", "Home Theater", "Butler Service Available", "Private Chef Available", "Lake Views", "Fire Pit", "WiFi", "Multiple Decks", "EV Charger"],
    rules: ["No smoking", "Pets negotiable", "Events allowed (permit required)", "Check-in 4pm / Check-out 11am"],
    color: "from-purple-900 to-indigo-900", emoji: "🏰",
  },
  "herons-landing": {
    name: "Heron's Landing", type: "Lakeside Cabin",
    tagline: "An intimate lakeside retreat for two",
    desc: "Heron's Landing is our most romantic lakeside cabin — compact, perfectly designed, and positioned right at the water's edge. Perfect for couples or two families who want their own private paradise.",
    beds: 2, baths: 2, guests: 4, sqft: "1,200", price: 445, rating: 4.92, reviews: 98,
    amenities: ["Private Dock", "Lake Access", "Fire Pit", "WiFi", "Smart TV", "Kayaks"],
    rules: ["No smoking", "No pets", "No parties", "Check-in 4pm / Check-out 11am"],
    color: "from-teal-900 to-cyan-800", emoji: "🏠",
  },
  "redwood-haven": {
    name: "Redwood Haven", type: "Forest Retreat",
    tagline: "Perched among old-growth redwoods",
    desc: "Redwood Haven offers a magical forest atmosphere unlike any other property on our grounds. The natural scent of cedar fills every room, and the outdoor shower beneath the canopy is an experience you will not forget.",
    beds: 3, baths: 2, guests: 6, sqft: "1,600", price: 545, rating: 4.91, reviews: 64,
    amenities: ["Outdoor Shower", "Fire Pit", "WiFi", "Hammock", "BBQ", "Chef Kitchen"],
    rules: ["No smoking", "Dogs allowed", "No parties", "Check-in 4pm / Check-out 11am"],
    color: "from-green-800 to-stone-900", emoji: "🌿",
  },
  "sunset-ridge": {
    name: "Sunset Ridge", type: "Forest Retreat",
    tagline: "Hilltop views of vineyard valleys at golden hour",
    desc: "Sunset Ridge commands a hilltop position with sweeping views over the Alexander Valley. Watch the vineyards turn gold every evening from your private deck with a glass of local Zinfandel in hand.",
    beds: 2, baths: 2, guests: 4, sqft: "1,400", price: 395, rating: 4.9, reviews: 55,
    amenities: ["Valley Views", "Fire Pit", "WiFi", "BBQ", "Hammock", "Smart TV"],
    rules: ["No smoking", "No pets", "No parties", "Check-in 4pm / Check-out 11am"],
    color: "from-orange-900 to-amber-800", emoji: "🌄",
  },
};

const otherCabins = [
  { id: "osprey-point", name: "Osprey Point", type: "Lakeside Cabin", price: 495, color: "from-blue-900 to-teal-800", emoji: "🏡" },
  { id: "cedar-ridge", name: "Cedar Ridge", type: "Forest Retreat", price: 695, color: "from-green-900 to-emerald-800", emoji: "🌲" },
  { id: "vineyard-villa", name: "Vineyard Villa", type: "Estate House", price: 995, color: "from-purple-900 to-indigo-900", emoji: "🏰" },
];

export default function CabinClient({ slug }: { slug: string }) {
  const cabin = cabinData[slug];

  if (!cabin) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24" style={{ background: "#FAF7F2" }}>
        <div className="text-center">
          <div className="text-5xl mb-4">🏡</div>
          <h2 className="text-2xl font-serif mb-3" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>Cabin Not Found</h2>
          <Link href="/accommodations" className="px-6 py-3 text-sm font-semibold text-white" style={{ background: "#1B4332" }}>
            View All Cabins
          </Link>
        </div>
      </div>
    );
  }

  const nights = 3;
  const cleaningFee = 185;
  const subtotal = cabin.price * nights;
  const total = subtotal + cleaningFee + Math.round(subtotal * 0.12);

  return (
    <>
      {/* Breadcrumb */}
      <div className="pt-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Link href="/" className="hover:text-green-800 transition-colors">Home</Link>
            <ChevronRight size={12} />
            <Link href="/accommodations" className="hover:text-green-800 transition-colors">Accommodations</Link>
            <ChevronRight size={12} />
            <span style={{ color: "#1B4332" }}>{cabin.name}</span>
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className={`relative h-96 md:h-[500px] bg-gradient-to-br ${cabin.color}`}>
        <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-15">{cabin.emoji}</div>
        <div className="absolute inset-0" style={{ background: "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />
        <div className="absolute bottom-8 left-8 text-white">
          <div className="text-xs tracking-[0.3em] uppercase mb-2" style={{ color: "#D4AF37" }}>{cabin.type}</div>
          <h1 className="text-4xl md:text-5xl font-serif" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{cabin.name}</h1>
          <p className="text-white/70 mt-2 text-lg">{cabin.tagline}</p>
        </div>
        <div className="absolute bottom-8 right-8 flex items-center gap-1.5 bg-white/95 rounded-sm px-3 py-2">
          <Star size={14} fill="#D4AF37" color="#D4AF37" />
          <span className="font-bold text-sm">{cabin.rating}</span>
          <span className="text-gray-500 text-xs">({cabin.reviews} reviews)</span>
        </div>
      </div>

      {/* Content */}
      <section className="py-12" style={{ background: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-10">
              <div className="flex flex-wrap gap-6 py-6 border-y border-gray-200">
                <div className="flex items-center gap-2"><Bed size={18} className="text-gray-400" /><span className="font-medium">{cabin.beds} Bedrooms</span></div>
                <div className="flex items-center gap-2"><Bath size={18} className="text-gray-400" /><span className="font-medium">{cabin.baths} Bathrooms</span></div>
                <div className="flex items-center gap-2"><Users size={18} className="text-gray-400" /><span className="font-medium">Up to {cabin.guests} guests</span></div>
                <div className="text-gray-500 text-sm">{cabin.sqft} sq ft</div>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>About This Retreat</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{cabin.desc}</p>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-5" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>What&apos;s Included</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {cabin.amenities.map((a) => (
                    <div key={a} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(27,67,50,0.08)" }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: "#1B4332" }} />
                      </div>
                      {a}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-serif mb-4" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>House Rules</h2>
                <ul className="space-y-2">
                  {cabin.rules.map((r) => (
                    <li key={r} className="flex items-center gap-2 text-sm text-gray-600">
                      <span style={{ color: "#D4AF37" }}>✓</span>{r}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Booking sidebar */}
            <div className="lg:sticky lg:top-24 space-y-6 self-start">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-sm shadow-xl p-6 border border-gray-100"
              >
                <div className="flex items-end gap-1 mb-1">
                  <span className="text-3xl font-bold" style={{ color: "#1B4332" }}>${cabin.price}</span>
                  <span className="text-gray-500 text-sm pb-1">/night</span>
                </div>
                <div className="flex items-center gap-1.5 mb-5">
                  <Star size={13} fill="#D4AF37" color="#D4AF37" />
                  <span className="font-semibold text-sm">{cabin.rating}</span>
                  <span className="text-gray-500 text-xs">· {cabin.reviews} reviews</span>
                </div>

                <div className="mb-4 p-4 rounded-sm text-sm text-gray-600"
                  style={{ background: "rgba(27,67,50,0.04)", border: "1px solid rgba(27,67,50,0.08)" }}>
                  <div className="font-medium text-gray-800 mb-1">Sample 3-night stay:</div>
                  <div className="space-y-1">
                    <div className="flex justify-between"><span>${cabin.price} × 3 nights</span><span>${subtotal}</span></div>
                    <div className="flex justify-between"><span>Cleaning fee</span><span>${cleaningFee}</span></div>
                    <div className="flex justify-between"><span>Service fee</span><span>${Math.round(subtotal * 0.12)}</span></div>
                    <div className="flex justify-between font-bold pt-2 border-t border-gray-200 mt-2">
                      <span>Total</span><span style={{ color: "#1B4332" }}>${total}</span>
                    </div>
                  </div>
                </div>

                <Link href="/#booking-widget"
                  id="book"
                  className="block w-full text-center py-4 font-semibold text-sm tracking-[0.1em] uppercase text-white transition-all"
                  style={{ background: "#D4AF37" }}>
                  Reserve This Cabin
                </Link>
                <Link href="/contact"
                  className="block w-full text-center py-3 font-medium text-sm tracking-wide mt-3 transition-all border"
                  style={{ border: "1.5px solid #1B4332", color: "#1B4332" }}>
                  Ask a Question
                </Link>
                <p className="text-xs text-gray-500 text-center mt-3">Free cancellation up to 14 days before check-in</p>
              </motion.div>

              <div className="bg-white rounded-sm shadow-md p-5 border border-gray-100">
                <div className="text-sm font-semibold text-gray-700 mb-3">Key Features</div>
                <div className="space-y-2">
                  {[
                    { icon: Waves, text: "Water / Nature Access" },
                    { icon: Wifi, text: "High-Speed Internet" },
                    { icon: Flame, text: "Fireplace & Fire Pit" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3 text-sm text-gray-600">
                      <Icon size={16} style={{ color: "#1B4332" }} />{text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More cabins */}
          <div className="mt-20">
            <h2 className="text-2xl font-serif mb-6" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              You May Also Like
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {otherCabins.filter((c) => c.id !== slug).map((c) => (
                <Link key={c.id} href={`/accommodations/${c.id}`}
                  className="shrink-0 w-64 bg-white rounded-sm shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden border border-gray-100"
                >
                  <div className={`h-36 bg-gradient-to-br ${c.color} flex items-center justify-center text-4xl opacity-50`}>{c.emoji}</div>
                  <div className="p-4">
                    <div className="text-xs text-gray-400 uppercase tracking-[0.1em] mb-0.5">{c.type}</div>
                    <div className="font-serif text-lg" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>{c.name}</div>
                    <div className="text-sm font-bold mt-1" style={{ color: "#1B4332" }}>From ${c.price}/night</div>
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
