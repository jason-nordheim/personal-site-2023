import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/knowledge">Knowledge</NavLink>
      <NavLink to="/experience">Experience</NavLink>
      <NavLink to="/education">Education</NavLink>
      <NavLink to="/projects">Projects</NavLink>
    </nav>
  );
};
 