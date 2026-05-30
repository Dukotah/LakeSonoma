import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f0f7f0",
          100: "#d9edd9",
          200: "#b3dbb3",
          300: "#7dbf7d",
          400: "#4da04d",
          500: "#2d7d2d",
          600: "#1B5E20",
          700: "#1B4332",
          800: "#163528",
          900: "#0f2419",
        },
        gold: {
          100: "#fef9e7",
          200: "#fdf2c4",
          300: "#fbe58a",
          400: "#f8d44a",
          500: "#D4AF37",
          600: "#b8960a",
          700: "#957808",
          800: "#7a620a",
          900: "#64510e",
        },
        cream: {
          50: "#FEFCF8",
          100: "#FAF7F2",
          200: "#F5EFE6",
          300: "#EDE3D4",
        },
        navy: {
          700: "#0F2942",
          800: "#0a1e30",
          900: "#050f18",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "shimmer": "shimmer 2s infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-gradient":
          "linear-gradient(180deg, rgba(15,41,66,0.3) 0%, rgba(27,67,50,0.6) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
