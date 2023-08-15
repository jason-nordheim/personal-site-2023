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
  SiEslint,
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
import { GrNode, GrUserWorker } from "react-icons/gr/index";
import { BiLogoPostgresql, BiLogoMongodb, BiSolidFileCss } from "react-icons/bi/index";
import { VscRuby, VscSymbolInterface } from "react-icons/vsc/index";
import { RxComponentInstance } from "react-icons/rx/index";
import { IconType } from "react-icons";
import { sortAscending } from "./utils/sorting";

export const TAGS = {
  Quality: "quality",
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
  SoftwareAndTools: "software and tools",
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
  href?: string;
};

export const SKILLS: Skill[] = [
  {
    name: "Jquery",
    category: SKILL_CATEGORY.Framework,
    icon: BiLogoJquery,
    tags: [TAGS.FrontEnd],
    href: "https://jquery.com",
  },
  {
    name: "Rails",
    category: SKILL_CATEGORY.Framework,
    icon: SiRubyonrails,
    tags: [TAGS.Api, TAGS.Backend, TAGS.FrontEnd],
    href: "https://rubyonrails.org",
  },
  {
    name: "Ruby",
    category: SKILL_CATEGORY.Language,
    icon: VscRuby,
    tags: [TAGS.Api, TAGS.Backend, TAGS.FrontEnd],
    href: "https://www.ruby-lang.org/en/",
  },
  {
    name: "Singleton Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: RxComponentInstance,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
    href: "https://sourcemaking.com/design_patterns/singleton",
  },
  {
    name: "Observer Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: BiSolidBinoculars,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
    href: "https://sourcemaking.com/design_patterns/observer",
  },
  {
    name: "Command Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: GrUserWorker,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
    href: "https://sourcemaking.com/design_patterns/command",
  },
  {
    name: "Factory Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: MdOutlineFactory,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
    href: "https://sourcemaking.com/design_patterns/factory_method",
  },
  {
    name: "Adapter Pattern",
    category: SKILL_CATEGORY.Concept,
    icon: VscSymbolInterface,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
    href: "https://sourcemaking.com/design_patterns/adapter",
  },
  {
    name: "Generator Functions",
    category: SKILL_CATEGORY.Concept,
    icon: GiPowerGenerator,
    tags: [TAGS.FrontEnd, TAGS.Backend],
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*",
  },
  {
    name: "Plant UML",
    category: SKILL_CATEGORY.Library,
    icon: TbPlant,
    tags: [TAGS.DevOps, TAGS.Documentation, TAGS.Databases, TAGS.DevOps],
    href: "https://plantuml.com",
  },
  {
    name: "Figma",
    category: SKILL_CATEGORY.SoftwareAndTools,
    icon: FaFigma,
    tags: [TAGS.Collaboration, TAGS.Software, TAGS.Documentation],
    href: "https://www.figma.com",
  },
  {
    name: "Bash/Zsh/OhMyZsh",
    category: SKILL_CATEGORY.Technology,
    icon: SiGnubash,
    tags: [TAGS.DevOps],
    href: "https://ohmyz.sh",
  },
  {
    name: "SharePoint",
    category: SKILL_CATEGORY.SoftwareAndTools,
    icon: SiMicrosoftsharepoint,
    tags: [TAGS.Collaboration, TAGS.Documentation],
    href: "https://www.microsoft.com/en-us/microsoft-365/sharepoint/",
  },
  {
    name: "LucidChart",
    category: SKILL_CATEGORY.SoftwareAndTools,
    icon: SiDiagramsdotnet,
    tags: [TAGS.Collaboration, TAGS.Documentation],
    href: "https://www.lucidchart.com/",
  },
  {
    name: "Big O",
    category: SKILL_CATEGORY.Concept,
    icon: LiaCalculatorSolid,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Collaboration],
    href: "https://en.wikipedia.org/wiki/Big_O_notation",
  },
  {
    name: "Swagger",
    category: SKILL_CATEGORY.Framework,
    icon: SiSwagger,
    tags: [TAGS.Api, TAGS.Backend, TAGS.Documentation],
    href: "https://swagger.io",
  },
  {
    name: "OpenAPI",
    category: SKILL_CATEGORY.Framework,
    icon: SiSwagger,
    tags: [TAGS.Api, TAGS.Backend, TAGS.Documentation],
    href: "https://www.openapis.org",
  },
  {
    name: "Bootstrap",
    category: SKILL_CATEGORY.Framework,
    icon: SiBootstrap,
    tags: [TAGS.FrontEnd],
    href: "https://getbootstrap.com",
  },
  {
    name: "Emotion (styled components)",
    category: SKILL_CATEGORY.Library,
    icon: MdOutlineEmojiEmotions,
    tags: [TAGS.FrontEnd],
    href: "https://emotion.sh/docs/styled",
  },
  {
    name: "Entity Framework",
    category: SKILL_CATEGORY.Framework,
    icon: TfiMicrosoftAlt,
    tags: [TAGS.Backend, TAGS.Api],
    href: "https://learn.microsoft.com/en-us/ef/",
  },
  {
    name: "Lodash",
    category: SKILL_CATEGORY.Library,
    icon: SiLodash,
    tags: [TAGS.FrontEnd, TAGS.Backend],
    href: "https://lodash.com",
  },
  {
    name: "Rambda",
    category: SKILL_CATEGORY.Library,
    icon: MdLocalLibrary,
    tags: [TAGS.FrontEnd, TAGS.Backend],
    href: "https://ramdajs.com",
  },
  {
    name: "REST",
    category: SKILL_CATEGORY.Concept,
    icon: TbApi,
    tags: [TAGS.Api, TAGS.FrontEnd, TAGS.Backend],
    href: "https://restfulapi.net",
  },
  {
    name: "Streams API",
    category: SKILL_CATEGORY.Technology,
    icon: TbBrandSocketIo,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
    href: "https://developer.mozilla.org/en-US/docs/Web/API/Streams_API",
  },
  {
    name: "Web Assembly WASM",
    category: SKILL_CATEGORY.Technology,
    icon: SiWasmcloud,
    tags: [TAGS.FrontEnd],
    href: "https://webassembly.org",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
    href: "https://tanstack.com/query/v3/",
  },
  {
    name: "RTK Query",
    icon: TbDatabaseSearch,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
    href: "https://redux-toolkit.js.org/rtk-query/overview",
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
    href: "https://redux.js.org",
  },
  {
    name: "Redux Saga",
    icon: TbBrandRedux,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
    href: "https://redux-saga.js.org",
  },
  {
    name: "Intl (Internationalization)",
    icon: TbWorldCheck,
    category: SKILL_CATEGORY.Library,
    tags: [TAGS.FrontEnd],
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl",
  },
  {
    name: "Unified Modeling Language (UML)",
    icon: LiaProjectDiagramSolid,
    category: SKILL_CATEGORY.Concept,
    tags: [TAGS.Software, TAGS.Api, TAGS.Collaboration, TAGS.Backend, TAGS.Databases, TAGS.DevOps],
    href: "https://www.uml.org",
  },
  {
    name: "Webpack",
    icon: SiWebpack,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps, TAGS.Api],
    href: "https://webpack.js.org",
  },
  {
    name: "PowerShell",
    icon: SiPowershell,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps, TAGS.Api],
    href: "https://learn.microsoft.com/en-us/powershell/",
  },
  {
    name: "Vite",
    category: SKILL_CATEGORY.Technology,
    icon: TbBrandVite,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
    href: "https://vitejs.dev",
  },
  {
    name: "Vitest",
    category: SKILL_CATEGORY.Library,
    icon: SiVitest,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Testing],
    href: "https://www.cypress.io",
  },
  {
    name: "Cypress",
    category: SKILL_CATEGORY.Library,
    icon: TbBrandCypress,
    tags: [TAGS.FrontEnd, TAGS.Testing],
    href: "https://www.cypress.io",
  },
  {
    name: "Test Cafe",
    category: SKILL_CATEGORY.Library,
    icon: GrTest,
    tags: [TAGS.FrontEnd, TAGS.Testing],
    href: "https://testcafe.io",
  },
  {
    name: "Storybook",
    category: SKILL_CATEGORY.Library,
    icon: SiStorybook,
    tags: [TAGS.FrontEnd, TAGS.Testing],
    href: "https://storybook.js.org",
  },
  {
    name: "Google Cloud Platform",
    icon: IoLogoGoogle,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps],
    href: "https://cloud.google.com",
  },
  {
    name: "AWS",
    icon: SiAmazonaws,
    category: SKILL_CATEGORY.Technology,
    tags: [TAGS.DevOps],
    href: "https://aws.amazon.com",
  },
  {
    name: "Python",
    category: SKILL_CATEGORY.Language,
    icon: TbBrandPython,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
    href: "https://www.python.org",
  },
  {
    name: "Gitlab",
    icon: SiGitlab,
    category: SKILL_CATEGORY.SoftwareAndTools,
    tags: [TAGS.FrontEnd, TAGS.Backend],
    href: "https://gitlab.com",
  },
  {
    name: "XML",
    category: SKILL_CATEGORY.Language,
    icon: BsFiletypeXml,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
    href: "https://developer.mozilla.org/en-US/docs/Web/XML/XML_introduction",
  },
  {
    name: "Rally",
    category: SKILL_CATEGORY.SoftwareAndTools,
    icon: BsKanban,
    tags: [TAGS.ProjectManagement, TAGS.Software],
    href: "https://www.broadcom.com/products/software/value-stream-management/rally",
  },
  {
    name: "Web Workers",
    category: SKILL_CATEGORY.Technology,
    icon: MdOutlineMiscellaneousServices,
    tags: [TAGS.FrontEnd],
    href: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers",
  },
  {
    name: "Slack",
    category: SKILL_CATEGORY.SoftwareAndTools,
    icon: IoLogoSlack,
    tags: [TAGS.ProjectManagement, TAGS.Collaboration],
    href: "https://slack.com/",
  },
  {
    name: "JSON/JSON5",
    category: SKILL_CATEGORY.Language,
    icon: BsFiletypeJson,
    tags: [TAGS.Backend, TAGS.FrontEnd, TAGS.Documentation, TAGS.Databases],
    href: "https://json5.org",
  },
  {
    name: "Markdown",
    category: SKILL_CATEGORY.Language,
    icon: TbMarkdown,
    tags: [TAGS.Backend, TAGS.FrontEnd, TAGS.Documentation, TAGS.Databases],
    href: "https://www.markdownguide.org",
  },
  {
    name: "Node.js",
    category: SKILL_CATEGORY.Technology,
    icon: GrNode,
    tags: [TAGS.Backend, TAGS.FrontEnd],
    href: "https://nodejs.org/en",
  },
  {
    name: "Go/Golang",
    category: SKILL_CATEGORY.Language,
    icon: TbBrandGolang,
    tags: [TAGS.Backend, TAGS.Api],
    href: "https://go.dev",
  },
  {
    name: "Next.js",
    category: SKILL_CATEGORY.Framework,
    icon: SiNextdotjs,
    tags: [TAGS.FrontEnd],
    href: "https://nextjs.org",
  },
  {
    name: "React",
    category: SKILL_CATEGORY.Framework,
    icon: FaReact,
    tags: [TAGS.FrontEnd],
    href: "https://react.dev",
  },
  {
    name: "React Router",
    category: SKILL_CATEGORY.Framework,
    icon: MdOutlineRouter,
    tags: [TAGS.FrontEnd],
    href: "https://reactrouter.com/en/main",
  },
  {
    name: "YAML",
    category: SKILL_CATEGORY.Language,
    icon: SiYaml,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
    href: "https://yaml.org",
  },
  {
    name: "Git",
    category: SKILL_CATEGORY.Technology,
    icon: BsGit,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
    href: "https://git-scm.com",
  },
  {
    name: "Teleport",
    category: SKILL_CATEGORY.Technology,
    icon: GiTeleport,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.DevOps],
    href: "https://goteleport.com/kubernetes-access/",
  },
  {
    name: "Docker",
    category: SKILL_CATEGORY.Technology,
    icon: SiDocker,
    tags: [TAGS.FrontEnd, TAGS.Backend],
    href: "https://www.docker.com",
  },
  {
    name: "SQL",
    category: SKILL_CATEGORY.Language,
    icon: TbSql,
    tags: [TAGS.Backend, TAGS.Databases],
    href: "https://www.mysql.com",
  },
  {
    name: "PostgreSQL",
    category: SKILL_CATEGORY.Language,
    icon: BiLogoPostgresql,
    tags: [TAGS.Backend, TAGS.Databases],
    href: "https://www.postgresql.org",
  },
  {
    name: "PandaCSS",
    category: SKILL_CATEGORY.Library,
    icon: SiFoodpanda,
    tags: [TAGS.Backend, TAGS.Databases],
    href: "https://panda-css.com",
  },
  {
    name: "Babel/JSX",
    category: SKILL_CATEGORY.Technology,
    icon: SiBabel,
    tags: [TAGS.FrontEnd],
    href: "https://babeljs.io",
  },
  {
    name: "MongoDB",
    category: SKILL_CATEGORY.Language,
    icon: BiLogoMongodb,
    tags: [TAGS.Backend, TAGS.Databases],
    href: "https://www.mongodb.com",
  },
  {
    name: "HTML",
    category: SKILL_CATEGORY.Language,
    icon: SiHtml5,
    tags: [TAGS.FrontEnd],
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    name: "Axios",
    category: SKILL_CATEGORY.Library,
    icon: SiAxios,
    tags: [TAGS.FrontEnd, TAGS.Backend],
    href: "https://axios-http.com/docs/intro",
  },
  {
    name: "Express",
    category: SKILL_CATEGORY.Framework,
    icon: BsServer,
    tags: [TAGS.Backend, TAGS.Api],
    href: "https://expressjs.com",
  },
  {
    name: "C#",
    category: SKILL_CATEGORY.Language,
    icon: SiCsharp,
    tags: [TAGS.FrontEnd, TAGS.Backend],
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    name: "Java",
    category: SKILL_CATEGORY.Language,
    icon: FaJava,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Api],
    href: "https://www.java.com/en/",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    category: SKILL_CATEGORY.Language,
    tags: [TAGS.FrontEnd],
    href: "http://es6-features.org/",
  },
  {
    name: "TypeScript",
    category: SKILL_CATEGORY.Language,
    icon: SiTypescript,
    tags: [TAGS.FrontEnd],
    href: "https://www.typescriptlang.org",
  },
  {
    name: ".NET Core",
    category: SKILL_CATEGORY.Framework,
    icon: SiDotnet,
    tags: [TAGS.FrontEnd],
    href: "https://dotnet.microsoft.com/en-us/",
  },
  {
    name: "MUI/Material UI",
    category: SKILL_CATEGORY.Framework,
    icon: SiMaterialdesign,
    tags: [TAGS.FrontEnd],
    href: "https://mui.com",
  },
  {
    name: "Eslint",
    category: SKILL_CATEGORY.SoftwareAndTools,
    icon: SiEslint,
    tags: [TAGS.Quality],
    href: "https://eslint.org",
  },
  {
    name: "Jest",
    category: SKILL_CATEGORY.Library,
    icon: SiJest,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.Testing, TAGS.Quality],
    href: "https://jestjs.io",
  },
  {
    name: "CSS",
    category: SKILL_CATEGORY.Language,
    icon: BiSolidFileCss,
    tags: [TAGS.FrontEnd],
    href: "https://www.css3.info",
  },
  {
    name: "SASS/SCSS",
    category: SKILL_CATEGORY.Language,
    icon: IoLogoSass,
    tags: [TAGS.FrontEnd],
    href: "https://sass-lang.com",
  },
  {
    name: "JIRA",
    category: SKILL_CATEGORY.SoftwareAndTools,
    icon: SiJirasoftware,
    tags: [TAGS.FrontEnd, TAGS.Backend, TAGS.ProjectManagement],
    href: "https://www.atlassian.com/software/jira",
  },
  {
    name: "Knex",
    category: SKILL_CATEGORY.Framework,
    icon: BsDiagram3Fill,
    tags: ["back-end", "orm"],
    href: "https://knexjs.org",
  },
];

