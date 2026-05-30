"use client";

import { useState } from "react";
import { Calendar, Users, Search, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const cabinTypes = [
  "Any Cabin",
  "Lakeside Cabin",
  "Forest Retreat",
  "The Estate House",
];

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2 Guests");
  const [cabin, setCabin] = useState("Any Cabin");
  const [guestOpen, setGuestOpen] = useState(false);
  const [cabinOpen, setCabinOpen] = useState(false);

  const guestOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6+ Guests"];

  const handleSearch = () => {
    const params = new URLSearchParams({ checkIn, checkOut, guests, cabin });
    window.location.href = `/accommodations?${params.toString()}`;
  };

  return (
    <section id="booking" className="relative z-30 -mt-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-white shadow-2xl rounded-sm border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between" style={{ background: "#1B4332" }}>
            <span className="text-white font-serif text-lg">Check Availability</span>
            <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "#D4AF37" }}>Best Rate Guaranteed</span>
          </div>

          {/* Form */}
          <div className="p-4 md:p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 items-end">
              {/* Check In */}
              <div className="lg:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5">Check In</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full pl-9 pr-3 py-3.5 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-green-800 transition-colors bg-gray-50 rounded-sm"
                  />
                </div>
              </div>

              {/* Check Out */}
              <div className="lg:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5">Check Out</label>
                <div className="relative">
                  <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    min={checkIn || new Date().toISOString().split("T")[0]}
                    className="w-full pl-9 pr-3 py-3.5 border border-gray-200 text-sm text-gray-700 focus:outline-none focus:border-green-800 transition-colors bg-gray-50 rounded-sm"
                  />
                </div>
              </div>

              {/* Cabin Type */}
              <div className="lg:col-span-1 relative">
                <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5">Cabin Type</label>
                <button
                  className="w-full flex items-center justify-between px-3 py-3.5 border border-gray-200 text-sm text-gray-700 bg-gray-50 rounded-sm hover:border-green-800 transition-colors"
                  onClick={() => { setCabinOpen(!cabinOpen); setGuestOpen(false); }}
                >
                  <span>{cabin}</span>
                  <ChevronDown size={14} className={`transition-transform ${cabinOpen ? "rotate-180" : ""}`} />
                </button>
                {cabinOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-xl z-20 rounded-sm overflow-hidden">
                    {cabinTypes.map((c) => (
                      <button key={c} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 transition-colors"
                        onClick={() => { setCabin(c); setCabinOpen(false); }}>
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Guests */}
              <div className="lg:col-span-1 relative">
                <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5">Guests</label>
                <button
                  className="w-full flex items-center justify-between px-3 py-3.5 border border-gray-200 text-sm text-gray-700 bg-gray-50 rounded-sm hover:border-green-800 transition-colors"
                  onClick={() => { setGuestOpen(!guestOpen); setCabinOpen(false); }}
                >
                  <span className="flex items-center gap-2"><Users size={14} className="text-gray-400" />{guests}</span>
                  <ChevronDown size={14} className={`transition-transform ${guestOpen ? "rotate-180" : ""}`} />
                </button>
                {guestOpen && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 shadow-xl z-20 rounded-sm overflow-hidden">
                    {guestOptions.map((g) => (
                      <button key={g} className="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-800 transition-colors"
                        onClick={() => { setGuests(g); setGuestOpen(false); }}>
                        {g}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Search */}
              <div className="lg:col-span-1">
                <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5 opacity-0 select-none">Search</label>
                <button
                  onClick={handleSearch}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 font-semibold text-sm tracking-[0.1em] uppercase text-white transition-all duration-300 rounded-sm"
                  style={{ background: "#1B4332" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = "#163528"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "#1B4332"; }}
                >
                  <Search size={16} />
                  Check Availability
                </button>
              </div>
            </div>

            {/* Bottom info */}
            <div className="mt-4 flex flex-wrap gap-4 text-xs text-gray-500">
              <span>✓ Free cancellation up to 14 days</span>
              <span>✓ No booking fees</span>
              <span>✓ Instant confirmation</span>
              <span>✓ Best rate guaranteed</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
