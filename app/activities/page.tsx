"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";

const categories = [
  {
    id: "wine",
    emoji: "🍷",
    title: "Wine & Dining",
    subtitle: "The Finest in Wine Country",
    color: "from-purple-950 to-indigo-900",
    items: [
      { name: "Private Vineyard Tours", desc: "Exclusive access to 5 family-owned wineries not open to the public. Meet the winemakers.", price: "$185/person", duration: "4 hours" },
      { name: "Sunset Wine Pairing Dinner", desc: "A curated 5-course meal paired with award-winning Sonoma wines on your private deck.", price: "$245/person", duration: "3 hours" },
      { name: "Barrel Tasting Experience", desc: "Taste wines straight from the barrel at harvest time with a master sommelier.", price: "$125/person", duration: "2 hours" },
      { name: "Farm-to-Table Cooking Class", desc: "Learn from a local chef using fresh ingredients from the resort garden.", price: "$165/person", duration: "3 hours" },
      { name: "Farmers Market Tour", desc: "Guided tour of Healdsburg's famous Saturday market with a local food expert.", price: "$65/person", duration: "2.5 hours" },
      { name: "Private Chef in Your Cabin", desc: "A professional chef comes to your cabin to prepare a customized feast.", price: "From $95/person", duration: "Full evening" },
    ],
  },
  {
    id: "water",
    emoji: "🚣",
    title: "Water Activities",
    subtitle: "Master the Lake",
    color: "from-blue-950 to-teal-900",
    items: [
      { name: "Sunrise Kayak Tour", desc: "Paddle across glass-smooth water at dawn with a guide who knows every cove.", price: "Included", duration: "2 hours" },
      { name: "Bass Fishing Charter", desc: "Lake Sonoma has some of the best bass fishing in California. Rods and tackle provided.", price: "$195/boat", duration: "4 hours" },
      { name: "Sunset Pontoon Cruise", desc: "Private pontoon tour for up to 8 guests with wine and charcuterie.", price: "$275/group", duration: "2 hours" },
      { name: "Paddleboarding Lesson", desc: "Learn to stand-up paddleboard with an experienced instructor on calm water.", price: "Included", duration: "1.5 hours" },
      { name: "Swimming Cove Access", desc: "Access to four private swimming coves with sandy shores and clear water.", price: "Included", duration: "Unlimited" },
      { name: "Boat Rental", desc: "Rent a 17-foot motorboat for the day and explore the lake at your own pace.", price: "$285/day", duration: "Full day" },
    ],
  },
  {
    id: "spa",
    emoji: "✨",
    title: "Spa & Wellness",
    subtitle: "Restore Your Soul",
    color: "from-rose-950 to-pink-900",
    items: [
      { name: "In-Cabin Couples Massage", desc: "Two licensed therapists bring a full spa experience to your cabin.", price: "$320/couple", duration: "90 minutes" },
      { name: "Forest Bathing Session", desc: "A guided Shinrin-yoku experience in the old-growth forest. Deeply restorative.", price: "$75/person", duration: "2 hours" },
      { name: "Yoga in the Redwoods", desc: "Morning yoga with a certified instructor surrounded by ancient trees.", price: "$55/person", duration: "75 minutes" },
      { name: "Sound Bath Meditation", desc: "Tibetan bowls and crystal singing bowls under the stars for deep relaxation.", price: "$85/person", duration: "60 minutes" },
      { name: "Couples Retreat Package", desc: "Full-day spa itinerary: massage, facial, sound bath, and guided meditation.", price: "$695/couple", duration: "Full day" },
      { name: "Cold Plunge & Sauna Experience", desc: "Contrast therapy session with private sauna and ice-cold lake plunge.", price: "$65/person", duration: "2 hours" },
    ],
  },
  {
    id: "outdoor",
    emoji: "🏔️",
    title: "Outdoor Adventures",
    subtitle: "Explore Wild Sonoma",
    color: "from-green-950 to-emerald-900",
    items: [
      { name: "Guided Redwood Hike", desc: "A naturalist guide leads you through old-growth forest with stories of the land.", price: "$85/person", duration: "3 hours" },
      { name: "Mountain Biking Adventure", desc: "Single-track trails through vineyards and forest. Bikes and helmets included.", price: "$95/person", duration: "3 hours" },
      { name: "Private Stargazing Night", desc: "An astronomer sets up telescopes and narrates the Sonoma night sky.", price: "$125/person", duration: "2 hours" },
      { name: "Wildlife Photography Walk", desc: "Spot osprey, deer, wild turkey and black bears with a professional photographer.", price: "$95/person", duration: "2.5 hours" },
      { name: "Horseback Vineyard Ride", desc: "Trail riding through working vineyards with a certified riding instructor.", price: "$145/person", duration: "2 hours" },
      { name: "Rock Climbing & Rappelling", desc: "Beginner to intermediate climbing on natural rock faces with full equipment.", price: "$165/person", duration: "4 hours" },
    ],
  },
];

export default function ActivitiesPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <div className="relative pt-32 pb-20" style={{ background: "linear-gradient(135deg, #1B4332 0%, #0F2942 100%)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#D4AF37" }}>Curated Experiences</div>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-4"
              style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              Activities & Experiences
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              From sunrise kayaks to sunset wine pairings — we&apos;ve curated the finest experiences Sonoma wine country has to offer.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Anchor nav */}
      <div className="sticky top-16 z-20 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 overflow-x-auto">
            {categories.map((cat) => (
              <a key={cat.id} href={`#${cat.id}`}
                className="shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-all"
                style={{ borderColor: "transparent", color: "#6b7280" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#1B4332"; e.currentTarget.style.borderColor = "#1B4332"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "#6b7280"; e.currentTarget.style.borderColor = "transparent"; }}>
                {cat.emoji} {cat.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ background: "#FAF7F2" }}>
        {categories.map((cat, ci) => (
          <section key={cat.id} id={cat.id} className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Category header */}
              <div className={`relative rounded-sm overflow-hidden mb-12 bg-gradient-to-br ${cat.color} p-10 md:p-16`}>
                <div className="relative z-10">
                  <div className="text-5xl mb-4">{cat.emoji}</div>
                  <div className="text-xs tracking-[0.3em] uppercase font-semibold mb-2" style={{ color: "#D4AF37" }}>{cat.subtitle}</div>
                  <h2 className="text-3xl md:text-4xl font-serif text-white"
                    style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>{cat.title}</h2>
                </div>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 text-9xl opacity-10">{cat.emoji}</div>
              </div>

              {/* Items grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="bg-white rounded-sm p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-100"
                  >
                    <h3 className="font-serif text-lg mb-2" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>{item.name}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed mb-4">{item.desc}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <div className="text-xs text-gray-400 uppercase tracking-[0.1em]">Duration</div>
                        <div className="text-sm font-medium text-gray-700">{item.duration}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-gray-400 uppercase tracking-[0.1em]">Price</div>
                        <div className="font-bold" style={{ color: "#1B4332" }}>{item.price}</div>
                      </div>
                    </div>
                    <a href="/contact"
                      className="mt-4 w-full block text-center py-2.5 text-xs font-semibold uppercase tracking-wider transition-all"
                      style={{ border: "1.5px solid #1B4332", color: "#1B4332" }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = "#1B4332"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#1B4332"; }}>
                      Request Booking
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <NewsletterSection />
      <Footer />
    </>
  );
}
