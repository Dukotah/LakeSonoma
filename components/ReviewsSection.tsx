"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah & Michael T.",
    location: "San Francisco, CA",
    cabin: "Osprey Point",
    date: "October 2024",
    rating: 5,
    text: "We've stayed at dozens of vacation rentals across the country, and Lake Sonoma Resort is in a league of its own. The Osprey Point cabin was absolutely stunning — waking up to the lake every morning with a glass of their welcome wine in hand... pure magic. The concierge arranged a private tasting at a vineyard we never would have found on our own.",
    initials: "ST",
  },
  {
    name: "The Richardson Family",
    location: "Portland, OR",
    cabin: "Cedar Ridge",
    date: "August 2024",
    rating: 5,
    text: "We brought three generations of our family (14 people total!) to Cedar Ridge and it was flawlessly perfect. The kids loved the kayaking and the adults loved the fire pit evenings with wine. The staff went above and beyond anticipating every need — extra firewood appeared before we asked, the kitchen was stocked with our kids' favorites. Absolute five stars.",
    initials: "RF",
  },
  {
    name: "David & Elena P.",
    location: "Los Angeles, CA",
    cabin: "Vineyard Villa",
    date: "September 2024",
    rating: 5,
    text: "For our anniversary, we chose the Vineyard Villa and it delivered on every promise. The pool overlooking the valley, a personal chef for our private dinner, the in-cabin spa treatment — this is what true luxury looks like. We cancelled our international trip and came back here instead. That says everything.",
    initials: "DP",
  },
  {
    name: "Jennifer M.",
    location: "Seattle, WA",
    cabin: "Osprey Point",
    date: "July 2024",
    rating: 5,
    text: "Came for a girls' weekend and couldn't have chosen better. The booking process was seamless, check-in was effortless, and the cabin was even more beautiful than the photos. The sunrise kayak experience that the team arranged was the highlight of our trip. Already planning next year's visit!",
    initials: "JM",
  },
];

export default function ReviewsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);
  const next = () => setCurrent((c) => (c + 1) % reviews.length);

  const review = reviews[current];

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ background: "#0F2942" }}>
      {/* Background stars */}
      {[...Array(30)].map((_, i) => (
        <div key={i} className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 2 + 1}px`,
            height: `${Math.random() * 2 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: Math.random() * 0.4 + 0.1,
          }} />
      ))}

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3" style={{ color: "#D4AF37" }}>
            Guest Stories
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-white"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            What Our Guests Say
          </motion.h2>
          {/* Overall rating */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mt-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} fill="#D4AF37" color="#D4AF37" />
              ))}
            </div>
            <span className="text-white font-bold text-xl">4.97</span>
            <span className="text-white/50 text-sm">from 1,200+ reviews</span>
          </motion.div>
        </div>

        {/* Review card */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-sm p-8 md:p-12"
            >
              <Quote size={48} className="mb-6 opacity-20" style={{ color: "#D4AF37" }} />
              <p className="text-white/80 text-xl leading-relaxed mb-8 italic font-serif"
                style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ background: "rgba(212,175,55,0.3)", border: "2px solid rgba(212,175,55,0.5)" }}>
                    {review.initials}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{review.name}</div>
                    <div className="text-white/50 text-sm">{review.location}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex gap-1 justify-end mb-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="#D4AF37" color="#D4AF37" />
                    ))}
                  </div>
                  <div className="text-xs text-white/40">Stayed at {review.cabin} · {review.date}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button onClick={prev} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
              <ChevronLeft size={20} /> Previous
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button key={i} onClick={() => setCurrent(i)}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "#D4AF37" : "rgba(255,255,255,0.3)",
                  }} />
              ))}
            </div>
            <button onClick={next} className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm font-medium">
              Next <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Review platforms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center gap-8">
          {[
            { platform: "Google", rating: "4.9", count: "847" },
            { platform: "TripAdvisor", rating: "5.0", count: "312" },
            { platform: "Airbnb", rating: "4.97", count: "184" },
            { platform: "VRBO", rating: "4.9", count: "97" },
          ].map((p) => (
            <div key={p.platform} className="text-center">
              <div className="text-white/30 text-xs uppercase tracking-[0.2em] mb-1">{p.platform}</div>
              <div className="text-white font-bold text-xl">{p.rating}★</div>
              <div className="text-white/40 text-xs">{p.count} reviews</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
