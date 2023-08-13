import { ValueOf } from "ts-essentials";

type CertificationVendor = {
  name: string;
  subtitle: string;
  href?: string;
  logHref?: string;
};

type CertificationVendors = {
  [k: string]: CertificationVendor;
};

const CERTIFICATION_VENDORS: CertificationVendors = {
  Udemy: {
    name: "Udemy",
    subtitle:
      "Udemy is the leading global marketplace for learning and instruction, helping more than 35 million individuals learn new skills from more than 130,000 online courses. Checkout the courses I've completed below.",
    href: "https://www.udemy.com/",
  },
  LinkedIn: {
    name: "LinkedIn",
    subtitle:
      "LinkedIn Learning is an online educational platform that helps you discover and develop business, technology-related, and creative skills through expert-led course videos. Checkout the courses I've completed below.",
    href: "https://www.linkedin.com/",
  },
  PluralSight: {
    name: "PluralSight",
    subtitle:
      "Pluralsight is a leader in a providing on-demand comprehensive training on the latest technologies with courses authored by seasoned industry exports, assessments, and learning paths. Checkout some of the courses I've completed below.",
    href: "https://www.pluralsight.com/",
  },
};

const CERTIFICATION_TAGS = {};

type CertificationTag = ValueOf<typeof CERTIFICATION_TAGS>;

type Certification = {
  title: string;
  certificateUrl?: string;
  courseUrl?: string;
  vendor: ValueOf<typeof CERTIFICATION_VENDORS>;
  tags: CertificationTag[];
};

export const UDEMY_CERTS: Certification[] = [
  {
    title: "Web Development Masterclass",
    certificateUrl: "https://drive.google.com/file/d/1uoOFJgDu6w7F-gbW9fTx4clNg9ea9S3j/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.Udemy,
    tags: [],
  },
  {
    title: "AWS Certified Developer Associate",
    certificateUrl: "https://drive.google.com/file/d/1qy0f675Hfva49zrhnGOtcs23AFCoXfnp/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.Udemy,
    tags: [],
  },
];

export const LINKEDIN_CERTS: Certification[] = [
  {
    title: "Programming Foundations: Object-Oriented Design",
    courseUrl:
      "http://www.linkedin.com/learning/programming-foundations-object-oriented-design-3?trk=flagship-lil_details_certification&trk=lil_details_certification",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
    tags: [],
  },
  {
    title: "Python for Data Science Essential Training Part 1",
    courseUrl:
      "https://www.linkedin.com/learning/python-for-data-science-essential-training-part-1/data-science-life-hacks",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
    tags: [],
  },
  {
    title: "SQL Essential Training",
    courseUrl: "https://www.linkedin.com/learning/sql-essential-training-3/understanding-sql",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
    tags: [],
  },
  {
    title: "Data Science & Analytics Career Paths & Certifications: First Steps",
    courseUrl: "https://www.linkedin.com/learning/data-science-analytics-career-paths-certifications-first-steps-3",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
    tags: [],
  },
  {
    title: "Programming Foundations: Algorithms",
    courseUrl: "https://www.linkedin.com/learning/programming-foundations-algorithms",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
    tags: [],
  },
];

export const PLURALSIGHT_CERTS: Certification[] = [
  {
    title: "JavaScript Variables and Types",
    certificateUrl: "https://drive.google.com/file/d/1cm4II99IGLVLSnr7K0WKz3FpfIUUxwuJ/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Python: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1RJMGPe1homu4VWD6Tdm4emVRe9tHnLeY/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Managing AWS Operations",
    certificateUrl: "https://drive.google.com/file/d/10Y8fcXmXK1KpOvjlbncBFYMP5LZW5hps/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Dependency Injection in ASP.NET Core",
    certificateUrl: "https://drive.google.com/file/d/1ya9gX6o3uxxz3s9XPIxKo5HszzUUnZlA/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Fundamental Cloud Concepts for AWS",
    certificateUrl: "https://drive.google.com/file/d/18FSzJfUK_jIGhxeke3ebCB8SalP-i-ff/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Node.js: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1ce3_IixMMXvJRJUvXUJnxgyRX_8sttTj/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "C# Fundamentals",
    certificateUrl: "https://drive.google.com/file/d/1iymSNZvoElBhd8J0sp-U6ArqIK8nBav2/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Querying Data from PostgreSQL",
    certificateUrl: "https://drive.google.com/file/d/15ncsoVQ1LbfNUKfrjm-BxH_xoaR4W3qR/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "React: Getting Started",
    certificateUrl: "https://drive.google.com/file/d/1FcOblboKBOSBkPxvzPq3pxH7FGoFHpZR/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "TypeScript: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1VJmDsE8g_xFA2CU1SYHRKAY-o1YM6uYR/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Angular Fundamentals",
    certificateUrl: "https://drive.google.com/file/d/1ZPTG2M5of98QJ0kb3H65M1npx1yBWtpz/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Spring: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1GhFb7C8pymmRPcVPMoTLUBArAAEoqDm6/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Getting Started with Programming in Java",
    certificateUrl: "https://drive.google.com/file/d/1FtluMDjDzeu1AIoYySuMOwqq5I-rBglF/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "PostgreSQL Data Manipulation Playbook",
    certificateUrl: "https://drive.google.com/file/d/1M8I64aC8YvGRlgJ2pzUVIM7ClYyJAUYt/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Domain-Driven Design in Practice",
    certificateUrl: "https://drive.google.com/file/d/1LLGwojCcs5Si9jV_EiNl0uXIrJV43ogA/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "HTML, CSS, and JavaScript: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1ojl9ikHaNY-nAc3xqbKtiSFELCsARBzi/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "JavaScript Variables and Types",
    certificateUrl: "https://drive.google.com/file/d/1cm4II99IGLVLSnr7K0WKz3FpfIUUxwuJ/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Documenting an ASP.NET Core API with OpenAPI/Swagger",
    certificateUrl: "https://drive.google.com/file/d/1ojl9ikHaNY-nAc3xqbKtiSFELCsARBzi/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Building Application with React and Flux",
    certificateUrl: "https://drive.google.com/file/d/1gMKTMDPiKwH5Hd4XE6wv3cEFmsA0_gPq/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Designing RESTful Web APIs",
    certificateUrl: "https://drive.google.com/file/d/163ADevnS7fFv202ttE-0YiR9BXwYe9lc/view?usp=share_link",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "Python for Data Analysts",
    certificateUrl: "https://drive.google.com/file/d/1Fvo48YYl8ofDIY5lD-G9A_JhQq68lsnF/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
  {
    title: "How Git Works",
    certificateUrl: "https://drive.google.com/file/d/1YF6P9MNCWc5Xy0n2ZaSXSAkbSJzPM5iq/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
    tags: [],
  },
];

export const CERTIFICATIONS: Certification[] = [...UDEMY_CERTS, ...LINKEDIN_CERTS, ...PLURALSIGHT_CERTS];
