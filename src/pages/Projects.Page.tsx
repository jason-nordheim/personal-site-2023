import { FC } from "react";
import { Caption, CardContainer, PageContainer, PageTitle, SubTitle } from "../components";
import { CardGrid } from "../components/CardGrid";
import { AiFillGithub } from "react-icons/ai";
import { MdOutlinePreview } from "react-icons/md";
import { css } from "../styled-system/css";

type Project = {
  title: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  caption: string;
};

const PROJECTS: Project[] = [
  {
    title: "React 2048",
    liveDemoUrl: "https://play-2048-with-me.web.app/",
    repoUrl: "https://github.com/jason-nordheim/react-2048",
    caption: "The classic game of combining tiles to get to 2048",
  },
  {
    title: "Pure JavaScript Snake",
    liveDemoUrl: "https://vanilla-js-snake.web.app/",
    repoUrl: "https://github.com/jason-nordheim/pure-js-snake",
    caption: "Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript",
  },
  {
    title: "Chatter One",
    liveDemoUrl: "https://chatter-one.netlify.app/",
    repoUrl: "https://github.com/jason-nordheim/chatter-one",
    caption: "A simple chat application with a UI similar to Microsoft Teams, built using ChatEngine.io",
  },
];

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
};

const ProjectCard: FC<ProjectCardProps> = ({ caption, projectName, liveDemoUrl, repoUrl }) => {
  return (
    <CardContainer>
      <ProjectSubtitle projectName={projectName} liveDemoUrl={liveDemoUrl} repoUrl={repoUrl} />
      <Caption>{caption}</Caption>
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
            />
          );
        })}
      </CardGrid>
    </PageContainer>
  );
};
