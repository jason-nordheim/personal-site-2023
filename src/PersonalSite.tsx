import { AboutSection } from "./pages/AboutSection";
import { SkillsSection } from "./pages/SkillsSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ExperienceSection } from "./pages/ExperienceSection";

export const PersonalSite = () => {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <Footer />
    </>
  );
};
