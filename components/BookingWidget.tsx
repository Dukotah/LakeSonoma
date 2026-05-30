"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Home, CheckCircle, ArrowRight, Phone, Mail } from "lucide-react";

const cabins = [
  { id: "osprey-point", name: "Osprey Point", type: "Lakeside Cabin", price: 495, maxGuests: 6 },
  { id: "cedar-ridge", name: "Cedar Ridge", type: "Forest Retreat", price: 695, maxGuests: 8 },
  { id: "vineyard-villa", name: "Vineyard Villa", type: "Estate House", price: 995, maxGuests: 10 },
  { id: "herons-landing", name: "Heron's Landing", type: "Lakeside Cabin", price: 445, maxGuests: 4 },
  { id: "redwood-haven", name: "Redwood Haven", type: "Forest Retreat", price: 545, maxGuests: 6 },
  { id: "sunset-ridge", name: "Sunset Ridge", type: "Forest Retreat", price: 395, maxGuests: 4 },
];

type Step = "dates" | "cabin" | "guests" | "confirm" | "done";

export default function BookingWidget() {
  const [step, setStep] = useState<Step>("dates");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [selectedCabin, setSelectedCabin] = useState<(typeof cabins)[0] | null>(null);
  const [guests, setGuests] = useState(2);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 0;

  const total = selectedCabin ? selectedCabin.price * nights : 0;
  const cleaningFee = selectedCabin ? 185 : 0;
  const serviceFee = Math.round(total * 0.12);

  const handleSubmit = async () => {
    setSubmitting(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "booking",
        checkIn, checkOut, cabin: selectedCabin?.name, guests,
        ...form,
      }),
    });
    setTimeout(() => { setSubmitting(false); setStep("done"); }, 1500);
  };

  const steps: Step[] = ["dates", "cabin", "guests", "confirm"];
  const stepLabels = ["Dates", "Cabin", "Guests", "Confirm"];

  return (
    <section id="booking-widget" className="py-24 md:py-32" style={{ background: "#F5EFE6" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label mb-3" style={{ color: "#D4AF37" }}>
            Reservations
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            Book Your Retreat
          </motion.h2>
          <p className="text-gray-600 mt-4">Instant confirmation · Best rate guaranteed · Free cancellation up to 14 days</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main booking form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-sm shadow-xl overflow-hidden"
          >
            {/* Step header */}
            {step !== "done" && (
              <div className="px-8 py-5 border-b border-gray-100 flex gap-0">
                {steps.map((s, i) => (
                  <div key={s} className="flex items-center">
                    <button
                      onClick={() => {
                        if (steps.indexOf(s) < steps.indexOf(step)) setStep(s);
                      }}
                      className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                        step === s ? "" : steps.indexOf(s) < steps.indexOf(step) ? "cursor-pointer" : "opacity-40 cursor-default"
                      }`}
                      style={{ color: step === s ? "#1B4332" : steps.indexOf(s) < steps.indexOf(step) ? "#D4AF37" : "#9ca3af" }}
                    >
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-colors`}
                        style={{
                          background: step === s ? "#1B4332" : steps.indexOf(s) < steps.indexOf(step) ? "#D4AF37" : "#e5e7eb",
                          color: step === s || steps.indexOf(s) < steps.indexOf(step) ? "white" : "#9ca3af",
                        }}>
                        {steps.indexOf(s) < steps.indexOf(step) ? "✓" : i + 1}
                      </div>
                      <span className="hidden sm:inline">{stepLabels[i]}</span>
                    </button>
                    {i < steps.length - 1 && (
                      <div className="w-6 sm:w-12 h-px mx-1 sm:mx-2" style={{ background: steps.indexOf(s) < steps.indexOf(step) ? "#D4AF37" : "#e5e7eb" }} />
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="p-8">
              {/* Step: Dates */}
              {step === "dates" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-2xl font-serif mb-6" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                    Select Your Dates
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Check In</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="date" value={checkIn}
                          onChange={(e) => setCheckIn(e.target.value)}
                          min={new Date().toISOString().split("T")[0]}
                          className="w-full pl-10 pr-4 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm bg-gray-50" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Check Out</label>
                      <div className="relative">
                        <Calendar size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input type="date" value={checkOut}
                          onChange={(e) => setCheckOut(e.target.value)}
                          min={checkIn || new Date().toISOString().split("T")[0]}
                          className="w-full pl-10 pr-4 py-3.5 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm bg-gray-50" />
                      </div>
                    </div>
                  </div>
                  {nights > 0 && (
                    <div className="p-4 rounded-sm mb-6" style={{ background: "rgba(27,67,50,0.06)" }}>
                      <span className="text-sm font-medium" style={{ color: "#1B4332" }}>
                        {nights} night{nights !== 1 ? "s" : ""} selected
                      </span>
                    </div>
                  )}
                  <button
                    onClick={() => setStep("cabin")}
                    disabled={!checkIn || !checkOut || nights < 1}
                    className="w-full py-4 font-semibold text-sm tracking-[0.1em] uppercase text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "#1B4332" }}>
                    Continue <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}

              {/* Step: Cabin */}
              {step === "cabin" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-2xl font-serif mb-6" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                    Choose Your Cabin
                  </h3>
                  <div className="space-y-3 mb-8">
                    {cabins.map((c) => (
                      <button
                        key={c.id}
                        onClick={() => setSelectedCabin(c)}
                        className={`w-full flex items-center justify-between p-4 rounded-sm border-2 transition-all text-left ${
                          selectedCabin?.id === c.id ? "border-green-800 bg-green-50" : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Home size={18} className="text-gray-400 shrink-0" />
                          <div>
                            <div className="font-semibold text-gray-800">{c.name}</div>
                            <div className="text-xs text-gray-500">{c.type} · Up to {c.maxGuests} guests</div>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <div className="font-bold" style={{ color: "#1B4332" }}>${c.price}<span className="text-xs font-normal text-gray-500">/nt</span></div>
                          {nights > 0 && <div className="text-xs text-gray-500">${c.price * nights} total</div>}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => setStep("guests")}
                    disabled={!selectedCabin}
                    className="w-full py-4 font-semibold text-sm tracking-[0.1em] uppercase text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "#1B4332" }}>
                    Continue <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}

              {/* Step: Guests */}
              {step === "guests" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-2xl font-serif mb-6" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                    Guest Details
                  </h3>
                  <div className="mb-6">
                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-3">Number of Guests</label>
                    <div className="flex items-center gap-4">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-800 transition-colors font-bold text-lg">
                        −
                      </button>
                      <span className="text-2xl font-semibold w-8 text-center">{guests}</span>
                      <button onClick={() => setGuests(Math.min(selectedCabin?.maxGuests || 10, guests + 1))}
                        className="w-10 h-10 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-600 hover:border-green-800 transition-colors font-bold text-lg">
                        +
                      </button>
                      <span className="text-sm text-gray-500">Max {selectedCabin?.maxGuests} guests</span>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {["firstName", "lastName"].map((field) => (
                      <div key={field}>
                        <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">
                          {field === "firstName" ? "First Name" : "Last Name"}
                        </label>
                        <input
                          type="text"
                          value={form[field as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Email</label>
                      <input type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Phone</label>
                      <input type="tel" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm" />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Special Requests</label>
                    <textarea value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm resize-none"
                      placeholder="Early check-in, dietary needs, anniversary setup..." />
                  </div>

                  <button
                    onClick={() => setStep("confirm")}
                    disabled={!form.firstName || !form.lastName || !form.email}
                    className="w-full py-4 font-semibold text-sm tracking-[0.1em] uppercase text-white transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    style={{ background: "#1B4332" }}>
                    Review Booking <ArrowRight size={16} />
                  </button>
                </motion.div>
              )}

              {/* Step: Confirm */}
              {step === "confirm" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-2xl font-serif mb-6" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                    Review & Confirm
                  </h3>
                  <div className="space-y-3 mb-6 p-5 rounded-sm" style={{ background: "#FAF7F2" }}>
                    <div className="flex justify-between text-sm"><span className="text-gray-600">Cabin</span><span className="font-semibold">{selectedCabin?.name}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-600">Check In</span><span className="font-semibold">{checkIn}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-600">Check Out</span><span className="font-semibold">{checkOut}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-600">Guests</span><span className="font-semibold">{guests}</span></div>
                    <div className="flex justify-between text-sm"><span className="text-gray-600">Guest</span><span className="font-semibold">{form.firstName} {form.lastName}</span></div>
                    <div className="border-t border-gray-200 pt-3 mt-3 space-y-2">
                      <div className="flex justify-between text-sm"><span className="text-gray-600">${selectedCabin?.price} × {nights} nights</span><span>${total.toLocaleString()}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-gray-600">Cleaning fee</span><span>${cleaningFee}</span></div>
                      <div className="flex justify-between text-sm"><span className="text-gray-600">Service fee</span><span>${serviceFee}</span></div>
                      <div className="flex justify-between font-bold text-base border-t border-gray-200 pt-2"><span>Total</span><span style={{ color: "#1B4332" }}>${(total + cleaningFee + serviceFee).toLocaleString()}</span></div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mb-6">
                    By confirming, you agree to our Terms of Service. Free cancellation until 14 days before check-in.
                    Your reservation will be confirmed via email within 24 hours.
                  </p>
                  <button
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full py-4 font-semibold text-sm tracking-[0.1em] uppercase text-white transition-all disabled:opacity-70 flex items-center justify-center gap-2"
                    style={{ background: "#D4AF37" }}>
                    {submitting ? "Processing..." : "Confirm Reservation"}
                  </button>
                </motion.div>
              )}

              {/* Done */}
              {step === "done" && (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ background: "rgba(27,67,50,0.1)" }}>
                    <CheckCircle size={32} style={{ color: "#1B4332" }} />
                  </div>
                  <h3 className="text-2xl font-serif mb-3" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                    Reservation Received!
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Thank you, {form.firstName}! Your reservation request for <strong>{selectedCabin?.name}</strong> has been submitted.
                  </p>
                  <p className="text-gray-500 text-sm mb-8">
                    You&apos;ll receive a confirmation at <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <button onClick={() => { setStep("dates"); setCheckIn(""); setCheckOut(""); setSelectedCabin(null); setGuests(2); setForm({ firstName: "", lastName: "", email: "", phone: "", notes: "" }); }}
                    className="py-3 px-8 font-semibold text-sm tracking-[0.1em] uppercase text-white"
                    style={{ background: "#1B4332" }}>
                    Make Another Booking
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Summary card */}
            {selectedCabin && nights > 0 && step !== "done" && (
              <div className="bg-white rounded-sm shadow-lg p-6">
                <div className="font-serif text-lg mb-4" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                  Your Selection
                </div>
                <div className={`h-32 rounded-sm mb-4 bg-gradient-to-br from-blue-900 to-teal-800 flex items-center justify-center text-3xl`}>🏡</div>
                <div className="font-semibold text-gray-800">{selectedCabin.name}</div>
                <div className="text-xs text-gray-500 mb-4">{selectedCabin.type}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-gray-500">{nights} nights</span><span>${total.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span className="text-gray-500">Cleaning</span><span>${cleaningFee}</span></div>
                  <div className="flex justify-between font-bold border-t pt-2"><span>Total</span><span style={{ color: "#1B4332" }}>${(total + cleaningFee + Math.round(total * 0.12)).toLocaleString()}</span></div>
                </div>
              </div>
            )}

            {/* Contact card */}
            <div className="bg-white rounded-sm shadow-lg p-6">
              <div className="font-serif text-lg mb-2" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                Need Help Booking?
              </div>
              <p className="text-sm text-gray-600 mb-5">Our concierge team is available 7 days a week to help plan your perfect stay.</p>
              <div className="space-y-3">
                <a href="tel:+17075551234" className="flex items-center gap-3 text-sm font-medium hover:text-green-800 transition-colors" style={{ color: "#1B4332" }}>
                  <Phone size={16} />(707) 555-1234
                </a>
                <a href="mailto:reservations@lakesonoma.com" className="flex items-center gap-3 text-sm font-medium hover:text-green-800 transition-colors" style={{ color: "#1B4332" }}>
                  <Mail size={16} />reservations@lakesonoma.com
                </a>
              </div>
            </div>

            {/* Policies */}
            <div className="bg-white rounded-sm shadow-lg p-6">
              <div className="font-semibold text-gray-800 mb-3 text-sm">Booking Policies</div>
              <ul className="space-y-2 text-xs text-gray-600">
                <li className="flex items-start gap-2"><span style={{ color: "#D4AF37" }}>✓</span>Free cancellation up to 14 days before check-in</li>
                <li className="flex items-start gap-2"><span style={{ color: "#D4AF37" }}>✓</span>50% deposit at time of booking</li>
                <li className="flex items-start gap-2"><span style={{ color: "#D4AF37" }}>✓</span>Balance due 30 days before arrival</li>
                <li className="flex items-start gap-2"><span style={{ color: "#D4AF37" }}>✓</span>Check-in 4pm · Check-out 11am</li>
                <li className="flex items-start gap-2"><span style={{ color: "#D4AF37" }}>✓</span>No smoking on property</li>
                <li className="flex items-start gap-2"><span style={{ color: "#D4AF37" }}>✓</span>Pets allowed in select cabins</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
