import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BoatPicker } from "@/components/BoatPicker";
import { CookieConsent } from "@/components/CookieConsent";
import { WaveDivider } from "@/components/WaveDivider";
import { SITE } from "@/data/site";
import { localBusinessJsonLd, JsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Elegant serif display face for headlines (nature-luxe editorial feel).
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Boat Rentals, Patios & Storage`,
    template: `%s · ${SITE.name}`,
  },
  description: SITE.description,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0b6177",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        {/* Speed up the booking hand-off + image CDN */}
        <link rel="preconnect" href="https://book.singenuity.com" />
        <link rel="preconnect" href="https://res.cloudinary.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
        {/* Without JS, scroll-reveal elements must not stay hidden. */}
        <noscript>
          <style>{`.reveal{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus-visible:not-sr-only focus-visible:absolute focus-visible:left-4 focus-visible:top-4 focus-visible:z-50 focus-visible:rounded-lg focus-visible:bg-lake-700 focus-visible:px-4 focus-visible:py-2 focus-visible:font-semibold focus-visible:text-white"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        {/* Signature wave transition into the footer (echoes the logo's water line) */}
        <WaveDivider fill="#0f150f" />
        <Footer />
        <BoatPicker />
        <CookieConsent />
        <JsonLd data={localBusinessJsonLd()} />
        <Analytics />
      </body>
    </html>
  );
}
