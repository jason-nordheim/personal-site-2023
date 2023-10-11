export type Project = {
  title: string;
  liveDemoUrl?: string;
  repoUrl?: string;
  caption: string;
  technologies?: string[];
  conceptsAndPatterns?: string[];
  image: string;
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
    image:
      "https://firebasestorage.googleapis.com/v0/b/about-jason.appspot.com/o/SS-pathfinder.png?alt=media&token=728fa5ba-0f07-4fa1-8967-09a090806c46&_gl=1*1hbrsfn*_ga*MTg3NzYyNDg0Ny4xNjk2OTU3Mzk3*_ga_CW55HF8NVT*MTY5NzA1MTIxMS4yLjEuMTY5NzA1MTgyMi4yMC4wLjA.",
  },
  {
    title: "Muziq",
    repoUrl: "https://github.com/jason-nordheim/Muziq",
    liveDemoUrl: "https://muziq-ashy.vercel.app/",
    caption:
      "Muziq is a cloud music player using Supabase (database, blob storage, auth) and Stripe (for payments) and a UI designed to mirror the UI of Spotify",
    technologies: ["Supabase", "TypeScript", "NextJS", "Zsutand", "Stripe", "Radix-UI", "TailwindCSS", "Vercel"],
    conceptsAndPatterns: ["Web Hooks", "Server Components", "API", "Authentication", "Sessions", "Responsive Design"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/about-jason.appspot.com/o/SS-Muziq.png?alt=media&token=88ccee4f-aa66-4305-9eab-944a26b4f5a4&_gl=1*7tcued*_ga*MTg3NzYyNDg0Ny4xNjk2OTU3Mzk3*_ga_CW55HF8NVT*MTY5NzA1MTIxMS4yLjEuMTY5NzA1MTY5Ni41OS4wLjA.",
  },
  {
    title: "Algorithm Practice",
    repoUrl: "https://github.com/jason-nordheim/algo-practice",
    caption:
      "Repository containing various algorithm implementations in TypeScript and tests verifying functionality using the jest library",
    technologies: ["Jest", "TypeScript"],
    conceptsAndPatterns: ["Algorithms", "TDD", "Big O"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/about-jason.appspot.com/o/ClipArt-Programming.png?alt=media&token=0cf4ab3f-39ac-4f49-9f79-49c95c106f2a&_gl=1*87cy4t*_ga*MTg3NzYyNDg0Ny4xNjk2OTU3Mzk3*_ga_CW55HF8NVT*MTY5NzA1MTIxMS4yLjEuMTY5NzA1MTM5My4zMC4wLjA.",
  },
  {
    title: "React 2048",
    liveDemoUrl: "https://play-2048-with-me.web.app/",
    repoUrl: "https://github.com/jason-nordheim/react-2048",
    caption: "The classic game of combining tiles to get to 2048",
    technologies: ["Firebase", "React: Hooks, JSX/babel, CSS-in-JS", "Yarn", "HTML/CSS/JavaScript"],
    conceptsAndPatterns: ["Events", "State management"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/about-jason.appspot.com/o/SS-2048.png?alt=media&token=cc8cadba-03aa-4251-a4a1-1086331f3ea0&_gl=1*l63qie*_ga*MTg3NzYyNDg0Ny4xNjk2OTU3Mzk3*_ga_CW55HF8NVT*MTY5NzA1MTIxMS4yLjEuMTY5NzA1MTYxOS42MC4wLjA.",
  },
  {
    title: "Pure JavaScript Snake",
    liveDemoUrl: "https://vanilla-js-snake.web.app/",
    repoUrl: "https://github.com/jason-nordheim/pure-js-snake",
    caption: "Checkout the classic arcade game snake, built with CSS Grid and vanilla JavaScript",
    technologies: ["HTML/CSS/JavaScript"],
    conceptsAndPatterns: ["Functional Programming"],
    image:
      "https://firebasestorage.googleapis.com/v0/b/about-jason.appspot.com/o/SS-Snake.png?alt=media&token=09ef7a19-97e7-4c91-8255-043f9b736c0a&_gl=1*1n4t5mq*_ga*MTg3NzYyNDg0Ny4xNjk2OTU3Mzk3*_ga_CW55HF8NVT*MTY5NzA1MTIxMS4yLjEuMTY5NzA1MTg2NC42MC4wLjA.",
  },
];
