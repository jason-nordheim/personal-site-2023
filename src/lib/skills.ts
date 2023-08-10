import { ValueOf } from "ts-essentials";
import {
  SiMicrosoftsharepoint,
  SiSwagger,
  SiLodash,
  SiWasmcloud,
  SiReactquery,
  SiDiagramsdotnet,
  SiWebpack,
  SiAmazonaws,
  SiStorybook,
  SiBabel,
  SiYaml,
  SiGitlab,
  SiDocker,
  SiAxios,
  SiJavascript,
  SiJirasoftware,
  SiTypescript,
  SiMaterialdesign,
  SiNextdotjs,
  SiCsharp,
  SiHtml5,
  SiJest,
} from "react-icons/si/index";
import { LiaProjectDiagramSolid, LiaCalculatorSolid } from "react-icons/lia/index";
import { MdOutlineEmojiEmotions, MdLocalLibrary, MdOutlineMiscellaneousServices } from "react-icons/md/index";
import { TfiMicrosoftAlt } from "react-icons/tfi/index";
import {
  TbApi,
  TbBrandSocketIo,
  TbBrandRedux,
  TbDatabaseSearch,
  TbWorldCheck,
  TbBrandVite,
  TbBrandCypress,
  TbBrandGolang,
  TbBrandPython,
  TbSql,
} from "react-icons/tb/index";
import { GrTest } from "react-icons/gr/index";
import { IoLogoGoogle, IoLogoSlack, IoLogoSass } from "react-icons/io/index";
import { BsFiletypeXml, BsKanban, BsGit, BsServer, BsDiagram3Fill } from "react-icons/bs/index";
import { FaReact, FaJava } from "react-icons/fa/index";
import { GiTeleport } from "react-icons/gi/index";
import { GrNode } from "react-icons/gr/index";
import { BiLogoPostgresql, BiLogoMongodb, BiSolidFileCss } from "react-icons/bi/index";
import { IconType } from "react-icons";

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
  icon?: IconType;
  category: SkillCategory;
  tags: SkillTag[];
};

