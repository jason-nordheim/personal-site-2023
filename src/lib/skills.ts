import { ValueOf } from "ts-essentials";

export const TAGS = {
  Backend: "back-end",
  Databases: "databases",
  FrontEnd: "front-end",
  Software: "software",
  Api: "api",
  ProjectManagement: "project management",
  Collaboration: "collaboration",
  DevOps: "dev ops",
  Testing: "testing",
  Documentation: "documentation",
};

export const SKILL_CATEGORY = {
  Language: "language",
  Library: "library",
  Framework: "framework",
  Software: "software",
  Technology: "technology",
  Concept: "concept",
};

export type SkillTag = ValueOf<typeof TAGS>;

export type SkillCategory = ValueOf<typeof SKILL_CATEGORY>;

export type Skill = {
  name: string;
  category: SkillCategory;
  tags: SkillTag[];
};

export const SKILLS: Skill[] = [
  {
    name: "SharePoint",
    category: SKILL_CATEGORY.Software,
    tags: [TAGS.Collaboration, TAGS.Documentation],
  },
  {
    name: "Lucid Diagrams",
    category: SKILL_CATEGORY.Software,
    tags: [TAGS.Collaboration, TAGS.Documentation],
  },
  {
    name: "Big O",
    category: SKILL_CATEGORY.Concept,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Collaboration],
  },
  {
    name: "Swagger",
    category: SKILL_CATEGORY.Framework,
    tags: [TAGS.Api, TAGS.Backend, TAGS.Documentation],
  },
  {
    name: "Emotion (styled components)",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Entity Framework",
    category: SKILL_CATEGORY.Framework,
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "Lodash",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Rambda",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "REST",
    category: SKILL_CATEGORY.Concept,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Web Sockets",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
  },
  {
    name: "WASM",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "RTK Query",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Redux",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Intl (Internationalization)",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Unified Modeling Language (UML)",
    category: SKILL_CATEGORY.Concept,
    tags: [TAGS.Software, TAGS.Api, TAGS.Collaboration, TAGS.Backend, TAGS.Databases, TAGS.DevOps],
  },
  {
    name: "Webpack",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps, TAGS.Api],
  },
  {
    name: "Vite",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Cypress",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd, TAGS.Testing],
  },
  {
    name: "Test Cafe",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd, TAGS.Testing],
  },
  {
    name: "Storybook",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd, TAGS.Testing],
  },
  {
    name: "Google Cloud Platform",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps],
  },
  {
    name: "AWS",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps],
  },
  {
    name: "Python",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
  },
  {
    name: "Gitlab",
    category: SKILL_CATEGORY.Software,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "XML",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Rally",
    category: SKILL_CATEGORY.Software,
    tags: [TAGS.ProjectManagement, TAGS.Software],
  },
  {
    name: "Web Workers",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Slack",
    category: SKILL_CATEGORY.Software,
    tags: [TAGS.ProjectManagement, TAGS.Collaboration],
  },
  {
    name: "Node",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.Backend, TAGS.FrontEnd],
  },
  {
    name: "Go/Golang",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "Next.js",
    category: SKILL_CATEGORY.Framework,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "React",
    category: SKILL_CATEGORY.Framework,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "YAML",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Git",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Teleport",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Docker",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "SQL",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "PostgreSQL",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "Babel/JSX",
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Mongo DB",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "HTML",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Axios",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Express",
    category: SKILL_CATEGORY.Framework,
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "C#",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Java",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
  },
  {
    name: "JavaScript",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "TypeScript",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "MUI/Material UI",
    category: SKILL_CATEGORY.Framework,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Jest",
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Testing],
  },
  {
    name: "CSS",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "SASS/SCSS",
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "JIRA",
    category: SKILL_CATEGORY.Software,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.ProjectManagement],
  },
  {
    name: "Knex",
    category: SKILL_CATEGORY.Framework,
    tags: ["back-end", "orm"],
  },
];

export const makeSkillsString = (skills: Skill[]) => {
  return skills
    .sort((a, b) => {
      const x = a.name.toLowerCase();
      const y = b.name.toLowerCase();
      if (x < y) return 1;
      if (y > x) return -1;
      return 0;
    })
    .filter((s) => s.category !== SKILL_CATEGORY.Software)
    .map((s) => s.name)
    .join(" ,");
};