export type SortOptions = ValueOf<typeof SORT_OPTIONS>;
export type Filters = SkillTag | "All" | "None";
export type TagFilters = { [k: Filters]: boolean };
export type FilterCategories = SkillCategory | "All";

export const FILTERS_ALL = {
  [TAGS.Api]: true,
  [TAGS.Backend]: true,
  [TAGS.Collaboration]: true,
  [TAGS.Databases]: true,
  [TAGS.DevOps]: true,
  [TAGS.Documentation]: true,
  [TAGS.FrontEnd]: true,
  [TAGS.ProjectManagement]: true,
  [TAGS.Software]: true,
  [TAGS.Testing]: true,
  All: true,
  None: false,
};

export const FILTER_NONE = {
  [TAGS.Api]: false,
  [TAGS.Backend]: false,
  [TAGS.Collaboration]: false,
  [TAGS.Databases]: false,
  [TAGS.DevOps]: false,
  [TAGS.Documentation]: false,
  [TAGS.FrontEnd]: false,
  [TAGS.ProjectManagement]: false,
  [TAGS.Software]: false,
  [TAGS.Testing]: false,
  All: false,
  None: true,
};

export const SORT_OPTIONS = {
  name: "name",
  category: "category",
} as const;

export const makeSkillsString = (skills: Skill[]) => {
  return skills
    .sort((a, b) => sortAscending(a.name, b.name))
    .filter((s) => s.category !== SKILL_CATEGORY.SoftwareAndTools && s.category !== SKILL_CATEGORY.Concept)
    .map((s) => s.name)
    .join(", ");
};

export const skillHasTag = (skill: Skill, tag: SkillTag): boolean => skill.tags.includes(tag);
