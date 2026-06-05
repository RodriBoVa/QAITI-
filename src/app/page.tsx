import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import PlatformSection from "@/components/sections/PlatformSection";
import HumanIntelligenceSection from "@/components/sections/HumanIntelligenceSection";
import NationalReadinessSection from "@/components/sections/NationalReadinessSection";
import TeacherLabSection from "@/components/sections/TeacherLabSection";
import HISection from "@/components/sections/HISection";
import WhyQaitiSection from "@/components/sections/WhyQaitiSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PlatformSection />
      <HumanIntelligenceSection />
      <NationalReadinessSection />
      <TeacherLabSection />
      <HISection />
      <WhyQaitiSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
