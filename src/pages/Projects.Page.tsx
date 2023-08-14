import { Caption, CardContainer, PageContainer, PageTitle, SubTitle } from "../components";
import { CardGrid } from "../components/CardGrid";

const PROJECTS = [
  {
    title: "2048",
    link: "https://play-2048-with-me.web.app/",
    links: [
      { description: "demo", url: "https://play-2048-with-me.web.app/" },
      {
        description: "rpo",
        url: "https://github.com/jason-nordheim/react-2048",
      },
    ],
    desc: "The classic game of combining tiles to get to 2048",
    alt: "React 2048",
  },
  {
    title: "Snake",
    links: [
      { description: "demo", url: "https://vanilla-js-snake.web.app/" },
      {
        description: "repo",
        url: "https://github.com/jason-nordheim/pure-js-snake",
      },
    ],
    link: "https://vanilla-js-snake.web.app/",
    desc: "Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript",
    alt: "Pure JavaScript Snake",
  },
  {
    title: "Chatter One",
    links: [
      { description: "demo", url: "https://chatter-one.netlify.app/" },
      {
        description: "repo",
        url: "https://github.com/jason-nordheim/chatter-one",
      },
    ],
    link: "https://github.com/jason-nordheim/chatter-one",
    desc: "A simple chat application with a UI similar to Microsoft Teams, built using ChatEngine.io",
    alt: "Chatter One Login",
  },
];

export const ProjectsPage = () => {
  return (
    <PageContainer>
      <PageTitle>Projects</PageTitle>
      <CardGrid>
        <CardContainer>
          <SubTitle>2048</SubTitle>
          <Caption>Simple Implementation of the classic 2048 grid game using React</Caption>
        </CardContainer>
      </CardGrid>
    </PageContainer>
  );
};
