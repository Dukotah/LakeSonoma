"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ChevronDown } from "lucide-react";

const faqs = [
  { q: "What is your cancellation policy?",        a: "Free cancellation up to 14 days before check-in. 50% refund 7–14 days out. No refund within 7 days, though we will attempt to rebook your dates." },
  { q: "What time is check-in and check-out?",     a: "Check-in begins at 4:00 PM and check-out is by 11:00 AM. Early check-in and late check-out may be available upon request." },
  { q: "Are pets allowed?",                         a: "Select cabins are pet-friendly. Osprey Point, Cedar Ridge, and Pine Hollow welcome well-behaved dogs. A $75 pet fee per stay applies." },
  { q: "Is WiFi included?",                         a: "Yes. All cabins have high-speed fiber internet at no additional charge." },
  { q: "What's the minimum stay?",                  a: "Most properties require a 2-night minimum. The estate properties require 3 nights. Holiday weekends may require 3–4 nights." },
  { q: "Do you offer gift cards?",                  a: "Yes! Gift cards are available in any denomination with beautifully designed packaging. Contact us to order." },
  { q: "Can I host an event or wedding?",           a: "Absolutely. Our event coordinator handles weddings, retreats, and milestone celebrations. The Oak Estate accommodates up to 80 guests outdoors." },
  { q: "Is there cell service at the resort?",      a: "Coverage varies by carrier. All cabins have WiFi calling capability. We recommend downloading offline maps before arrival." },
];

const contactInfo = [
  { icon: Phone, label: "Call Us",      value: "(707) 555-1234",          sub: "Mon–Sun, 8am–8pm PST",        href: "tel:+17075551234" },
  { icon: Mail,  label: "Email",        value: "hello@lakesonoma.com",     sub: "Response within 4 hours",     href: "mailto:hello@lakesonoma.com" },
  { icon: MapPin,label: "Location",     value: "Geyserville, CA 95441",    sub: "75 min north of San Francisco",href: "#" },
  { icon: Clock, label: "Office Hours", value: "7 Days a Week",            sub: "8:00 AM – 8:00 PM PST",       href: "#" },
];