export const SKILLS: Skill[] = [
  {
    name: "SharePoint",
    category: SKILL_CATEGORY.Software,
    icon: SiMicrosoftsharepoint,
    tags: [TAGS.Collaboration, TAGS.Documentation],
  },
  {
    name: "Lucid Diagrams",
    category: SKILL_CATEGORY.Software,
    icon: SiDiagramsdotnet,
    tags: [TAGS.Collaboration, TAGS.Documentation],
  },
  {
    name: "Big O",
    category: SKILL_CATEGORY.Concept,
    icon: LiaCalculatorSolid,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Collaboration],
  },
  {
    name: "Swagger",
    category: SKILL_CATEGORY.Framework,
    icon: SiSwagger,
    tags: [TAGS.Api, TAGS.Backend, TAGS.Documentation],
  },
  {
    name: "Emotion (styled components)",
    category: SKILL_CATEGORY.Library,
    icon: MdOutlineEmojiEmotions,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Entity Framework",
    category: SKILL_CATEGORY.Framework,
    icon: TfiMicrosoftAlt,
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "Lodash",
    category: SKILL_CATEGORY.Library,
    icon: SiLodash,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Rambda",
    category: SKILL_CATEGORY.Library,
    icon: MdLocalLibrary,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "REST",
    category: SKILL_CATEGORY.Concept,
    icon: TbApi,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Web Sockets",
    category: SKILL_CATEGORY.Technology,
    icon: TbBrandSocketIo,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
  },
  {
    name: "WASM",
    category: SKILL_CATEGORY.Technology,
    icon: SiWasmcloud,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "React Query",
    icon: SiReactquery,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "RTK Query",
    icon: TbDatabaseSearch,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Redux Saga",
    icon: TbBrandRedux,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Intl (Internationalization)",
    icon: TbWorldCheck,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Unified Modeling Language (UML)",
    icon: LiaProjectDiagramSolid,
    category: SKILL_CATEGORY.Concept,
    tags: [TAGS.Software, TAGS.Api, TAGS.Collaboration, TAGS.Backend, TAGS.Databases, TAGS.DevOps],
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps, TAGS.Api],
  },
  {
    name: "Vite",
    category: SKILL_CATEGORY.Technology,
    icon: TbBrandVite,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Cypress",
    category: SKILL_CATEGORY.Library,
    icon: TbBrandCypress,
    tags: [TAGS.FrontEnd, TAGS.Testing],
  },
  {
    name: "Test Cafe",
    category: SKILL_CATEGORY.Library,
    icon: GrTest,
    tags: [TAGS.FrontEnd, TAGS.Testing],
  },
  {
    name: "Storybook",
    category: SKILL_CATEGORY.Library,
    icon: SiStorybook,
    tags: [TAGS.FrontEnd, TAGS.Testing],
  },
  {
    name: "Google Cloud Platform",
    icon: IoLogoGoogle,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps],
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps],
  },
  {
    name: "Python",
    category: SKILL_CATEGORY.Language,
    icon: TbBrandPython,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
  },
  {
    name: "Gitlab",
    icon: SiGitlab,
    category: SKILL_CATEGORY.Software,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "XML",
    category: SKILL_CATEGORY.Language,
    icon: BsFiletypeXml,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Rally",
    category: SKILL_CATEGORY.Software,
    icon: BsKanban,
    tags: [TAGS.ProjectManagement, TAGS.Software],
  },
  {
    name: "Web Workers",
    category: SKILL_CATEGORY.Technology,
    icon: MdOutlineMiscellaneousServices,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Slack",
    category: SKILL_CATEGORY.Software,
    icon: IoLogoSlack,
    tags: [TAGS.ProjectManagement, TAGS.Collaboration],
  },
  {
    name: "Node",
    category: SKILL_CATEGORY.Technology,
    icon: GrNode,
    tags: [TAGS.Backend, TAGS.FrontEnd],
  },
  {
    name: "Go/Golang",
    category: SKILL_CATEGORY.Language,
    icon: TbBrandGolang,
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "Next.js",
    category: SKILL_CATEGORY.Framework,
    icon: SiNextdotjs,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "React",
    category: SKILL_CATEGORY.Framework,
    icon: FaReact,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "YAML",
    category: SKILL_CATEGORY.Language,
    icon: SiYaml,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Git",
    category: SKILL_CATEGORY.Technology,
    icon: BsGit,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Teleport",
    category: SKILL_CATEGORY.Technology,
    icon: GiTeleport,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Docker",
    category: SKILL_CATEGORY.Technology,
    icon: SiDocker,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "SQL",
    category: SKILL_CATEGORY.Language,
    icon: TbSql,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "PostgreSQL",
    category: SKILL_CATEGORY.Language,
    icon: BiLogoPostgresql,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "Babel/JSX",
    category: SKILL_CATEGORY.Technology,
    icon: SiBabel,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Mongo DB",
    category: SKILL_CATEGORY.Language,
    icon: BiLogoMongodb,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "HTML",
    category: SKILL_CATEGORY.Language,
    icon: SiHtml5,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Axios",
    category: SKILL_CATEGORY.Library,
    icon: SiAxios,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Express",
    category: SKILL_CATEGORY.Framework,
    icon: BsServer,
    tags: [TAGS.Backend, TAGS.Api],
  },
  {
    name: "C#",
    category: SKILL_CATEGORY.Language,
    icon: SiCsharp,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Java",
    category: SKILL_CATEGORY.Language,
    icon: FaJava,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "TypeScript",
    category: SKILL_CATEGORY.Language,
    icon: SiTypescript,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "MUI/Material UI",
    category: SKILL_CATEGORY.Framework,
    icon: SiMaterialdesign,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Jest",
    category: SKILL_CATEGORY.Library,
    icon: SiJest,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Testing],
  },
  {
    name: "CSS",
    category: SKILL_CATEGORY.Language,
    icon: BiSolidFileCss,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "SASS/SCSS",
    category: SKILL_CATEGORY.Language,
    icon: IoLogoSass,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "JIRA",
    category: SKILL_CATEGORY.Software,
    icon: SiJirasoftware,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.ProjectManagement],
  },
  {
    name: "Knex",
    category: SKILL_CATEGORY.Framework,
    icon: BsDiagram3Fill,
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

export const skillHasTag = (skill: Skill, tag: SkillTag): boolean => skill.tags.includes(tag);
