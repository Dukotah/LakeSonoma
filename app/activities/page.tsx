"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import NewsletterSection from "@/components/NewsletterSection";
import { Clock, DollarSign, ArrowRight } from "lucide-react";

const categories = [
  {
    id: "wine",
    label: "Wine & Dining",
    sub: "The Finest in Wine Country",
    accent: "#7c3aed",
    accentMid: "#4c1d95",
    items: [
      { name: "Private Vineyard Tours", desc: "Exclusive access to 5 family-owned wineries not open to the public. Meet the winemakers and taste unreleased vintages.", price: "$185/person", duration: "4 hours" },
      { name: "Sunset Wine Pairing Dinner", desc: "A curated 5-course meal paired with award-winning Sonoma wines on your private deck overlooking the lake.", price: "$245/person", duration: "3 hours" },
      { name: "Barrel Tasting Experience", desc: "Taste wines straight from the barrel at harvest time with a master sommelier guiding every note.", price: "$125/person", duration: "2 hours" },
      { name: "Farm-to-Table Cooking Class", desc: "Learn from a local chef using fresh ingredients harvested from the resort's kitchen garden.", price: "$165/person", duration: "3 hours" },
      { name: "Farmers Market Tour", desc: "Guided tour of Healdsburg's famous Saturday market with a local food expert and tasting stops.", price: "$65/person", duration: "2.5 hours" },
      { name: "Private Chef in Your Cabin", desc: "A professional chef comes to your cabin to prepare a fully customized multi-course feast.", price: "From $95/person", duration: "Full evening" },
    ],
  },
  {
    id: "water",
    label: "Water Activities",
    sub: "Master the Lake",
    accent: "#0891b2",
    accentMid: "#164e63",
    items: [
      { name: "Sunrise Kayak Tour", desc: "Paddle across glass-smooth water at dawn with a guide who knows every hidden cove on the lake.", price: "Included", duration: "2 hours" },
      { name: "Bass Fishing Charter", desc: "Lake Sonoma has some of the best bass fishing in California. Rods, tackle, and live bait provided.", price: "$195/boat", duration: "4 hours" },
      { name: "Sunset Pontoon Cruise", desc: "Private pontoon tour for up to 8 guests with local wine and artisan charcuterie on the water.", price: "$275/group", duration: "2 hours" },
      { name: "Paddleboarding Lesson", desc: "Learn to stand-up paddleboard with an experienced instructor on the resort's calm cove.", price: "Included", duration: "1.5 hours" },
      { name: "Swimming Cove Access", desc: "Access to four private swimming coves with sandy shores and crystal-clear water.", price: "Included", duration: "Unlimited" },
      { name: "Motorboat Rental", desc: "Rent a 17-foot motorboat and explore the lake entirely at your own pace.", price: "$285/day", duration: "Full day" },
    ],
  },
  {
    id: "spa",
    label: "Spa & Wellness",
    sub: "Restore Your Soul",
    accent: "#be185d",
    accentMid: "#831843",
    items: [
      { name: "In-Cabin Couples Massage", desc: "Two licensed therapists bring a complete spa experience directly to your private cabin.", price: "$320/couple", duration: "90 minutes" },
      { name: "Forest Bathing Session", desc: "A guided Shinrin-yoku experience in old-growth forest. One of the most restorative practices in the world.", price: "$75/person", duration: "2 hours" },
      { name: "Yoga in the Redwoods", desc: "Morning yoga with a certified instructor, surrounded by ancient trees and birdsong.", price: "$55/person", duration: "75 minutes" },
      { name: "Sound Bath Meditation", desc: "Tibetan bowls and crystal singing bowls played under the stars for profound relaxation.", price: "$85/person", duration: "60 minutes" },
      { name: "Couples Retreat Package", desc: "Full-day spa itinerary: massage, facial, sound bath, and guided meditation retreat.", price: "$695/couple", duration: "Full day" },
      { name: "Cold Plunge & Sauna", desc: "Contrast therapy session with private sauna and an invigorating ice-cold lake plunge.", price: "$65/person", duration: "2 hours" },
    ],
  },
  {
    id: "outdoor",
    label: "Outdoor Adventures",
    sub: "Explore Wild Sonoma",
    accent: "#16a34a",
    accentMid: "#14532d",
    items: [
      { name: "Guided Redwood Hike", desc: "A naturalist guide leads you through old-growth forest sharing the deep history of this land.", price: "$85/person", duration: "3 hours" },
      { name: "Mountain Biking Adventure", desc: "Single-track trails weaving through vineyards and forest. Bikes and helmets fully included.", price: "$95/person", duration: "3 hours" },
      { name: "Private Stargazing Night", desc: "An astronomer sets up professional telescopes and narrates the breathtaking Sonoma night sky.", price: "$125/person", duration: "2 hours" },
      { name: "Wildlife Photography Walk", desc: "Spot osprey, deer, wild turkey and black bears with a professional wildlife photographer.", price: "$95/person", duration: "2.5 hours" },
      { name: "Horseback Vineyard Ride", desc: "Trail riding through working vineyards with a certified riding instructor by your side.", price: "$145/person", duration: "2 hours" },
      { name: "Rock Climbing & Rappelling", desc: "Beginner to intermediate climbing on natural rock faces with full certified equipment.", price: "$165/person", duration: "4 hours" },
    ],
  },
];

