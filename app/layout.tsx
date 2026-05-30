import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lake Sonoma Resort & Retreat | Wine Country Lakeside Luxury",
  description:
    "Experience unparalleled luxury at Lake Sonoma Resort. Private lakeside cabins, world-class amenities, and curated wine country experiences in the heart of Sonoma County.",
  keywords: [
    "Lake Sonoma resort",
    "Sonoma County vacation rental",
    "wine country cabin",
    "lakeside retreat",
    "luxury vacation rental",
    "Healdsburg accommodation",
  ],
  openGraph: {
    title: "Lake Sonoma Resort & Retreat",
    description: "Luxury lakeside escapes in Sonoma wine country",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
