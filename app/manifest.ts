import type { MetadataRoute } from "next";
import { SITE } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE.name,
    short_name: "Lake Sonoma",
    description: SITE.description,
    start_url: "/",
    display: "standalone",
    background_color: "#faf6f0",
    theme_color: "#0b6177",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
