import { AboutSection } from "./pages/AboutSection";
import { SkillsSection } from "./pages/SkillsSection";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Footer } from "./components/Footer";
import { ExperienceSection } from "./pages/ExperienceSection";
import { useState } from "react";
import { TABS, Tabs } from "./components/Tabs";

export const PersonalSite = () => {
  const [tab, setTab] = useState(TABS.ABOUT);
  const handleTabChange = (newTab: string) => {
    setTab(newTab);
  };
  return (
    <>
      <Header />
      <Hero />
      <Tabs tab={tab} onTabChange={handleTabChange} />
      {tab == TABS.ABOUT && <AboutSection />}
      {tab == TABS.SKILL && <SkillsSection />}
      {tab == TABS.EXPERIENCE && <ExperienceSection />}
      <Footer />
    </>
  );
};
