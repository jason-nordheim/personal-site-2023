import { FC } from "react";
import { Caption, CardContainer, PageContainer, PageTitle, SubTitle, CardGrid } from "../components";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlinePreview } from "react-icons/md";
import { css } from "../styled-system/css";
import { sortAscending, PROJECTS } from "../lib/";

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
  conceptsAndPatterns?: string[];
};

const ProjectCard: FC<ProjectCardProps> = ({
  caption,
  projectName,
  liveDemoUrl,
  repoUrl,
  technologies,
  conceptsAndPatterns,
}) => {
  const columns = technologies?.length && conceptsAndPatterns?.length ? "2" : "1";
  return (
    <CardContainer>
      <ProjectSubtitle projectName={projectName} liveDemoUrl={liveDemoUrl} repoUrl={repoUrl} />
      <Caption>{caption}</Caption>
      <div className={css({ display: "grid", gridTemplateColumns: columns })}>
        {technologies?.length ? (
          <div>
            <Caption className={css({ fontFamily: "serif" })}>Technologies</Caption>
            <ul className={css({ listStyle: "outside", ml: 4, fontSize: "xs", px: "10px" })}>
              {technologies
                .sort((a, b) => sortAscending(a, b))
                .map((t) => (
                  <li key={t}>{t}</li>
                ))}
            </ul>
          </div>
        ) : null}
        {conceptsAndPatterns?.length ? (
          <div>
            <Caption className={css({ fontFamily: "serif" })}>Concepts and Patterns</Caption>
            <ul className={css({ listStyle: "outside", ml: 4, fontSize: "xs", px: "10px" })}>
              {conceptsAndPatterns
                .sort((a, b) => sortAscending(a, b))
                .map((t) => (
                  <li key={t}>{t}</li>
                ))}
            </ul>
          </div>
        ) : null}
      </div>
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
              conceptsAndPatterns={p.conceptsAndPatterns}
            />
          );
        })}
      </CardGrid>
    </PageContainer>
  );
};
