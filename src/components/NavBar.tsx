import { NavLink } from "react-router-dom";
import { css } from "../styled-system/css";
import { BrainCircuitIcon, BriefcaseIcon, DisplayCodeIcon, GraduationCapIcon, UserIcon } from "./Icons";
import { FC, useState, PropsWithChildren } from "react";
import { Props } from "../styled-system/types/pattern";

const collapsedSpanA = css({ transformOrigin: "0% 0%", transition: "0.3s ease" });
const collapsedSpanC = css({ transformOrigin: "0% 100%", transition: "0.3s ease" });

const expandedSpanA = css({
  opacity: 1,
  transform: "rotate(45deg) translate(-2px, -2px)",
  transformOrigin: "0% 0%",
  transition: "0.3s ease",
  bg: "#232323",
});
const expandedSpanC = css({
  opacity: 1,
  transform: "rotate(-45deg) translate(-2px, -2px)",
  bg: "#232323",
  transformOrigin: "0% 100%",
});

const HamburgerMenu: FC<PropsWithChildren<{ expanded: boolean; onClick: () => void }>> = ({
  expanded,
  onClick,
  children,
}) => {
  return (
    <div
      className={css({
        display: "block",
        top: "50px",
        left: "50px",
        zIndex: 1,
        userSelect: "none",
        cursor: "pointer",
        aspectRatio: "square",
        height: "33px",
        WebkitTouchCallout: "none",
        "& span": {
          top: 5,
          position: "relative",
          display: "block",
          width: "33px",
          height: "4px",
          marginBottom: "5px",
          bg: "#cdcdcd",
          borderRadius: "3px",
          zIndex: 1,
          transformOrigin: "8px 0px",
          transition: `transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0)
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease`,
        },
      })}
      onClick={onClick}
    >
      <span className={expanded ? expandedSpanA : collapsedSpanA}></span>
      <span style={{ display: expanded ? "none" : "inherit" }}></span>
      <span className={expanded ? expandedSpanC : collapsedSpanC}></span>
      {children}
    </div>
  );
};

const navLinkCss = css({
  textDecoration: "none",
  color: "#232323",
  transition: "all 0.3s ease",
  display: "flex",
  alignItems: "center",
});

const navIconCss = css({
  "& svg": {
    height: "1em",
    aspectRatio: "square",
    mx: "1",
  },
});

const navMenuContainer = css({
  position: "absolute",
  width: "300px",
  margin: "-100px 0 0 -50px",
  padding: "50px",
  paddingTop: "125px",
  background: "#ededed",
  listStyleType: "none",
  /* to stop flickering of text in safari */
  fontSmoothing: "antialiased",
  transformOrigin: "0% 0%",
  transform: "translate(-100%, 0)",
  // transform-origin: 0% 0%;
  // transform: translate(-100%, 0);
});

export const NavBar = () => {
  const [expanded, setExpanded] = useState(false);
  const handleHamburgerClick = () => {
    setExpanded(!expanded);
  };
  return (
    <nav className={css({ position: "sticky" })} role="navigation">
      <HamburgerMenu expanded={expanded} onClick={handleHamburgerClick}>
        <div className={navMenuContainer}>
          <NavLink className={navLinkCss} to="/about" aria-label="link to about page">
            <span className={navIconCss}>
              <UserIcon />
            </span>
            <span>About</span>
          </NavLink>
          <NavLink className={navLinkCss} to="/knowledge" aria-label="link to knowledge page">
            <span className={navIconCss}>
              <BrainCircuitIcon />
            </span>
            <span className="lint-text">Knowledge</span>
          </NavLink>
          <NavLink className={navLinkCss} to="/experience" aria-label="link to experience page">
            <span className={navIconCss}>
              <BriefcaseIcon />
            </span>
            <span>Experience</span>
          </NavLink>
          <NavLink className={navLinkCss} to="/education" aria-label="link to education page">
            <span className={navIconCss}>
              <GraduationCapIcon />
            </span>
            <span>Education</span>
          </NavLink>
          <NavLink className={navLinkCss} to="/projects" aria-label="link to projects page">
            <span className={navIconCss}>
              <DisplayCodeIcon />
            </span>
            <span>Projects</span>
          </NavLink>
        </div>
      </HamburgerMenu>
    </nav>
  );
};
