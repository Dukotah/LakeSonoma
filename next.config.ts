import type { NextConfig } from "next";
import { redirects } from "./lib/redirects";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    // Allow the higher-quality re-encode used by full-bleed <Hero> photos
    // (detail-heavy aerials turn to mush at the default quality of 75).
    qualities: [75, 90],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" },
    ],
  },
  async redirects() {
    return redirects;
  },
};

export default nextConfig;