const subjects = ["General Inquiry", "Booking Assistance", "Event Planning", "Group Reservations", "Activities & Experiences", "Gift Cards", "Feedback"];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" });
  const [sent,     setSent]     = useState(false);
  const [loading,  setLoading]  = useState(false);
  const [openFaq,  setOpenFaq]  = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "contact", ...form }),
    });
    setTimeout(() => { setLoading(false); setSent(true); }, 1200);
  };

  return (
    <>
      <Navigation />

      {/* Hero */}
      <div className="relative pt-40 pb-20 overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 80% 40%, rgba(29,74,40,0.25) 0%, transparent 55%)" }} />
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16 relative z-10">
          <span className="eyebrow block mb-5">Get in Touch</span>
          <div className="section-rule" />
          <h1 className="display-serif text-white" style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}>Contact Us</h1>
          <p style={{ color: "rgba(255,255,255,0.45)", maxWidth: 480, marginTop: "1.25rem", lineHeight: 1.75 }}>
            Our team is here 7 days a week to help plan your perfect stay in wine country.
          </p>
        </div>
      </div>

      <section className="py-24" style={{ background: "var(--cream)" }}>
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-[340px_1fr] gap-12">

            {/* Contact info */}
            <div className="space-y-4">
              {contactInfo.map((item) => (
                <motion.a key={item.label} href={item.href}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  className="flex items-start gap-4 p-5 transition-all"
                  style={{ background: "white", border: "1px solid var(--cream-dark)" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--cream-dark)"; }}>
                  <div className="w-9 h-9 flex items-center justify-center shrink-0"
                    style={{ background: "var(--ink)" }}>
                    <item.icon size={14} style={{ color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div className="eyebrow mb-0.5" style={{ color: "var(--stone)" }}>{item.label}</div>
                    <div className="font-semibold text-sm" style={{ color: "var(--ink)" }}>{item.value}</div>
                    <div style={{ color: "var(--stone)", fontSize: "0.75rem", marginTop: 2 }}>{item.sub}</div>
                  </div>
                </motion.a>
              ))}

              {/* Quick links */}
              <div className="p-6" style={{ background: "var(--ink)", border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="eyebrow mb-4">Quick Links</div>
                <div className="space-y-2.5">
                  {["Check Availability →", "View All Cabins →", "Experiences →", "Photo Gallery →"].map((l, i) => (
                    <a key={l} href={i === 0 ? "/#booking-widget" : i === 1 ? "/accommodations" : i === 2 ? "/activities" : "/gallery"}
                      className="block text-sm transition-colors"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "var(--gold)")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.4)")}>
                      {l}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
              <div className="h-[3px]" style={{ background: "linear-gradient(90deg, var(--forest), var(--gold), var(--forest))" }} />
              <div className="p-8 lg:p-12">
                {sent ? (
                  <div className="text-center py-14">
                    <div className="w-16 h-16 flex items-center justify-center mx-auto mb-6"
                      style={{ background: "var(--gold)", color: "var(--ink)" }}>
                      <CheckCircle size={28} strokeWidth={2} />
                    </div>
                    <h3 className="heading-serif mb-3" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>Message Sent</h3>
                    <p style={{ color: "var(--stone)" }}>Thank you, {form.name}. We&apos;ll be in touch within 4 hours.</p>
                    <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "General Inquiry", message: "" }); }}
                      className="btn-outline-ink mt-8">Send Another</button>
                  </div>
                ) : (
                  <>
                    <h2 className="heading-serif mb-8" style={{ fontSize: "1.8rem", color: "var(--ink)" }}>Send Us a Message</h2>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Full Name *</label>
                          <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                            className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors"
                            style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                        </div>
                        <div>
                          <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Email *</label>
                          <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                            className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors"
                            style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Phone</label>
                          <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors"
                            style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                            onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                            onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                        </div>
                        <div>
                          <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Subject</label>
                          <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            className="w-full px-4 py-3.5 text-sm focus:outline-none bg-white transition-colors"
                            style={{ border: "1px solid var(--cream-dark)", color: "var(--ink)", background: "var(--cream)" }}>
                            {subjects.map((s) => <option key={s}>{s}</option>)}
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="eyebrow block mb-2" style={{ color: "var(--stone)" }}>Message *</label>
                        <textarea required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                          rows={5} placeholder="How can we help you plan your perfect stay?"
                          className="w-full px-4 py-3.5 text-sm focus:outline-none transition-colors resize-none"
                          style={{ background: "var(--cream)", border: "1px solid var(--cream-dark)", color: "var(--ink)" }}
                          onFocus={(e) => (e.target.style.borderColor = "var(--gold)")}
                          onBlur={(e) => (e.target.style.borderColor = "var(--cream-dark)")} />
                      </div>
                      <button type="submit" disabled={loading}
                        className="btn-gold w-full justify-center disabled:opacity-70">
                        <Send size={14} />
                        {loading ? "Sending…" : "Send Message"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>

          {/* FAQ */}
          <div id="faq" className="mt-24">
            <div className="mb-14">
              <span className="eyebrow block mb-4">FAQs</span>
              <div className="section-rule" />
              <h2 className="heading-serif" style={{ fontSize: "clamp(2rem, 3.5vw, 2.8rem)", color: "var(--ink)" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="max-w-3xl space-y-2">
              {faqs.map((faq, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  style={{ background: "white", border: "1px solid var(--cream-dark)" }}>
                  <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    style={{ color: "var(--ink)" }}>
                    <span className="font-semibold text-sm pr-6">{faq.q}</span>
                    <ChevronDown size={16} style={{ color: "var(--stone)", flexShrink: 0, transform: openFaq === i ? "rotate(180deg)" : "none", transition: "transform 0.2s" }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-6 pb-5 text-sm leading-relaxed"
                      style={{ color: "var(--stone)", borderTop: "1px solid var(--cream-dark)", paddingTop: "1rem" }}>
                      {faq.a}
                    </div>
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
