"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Users, Home, CheckCircle, ArrowRight, Phone, Mail, ShieldCheck } from "lucide-react";

const cabins = [
  { id: "osprey-point",  name: "Osprey Point",   type: "Lakeside Cabin",  price: 495,  max: 6  },
  { id: "herons-landing",name: "Heron's Landing", type: "Lakeside Cabin",  price: 445,  max: 4  },
  { id: "lakeview-lodge",name: "Lakeview Lodge",  type: "Lakeside Cabin",  price: 695,  max: 8  },
  { id: "cedar-ridge",   name: "Cedar Ridge",    type: "Forest Retreat",  price: 695,  max: 8  },
  { id: "redwood-haven", name: "Redwood Haven",  type: "Forest Retreat",  price: 545,  max: 6  },
  { id: "sunset-ridge",  name: "Sunset Ridge",   type: "Forest Retreat",  price: 395,  max: 4  },
  { id: "vineyard-villa",name: "Vineyard Villa",  type: "Estate House",    price: 995,  max: 10 },
  { id: "oak-estate",    name: "The Oak Estate",  type: "Estate House",    price: 1295, max: 12 },
];

type Step = "dates" | "cabin" | "guests" | "confirm" | "done";
const STEPS: Step[] = ["dates", "cabin", "guests", "confirm"];
const STEP_LABELS = ["Dates", "Cabin", "Guests", "Confirm"];

