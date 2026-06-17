import type { Config } from "tailwindcss";

/**
 * Lake Sonoma Marina — refreshed-but-familiar identity.
 * Lake-blue primary, warm sand accent, deep pine for contrast.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lake: {
          50: "#eff8fb",
          100: "#d7eef4",
          200: "#b3dde9",
          300: "#7fc4d8",
          400: "#45a3c0",
          500: "#2786a6",
          600: "#226d8c",
          700: "#205a73",
          800: "#214b5f",
          900: "#1f3f51",
          950: "#102836",
        },
        sand: {
          50: "#faf6ef",
          100: "#f3e9d6",
          200: "#e6d2ad",
          300: "#d7b67d",
          400: "#cb9c56",
        },
        pine: {
          700: "#2f4a3c",
          800: "#26392f",
          900: "#1c2b24",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};

export default config;
