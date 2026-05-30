"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Sarah & Michael T.",
    location: "San Francisco, CA",
    cabin: "Osprey Point",
    date: "October 2024",
    rating: 5,
    text: "We've stayed at dozens of vacation rentals across the country, and Lake Sonoma Resort is in a league of its own. The Osprey Point cabin was absolutely stunning — waking up to the lake every morning with a glass of their welcome wine in hand is pure magic. The concierge arranged a private tasting at a vineyard we never would have found on our own.",
    initials: "ST",
  },
  {
    name: "The Richardson Family",
    location: "Portland, OR",
    cabin: "Cedar Ridge",
    date: "August 2024",
    rating: 5,
    text: "We brought three generations of our family to Cedar Ridge and it was flawlessly perfect. The kids loved the kayaking, the adults loved the fire pit evenings with wine. The staff went above and beyond anticipating every need — extra firewood appeared before we asked, the kitchen was stocked with our kids' favorites. Absolute five stars.",
    initials: "RF",
  },
  {
    name: "David & Elena P.",
    location: "Los Angeles, CA",
    cabin: "Vineyard Villa",
    date: "September 2024",
    rating: 5,
    text: "For our anniversary we chose the Vineyard Villa and it delivered on every promise. The pool overlooking the valley, a personal chef for our private dinner, the in-cabin spa treatment — this is what true luxury looks like. We cancelled our international trip and came back here instead. That says everything.",
    initials: "DP",
  },
  {
    name: "Jennifer M.",
    location: "Seattle, WA",
    cabin: "Osprey Point",
    date: "July 2024",
    rating: 5,
    text: "Came for a girls' weekend and couldn't have chosen better. The booking process was seamless, check-in was effortless, and the cabin was even more beautiful than the photos. The sunrise kayak experience the team arranged was the highlight of our trip. Already planning next year.",
    initials: "JM",
  },
];

const platforms = [
  { name: "Google",      rating: "4.9", count: "847" },
  { name: "TripAdvisor", rating: "5.0", count: "312" },
  { name: "Airbnb",      rating: "4.97", count: "184" },
  { name: "VRBO",        rating: "4.9", count: "97" },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--forest)" }}>
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: "repeating-linear-gradient(-45deg, rgba(255,255,255,0.015) 0, rgba(255,255,255,0.015) 1px, transparent 0, transparent 50%)",
        backgroundSize: "28px 28px",
      }} />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-28 md:py-36 relative z-10">

        {/* Header row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div>
            <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="eyebrow block mb-4">
              Guest Stories
            </motion.span>
            <div className="section-rule" />
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="heading-serif text-white" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)" }}>
              What Our Guests Say
            </motion.h2>
          </div>

          {/* Platform ratings */}
          <div className="flex flex-wrap gap-8">
            {platforms.map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 4 }}>{p.name}</div>
                <div className="heading-serif text-white" style={{ fontSize: "1.6rem", lineHeight: 1 }}>{p.rating}</div>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={9} fill="var(--gold)" color="var(--gold)" />)}
                </div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.62rem", marginTop: 2 }}>{p.count} reviews</div>
              </div>
            ))}
          </div>
        </div>

        {/* Review carousel */}
        <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-16 items-center">

          {/* Quote */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Big quote mark */}
                <div
                  className="display-serif mb-6 select-none"
                  style={{ fontSize: "7rem", lineHeight: 0.7, color: "rgba(201,168,76,0.2)" }}
                >
                  "
                </div>
                <p
                  className="display-serif text-white"
                  style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)", lineHeight: 1.6, marginBottom: "2.5rem" }}
                >
                  {review.text}
                </p>

                <div className="flex items-center gap-5">
                  <div
                    className="w-14 h-14 flex items-center justify-center font-serif font-bold text-lg shrink-0"
                    style={{
                      background: "linear-gradient(135deg, var(--gold-dim), var(--gold))",
                      color: "var(--ink)",
                    }}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{review.name}</div>
                    <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem" }}>{review.location}</div>
                  </div>
                  <div className="ml-auto text-right hidden sm:block">
                    <div className="flex gap-0.5 justify-end mb-0.5">
                      {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="var(--gold)" color="var(--gold)" />)}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.72rem" }}>{review.cabin} · {review.date}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls + thumbnails */}
          <div className="flex flex-col gap-6">
            {reviews.map((r, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="text-left px-6 py-5 transition-all duration-300 group"
                style={{
                  background: i === current ? "rgba(255,255,255,0.07)" : "transparent",
                  borderLeft: `2px solid ${i === current ? "var(--gold)" : "rgba(255,255,255,0.12)"}`,
                  opacity: i === current ? 1 : 0.5,
                }}
              >
                <div className="font-semibold text-white text-sm mb-0.5">{r.name}</div>
                <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>{r.cabin} · {r.date}</div>
              </button>
            ))}

            {/* Prev / Next */}
            <div className="flex gap-3 mt-2">
              <button onClick={prev}
                className="w-11 h-11 flex items-center justify-center transition-all"
                style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                <ChevronLeft size={16} />
              </button>
              <button onClick={next}
                className="w-11 h-11 flex items-center justify-center transition-all"
                style={{ border: "1.5px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.6)" }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
