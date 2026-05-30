"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrollY = window.scrollY;
        parallaxRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div ref={parallaxRef} className="absolute inset-0 w-full h-[120%] -top-[10%]">
        {/* Gradient background simulating a lake/forest scene */}
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, #0a1e30 0%, #0F2942 20%, #1B4332 55%, #2d6a4f 75%, #40916c 90%, #52b788 100%)",
        }} />
        {/* Overlay pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }} />
        {/* Lake reflection */}
        <div className="absolute bottom-0 left-0 right-0 h-2/5" style={{
          background: "linear-gradient(0deg, rgba(15,41,66,0.9) 0%, rgba(27,67,50,0.5) 50%, transparent 100%)",
        }} />
        {/* Ripple effect on water */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 overflow-hidden opacity-30">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="absolute w-full h-px"
              style={{
                bottom: `${i * 12 + 5}%`,
                background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.6) 30%, rgba(212,175,55,0.4) 50%, rgba(255,255,255,0.6) 70%, transparent 100%)",
                animation: `ripple ${3 + i * 0.5}s ease-in-out infinite`,
                animationDelay: `${i * 0.3}s`,
              }} />
          ))}
        </div>
        {/* Stars */}
        {[...Array(40)].map((_, i) => (
          <div key={i} className="absolute rounded-full bg-white"
            style={{
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 40}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: `twinkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }} />
        ))}
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(5,15,24,0.4) 0%, rgba(15,41,66,0.3) 40%, rgba(27,67,50,0.5) 70%, rgba(5,15,24,0.7) 100%)",
      }} />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.4em] uppercase px-4 py-2 rounded-sm"
            style={{ color: "#D4AF37", border: "1px solid rgba(212,175,55,0.4)", background: "rgba(212,175,55,0.1)" }}>
            Sonoma County, California
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 leading-none"
          style={{ fontFamily: "var(--font-playfair, Georgia, serif)" }}
        >
          Where the Lake
          <br />
          <span style={{ color: "#D4AF37" }}>Meets the Vine</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "var(--font-inter, sans-serif)" }}
        >
          Luxury lakeside retreats nestled in the heart of wine country.
          Private cabins, curated experiences, and memories that last a lifetime.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link href="/#booking"
            className="inline-flex items-center justify-center gap-2 font-semibold px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300"
            style={{ background: "#D4AF37", color: "white" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#b8960a"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#D4AF37"; e.currentTarget.style.transform = "translateY(0)"; }}>
            Reserve Your Stay
          </Link>
          <Link href="/accommodations"
            className="inline-flex items-center justify-center gap-2 font-semibold px-10 py-4 text-sm tracking-[0.15em] uppercase transition-all duration-300"
            style={{ border: "2px solid white", color: "white", background: "transparent" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "white"; e.currentTarget.style.color = "#0F2942"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "white"; }}>
            Explore Cabins
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16"
        >
          {[
            { value: "12", label: "Private Cabins" },
            { value: "2,700+", label: "Acres of Nature" },
            { value: "50+", label: "Nearby Wineries" },
            { value: "4.9★", label: "Guest Rating" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-serif font-bold" style={{ color: "#D4AF37" }}>{stat.value}</div>
              <div className="text-xs text-white/60 tracking-[0.15em] uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 cursor-pointer"
        onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="text-xs tracking-[0.2em] uppercase">Discover</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>

      <style jsx>{`
        @keyframes ripple {
          0%, 100% { transform: scaleX(0.8); opacity: 0.3; }
          50% { transform: scaleX(1); opacity: 0.7; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
