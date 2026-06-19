import type { Config } from "tailwindcss";

/**
 * Lake Sonoma Marina — NATURE-LUXE EDITORIAL design system.
 *
 * Calm, refined, high-end (luxury resort / Sonoma winery feel), tuned to the
 * marina's REAL brand palette pulled from lakesonoma.com:
 *  - lake  : brand teal (#0d98ba primary / #0b6177 deep) — the water/identity.
 *  - sand  : warm bronze/sand accent (#987655) — shoreline + logo warmth.
 *  - pine  : deep desaturated green-charcoal for body text & dark sections.
 * Restrained palette, generous whitespace, large serif display scale.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    // Layout width is owned by <Container/> (components/Container.tsx); the
    // Tailwind `container` plugin is intentionally not configured to avoid
    // competing container systems.
    extend: {
      colors: {
        lake: {
          50: "#eff9fc",
          100: "#d6eff5",
          200: "#aadfeb",
          300: "#73c7dc",
          400: "#37aac8",
          500: "#0d98ba", // brand primary teal
          600: "#0b7d9c",
          700: "#0b6177", // brand deep teal
          800: "#0d4f60",
          900: "#103f4d",
          950: "#072833",
        },
        sand: {
          50: "#faf6f0",
          100: "#f2e8d9",
          200: "#e6d2b7",
          300: "#d4b489",
          400: "#bb8f5c",
          500: "#987655", // brand bronze/sand
          600: "#7c5f43",
        },
        pine: {
          50: "#f3f5f3",
          100: "#e2e8e3",
          200: "#c4d0c6",
          300: "#9bae9e",
          400: "#6f8675",
          500: "#516a58",
          600: "#3f5446",
          700: "#33433a",
          800: "#26332b",
          900: "#1b251f",
          950: "#0f150f",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "Segoe UI", "sans-serif"],
      },
      fontSize: {
        // Editorial display scale (clamped for fluid, large headlines).
        "display-xl": ["clamp(2.75rem, 6vw, 5rem)", { lineHeight: "1.04", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.08", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.875rem, 3vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem, 2.2vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.005em" }],
        eyebrow: ["0.8125rem", { lineHeight: "1.4", letterSpacing: "0.18em" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "68ch",
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      outlineWidth: {
        3: "3px",
      },
      outlineOffset: {
        3: "3px",
      },
      boxShadow: {
        soft: "0 2px 12px -4px rgba(19, 35, 44, 0.10)",
        card: "0 8px 30px -12px rgba(19, 35, 44, 0.18)",
        lift: "0 18px 50px -20px rgba(19, 35, 44, 0.30)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      transitionTimingFunction: {
        "soft-out": "cubic-bezier(0.22, 0.61, 0.36, 1)",
      },
      keyframes: {
        "reveal-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "reveal-up": "reveal-up 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) both",
        "fade-in": "fade-in 0.6s ease both",
      },
    },
  },
  plugins: [],
};

export default config;
