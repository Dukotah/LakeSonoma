"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Car } from "lucide-react";

const attractions = [
  { name: "Alexander Valley Wineries", distance: "8 miles", time: "12 min", category: "Wine", desc: "50+ boutique wineries in a world-famous appellation." },
  { name: "Healdsburg Plaza", distance: "14 miles", time: "20 min", category: "Town", desc: "Farm-to-table dining, boutique shops, and the famous farmers market." },
  { name: "Lake Sonoma Recreation Area", distance: "0.5 miles", time: "1 min", category: "Nature", desc: "Swimming, fishing, and 40+ miles of hiking trails." },
  { name: "Dry Creek Valley", distance: "6 miles", time: "10 min", category: "Wine", desc: "Premier Zinfandel country with classic family-owned wineries." },
  { name: "Russian River Valley", distance: "20 miles", time: "28 min", category: "Wine", desc: "World-renowned Pinot Noir and Chardonnay territory." },
  { name: "Armstrong Redwoods", distance: "25 miles", time: "35 min", category: "Nature", desc: "Ancient coastal redwood grove — trees over 1,400 years old." },
  { name: "Bodega Bay", distance: "45 miles", time: "55 min", category: "Coast", desc: "Pacific coastline, whale watching, and fresh seafood." },
  { name: "Cloverdale Farmers Market", distance: "18 miles", time: "22 min", category: "Food", desc: "Saturday mornings. Local produce, artisan cheeses, fresh flowers." },
];

const categoryColors: Record<string, string> = {
  Wine: "#9333ea",
  Town: "#0ea5e9",
  Nature: "#10b981",
  Coast: "#0284c7",
  Food: "#d97706",
};

export default function LocalGuide() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-label mb-3" style={{ color: "#D4AF37" }}>
              Location & Area Guide
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-serif mb-6"
              style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              Everything Wine Country Has to Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-gray-600 text-lg leading-relaxed mb-8">
              Lake Sonoma sits at the heart of Northern California&apos;s most celebrated wine region.
              Our location gives you effortless access to world-class wineries, farm-to-table dining,
              pristine coastlines, and ancient forests — all within an hour&apos;s drive.
            </motion.p>
            {/* Map placeholder */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="rounded-sm overflow-hidden shadow-lg h-64 relative"
              style={{ background: "linear-gradient(135deg, #1B4332 0%, #0F2942 60%, #2d6a4f 100%)" }}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <MapPin size={40} className="mx-auto mb-3 opacity-60" style={{ color: "#D4AF37" }} />
                  <div className="font-serif text-xl mb-1" style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>Lake Sonoma Resort</div>
                  <div className="text-white/60 text-sm">Geyserville, CA 95441</div>
                  <a
                    href="https://maps.google.com/?q=Lake+Sonoma+California"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 px-5 py-2 text-xs font-semibold uppercase tracking-wider transition-all"
                    style={{ border: "1px solid rgba(212,175,55,0.6)", color: "#D4AF37" }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,175,55,0.1)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}>
                    Get Directions
                  </a>
                </div>
              </div>
              {/* Road pattern */}
              <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 400 200">
                <line x1="0" y1="100" x2="400" y2="100" stroke="white" strokeWidth="2" strokeDasharray="10,5" />
                <line x1="200" y1="0" x2="200" y2="200" stroke="white" strokeWidth="1.5" strokeDasharray="8,4" />
                <circle cx="200" cy="100" r="8" fill="#D4AF37" />
                <circle cx="200" cy="100" r="4" fill="white" />
              </svg>
            </motion.div>
          </div>

          {/* Attractions */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-3">
              {attractions.map((a, i) => (
                <motion.div
                  key={a.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-4 p-4 rounded-sm border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0 text-white text-xs font-bold"
                    style={{ background: categoryColors[a.category] || "#6b7280" }}>
                    {a.category[0]}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-gray-800 text-sm truncate">{a.name}</div>
                    <div className="text-xs text-gray-500 truncate">{a.desc}</div>
                  </div>
                  <div className="text-right shrink-0 text-xs text-gray-500">
                    <div className="flex items-center gap-1 justify-end"><MapPin size={10} />{a.distance}</div>
                    <div className="flex items-center gap-1 justify-end mt-0.5"><Car size={10} />{a.time}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
