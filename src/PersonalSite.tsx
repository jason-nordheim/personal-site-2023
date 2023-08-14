import { AboutPage } from "./pages/About.Page";
import { KnowledgePage } from "./pages/Knowledge.Page";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { ExperiencePage } from "./pages/Experience.Page";
import { useState } from "react";
import { TABS } from "./components/Tabs";
import { css } from "./styled-system/css";
import { EducationPage } from "./pages/Education.Page";
import { ProjectsPage } from "./pages/Projects.Page";

export const PersonalSite = () => {
  const [tab, setTab] = useState(TABS.ABOUT);
  const handleTabChange = (newTab: string) => {
    setTab(newTab);
  };
  return (
    <div
      className={css({
        overflowY: "scroll",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
      })}
    >
      <Navigation selectedTab={tab} onTabChange={handleTabChange} />
      {tab == TABS.ABOUT && <AboutPage />}
      {tab == TABS.KNOWLEDGE && <KnowledgePage />}
      {tab == TABS.EXPERIENCE && <ExperiencePage />}
      {tab == TABS.EDUCATION && <EducationPage />}
      {tab === TABS.PROJECTS && <ProjectsPage />}
      <Footer />
    </div>
  );
};
