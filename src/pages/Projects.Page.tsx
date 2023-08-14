import { FC } from "react";
import { Caption, CardContainer, PageContainer, PageTitle, SubTitle } from "../components";
import { CardGrid } from "../components/CardGrid";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlinePreview } from "react-icons/md";
import { css } from "../styled-system/css";
import { sortAscending } from "../lib/utils";
import { PROJECTS } from "../lib/projects";

type ProjectSubtitleProps = {
  projectName: string;
  repoUrl?: string;
  liveDemoUrl?: string;
};

const ProjectSubtitle: FC<ProjectSubtitleProps> = ({ projectName, repoUrl, liveDemoUrl }) => {
  const linkStyles = css({
    _hover: {
      color: "blue.500",
      fontWeight: "semibold",
      transition: "ease-in-out",
      transitionDuration: "0.3s",
    },
  });
  return (
    <>
      <SubTitle className={css({ display: "flex", justifyContent: "space-between" })}>
        <span>{projectName}</span>
        <span className={css({ display: "flex", pt: "1", alignContent: "center", gap: "1" })}>
          {repoUrl?.length ? (
            <a className={linkStyles} href={repoUrl} aria-label={`${projectName} repo`}>
              <AiFillGithub />
            </a>
          ) : null}
          {liveDemoUrl?.length ? (
            <a className={linkStyles} href={liveDemoUrl} aria-label={`${projectName} live demo`}>
              <MdOutlinePreview />
            </a>
          ) : null}
        </span>
      </SubTitle>
    </>
  );
};

type ProjectCardProps = ProjectSubtitleProps & {
  caption: string;
  technologies?: string[];
};

const ProjectCard: FC<ProjectCardProps> = ({ caption, projectName, liveDemoUrl, repoUrl, technologies }) => {
  return (
    <CardContainer>
      <ProjectSubtitle projectName={projectName} liveDemoUrl={liveDemoUrl} repoUrl={repoUrl} />
      <Caption>{caption}</Caption>
      {technologies?.length ? (
        <>
          <Caption className={css({ fontFamily: "serif" })}>Technologies</Caption>
          <ul className={css({ listStyle: "outside", ml: 4, fontSize: "xs", px: "10px" })}>
            {technologies
              .sort((a, b) => sortAscending(a, b))
              .map((t) => (
                <li key={t}>{t}</li>
              ))}
          </ul>
        </>
      ) : null}
    </CardContainer>
  );
};

export const ProjectsPage = () => {
  return (
    <PageContainer>
      <PageTitle>Projects</PageTitle>
      <CardGrid>
        {PROJECTS.map((p) => {
          return (
            <ProjectCard
              key={p.title}
              caption={p.caption}
              projectName={p.title}
              liveDemoUrl={p.liveDemoUrl}
              repoUrl={p.repoUrl}
              technologies={p.technologies}
            />
          );
        })}
      </CardGrid>
    </PageContainer>
  );
};
