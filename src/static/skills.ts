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
};

const SKILL_TYPES = {
  Language: "language",
  Library: "library",
  Framework: "framework",
  Software: "software",
  Technology: "technology",
};

export type SkillTag = ValueOf<typeof TAGS>;

export type SkillCategory = ValueOf<typeof SKILL_TYPES>;

export type Skill = {
  name: string;
  category: SkillCategory;
  tags: SkillTag[];
};

export const skills: Skill[] = [
  {
    name: "Storybook",
    category: SKILL_TYPES.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Google Cloud Platform",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.DevOps],
  },
  {
    name: "AWS",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.DevOps],
  },
  {
    name: "Python",
    category: SKILL_TYPES.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
  },
  {
    name: "Gitlab",
    category: SKILL_TYPES.Software,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "XML",
    category: SKILL_TYPES.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Rally",
    category: SKILL_TYPES.Software,
    tags: [TAGS.ProjectManagement, TAGS.Software],
  },
  {
    name: "Web Workers",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Slack",
    category: SKILL_TYPES.Software,
    tags: [TAGS.ProjectManagement, TAGS.Collaboration],
  },
  {
    name: "node",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.Backend, TAGS.FrontEnd],
  },
  {
    name: "Go",
    category: SKILL_TYPES.Language,
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "Next.js",
    category: SKILL_TYPES.Framework,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "React",
    category: SKILL_TYPES.Framework,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "YAML",
    category: SKILL_TYPES.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Git",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Teleport",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Docker",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "SQL",
    category: SKILL_TYPES.Language,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "PostgreSQL",
    category: SKILL_TYPES.Language,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "Babel/JSX",
    category: SKILL_TYPES.Technology,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "PostgreSQL",
    category: SKILL_TYPES.Language,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "Mongo DB",
    category: SKILL_TYPES.Language,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "HTML",
    category: SKILL_TYPES.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Axios",
    category: SKILL_TYPES.Library,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Express",
    category: "Framework",
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "C#",
    category: SKILL_TYPES.Language,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "JavaScript",
    category: SKILL_TYPES.Language,
    tags: ["front-end"],
  },
  {
    name: "TypeScript",
    category: SKILL_TYPES.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Next.js",
    category: SKILL_TYPES.Framework,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "MUI/Material UI",
    category: SKILL_TYPES.Framework,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Jest",
    category: "Testing",
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "CSS",
    category: SKILL_TYPES.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "JIRA",
    category: "Software",
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.ProjectManagement],
  },
  {
    name: "Knex",
    category: SKILL_TYPES.Framework,
    tags: ["back-end", "orm"],
  },
];
