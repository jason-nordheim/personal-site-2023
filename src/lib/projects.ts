export type Project = {
  title: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  caption: string;
  technologies?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Pathfinder",
    liveDemoUrl: "https://find-best-path.web.app/",
    repoUrl: "https://github.com/jason-nordheim/pathfinder",
    caption:
      "A React/TypeScript application implementing the A* path finding algorithm (derived from Dijkstra's algorithm) for finding the shortest path between any 2 nodes/vertices in a graph",
    technologies: [
      "HTML/CSS/JavaScript/Events",
      "React: Hooks, JSX/babel, CSS-in-JS",
      "Dynamic Programming",
      "Data Structures: Arrays, Maps, Queues, Sets",
      "Vite/Vitest",
      "Firebase",
      "TypeScript",
    ],
  },
  {
    title: "Algorithm Practice",
    repoUrl: "https://github.com/jason-nordheim/algo-practice",
    caption: "Repository containing various algorithm implementations in TypeScript and tests using jest",
    technologies: ["Jest", "TypeScript"],
  },
  {
    title: "React 2048",
    liveDemoUrl: "https://play-2048-with-me.web.app/",
    repoUrl: "https://github.com/jason-nordheim/react-2048",
    caption: "The classic game of combining tiles to get to 2048",
    technologies: ["Firebase", "React: Hooks, JSX/babel, CSS-in-JS", "Yarn", "HTML/CSS/JavaScript/Events"],
  },
  {
    title: "Pure JavaScript Snake",
    liveDemoUrl: "https://vanilla-js-snake.web.app/",
    repoUrl: "https://github.com/jason-nordheim/pure-js-snake",
    caption: "Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript",
    technologies: ["HTML/CSS/JavaScript/Events"],
  },
];
