import { NavLink } from "react-router-dom";
import { BrainCircuitIcon, BriefcaseIcon, DisplayCodeIcon, GraduationCapIcon, UserIcon } from "./Icons";
import { FC, useState, PropsWithChildren } from "react";
import "./NavBar.css";

const HamburgerMenu: FC<PropsWithChildren<{ expanded: boolean; onClick: () => void }>> = ({
  expanded,
  onClick,
  children,
}) => {
  return (
    <div className="hamburger-menu-container">
      <div className={expanded ? "hamburger-menu expanded" : "hamburger-menu"} onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {children}
    </div>
  );
};

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const handleHamburgerClick = () => {
    setExpanded(!expanded);
  };
  return (
    <nav className={expanded ? "navbar expanded" : "navbar"} role="navigation">
      <HamburgerMenu expanded={expanded} onClick={handleHamburgerClick}>
        <div className={expanded ? "nav-bar-content expanded" : "nav-bar-content"} onClick={handleHamburgerClick}>
          <NavLink to="/about" aria-label="link to about page">
            <span className="nav-link-icon">
              <UserIcon />
            </span>
            <span className="lint-link-text">About</span>
          </NavLink>
          <NavLink to="/knowledge" aria-label="link to knowledge page">
            <span className="nav-link-icon">
              <BrainCircuitIcon />
            </span>
            <span className="lint-link-text">Knowledge</span>
          </NavLink>
          <NavLink to="/experience" aria-label="link to experience page">
            <span className="nav-link-icon">
              <BriefcaseIcon />
            </span>
            <span className="lint-link-text">Experience</span>
          </NavLink>
          <NavLink to="/education" aria-label="link to education page">
            <span className="nav-link-icon">
              <GraduationCapIcon />
            </span>
            <span className="lint-link-text">Education</span>
          </NavLink>
          <NavLink to="/projects" aria-label="link to projects page">
            <span className="nav-link-icon">
              <DisplayCodeIcon />
            </span>
            <span className="lint-link-text">Projects</span>
          </NavLink>
        </div>
      </HamburgerMenu>
    </nav>
  );
};
