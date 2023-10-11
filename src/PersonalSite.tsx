import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import { Footer } from "./components";
import { AboutPage, EducationPage, ExperiencePage, KnowledgePage, ProjectsPage } from "./pages";
import { NavBar } from "./components/NavBar";
import { useEffect } from "react";
import { SkillsPage } from "./pages/Skills.Page";
import { CertificationsPage } from "./pages/Certifications.Page";
import { ProjectPage } from "./pages/Project.Page";

const RedirectToAbout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/about");
  });

  return <></>;
};

export const PersonalSite = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={RedirectToAbout} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/skills" Component={SkillsPage} />
          <Route path="/certifications" Component={CertificationsPage} />
          <Route path="/experience" Component={ExperiencePage} />
          <Route path="/education" Component={EducationPage} />
          <Route path="/projects" Component={ProjectPage} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};
