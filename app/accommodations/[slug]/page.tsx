import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BookingWidget from "@/components/BookingWidget";
import CabinClient from "./CabinClient";

const cabinData: Record<string, { name: string; type: string }> = {
  "osprey-point": { name: "Osprey Point", type: "Lakeside Cabin" },
  "cedar-ridge": { name: "Cedar Ridge", type: "Forest Retreat" },
  "vineyard-villa": { name: "Vineyard Villa", type: "Estate House" },
  "herons-landing": { name: "Heron's Landing", type: "Lakeside Cabin" },
  "redwood-haven": { name: "Redwood Haven", type: "Forest Retreat" },
  "sunset-ridge": { name: "Sunset Ridge", type: "Forest Retreat" },
};

export function generateStaticParams() {
  return Object.keys(cabinData).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const cabin = cabinData[slug];
  return {
    title: cabin ? `${cabin.name} | Lake Sonoma Resort` : "Cabin | Lake Sonoma Resort",
    description: `Book ${cabin?.name || "this cabin"} at Lake Sonoma Resort — ${cabin?.type || "luxury"} in Sonoma wine country.`,
  };
}

export default async function CabinPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return (
    <>
      <Navigation />
      <CabinClient slug={slug} />
      <BookingWidget />
      <Footer />
    </>
  );
}
