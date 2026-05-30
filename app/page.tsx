import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BookingBar from "@/components/BookingBar";
import IntroSection from "@/components/IntroSection";
import FeaturedCabins from "@/components/FeaturedCabins";
import AmenitiesSection from "@/components/AmenitiesSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import BookingWidget from "@/components/BookingWidget";
import LocalGuide from "@/components/LocalGuide";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <BookingBar />
      <IntroSection />
      <FeaturedCabins />
      <AmenitiesSection />
      <ExperiencesSection />
      <GallerySection />
      <ReviewsSection />
      <BookingWidget />
      <LocalGuide />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
