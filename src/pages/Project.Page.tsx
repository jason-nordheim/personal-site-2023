import { FC } from "react";
import { PageContainer, PageTitle } from "../components";
import { ProjectCard } from "../components/ProjectCard";
import { PROJECTS } from "../lib";
import { css } from "../styled-system/css/css";

export const ProjectPage: FC = () => {
  return (
    <PageContainer>
      <PageTitle>Projects</PageTitle>
      <div
        className={css({
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "1",
        })}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.repoUrl} {...p} />
        ))}
      </div>
    </PageContainer>
  );
};
