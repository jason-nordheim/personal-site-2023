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
  SiDotnet,
  SiCsharp,
  SiPowershell,
  SiBootstrap,
  SiHtml5,
  SiJest,
  SiFoodpanda,
  SiVitest,
  SiGnubash,
  SiRubyonrails,
} from "react-icons/si/index";
import { BiLogoJquery, BiSolidBinoculars } from "react-icons/bi/index";
import { LiaProjectDiagramSolid, LiaCalculatorSolid } from "react-icons/lia/index";
import {
  MdOutlineEmojiEmotions,
  MdLocalLibrary,
  MdOutlineMiscellaneousServices,
  MdOutlineRouter,
  MdOutlineFactory,
} from "react-icons/md/index";
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
  TbPlant,
  TbSql,
  TbMarkdown,
} from "react-icons/tb/index";
import { GrTest } from "react-icons/gr/index";
import { IoLogoGoogle, IoLogoSlack, IoLogoSass } from "react-icons/io/index";
import { BsFiletypeXml, BsKanban, BsGit, BsServer, BsDiagram3Fill, BsFiletypeJson } from "react-icons/bs/index";
import { FaReact, FaJava, FaFigma } from "react-icons/fa/index";
import { GiPowerGenerator, GiTeleport } from "react-icons/gi/index";
import { GrNode, GrCloudComputer, GrUserWorker } from "react-icons/gr/index";
import { BiLogoPostgresql, BiLogoMongodb, BiSolidFileCss } from "react-icons/bi/index";
import { VscRuby, VscSymbolInterface } from "react-icons/vsc/index";
import { RxComponentInstance } from "react-icons/rx/index";
import { IconType } from "react-icons";
import { sortAscending } from "./utils/sorting";

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
    name: "Jquery",
    category: SKILL_CATEGORY.Framework,
    icon: BiLogoJquery,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "Rails",
    category: SKILL_CATEGORY.Framework,
    icon: SiRubyonrails,
    tags: [TAGS.Api, TAGS.Backend, TAGS.FrontEnd],
  },
  {
    name: "Ruby",
    category: SKILL_CATEGORY.Language,
    icon: VscRuby,
    tags: [TAGS.Api, TAGS.Backend, TAGS.FrontEnd],
  },
  {
    name: "Singleton Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: RxComponentInstance,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Observer Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: BiSolidBinoculars,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Command Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: GrUserWorker,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Factory Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: MdOutlineFactory,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Adapter Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: VscSymbolInterface,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Generator Functions",
    category: SKILL_CATEGORY.Concept,
    icon: GiPowerGenerator,
    tags: [TAGS.FrontEnd, TAGS.Backend],
  },
  {
    name: "Plant UML",
    category: SKILL_CATEGORY.Library,
    icon: TbPlant,
    tags: [TAGS.DevOps, TAGS.Documentation, TAGS.Databases, TAGS.DevOps],
  },
  {
    name: "Figma",
    category: SKILL_CATEGORY.Software,
    icon: FaFigma,
    tags: [TAGS.Collaboration, TAGS.Software, TAGS.Documentation],
  },
  {
    name: "VMWare",
    category: SKILL_CATEGORY.Software,
    icon: GrCloudComputer,
    tags: [TAGS.DevOps, TAGS.Software],
  },
  {
    name: "Bash/Zsh",
    category: SKILL_CATEGORY.Technology,
    icon: SiGnubash,
    tags: [TAGS.DevOps],
  },
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
    name: "Bootstrap",
    category: SKILL_CATEGORY.Framework,
    icon: SiBootstrap,
    tags: [TAGS.FrontEnd],
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
    name: "Powershell",
    icon: SiPowershell,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps, TAGS.Api],
  },
  {
    name: "Vite",
    category: SKILL_CATEGORY.Technology,
    icon: TbBrandVite,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
  },
  {
    name: "Vitest",
    category: SKILL_CATEGORY.Library,
    icon: SiVitest,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Testing],
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
    name: "JSON/JSON5",
    category: SKILL_CATEGORY.Language,
    icon: BsFiletypeJson,
    tags: [TAGS.Backend, TAGS.FrontEnd, TAGS.Documentation, TAGS.Databases],
  },
  {
    name: "Markdown",
    category: SKILL_CATEGORY.Language,
    icon: TbMarkdown,
    tags: [TAGS.Backend, TAGS.FrontEnd, TAGS.Documentation, TAGS.Databases],
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
    name: "React Router",
    category: SKILL_CATEGORY.Framework,
    icon: MdOutlineRouter,
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
    name: "PandaCSS",
    category: SKILL_CATEGORY.Library,
    icon: SiFoodpanda,
    tags: [TAGS.Backend, TAGS.Databases],
  },
  {
    name: "Babel/JSX",
    category: SKILL_CATEGORY.Technology,
    icon: SiBabel,
    tags: [TAGS.FrontEnd],
  },
  {
    name: "MongoDB",
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
    name: ".NET Framework/Core",
    category: SKILL_CATEGORY.Framework,
    icon: SiDotnet,
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
    .sort((a, b) => sortAscending(a.name, b.name))
    .filter((s) => s.category !== SKILL_CATEGORY.Software && s.category !== SKILL_CATEGORY.Concept)
    .map((s) => s.name)
    .join(", ");
};

export const skillHasTag = (skill: Skill, tag: SkillTag): boolean => skill.tags.includes(tag);