export default function BookingWidget() {
  const [step, setStep] = useState<Step>("dates");
  const [checkIn,  setCheckIn]  = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [cabin,    setCabin]    = useState<typeof cabins[0] | null>(null);
  const [guests,   setGuests]   = useState(2);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", notes: "" });
  const [submitting, setSubmitting] = useState(false);

  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / 86400000))
    : 0;
  const subtotal    = cabin ? cabin.price * nights : 0;
  const cleaning    = 185;
  const serviceFee  = Math.round(subtotal * 0.12);
  const total       = subtotal + cleaning + serviceFee;

  const stepIdx     = STEPS.indexOf(step as Step);

  const handleSubmit = async () => {
    setSubmitting(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "booking", checkIn, checkOut, cabin: cabin?.name, guests, ...form }),
    });
    setTimeout(() => { setSubmitting(false); setStep("done"); }, 1400);
  };

  const reset = () => {
    setStep("dates"); setCheckIn(""); setCheckOut("");
    setCabin(null); setGuests(2);
    setForm({ firstName: "", lastName: "", email: "", phone: "", notes: "" });
  };

  return (
    <section id="booking-widget" className="py-28 md:py-36" style={{ background: "var(--cream-dark)" }}>
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <div className="mb-16">
          <motion.span initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="eyebrow block mb-4">
            Reservations
          </motion.span>
          <div className="section-rule" />
          <div className="grid lg:grid-cols-2 gap-6 items-end">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="heading-serif" style={{ fontSize: "clamp(2.4rem, 4vw, 3.4rem)", color: "var(--ink)" }}>
              Book Your Retreat
            </motion.h2>
            <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ color: "var(--stone)", fontSize: "0.9rem", lineHeight: 1.75 }}>
              Instant confirmation · Best rate guaranteed · Free cancellation up to 14 days before arrival
            </motion.p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">

          {/* ── Main form panel ── */}
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="overflow-hidden" style={{ background: "white", border: "1px solid var(--cream-dark)" }}>

            {/* Gold top bar */}
            <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--forest), var(--gold), var(--forest))" }} />

            {/* Step progress */}
            {step !== "done" && (
              <div className="px-8 py-5 flex items-center gap-0"
                style={{ borderBottom: "1px solid var(--cream-dark)" }}>
                {STEPS.map((s, i) => (
                  <div key={s} className="flex items-center">
                    <button
                      onClick={() => i < stepIdx && setStep(s)}
                      className="flex items-center gap-2.5 text-xs font-semibold tracking-[0.1em] uppercase transition-colors"
                      style={{ color: step === s ? "var(--forest)" : i < stepIdx ? "var(--gold-dim)" : "var(--stone)", cursor: i < stepIdx ? "pointer" : "default" }}
                    >
                      <div className="w-6 h-6 flex items-center justify-center text-xs font-bold transition-all"
                        style={{
                          background: step === s ? "var(--forest)" : i < stepIdx ? "var(--gold)" : "var(--cream-dark)",
                          color: step === s || i < stepIdx ? "white" : "var(--stone)",
                        }}>
                        {i < stepIdx ? "✓" : i + 1}
                      </div>
                      <span className="hidden sm:inline">{STEP_LABELS[i]}</span>
                    </button>
                    {i < STEPS.length - 1 && (
                      <div className="w-8 lg:w-14 h-px mx-2 transition-colors"
                        style={{ background: i < stepIdx ? "var(--gold)" : "var(--cream-dark)" }} />
                    )}
                  </div>
                ))}
              </div>
            )}

            <div className="p-8 lg:p-10">

              {/* ── Step: Dates ── */}
              {step === "dates" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="heading-serif mb-8" style={{ fontSize: "1.6rem", color: "var(--ink)" }}>Select Your Dates</h3>
                  <div className="grid sm:grid-cols-2 gap-5 mb-8">
                    {[
                      { label: "Check In",  val: checkIn,  set: setCheckIn, min: new Date().toISOString().split("T")[0] },
                      { label: "Check Out", val: checkOut, set: setCheckOut, min: checkIn || new Date().toISOString().split("T")[0] },
                    ].map((f) => (
                      <div key={f.label}>
                        <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>{f.label}</label>
                        <div className="flex items-center gap-3 px-4 py-3.5"
                          style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)" }}>
                          <Calendar size={14} style={{ color: "var(--gold)", flexShrink: 0 }} />
                          <input type="date" value={f.val} min={f.min}
                            onChange={(e) => f.set(e.target.value)}
                            className="w-full bg-transparent text-sm focus:outline-none"
                            style={{ color: f.val ? "var(--ink)" : "var(--stone)" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                  {nights > 0 && (
                    <div className="flex items-center gap-3 px-5 py-4 mb-8"
                      style={{ background: "rgba(26,58,42,0.05)", borderLeft: "3px solid var(--gold)" }}>
                      <span style={{ color: "var(--forest)", fontSize: "0.9rem", fontWeight: 600 }}>
                        {nights} night{nights !== 1 ? "s" : ""} selected
                      </span>
                      <span style={{ color: "var(--stone)", fontSize: "0.82rem" }}>
                        · rates from $345/night
                      </span>
                    </div>
                  )}
                  <button onClick={() => setStep("cabin")} disabled={!checkIn || !checkOut || nights < 1}
                    className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed" style={{ width: "100%", justifyContent: "center" }}>
                    Choose Your Cabin <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}

              {/* ── Step: Cabin ── */}
              {step === "cabin" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="heading-serif mb-8" style={{ fontSize: "1.6rem", color: "var(--ink)" }}>Choose Your Cabin</h3>
                  <div className="space-y-2 mb-8">
                    {cabins.map((c) => (
                      <button key={c.id} onClick={() => setCabin(c)}
                        className="w-full flex items-center justify-between px-5 py-4 text-left transition-all"
                        style={{
                          background: cabin?.id === c.id ? "rgba(26,58,42,0.06)" : "var(--cream)",
                          border: `1.5px solid ${cabin?.id === c.id ? "var(--forest)" : "var(--cream-dark)"}`,
                        }}>
                        <div className="flex items-center gap-3">
                          <Home size={16} style={{ color: cabin?.id === c.id ? "var(--forest)" : "var(--stone)" }} />
                          <div>
                            <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{c.name}</div>
                            <div style={{ color: "var(--stone)", fontSize: "0.72rem", letterSpacing: "0.06em" }}>
                              {c.type} · Up to {c.max} guests
                            </div>
                          </div>
                        </div>
                        <div className="text-right shrink-0 ml-4">
                          <div className="font-bold" style={{ color: "var(--forest)", fontSize: "1rem" }}>
                            ${c.price}<span style={{ fontWeight: 400, color: "var(--stone)", fontSize: "0.72rem" }}>/nt</span>
                          </div>
                          {nights > 0 && (
                            <div style={{ color: "var(--stone)", fontSize: "0.7rem" }}>${(c.price * nights).toLocaleString()} est.</div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  <button onClick={() => setStep("guests")} disabled={!cabin}
                    className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed" style={{ width: "100%", justifyContent: "center" }}>
                    Add Guest Details <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}

              {/* ── Step: Guests ── */}
              {step === "guests" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="heading-serif mb-8" style={{ fontSize: "1.6rem", color: "var(--ink)" }}>Guest Details</h3>

                  {/* Guest counter */}
                  <div className="mb-7">
                    <label className="eyebrow block mb-4" style={{ color: "var(--stone)" }}>Number of Guests</label>
                    <div className="flex items-center gap-5">
                      <button onClick={() => setGuests(Math.max(1, guests - 1))}
                        className="w-10 h-10 flex items-center justify-center font-bold text-lg transition-all"
                        style={{ border: "1.5px solid var(--cream-dark)", color: "var(--ink)", background: "var(--cream)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--forest)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--cream-dark)"; }}>
                        −
                      </button>
                      <span className="heading-serif" style={{ fontSize: "2rem", color: "var(--ink)", width: 40, textAlign: "center" }}>{guests}</span>
                      <button onClick={() => setGuests(Math.min(cabin?.max ?? 10, guests + 1))}
                        className="w-10 h-10 flex items-center justify-center font-bold text-lg transition-all"
                        style={{ border: "1.5px solid var(--cream-dark)", color: "var(--ink)", background: "var(--cream)" }}
                        onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--forest)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--cream-dark)"; }}>
                        +
                      </button>
                      <span style={{ color: "var(--stone)", fontSize: "0.8rem" }}>Max {cabin?.max}</span>
                    </div>
                  </div>

                  {/* Contact fields */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    {[["firstName", "First Name"], ["lastName", "Last Name"]].map(([field, label]) => (
                      <div key={field}>
                        <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>{label} *</label>
                        <input type="text" value={form[field as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                          className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors"
                          style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                      </div>
                    ))}
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Email *</label>
                      <input type="email" value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors"
                        style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                    </div>
                    <div>
                      <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Phone</label>
                      <input type="tel" value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors"
                        style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                    </div>
                  </div>
                  <div className="mb-8">
                    <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Special Requests</label>
                    <textarea value={form.notes} rows={3}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                      placeholder="Early check-in, dietary needs, anniversary setup…"
                      className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors resize-none"
                      style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                  </div>
                  <button onClick={() => setStep("confirm")} disabled={!form.firstName || !form.lastName || !form.email}
                    className="btn-gold disabled:opacity-40 disabled:cursor-not-allowed" style={{ width: "100%", justifyContent: "center" }}>
                    Review Booking <ArrowRight size={14} />
                  </button>
                </motion.div>
              )}

              {/* ── Step: Confirm ── */}
              {step === "confirm" && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="heading-serif mb-8" style={{ fontSize: "1.6rem", color: "var(--ink)" }}>Review & Confirm</h3>
                  <div className="space-y-3 mb-6 p-6"
                    style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)" }}>
                    {[
                      ["Cabin",     cabin?.name ?? ""],
                      ["Type",      cabin?.type ?? ""],
                      ["Check In",  checkIn],
                      ["Check Out", checkOut],
                      ["Nights",    String(nights)],
                      ["Guests",    String(guests)],
                      ["Name",      `${form.firstName} ${form.lastName}`],
                      ["Email",     form.email],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between text-sm">
                        <span style={{ color: "var(--stone)" }}>{k}</span>
                        <span className="font-medium" style={{ color: "var(--ink)" }}>{v}</span>
                      </div>
                    ))}
                    <div style={{ borderTop: "1px solid var(--cream-dark)", marginTop: 8, paddingTop: 12 }}
                      className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span style={{ color: "var(--stone)" }}>${cabin?.price} × {nights} nights</span>
                        <span>${subtotal.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: "var(--stone)" }}>Cleaning fee</span>
                        <span>${cleaning}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span style={{ color: "var(--stone)" }}>Service fee (12%)</span>
                        <span>${serviceFee}</span>
                      </div>
                      <div className="flex justify-between font-bold text-base"
                        style={{ borderTop: "1px solid var(--cream-dark)", paddingTop: 10, marginTop: 4 }}>
                        <span style={{ color: "var(--ink)" }}>Total</span>
                        <span style={{ color: "var(--forest)", fontSize: "1.1rem" }}>${total.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                  <p style={{ color: "var(--stone)", fontSize: "0.78rem", lineHeight: 1.65, marginBottom: "1.5rem" }}>
                    By confirming you agree to our Terms of Service. Free cancellation until 14 days before check-in.
                    You will receive email confirmation within 24 hours.
                  </p>
                  <button onClick={handleSubmit} disabled={submitting}
                    className="btn-gold disabled:opacity-70" style={{ width: "100%", justifyContent: "center" }}>
                    {submitting ? "Processing Reservation…" : "Confirm Reservation"}
                  </button>
                </motion.div>
              )}

              {/* ── Done ── */}
              {step === "done" && (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10">
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                    style={{ background: "var(--gold)", color: "var(--ink)" }}>
                    <CheckCircle size={30} strokeWidth={2} />
                  </div>
                  <h3 className="heading-serif mb-3" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>
                    Reservation Received
                  </h3>
                  <p style={{ color: "var(--stone)", marginBottom: 6 }}>
                    Thank you, {form.firstName}. Your reservation request for <strong>{cabin?.name}</strong> has been submitted.
                  </p>
                  <p style={{ color: "var(--stone)", fontSize: "0.85rem", marginBottom: "2.5rem" }}>
                    Confirmation sent to <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <button onClick={reset} className="btn-outline-ink">Make Another Booking</button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* ── Sidebar ── */}
          <div className="space-y-5">

            {/* Price preview */}
            {cabin && nights > 0 && step !== "done" && (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                className="p-6" style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
                <div className="eyebrow mb-4" style={{ color: "var(--stone)" }}>Your Selection</div>
                <div className="heading-serif mb-0.5" style={{ fontSize: "1.3rem", color: "var(--ink)" }}>{cabin.name}</div>
                <div style={{ color: "var(--stone)", fontSize: "0.8rem", marginBottom: "1.25rem" }}>{cabin.type}</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span style={{ color: "var(--stone)" }}>{nights} nights</span><span>${subtotal.toLocaleString()}</span></div>
                  <div className="flex justify-between"><span style={{ color: "var(--stone)" }}>Cleaning</span><span>${cleaning}</span></div>
                  <div className="flex justify-between"><span style={{ color: "var(--stone)" }}>Service fee</span><span>${serviceFee}</span></div>
                  <div className="flex justify-between font-bold text-base" style={{ borderTop: "1px solid var(--cream-dark)", paddingTop: 10, marginTop: 6 }}>
                    <span>Total</span>
                    <span style={{ color: "var(--forest)" }}>${total.toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Contact */}
            <div className="p-6" style={{ background: "var(--ink)", border: "1px solid rgba(255,255,255,0.06)" }}>
              <div className="eyebrow mb-3">Need Help?</div>
              <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.82rem", lineHeight: 1.7, marginBottom: "1.25rem" }}>
                Our concierge team is available 7 days a week to help plan your perfect stay.
              </p>
              <div className="space-y-3">
                <a href="tel:+17075551234" className="flex items-center gap-3 text-sm font-medium transition-colors"
                  style={{ color: "var(--gold)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-lt)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold)")}>
                  <Phone size={14} /> (707) 555-1234
                </a>
                <a href="mailto:reservations@lakesonoma.com" className="flex items-center gap-3 text-sm font-medium transition-colors"
                  style={{ color: "var(--gold)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold-lt)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--gold)")}>
                  <Mail size={14} /> reservations@lakesonoma.com
                </a>
              </div>
            </div>

            {/* Policies */}
            <div className="p-6" style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
              <div className="flex items-center gap-2 mb-4">
                <ShieldCheck size={15} style={{ color: "var(--gold)" }} />
                <span className="font-semibold text-sm" style={{ color: "var(--ink)" }}>Booking Policies</span>
              </div>
              <ul className="space-y-2.5">
                {[
                  "Free cancellation up to 14 days",
                  "50% deposit at booking",
                  "Balance due 30 days before arrival",
                  "Check-in 4pm · Check-out 11am",
                  "No smoking on property",
                  "Pets welcome in select cabins",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-2.5" style={{ color: "var(--stone)", fontSize: "0.78rem", lineHeight: 1.5 }}>
                    <span style={{ color: "var(--gold)", flexShrink: 0 }}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
