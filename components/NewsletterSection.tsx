"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";

export default function NewsletterSection() {
  const [email,     setEmail]     = useState("");
  const [done,      setDone]      = useState(false);
  const [loading,   setLoading]   = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "newsletter", email }),
    });
    setTimeout(() => { setLoading(false); setDone(true); }, 900);
  };

  return (
    <section className="relative overflow-hidden" style={{ background: "var(--cream-dark)" }}>
      {/* Decorative lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 60px)",
        }} />

      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span className="eyebrow block mb-5">Stay in the Loop</span>
            <div className="section-rule" />
            <h2 className="heading-serif mb-5" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--ink)" }}>
              Seasonal Packages &<br />Wine Country Insider Tips
            </h2>
            <p style={{ color: "var(--stone)", lineHeight: 1.75, maxWidth: 420 }}>
              Exclusive rates, new cabin announcements, curated wine itineraries,
              and first access to holiday availability — delivered occasionally, never spammy.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              {["Early access to new cabins", "Exclusive seasonal rates", "Curated wine guides"].map((b) => (
                <div key={b} className="flex items-center gap-2" style={{ color: "var(--stone)", fontSize: "0.82rem" }}>
                  <div className="w-4 h-4 flex items-center justify-center" style={{ background: "var(--gold)", color: "var(--ink)" }}>
                    <Check size={10} strokeWidth={3} />
                  </div>
                  {b}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.15 }}>
            {done ? (
              <div
                className="flex flex-col items-center justify-center gap-4 py-12 text-center"
                style={{ border: "1px solid var(--cream-dark)", background: "white" }}
              >
                <div className="w-12 h-12 flex items-center justify-center" style={{ background: "var(--gold)", color: "var(--ink)" }}>
                  <Check size={20} strokeWidth={2.5} />
                </div>
                <div className="heading-serif" style={{ fontSize: "1.5rem", color: "var(--ink)" }}>You&apos;re In!</div>
                <p style={{ color: "var(--stone)", fontSize: "0.9rem" }}>Welcome to the Lake Sonoma inner circle.</p>
              </div>
            ) : (
              <form onSubmit={submit}
                className="p-8 lg:p-10"
                style={{ background: "white", border: "1px solid var(--cream-dark)" }}
              >
                <div className="heading-serif mb-2" style={{ fontSize: "1.4rem", color: "var(--ink)" }}>
                  Join the Community
                </div>
                <p style={{ color: "var(--stone)", fontSize: "0.85rem", marginBottom: "1.8rem" }}>
                  No spam. Unsubscribe at any time.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="w-full px-5 py-4 text-sm focus:outline-none transition-colors"
                    style={{
                      background: "var(--cream)",
                      border: "1px solid var(--cream-dark)",
                      color: "var(--ink)",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                    onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")}
                  />
                  <button type="submit" disabled={loading} className="btn-gold w-full justify-center" style={{ width: "100%" }}>
                    {loading ? "Subscribing…" : "Subscribe"}
                    {!loading && <ArrowRight size={14} />}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
