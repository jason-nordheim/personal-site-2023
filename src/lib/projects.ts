export type Project = {
  title: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  caption: string;
  technologies?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "React 2048",
    liveDemoUrl: "https://play-2048-with-me.web.app/",
    repoUrl: "https://github.com/jason-nordheim/react-2048",
    caption: "The classic game of combining tiles to get to 2048",
    technologies: [
      "Firebase",
      "React (hooks, JSX/babel)",
      "Yarn",
      "JsDocs",
      "Events (eventListeners)",
      "JavaScript",
      "HTML",
    ],
  },
  {
    title: "Pure JavaScript Snake",
    liveDemoUrl: "https://vanilla-js-snake.web.app/",
    repoUrl: "https://github.com/jason-nordheim/pure-js-snake",
    caption: "Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript",
    technologies: ["JavaScript", "CSS", "Events (eventListeners)", "HTML"],
  },
  {
    title: "Chatter One",
    liveDemoUrl: "https://chatter-one.netlify.app/",
    repoUrl: "https://github.com/jason-nordheim/chatter-one",
    caption: "A simple chat application with a UI similar to Microsoft Teams, built using ChatEngine.io",
    technologies: [
      "React (hooks, JSX/babel)",
      "Ant Icons",
      "Axios",
      "ChatEngine.io",
      "localStorage",
      "HTML",
      "Netlify",
      "Npm",
    ],
  },
];
