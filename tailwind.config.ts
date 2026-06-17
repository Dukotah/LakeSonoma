import type { Config } from "tailwindcss";

/**
 * Lake Sonoma Marina — NATURE-LUXE EDITORIAL design system.
 *
 * Calm, refined, high-end (luxury resort / Sonoma winery feel):
 *  - lake  : deep, muted teal-blue primary (water).
 *  - sand  : warm, soft sand/stone accents (shoreline, paper warmth).
 *  - pine  : deep desaturated green-charcoal for body text & dark sections.
 * Restrained palette, generous whitespace, large serif display scale.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        lake: {
          50: "#f1f7f9",
          100: "#dceaef",
          200: "#bcd6df",
          300: "#8fb9c7",
          400: "#5d96a9",
          500: "#3d7889",
          600: "#326070",
          700: "#2c4f5d",
          800: "#28424e",
          900: "#243944",
          950: "#13232c",
        },
        sand: {
          50: "#faf7f1",
          100: "#f3ecdf",
          200: "#e7d9bf",
          300: "#d8c198",
          400: "#c7a56e",
          500: "#b98e51",
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
