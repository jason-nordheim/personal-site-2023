import { FC, useState } from "react";
import { Project, sortAscending } from "../lib";
import "./ProjectCard.css";

const ASSETS_DIR = "../assets";

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
          <div>
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
