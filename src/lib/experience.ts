export type Experience = {
  employer: string;
  department?: string;
  title: string;
  description: string;
  image?: string;
  location?: string;
  start: string;
  end: string;
  responsibilities: string[];
};

export const EXPERIENCE: Experience[] = [
  {
    employer: "Alteryx",
    title: "Software Engineer",
    department: "Cloud Products",
    location: "Denver, Colorado - Remote",
    image: "https://community.alteryx.com/t5/image/serverpage/image-id/259688iF6C1C4BD0BC11851?v=v2",
    description: "",
    responsibilities: [
      "Collaborated with UX team to build rich & intuitive user-interfaces in React/TypeScript matching (InVision/Figma) mocks using internal component library",
      "Conducted thorough code reviews ensuring the highest possible quality by providing other engineers feedback on performance, maintainability, and testing",
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
    title: "Desktop Engineer II",
    department: "Enterprise Technology Services",
    location: "Webster, New York",
    image: "https://cdn.icon-icons.com/icons2/2699/PNG/512/paychex_logo_icon_170867.png",
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
    department: "IT Services",
    title: "Data Analyst & Developer",
    image: "https://www.rpoptics.com/hubfs/RPO-logo-300x247.png",
    location: "Rochester, NY",
    description: "",
    responsibilities: [
      "Created dashboards and reports using SQL to query internal ERP systems to provide Business Intelligence and KPI information to upper-level management",
      'Developed internal application/tool (C#, .NET Framework, & MSSQL) to automate the creation of supplier "report cards" for the Directory of Supply Chain',
      "Created internal scripts to validate payroll activities by comparing data from bank transactions, internal ERP (Epicor), and payroll (ADP) systems",
      "Endpoint setup, configuration and management including imaging, application installation/deployment, drive mapping, and system configuration",
    ],
    start: "05/2017",
    end: "06/2018",
  },
  {
    employer: "Rochester Institute of Technology",
    title: "Data Analyst",
    department: "Alumni Relations",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rochester_Institute_of_Technology_seal.svg/1024px-Rochester_Institute_of_Technology_seal.svg.png",
    location: "Rochester, NY",
    description: "",
    responsibilities: [
      "Leverage relational database management systems to query, join, and sanitize data from Oracle PL/SQL databases",
      "Analyze and reduce large data-sets to provide accurate, clear and concise reports to support various university efforts including fundraising, networking and marketing activities",
      "Create dashboards charts, and other data-visualizations with Tableau, Excel, and PowerBI",
      "Update and maintain database documentation using unified modeling language (UML)",
    ],
    start: "05/2016",
    end: "08/2016",
  },
];
