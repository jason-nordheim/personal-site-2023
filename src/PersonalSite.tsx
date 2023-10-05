import { useState } from "react";
import { css } from "./styled-system/css";
import { Footer, Navigation, TABS } from "./components";
import { AboutPage, EducationPage, ExperiencePage, KnowledgePage, ProjectsPage } from "./pages";

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
        bg: "#dbd9ff",
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
