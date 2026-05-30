"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const faqs = [
  { q: "What is your cancellation policy?", a: "Free cancellation up to 14 days before check-in. 50% refund between 7–14 days. No refund within 7 days of check-in, though we will attempt to rebook your dates." },
  { q: "What time is check-in and check-out?", a: "Check-in begins at 4:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be available upon request based on availability." },
  { q: "Are pets allowed?", a: "Select cabins are pet-friendly. Osprey Point, Cedar Ridge, and Pine Hollow welcome well-behaved dogs. A $75 pet fee per stay applies. Please let us know when booking." },
  { q: "Is WiFi included?", a: "Yes. All cabins have high-speed fiber internet included at no additional charge." },
  { q: "What's the minimum stay?", a: "Most properties require a 2-night minimum. The Vineyard Villa and Estate House require a 3-night minimum. Holiday weekends may require 3–4 nights." },
  { q: "Do you offer gift cards?", a: "Yes! Lake Sonoma Resort gift cards are available in any denomination. Contact us and we'll create a beautifully packaged gift card for any occasion." },
  { q: "Is there cell service at the resort?", a: "Cell coverage varies. All cabins have WiFi calling capability. We recommend downloading offline maps before arrival." },
  { q: "Can I host a wedding or event?", a: "Absolutely. Our event coordinator handles weddings, corporate retreats, and milestone celebrations. The Estate House accommodates up to 80 guests for outdoor events." },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...form }),
    });
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1200);
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <div className="pt-32 pb-16 text-center" style={{ background: "linear-gradient(135deg, #1B4332 0%, #0F2942 100%)" }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="text-xs tracking-[0.3em] uppercase font-semibold mb-3" style={{ color: "#D4AF37" }}>Get in Touch</div>
          <h1 className="text-4xl md:text-6xl font-serif text-white mb-4"
            style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}>Contact Us</h1>
          <p className="text-white/60 max-w-xl mx-auto">Our team is here 7 days a week to help plan your perfect stay.</p>
        </motion.div>
      </div>

      <section className="py-20" style={{ background: "#FAF7F2" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="space-y-6">
              {/* Info cards */}
              {[
                { icon: Phone, label: "Call Us", value: "(707) 555-1234", sub: "Mon–Sun, 8am–8pm PST", href: "tel:+17075551234" },
                { icon: Mail, label: "Email", value: "hello@lakesonoma.com", sub: "Response within 4 hours", href: "mailto:hello@lakesonoma.com" },
                { icon: MapPin, label: "Location", value: "Lake Sonoma Resort", sub: "Geyserville, CA 95441", href: "#" },
                { icon: Clock, label: "Office Hours", value: "7 Days a Week", sub: "8:00 AM – 8:00 PM PST", href: "#" },
              ].map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 bg-white rounded-sm shadow-md hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center shrink-0"
                    style={{ background: "rgba(27,67,50,0.08)" }}>
                    <item.icon size={18} style={{ color: "#1B4332" }} />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.1em] text-gray-400 mb-0.5">{item.label}</div>
                    <div className="font-semibold text-gray-800">{item.value}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{item.sub}</div>
                  </div>
                </motion.a>
              ))}

              {/* Quick links */}
              <div className="bg-white rounded-sm shadow-md p-5 border border-gray-100">
                <div className="font-semibold text-gray-800 mb-3">Quick Links</div>
                <div className="space-y-2">
                  {["Check Availability", "View All Cabins", "Experiences & Activities", "Photo Gallery"].map((l, i) => (
                    <a key={l} href={i === 0 ? "/#booking-widget" : i === 1 ? "/accommodations" : i === 2 ? "/activities" : "/gallery"}
                      className="flex items-center gap-2 text-sm hover:text-green-800 transition-colors"
                      style={{ color: "#1B4332" }}>
                      <span style={{ color: "#D4AF37" }}>→</span> {l}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-sm shadow-xl p-8 border border-gray-100"
              >
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                      style={{ background: "rgba(27,67,50,0.08)" }}>
                      <CheckCircle size={32} style={{ color: "#1B4332" }} />
                    </div>
                    <h3 className="text-2xl font-serif mb-2" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>Message Sent!</h3>
                    <p className="text-gray-600">Thank you, {form.name}. We&apos;ll be in touch within 4 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" }); }}
                      className="mt-6 px-6 py-3 text-sm font-semibold text-white"
                      style={{ background: "#1B4332" }}>
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-serif mb-6" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Full Name *</label>
                          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Email *</label>
                          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Phone</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm" />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Subject</label>
                          <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm bg-white">
                            <option>General Inquiry</option>
                            <option>Booking Assistance</option>
                            <option>Event Planning</option>
                            <option>Group Reservations</option>
                            <option>Activities & Experiences</option>
                            <option>Gift Cards</option>
                            <option>Feedback</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-[0.1em] text-gray-500 mb-2">Message *</label>
                        <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={5} className="w-full px-4 py-3 border border-gray-200 text-sm focus:outline-none focus:border-green-800 transition-colors rounded-sm resize-none"
                          placeholder="How can we help you plan your perfect stay?" />
                      </div>
                      <button type="submit" disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-4 font-semibold text-sm tracking-[0.1em] uppercase text-white transition-all disabled:opacity-70"
                        style={{ background: "#1B4332" }}>
                        <Send size={16} />
                        {loading ? "Sending..." : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-20">
            <div className="text-center mb-10">
              <div className="section-label mb-3" style={{ color: "#D4AF37" }}>FAQs</div>
              <h2 className="text-3xl font-serif" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-3">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-sm shadow-md border border-gray-100 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-gray-800 pr-4">{faq.q}</span>
                    <span className="shrink-0 text-gray-400 text-xl">{openFaq === i ? "−" : "+"}</span>
                  </button>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100"
                      style={{ paddingTop: "1rem" }}
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
