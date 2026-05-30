"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

export default function Hero() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.38}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      className="relative overflow-hidden"
      style={{ height: "100svh", minHeight: 720 }}
    >
      {/* ── Cinematic background ── */}
      <div ref={bgRef} className="absolute inset-0 w-full" style={{ height: "130%" }}>
        {/* Sky gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(175deg, #030d08 0%, #0a1e0f 18%, #0f2918 35%, #1a3d24 52%, #1e4d2a 65%, #2a6035 80%, #1a3d24 90%, #0a1e0f 100%)",
          }}
        />

        {/* Stars field */}
        {Array.from({ length: 90 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width:  `${Math.random() * 1.8 + 0.4}px`,
              height: `${Math.random() * 1.8 + 0.4}px`,
              left:   `${Math.random() * 100}%`,
              top:    `${Math.random() * 55}%`,
              opacity: Math.random() * 0.7 + 0.1,
              animation: `twinkle ${Math.random() * 4 + 2}s ease-in-out ${Math.random() * 4}s infinite`,
            }}
          />
        ))}

        {/* Moon */}
        <div
          className="absolute"
          style={{
            width: 64,
            height: 64,
            top: "12%",
            right: "18%",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #fdf6e3 0%, #e8d090 45%, rgba(201,168,76,0.3) 70%, transparent 100%)",
            boxShadow: "0 0 60px 20px rgba(201,168,76,0.15), 0 0 120px 40px rgba(201,168,76,0.06)",
          }}
        />

        {/* Distant hills – layer 1 (darkest) */}
        <svg
          className="absolute bottom-[36%] w-full"
          viewBox="0 0 1440 200"
          preserveAspectRatio="none"
          style={{ fill: "#071410" }}
        >
          <path d="M0,200 L0,130 C120,80 240,60 360,90 C480,120 600,50 720,70 C840,90 960,40 1080,65 C1200,90 1320,75 1440,95 L1440,200Z" />
        </svg>

        {/* Tree silhouette – layer 2 */}
        <svg
          className="absolute bottom-[28%] w-full"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
          style={{ fill: "#040f0a" }}
        >
          <path d="M0,260 L0,180
            C30,160 50,140 60,120 C65,110 70,100 75,105 C80,100 85,80 92,75 C98,70 100,80 105,75
            C115,60 125,50 130,55 C138,42 145,38 150,45 C158,32 165,28 170,38 C175,25 182,18 188,28
            C195,12 205,8 212,20 C218,6 228,2 235,14 C242,0 252,-4 258,10 C265,-3 276,-6 283,8
            C295,148 320,155 340,145 C358,130 370,118 390,125 C408,132 420,120 438,115
            C455,100 470,88 490,95 C510,100 525,88 542,80 C558,68 572,55 590,62
            C608,70 620,55 638,50 C655,38 670,26 688,35 C706,22 720,15 738,25
            C755,12 772,8 788,20 C805,5 820,-2 838,12 C855,-2 870,-8 888,8
            C905,-5 920,-10 940,5 C958,-8 975,-12 992,5 C1010,-8 1025,-12 1042,5
            C1060,-5 1078,-8 1095,8 C1112,-2 1128,-6 1145,10 C1162,0 1178,-4 1196,14
            C1213,2 1230,-2 1248,16 C1265,5 1282,2 1298,18
            C1315,32 1330,28 1345,40 C1358,50 1375,45 1390,55
            C1410,68 1425,75 1440,90
            L1440,260Z" />
        </svg>

        {/* Close tree line – layer 3 */}
        <svg
          className="absolute bottom-[22%] w-full"
          viewBox="0 0 1440 180"
          preserveAspectRatio="none"
          style={{ fill: "#020a05" }}
        >
          <path d="M0,180 L0,130
            C15,110 28,95 38,85 C44,78 48,65 55,60 C60,55 65,62 70,58
            C78,45 88,36 96,42 C102,30 112,24 118,32 C125,20 135,14 142,24
            C150,10 162,4 170,16 C178,2 190,-4 198,10
            C210,0 225,-5 232,10 C242,-3 255,-8 264,8
            C278,155 300,160 325,150 C345,138 360,125 382,132
            C400,138 415,122 435,115 C452,100 468,88 490,95
            C512,100 528,85 548,78 C565,62 582,48 600,56
            C620,65 635,50 655,44 C672,30 688,18 706,28
            C724,15 740,8 758,22 C776,8 793,2 810,18
            C828,5 845,-2 862,15 C880,2 897,-4 915,14
            C932,2 950,-4 968,14 C986,2 1004,-3 1022,15
            C1040,3 1058,-2 1076,16 C1094,5 1112,0 1130,18
            C1148,8 1165,2 1183,22 C1200,10 1218,5 1235,25
            C1252,15 1270,10 1287,30 C1305,145 1322,148 1340,138
            C1358,128 1375,118 1395,125 C1412,132 1425,122 1440,130
            L1440,180Z" />
        </svg>

        {/* Lake surface */}
        <div
          className="absolute left-0 right-0"
          style={{
            bottom: "8%",
            height: "22%",
            background:
              "linear-gradient(180deg, rgba(8,30,20,0.0) 0%, rgba(8,30,20,0.5) 30%, rgba(15,40,28,0.85) 100%)",
          }}
        >
          {/* Reflection ripples */}
          {Array.from({ length: 7 }, (_, i) => (
            <div
              key={i}
              className="absolute left-1/4 right-1/4 opacity-20"
              style={{
                top: `${i * 14 + 8}%`,
                height: "1px",
                background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 20%, rgba(255,255,255,0.4) 50%, rgba(201,168,76,0.5) 80%, transparent 100%)",
                animation: `ripple ${3.5 + i * 0.4}s ease-in-out ${i * 0.25}s infinite`,
              }}
            />
          ))}
          {/* Moon reflection */}
          <div
            className="absolute"
            style={{
              width: 8, height: 60,
              right: "18.5%",
              top: "0%",
              background: "linear-gradient(180deg, rgba(201,168,76,0.4) 0%, transparent 100%)",
              borderRadius: 4,
              filter: "blur(4px)",
            }}
          />
        </div>

        {/* Foreground shore */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[10%]"
          style={{ background: "var(--ink)" }}
        />

        {/* Vignette overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, transparent 30%, rgba(3,13,8,0.6) 100%)",
          }}
        />
      </div>

      {/* ── Overlay gradient for text readability ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,13,8,0.2) 0%, transparent 30%, transparent 55%, rgba(3,13,8,0.75) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 h-full flex flex-col justify-between px-8 lg:px-20 pb-14 pt-0">

        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="self-center mt-28"
        >
          <div
            className="inline-flex items-center gap-3 px-5 py-2.5"
            style={{
              border: "1px solid rgba(201,168,76,0.35)",
              background: "rgba(201,168,76,0.07)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="w-1 h-1 rounded-full" style={{ background: "var(--gold)" }} />
            <span className="eyebrow">Sonoma County, California</span>
            <div className="w-1 h-1 rounded-full" style={{ background: "var(--gold)" }} />
          </div>
        </motion.div>

        {/* Main headline */}
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="display-serif text-white"
            style={{
              fontSize: "clamp(3.8rem, 9vw, 9.5rem)",
              maxWidth: "1100px",
            }}
          >
            Where the Lake{" "}
            <span className="gold-shimmer">Meets the Vine</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.25 }}
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "1.05rem",
              maxWidth: 520,
              lineHeight: 1.7,
              marginTop: "1.8rem",
              fontWeight: 300,
            }}
          >
            Private lakeside retreats where Sonoma&apos;s wild beauty and
            curated luxury exist in perfect harmony.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mt-10"
          >
            <Link href="/#booking-widget" className="btn-gold">
              Reserve Your Stay
              <ArrowDownRight size={14} />
            </Link>
            <Link href="/accommodations" className="btn-outline-cream">
              Explore Cabins
            </Link>
          </motion.div>
        </div>

        {/* Bottom stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex items-center justify-between"
        >
          <div className="hidden md:flex items-center gap-10">
            {[
              { n: "12",    l: "Private Retreats" },
              { n: "2,700", l: "Acres of Nature" },
              { n: "50+",   l: "Nearby Wineries" },
              { n: "4.97★", l: "Average Rating" },
            ].map((s, i) => (
              <div key={i} className="flex flex-col">
                <span
                  className="heading-serif text-white"
                  style={{ fontSize: "1.7rem", lineHeight: 1 }}
                >
                  {s.n}
                </span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "0.3rem" }}>
                  {s.l}
                </span>
              </div>
            ))}
          </div>

          {/* Scroll cue */}
          <div
            className="flex items-center gap-3 ml-auto cursor-pointer"
            onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
          >
            <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase" }}>
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              style={{
                width: 28,
                height: 44,
                border: "1.5px solid rgba(255,255,255,0.25)",
                borderRadius: 14,
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                paddingTop: 7,
              }}
            >
              <div
                style={{
                  width: 4,
                  height: 8,
                  background: "var(--gold)",
                  borderRadius: 2,
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50%       { opacity: 0.9;  transform: scale(1.3); }
        }
        @keyframes ripple {
          0%, 100% { transform: scaleX(0.6); opacity: 0.15; }
          50%       { transform: scaleX(1);   opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
