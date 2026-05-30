"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "newsletter", email }),
    });
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1000);
  };

  return (
    <section className="py-20 relative overflow-hidden" style={{ background: "#D4AF37" }}>
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "repeating-linear-gradient(-45deg, white 0, white 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px",
        }} />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-xs tracking-[0.3em] uppercase font-semibold mb-3 text-white/80">Stay Connected</div>
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-3"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>
            Be the First to Know
          </h2>
          <p className="text-white/80 mb-8">
            Seasonal packages, exclusive rates, new cabin announcements, and wine country insider tips.
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-white font-semibold">
              <CheckCircle size={22} />
              Thank you! You&apos;re on the list.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-5 py-4 text-sm text-gray-800 rounded-sm focus:outline-none placeholder-gray-400"
                style={{ background: "rgba(255,255,255,0.95)" }}
              />
              <button type="submit" disabled={loading}
                className="flex items-center gap-2 px-6 py-4 font-semibold text-sm tracking-wide uppercase text-white transition-all disabled:opacity-70 rounded-sm"
                style={{ background: "#1B4332" }}>
                <Send size={14} />
                {loading ? "..." : "Subscribe"}
              </button>
            </form>
          )}
          <p className="text-white/50 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </motion.div>
      </div>
    </section>
  );
}
