import { AboutSection } from "./pages/AboutSection";
import { SkillsSection } from "./pages/SkillsSection";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { ExperienceSection } from "./pages/ExperienceSection";
import { useState } from "react";
import { TABS } from "./components/Tabs";
import { css } from "./styled-system/css";

export const PersonalSite = () => {
  const [tab, setTab] = useState(TABS.ABOUT);
  const handleTabChange = (newTab: string) => {
    setTab(newTab);
  };
  return (
    <div className={css({ overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" })}>
      <Header tab={tab} onTabChange={handleTabChange} />
      {tab == TABS.ABOUT && <AboutSection />}
      {tab == TABS.SKILL && <SkillsSection />}
      {tab == TABS.EXPERIENCE && <ExperienceSection />}
      <Footer />
    </div>
  );
};