export default function ActivitiesPage() {
  const [active, setActive] = useState("wine");
  const cat = categories.find((c) => c.id === active)!;

  return (
    <>
      <Navigation />

      {/* Hero */}
      <div className="relative pt-40 pb-24 overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 30% 60%, rgba(29,74,40,0.3) 0%, transparent 60%)" }} />
        {/* Decorative dots */}
        <div className="absolute right-0 top-0 w-[500px] h-[500px] opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          <span className="eyebrow block mb-5">Curated Experiences</span>
          <div className="section-rule" />
          <h1 className="display-serif text-white" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>
            Activities &<br />Experiences
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 520, marginTop: "1.5rem", lineHeight: 1.8, fontSize: "1.05rem" }}>
            From sunrise kayaks to sunset wine pairings — we&apos;ve curated the finest experiences Sonoma wine country has to offer.
          </p>
        </div>
      </div>

      {/* Sticky category nav */}
      <div className="sticky top-[72px] z-30" style={{ background: "var(--ink)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="flex overflow-x-auto" style={{ gap: 0 }}>
            {categories.map((c) => (
              <button key={c.id} onClick={() => setActive(c.id)}
                className="shrink-0 px-7 py-5 text-xs font-semibold uppercase tracking-[0.18em] transition-all relative"
                style={{ color: active === c.id ? "var(--gold)" : "rgba(255,255,255,0.35)" }}>
                {c.label}
                {active === c.id && (
                  <motion.div layoutId="cat-underline" className="absolute bottom-0 left-0 right-0 h-[2px]"
                    style={{ background: "var(--gold)" }} />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Category section */}
      <section style={{ background: "var(--cream)" }}>
        {/* Category hero banner */}
        <motion.div key={cat.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}
          className="relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${cat.accentMid} 0%, ${cat.accent} 100%)`, minHeight: 220 }}>
          <div className="absolute inset-0 pointer-events-none opacity-10"
            style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 relative z-10 flex items-end justify-between gap-8 flex-wrap">
            <div>
              <span className="eyebrow block mb-3" style={{ color: "rgba(255,255,255,0.55)" }}>{cat.sub}</span>
              <h2 className="display-serif text-white" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>{cat.label}</h2>
            </div>
            <a href="/contact" className="btn-gold shrink-0">
              Book an Experience <ArrowRight size={14} />
            </a>
          </div>
        </motion.div>

        {/* Items grid */}
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cat.items.map((item, i) => (
              <motion.div key={item.name}
                initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="group flex flex-col"
                style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
                {/* Gold top accent */}
                <div className="h-[2px] shrink-0" style={{ background: "linear-gradient(90deg, var(--gold), transparent)" }} />
                <div className="p-7 flex flex-col flex-1">
                  <h3 className="heading-serif mb-3" style={{ fontSize: "1.15rem", color: "var(--ink)" }}>{item.name}</h3>
                  <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--stone)" }}>{item.desc}</p>
                  <div className="mt-6 pt-5 flex items-center justify-between" style={{ borderTop: "1px solid var(--cream-dark)" }}>
                    <div className="flex items-center gap-2">
                      <Clock size={13} style={{ color: "var(--stone)" }} />
                      <span className="text-xs" style={{ color: "var(--stone)" }}>{item.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <DollarSign size={13} style={{ color: "var(--forest-mid)" }} />
                      <span className="font-bold text-sm" style={{ color: "var(--forest)" }}>{item.price}</span>
                    </div>
                  </div>
                  <a href="/contact"
                    className="btn-outline-ink mt-5 justify-center text-xs">
                    Request Booking
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
      <Footer />
    </>
  );
}
