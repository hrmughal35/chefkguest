import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import BrandStorySection from "@/components/sections/BrandStorySection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StatsSection from "@/components/sections/StatsSection";
import CuisinesSection from "@/components/sections/CuisinesSection";
import ChefsRecommendations from "@/components/sections/ChefsRecommendations";
import HiTeaSection from "@/components/sections/HiTeaSection";
import GallerySection from "@/components/sections/GallerySection";
import PrivateEventsSection from "@/components/sections/PrivateEventsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ReservationSection from "@/components/sections/ReservationSection";
import LocationSection from "@/components/sections/LocationSection";
import FloatingButtons from "@/components/ui/FloatingButtons";
import PageLoader from "@/components/ui/PageLoader";

export default function Home() {
  return (
    <main className="relative bg-luxury-black">
      <PageLoader />
      <Navbar />
      <HeroSection />
      <BrandStorySection />
      <ExperienceSection />
      <StatsSection />
      <CuisinesSection />
      <ChefsRecommendations />
      <HiTeaSection />
      <GallerySection />
      <PrivateEventsSection />
      <TestimonialsSection />
      <ReservationSection />
      <LocationSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}
