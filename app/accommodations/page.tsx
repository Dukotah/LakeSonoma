import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AccommodationsClient from "./AccommodationsClient";

export const metadata: Metadata = {
  title: "Accommodations | Lake Sonoma Resort",
  description: "Browse all 12 private cabins and retreats at Lake Sonoma Resort. From lakeside hideaways to forest estates.",
};

export default function AccommodationsPage() {
  return (
    <>
      <Navigation />
      <AccommodationsClient />
      <Footer />
    </>
  );
}
