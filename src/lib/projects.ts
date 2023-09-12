export type Project = {
  title: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  caption: string;
  technologies?: string[];
  conceptsAndPatterns?: string[];
};

export const PROJECTS: Project[] = [
  {
    title: "Pathfinder",
    liveDemoUrl: "https://find-best-path.web.app/",
    repoUrl: "https://github.com/jason-nordheim/pathfinder",
    caption:
      "A React/TypeScript application implementing the A* path finding algorithm (derived from Dijkstra's algorithm) for finding the shortest path between any two nodes/vertices in a graph",
    technologies: [
      "HTML/CSS/JavaScript/Events",
      "React: Hooks, JSX/babel, CSS-in-JS",
      "Vite/Vitest",
      "Firebase",
      "TypeScript",
      "Redux/RTK/Middleware",
    ],
    conceptsAndPatterns: [
      "Algorithms",
      "Data Structures",
      "Dynamic Programming",
      "Data Structures: Arrays, Maps, Queues, Sets",
      "Object Oriented Programming",
    ],
  },
  {
    title: "Muziq",
    repoUrl: "https://github.com/jason-nordheim/Muziq",
    liveDemoUrl: "https://muziq-ashy.vercel.app/",
    caption:
      "Muziq is a cloud music player using Supabase (database, blob storage, auth) and Stripe (for payments) and a UI designed to mirror the UI of Spotify",
    technologies: ["Supabase", "TypeScript", "NextJS", "Zsutand", "Stripe", "Radix-UI", "TailwindCSS", "Vercel"],
    conceptsAndPatterns: ["Web Hooks", "Server Components", "API", "Authentication", "Sessions", "Responsive Design"],
  },
  {
    title: "Algorithm Practice",
    repoUrl: "https://github.com/jason-nordheim/algo-practice",
    caption:
      "Repository containing various algorithm implementations in TypeScript and tests verifying functionality using the jest library",
    technologies: ["Jest", "TypeScript"],
    conceptsAndPatterns: ["Algorithms", "TDD", "Big O"],
  },
  {
    title: "React 2048",
    liveDemoUrl: "https://play-2048-with-me.web.app/",
    repoUrl: "https://github.com/jason-nordheim/react-2048",
    caption: "The classic game of combining tiles to get to 2048",
    technologies: ["Firebase", "React: Hooks, JSX/babel, CSS-in-JS", "Yarn", "HTML/CSS/JavaScript"],
    conceptsAndPatterns: ["Events", "State management"],
  },
  {
    title: "Pure JavaScript Snake",
    liveDemoUrl: "https://vanilla-js-snake.web.app/",
    repoUrl: "https://github.com/jason-nordheim/pure-js-snake",
    caption: "Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript",
    technologies: ["HTML/CSS/JavaScript"],
    conceptsAndPatterns: ["Functional Programming"],
  },
];
