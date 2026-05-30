"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, ChevronDown, Users, ArrowRight } from "lucide-react";

const cabinOptions = ["Any Cabin", "Lakeside Cabin", "Forest Retreat", "Estate House"];
const guestOptions = ["1 Guest", "2 Guests", "3–4 Guests", "5–6 Guests", "7–8 Guests", "9+ Guests"];

export default function BookingBar() {
  const [checkIn,  setCheckIn]  = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [cabin,    setCabin]    = useState("Any Cabin");
  const [guests,   setGuests]   = useState("2 Guests");
  const [cabinOpen, setCabinOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 0;

  const go = () => {
    const p = new URLSearchParams({ checkIn, checkOut, cabin, guests });
    window.location.href = `/accommodations?${p}`;
  };

  const fieldClass = "w-full bg-transparent text-sm font-medium focus:outline-none cursor-pointer placeholder-gray-400";

  return (
    <section className="relative z-30 px-4 sm:px-8 lg:px-16 -mt-[52px]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-[1100px] mx-auto"
      >
        <div
          className="overflow-visible shadow-2xl"
          style={{
            background: "white",
            boxShadow: "0 20px 80px rgba(13,31,23,0.18), 0 4px 16px rgba(0,0,0,0.08)",
          }}
        >
          {/* Gold accent top line */}
          <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--forest), var(--gold), var(--forest))" }} />

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1fr_1fr_auto] divide-y lg:divide-y-0 lg:divide-x divide-gray-100">

            {/* Check In */}
            <div className="px-6 py-5 flex flex-col gap-1.5">
              <label className="eyebrow" style={{ color: "var(--stone)" }}>Check In</label>
              <div className="flex items-center gap-2">
                <Calendar size={14} style={{ color: "var(--gold)" }} />
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className={fieldClass}
                  style={{ color: checkIn ? "var(--ink)" : "var(--stone)" }}
                />
              </div>
            </div>

            {/* Check Out */}
            <div className="px-6 py-5 flex flex-col gap-1.5">
              <label className="eyebrow" style={{ color: "var(--stone)" }}>
                Check Out {nights > 0 && <span style={{ color: "var(--gold)" }}>· {nights} nights</span>}
              </label>
              <div className="flex items-center gap-2">
                <Calendar size={14} style={{ color: "var(--gold)" }} />
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  min={checkIn || new Date().toISOString().split("T")[0]}
                  className={fieldClass}
                  style={{ color: checkOut ? "var(--ink)" : "var(--stone)" }}
                />
              </div>
            </div>

            {/* Cabin type */}
            <div className="px-6 py-5 flex flex-col gap-1.5 relative">
              <label className="eyebrow" style={{ color: "var(--stone)" }}>Cabin Type</label>
              <button
                onClick={() => { setCabinOpen(!cabinOpen); setGuestOpen(false); }}
                className="flex items-center justify-between w-full text-sm font-medium focus:outline-none"
                style={{ color: "var(--ink)" }}
              >
                {cabin}
                <ChevronDown size={14} style={{ color: "var(--stone)", transform: cabinOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </button>
              {cabinOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 py-1 z-20"
                  style={{ background: "white", boxShadow: "0 16px 40px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {cabinOptions.map((o) => (
                    <button key={o} onClick={() => { setCabin(o); setCabinOpen(false); }}
                      className="w-full text-left px-5 py-2.5 text-sm transition-colors hover:bg-gray-50"
                      style={{ color: o === cabin ? "var(--gold-dim)" : "var(--ink)", fontWeight: o === cabin ? 600 : 400 }}>
                      {o}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Guests */}
            <div className="px-6 py-5 flex flex-col gap-1.5 relative">
              <label className="eyebrow" style={{ color: "var(--stone)" }}>Guests</label>
              <button
                onClick={() => { setGuestOpen(!guestOpen); setCabinOpen(false); }}
                className="flex items-center justify-between w-full text-sm font-medium focus:outline-none"
                style={{ color: "var(--ink)" }}
              >
                <span className="flex items-center gap-2">
                  <Users size={13} style={{ color: "var(--gold)" }} />
                  {guests}
                </span>
                <ChevronDown size={14} style={{ color: "var(--stone)", transform: guestOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
              </button>
              {guestOpen && (
                <div
                  className="absolute top-full left-0 right-0 mt-1 py-1 z-20"
                  style={{ background: "white", boxShadow: "0 16px 40px rgba(0,0,0,0.12)", border: "1px solid rgba(0,0,0,0.06)" }}
                >
                  {guestOptions.map((o) => (
                    <button key={o} onClick={() => { setGuests(o); setGuestOpen(false); }}
                      className="w-full text-left px-5 py-2.5 text-sm transition-colors hover:bg-gray-50"
                      style={{ color: o === guests ? "var(--gold-dim)" : "var(--ink)", fontWeight: o === guests ? 600 : 400 }}>
                      {o}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* CTA */}
            <button
              onClick={go}
              className="flex items-center justify-center gap-3 px-10 font-bold text-xs tracking-[0.16em] uppercase transition-all group"
              style={{
                background: "var(--forest)",
                color: "white",
                minWidth: 180,
                borderLeft: "none",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--ink)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--forest)")}
            >
              Check Availability
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Trust row */}
          <div
            className="flex flex-wrap items-center gap-6 px-6 py-3"
            style={{ background: "var(--cream)", borderTop: "1px solid rgba(0,0,0,0.05)" }}
          >
            {[
              "✓ Best rate guaranteed",
              "✓ No booking fees",
              "✓ Free cancellation up to 14 days",
              "✓ Instant confirmation",
            ].map((t) => (
              <span key={t} style={{ color: "var(--stone)", fontSize: "0.7rem", letterSpacing: "0.06em" }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
