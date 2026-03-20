import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import CoverLetterSection from "@/components/CoverLetterSection";
import DISCSection from "@/components/DISCSection";
import ResumesSection from "@/components/ResumesSection";
import ContactSection from "@/components/ContactSection";
import SupportSection from "@/components/SupportSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import EasterEgg from "@/components/EasterEgg";
import FontSizeControl from "@/components/FontSizeControl";

const Index = () => {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Navbar />
        <EasterEgg />
        <main className="pt-16">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <CoverLetterSection />
          <DISCSection />
          <ResumesSection />
          <ContactSection />
          <SupportSection />
        </main>
        <Footer />
        <ScrollToTop />
        <FontSizeControl />
      </LanguageProvider>
    </ThemeProvider>
  );
};

export default Index;
