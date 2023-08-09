export type Experience = {
  employer: string;
  title: string;
  description: string;
  location?: string;
  start: string;
  end: string;
  responsibilities: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    employer: "Alteryx",
    title: "Software Engineer",
    location: "Denver, Colorado - Remote",
    description: "",
    responsibilities: [
      "Collaborated with UX team to build rich & intuitive user-interfaces in React/TypeScript matching (InVision/Figma) mocks using internal component library",
      "Conducted thorough code reviews ensuring the highest possible quality by providing other engineers feedback on performance, maintainability, testing.",
      "Created technical documentation and architecture plans using UML to guide/coordinate the implementation of new features and technologies",
      "Developed automated tests using Jest, Mocha, Enzyme and Test Cafe to verify application functionality",
      "Provided estimation of deliverables leveraging Agile Methodologies (stories/points, scrum, kanban, etc.)",
      "Conducted audience appropriate demos and technical walk-throughs to stakeholders across the organization",
    ],
    start: "05/2021",
    end: "08/2023",
  },
  {
    employer: "Paychex",
    title: "Desktop Engineer",
    location: "Webster, New York",
    description: "",
    responsibilities: [
      "Created Powershell/VB scripts and applications to streamline the management of endpoints (~20,000) within a SCCM environment",
      "Developed internal (C#/.NET Framework) application for IT Support teams to image systems, assign user-roles, install/uninstall applications and automate other common IT support tasks on domain-joined systems",
      "Lead the engineering effort for the implementation of ZPA (Zscaler Private Access) enabling immediate and secure access to internal applications for Paychex M&As",
      "Setup and configuration of on-premise and hosted servers running Linux (CentOS) and Windows",
      "Technical documentation on internal Wiki pages (Confluence), including RACI charts, setup and configuration instructions, failover procedures, specifications, and support information surrounding end-user computing systems and applications",
    ],
    start: "06/2018",
    end: "03/2020",
  },
  {
    employer: "Rochester Precision Optics",
    title: "Data Analyst & Developer",
    description: "Rochester, NY",
    responsibilities: [
      "Created dashboards and reports using SQL to query internal ERP systems to provide Business Intelligence and KPI information to upper-level management",
      'Developed internal application/tool (C#, .NET Framework, & MSSQL) to automate the creation of supplier "report cards" for the Directory of Supply Chain',
      "Created internal scripts to validate payroll activities by comparing data from bank transactions, internal ERP (Epicor), and payroll (ADP) systems",
      "Endpoint setup, configuration and management including imaging, application installation/deployment, drive mapping, and system configuration",
    ],
    start: "05/2017",
    end: "06/2018",
  },
];
