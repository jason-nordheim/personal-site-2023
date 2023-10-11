import { FC, useState } from "react";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlinePreview } from "react-icons/md";

import { Project, sortAscending } from "../lib";
import "./ProjectCard.css";

export const ProjectCard: FC<Project> = ({
  caption,
  title,
  conceptsAndPatterns,
  liveDemoUrl,
  repoUrl,
  technologies,
  image,
}) => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="project-card">
      <input id={repoUrl} type="checkbox" checked={checked} onClick={() => setChecked(!checked)} />
      <label className="tgl-btn" htmlFor={repoUrl}>
        <span />
      </label>
      <div className="tgl-view">
        <div className="card-image">
          <img src={image} alt={title} />
        </div>
        <h2 className="project-card-title">{title}</h2>
        <div className="project-details">
          <p>{caption}</p>
          <div className="project-links">
            <a href={liveDemoUrl} aria-label={`live demo of ${title}`}>
              Live Demo: <MdOutlinePreview />
            </a>
            <a href={liveDemoUrl} aria-label={`live demo of ${title}`}>
              Code: <AiFillGithub />
            </a>
          </div>
          <div className="technical-details">
            <ul className="project-technologies">
              <h3>Technologies</h3>
              {technologies
                ?.sort((a, b) => sortAscending(a, b))
                .map((t) => (
                  <li key={t}>{t}</li>
                ))}
            </ul>
            <ul className="project-technologies">
              <h3>Concepts & Patterns</h3>
              {conceptsAndPatterns
                ?.sort((a, b) => sortAscending(a, b))
                .map((t) => (
                  <li key={t}>{t}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
