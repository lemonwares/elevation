import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import PastorsMessage from "../components/PastorsMessage";
import OverviewSection from "../components/OverviewSection";
import FacilityFeatures from "../components/FacilityFeatures";
import FacilityDetails from "../components/FacilityDetails";
import SponsorsSection from "../components/SponsorsSection";
import PartnershipSection from "../components/PartnershipSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-black">
      {/* Scroll-activated header */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* Global Lead Pastors & Resident Pastor Section */}
      <PastorsMessage />

      {/* Overview Section */}
      <OverviewSection />

      {/* Multipurpose Facility Features Diagram Section */}
      <FacilityFeatures />

      {/* Multipurpose Facility Floating Details Section */}
      <FacilityDetails />

      {/* Partners & Sponsors Section */}
      <SponsorsSection />

      {/* Ways to Partner Section */}
      <PartnershipSection />

      {/* Contact Us Section */}
      <ContactSection />
    </div>
  );
}
