import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { css } from "./styled-system/css";
import { Footer } from "./components";
import { AboutPage, EducationPage, ExperiencePage, KnowledgePage, ProjectsPage } from "./pages";
import { NavBar } from "./components/NavBar";
import { useEffect } from "react";

const RedirectToAbout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/about");
  });

  return <></>;
};

export const PersonalSite = () => {
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
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={RedirectToAbout} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/knowledge" Component={KnowledgePage} />
          <Route path="/experience" Component={ExperiencePage} />
          <Route path="/education" Component={EducationPage} />
          <Route path="/projects" Component={ProjectsPage} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
