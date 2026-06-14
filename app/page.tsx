import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import OurWater from "@/components/OurWater";
import BestSellers from "@/components/BestSellers";
import VisionMission from "@/components/VisionMission";
import Ticker from "@/components/Ticker";
import Testimonials from "@/components/Testimonials";
import Standards from "@/components/Standards";
import SocialFollow from "@/components/SocialFollow";
import Gallery from "@/components/Gallery";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1 flex flex-col w-full">
        {/* Hero Banner */}
        <Hero />

        {/* Features / Why Choose Us */}
        <WhyChooseUs />

        {/* Our Quality details */}
        <OurWater />

        {/* Product Shop Slider/Grid */}
        <BestSellers />

        {/* Vision & Mission Tabbed content */}
        <VisionMission />

        {/* Infinite Marquee Scrolling Banner */}
        <Ticker />

        {/* Testimonials sliding reviews */}
        <Testimonials />

        {/* Quality Standards Blue Banner */}
        <Standards />

        {/* Social Follow Band */}
        <SocialFollow />

        {/* Happy Customers Grid Gallery */}
        <Gallery />
      </main>

      {/* Footer Sitemap */}
      <Footer />
    </div>
  );
}
