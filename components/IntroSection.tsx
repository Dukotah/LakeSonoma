"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { n: "15",    s: "Years of Excellence" },
  { n: "4,800+",s: "Families Hosted" },
  { n: "12",    s: "Unique Retreats" },
  { n: "4.97",  s: "Average Star Rating" },
];

function CountUp({ n }: { n: string }) {
  return <span>{n}</span>;
}

export default function IntroSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="intro" className="bg-linen" ref={ref}>
      {/* ── Upper: editorial split ── */}
      <div className="max-w-[1440px] mx-auto grid lg:grid-cols-2 min-h-[680px]">

        {/* Left: text block */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-center px-10 py-20 lg:px-20 lg:py-28"
        >
          <span className="eyebrow mb-5">Our Story</span>
          <div className="section-rule" />
          <h2
            className="heading-serif mb-8"
            style={{
              fontSize: "clamp(2.6rem, 4.5vw, 3.8rem)",
              color: "var(--ink)",
              maxWidth: 520,
            }}
          >
            A Sanctuary Where Nature{" "}
            <em style={{ color: "var(--forest-mid)", fontStyle: "italic" }}>and Luxury Converge</em>
          </h2>
          <p style={{ color: "var(--stone)", lineHeight: 1.85, fontSize: "1.05rem", maxWidth: 480 }} className="mb-8">
            Since 2008, Lake Sonoma Resort has welcomed guests seeking the perfect
            escape — where the pristine shoreline meets vine-covered hillsides and
            the sky fills with more stars than you can count.
          </p>
          <p style={{ color: "var(--stone)", lineHeight: 1.85, fontSize: "1.05rem", maxWidth: 480 }} className="mb-12">
            Each cabin is individually crafted: cedar walls, stone fireplaces,
            chef-grade kitchens, and private outdoor spaces that make you feel
            both rooted in nature and completely at ease.
          </p>
          <a href="/#booking-widget" className="btn-gold self-start">
            Plan Your Escape
          </a>
        </motion.div>

        {/* Right: scenic illustration panel */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="relative overflow-hidden"
          style={{ minHeight: 480 }}
        >
          {/* Main scene */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #041a0e 0%, #0a2d1a 25%, #133d24 45%, #1e5e38 65%, #2a7a48 80%, #1a4d2e 90%, #041a0e 100%)",
            }}
          />

          {/* Sky stars */}
          {Array.from({ length: 30 }, (_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 1.5 + 0.5}px`,
                height: `${Math.random() * 1.5 + 0.5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 45}%`,
                opacity: Math.random() * 0.5 + 0.1,
              }} />
          ))}

          {/* Moon */}
          <div className="absolute" style={{
            width: 50, height: 50,
            top: "8%", right: "15%",
            borderRadius: "50%",
            background: "radial-gradient(circle at 35% 35%, #fdf6e3 0%, #e8d090 50%, rgba(201,168,76,0.2) 80%, transparent 100%)",
            boxShadow: "0 0 40px 12px rgba(201,168,76,0.12)",
          }} />

          {/* Hill layers */}
          <svg className="absolute w-full" style={{ bottom: "38%" }} viewBox="0 0 800 150" preserveAspectRatio="none">
            <path d="M0,150 L0,90 C80,55 160,40 240,65 C320,88 400,30 480,52 C560,74 640,28 720,48 L800,60 L800,150Z"
              fill="#041208" opacity="0.9" />
          </svg>
          <svg className="absolute w-full" style={{ bottom: "28%" }} viewBox="0 0 800 200" preserveAspectRatio="none">
            <path d="M0,200 L0,140 C60,100 120,80 180,90 C240,100 300,65 360,78 C420,90 480,55 540,70 C600,85 660,60 720,75 L800,85 L800,200Z"
              fill="#02080a" />
          </svg>

          {/* Cabin silhouette */}
          <svg className="absolute" style={{ bottom: "30%", left: "20%", width: 120 }} viewBox="0 0 120 100">
            <polygon points="60,5 5,45 115,45" fill="rgba(0,0,0,0.9)" />
            <rect x="15" y="45" width="90" height="50" fill="rgba(0,0,0,0.9)" />
            <rect x="50" y="68" width="20" height="27" fill="rgba(201,168,76,0.35)" />
            <rect x="25" y="56" width="18" height="14" fill="rgba(201,168,76,0.2)" />
            <rect x="77" y="56" width="18" height="14" fill="rgba(201,168,76,0.2)" />
            <line x1="50" y1="68" x2="70" y2="68" stroke="rgba(201,168,76,0.15)" strokeWidth="1" />
          </svg>

          {/* Lake */}
          <div className="absolute left-0 right-0" style={{
            bottom: "8%", height: "22%",
            background: "linear-gradient(180deg, rgba(10,40,25,0.3) 0%, rgba(5,20,14,0.9) 100%)",
          }}>
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="absolute left-[10%] right-[10%]"
                style={{
                  top: `${i * 18 + 8}%`, height: 1,
                  background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.25), rgba(255,255,255,0.12), rgba(201,168,76,0.25), transparent)",
                }} />
            ))}
          </div>

          {/* Shore */}
          <div className="absolute bottom-0 left-0 right-0 h-[10%]" style={{ background: "rgba(4,10,6,0.95)" }} />

          {/* Caption overlay */}
          <div
            className="absolute bottom-0 left-0 right-0 px-8 py-6"
            style={{ background: "linear-gradient(0deg, rgba(4,10,6,0.9) 0%, transparent 100%)" }}
          >
            <span className="eyebrow block mb-1" style={{ color: "rgba(201,168,76,0.7)" }}>Lake Sonoma Shoreline</span>
            <span
              className="display-serif text-white"
              style={{ fontSize: "1.4rem" }}
            >
              Golden Hour on the Water
            </span>
          </div>

          {/* Award badge */}
          <div
            className="absolute top-6 right-6 w-20 h-20 flex flex-col items-center justify-center text-center"
            style={{
              background: "var(--gold)",
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
            }}
          >
            <span style={{ color: "var(--ink)", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.1em", lineHeight: 1.3 }}>
              BEST<br />RESORT<br />2024
            </span>
          </div>
        </motion.div>
      </div>

      {/* ── Stats bar ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-2 lg:grid-cols-4"
        style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
      >
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-12 px-6 text-center"
            style={{ borderRight: i < 3 ? "1px solid rgba(0,0,0,0.06)" : "none" }}
          >
            <span
              className="heading-serif"
              style={{ fontSize: "2.8rem", color: "var(--forest)", lineHeight: 1 }}
            >
              <CountUp n={s.n} />
            </span>
            <span
              style={{ color: "var(--stone)", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", marginTop: "0.5rem" }}
            >
              {s.s}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
