"use client";

import { motion } from "framer-motion";
import { Leaf, Waves, Wine, Star } from "lucide-react";

const features = [
  {
    icon: Waves,
    title: "Lakeside Serenity",
    description: "Wake up to shimmering water views from your private deck. Kayak at dawn, swim at dusk.",
  },
  {
    icon: Wine,
    title: "Wine Country at Your Doorstep",
    description: "50+ world-class wineries within 20 miles. Private tastings and vineyard tours arranged.",
  },
  {
    icon: Leaf,
    title: "Untouched Nature",
    description: "2,700 acres of protected wilderness surround our property — hiking, wildlife, and pure silence.",
  },
  {
    icon: Star,
    title: "Curated Luxury",
    description: "Every detail considered. Premium linens, chef kitchens, concierge service, and private hot tubs.",
  },
];

export default function IntroSection() {
  return (
    <section id="intro" className="py-24 md:py-32" style={{ background: "#FAF7F2" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="section-label mb-4" style={{ color: "#D4AF37" }}>Our Story</div>
            <h2 className="text-4xl md:text-5xl font-serif mb-6 leading-tight" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
              A Sanctuary Where Nature
              <br />
              <span style={{ color: "#1B4332" }}>and Luxury Converge</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-lg">
              Nestled along the pristine shores of Lake Sonoma, our resort has been welcoming guests seeking
              the perfect escape since 2008. We blend the wild beauty of Northern California's landscape
              with thoughtfully designed accommodations that honor the land.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Each cabin is individually crafted — cedar walls, stone fireplaces, chef-grade kitchens, and
              private outdoor spaces that make you feel both connected to nature and completely at ease.
              Our team of hospitality experts is here to ensure every moment exceeds your expectations.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold" style={{ color: "#1B4332" }}>15+</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em] mt-1">Years of Excellence</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-serif font-bold" style={{ color: "#1B4332" }}>4,800+</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em] mt-1">Happy Families</div>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="text-center">
                <div className="text-3xl font-serif font-bold" style={{ color: "#1B4332" }}>12</div>
                <div className="text-xs text-gray-500 uppercase tracking-[0.15em] mt-1">Unique Retreats</div>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl" style={{
              background: "linear-gradient(135deg, #1B4332 0%, #0F2942 40%, #2d6a4f 70%, #40916c 100%)",
            }}>
              {/* Decorative elements simulating a lake view */}
              <div className="absolute inset-0 flex flex-col justify-end">
                <div className="h-1/2" style={{
                  background: "linear-gradient(0deg, rgba(15,41,66,0.8) 0%, transparent 100%)",
                }} />
              </div>
              {/* Forest silhouette */}
              <svg className="absolute bottom-1/3 left-0 right-0 w-full" viewBox="0 0 800 200" preserveAspectRatio="none">
                <path d="M0,200 L0,100 L50,60 L100,90 L150,40 L200,80 L250,30 L300,70 L350,20 L400,65 L450,25 L500,70 L550,35 L600,75 L650,45 L700,80 L750,55 L800,90 L800,200 Z"
                  fill="rgba(27,67,50,0.8)" />
                <path d="M0,200 L0,130 L80,90 L160,120 L240,75 L320,105 L400,60 L480,95 L560,70 L640,100 L720,80 L800,110 L800,200 Z"
                  fill="rgba(15,41,66,0.7)" />
              </svg>
              {/* Water reflection */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3" style={{
                background: "linear-gradient(0deg, rgba(15,41,66,0.9) 0%, rgba(27,67,50,0.4) 100%)",
              }}>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="absolute left-1/4 right-1/4 h-px opacity-30"
                    style={{
                      top: `${i * 16 + 8}%`,
                      background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
                    }} />
                ))}
              </div>
              {/* Moon */}
              <div className="absolute top-10 right-12 w-14 h-14 rounded-full opacity-80"
                style={{ background: "radial-gradient(circle, rgba(212,175,55,0.9) 0%, rgba(212,175,55,0.3) 60%, transparent 100%)" }} />
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="text-xs tracking-[0.2em] uppercase mb-1" style={{ color: "#D4AF37" }}>Lake Sonoma Shoreline</div>
                <div className="font-serif text-lg">Golden Hour on the Water</div>
              </div>
            </div>
            {/* Award badge */}
            <div className="absolute -top-5 -right-5 w-24 h-24 rounded-full flex flex-col items-center justify-center text-white shadow-xl"
              style={{ background: "#D4AF37" }}>
              <div className="text-xs font-bold text-center leading-tight">BEST<br />RESORT</div>
              <div className="text-xs opacity-80 mt-0.5">2024</div>
            </div>
          </motion.div>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group p-8 bg-white rounded-sm border border-gray-100 hover:border-green-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-5 transition-colors"
                style={{ background: "rgba(27,67,50,0.08)" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "#1B4332"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(27,67,50,0.08)"; }}>
                <feature.icon size={22} style={{ color: "#1B4332" }} />
              </div>
              <h3 className="font-serif text-xl mb-3" style={{ color: "#0F2942", fontFamily: "var(--font-playfair, Georgia, serif)" }}>
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
