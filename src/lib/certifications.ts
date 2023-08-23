import { ValueOf } from "ts-essentials";

export type CertificationVendor = {
  name: string;
  subtitle: string;
  href?: string;
  logHref?: string;
};

export type CertificationVendors = {
  [k: string]: CertificationVendor;
};

export const CERTIFICATION_VENDORS: CertificationVendors = {
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

export type Certification = {
  title: string;
  certificateUrl?: string;
  courseUrl?: string;
  vendor: ValueOf<typeof CERTIFICATION_VENDORS>;
};

export const UDEMY_CERTS: Certification[] = [
  {
    title: "Web Development Masterclass",
    certificateUrl: "https://drive.google.com/file/d/1uoOFJgDu6w7F-gbW9fTx4clNg9ea9S3j/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.Udemy,
  },
  {
    title: "AWS Certified Developer Associate",
    certificateUrl: "https://drive.google.com/file/d/1qy0f675Hfva49zrhnGOtcs23AFCoXfnp/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.Udemy,
  },
  {
    title: "Getting started with WebAssembly & Emscripten",
    certificateUrl: "https://drive.google.com/file/d/15p4hr6qut_kCvt8BA4N58wiUw_JEKVey/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.Udemy,
  },
  {
    title: "Go: The Complete Developer's Guide (Golang)",
    certificateUrl: "https://drive.google.com/file/d/1LqdpM16dcWG63xP5zJYraaUWTiyeqtPs/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.Udemy,
  },
  {
    title: "Automate the Boring Stuff with Python Programming",
    certificateUrl: "https://drive.google.com/file/d/1clk7ChhfNsCSdKgnXTkWgQRHD5mJ_8L7/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.Udemy,
  },
];

export const LINKEDIN_CERTS: Certification[] = [
  {
    title: "Programming Foundations: Object-Oriented Design",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/dd85fedf2b97cb8e2884f4784205090fb9b8de12d6f124f9d194085f35d9e3fe",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
  {
    title: "Python for Data Science Essential Training Part 1",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/512e2a33c9249b5a8bc747313382766d2ea28b08a4c969396301629e109d86d4",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
  {
    title: "SQL Essential Training",
    courseUrl: "https://www.linkedin.com/learning/sql-essential-training-3/understanding-sql",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/a1cc5ce579dda6a03b98a105fa8256c992705f731a097ab981afdf00c76e9909",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
  {
    title: "Data Science & Analytics Career Paths & Certifications: First Steps",
    courseUrl: "https://www.linkedin.com/learning/data-science-analytics-career-paths-certifications-first-steps-3",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/2fcef4ba176f1d930b448da40806913bb4a37a645350a91dbd24c945a2826be6",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
  {
    title: "Programming Foundations: Algorithms",
    courseUrl: "https://www.linkedin.com/learning/programming-foundations-algorithms",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/74810b4b1d2fbe52fdf79cb139d539856ba0683c200cb4b8efb834c306dfefd8",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
  {
    title: "Polygot Web Development",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/e2bd605a5a90ff463c417d4995df856dde9d156635f9c905b2704942f0dcc48e",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
  {
    title: "Git Workflows",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/4bece8764f67377b48f2c3a3402085c21db85e106c6ffdf71c2b949352cb3655",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
  {
    title: "Build Three Real-World Python Applications",
    courseUrl: "https://www.linkedin.com/learning/build-three-real-world-python-applications?u=67698794",
    certificateUrl:
      "https://www.linkedin.com/learning/certificates/24721b8fef5760a56f495e2ea1e88226636c2cc167c88c0bd36f0e4db355bea7",
    vendor: CERTIFICATION_VENDORS.LinkedIn,
  },
];

export const PLURALSIGHT_CERTS: Certification[] = [
  {
    title: "Python: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1RJMGPe1homu4VWD6Tdm4emVRe9tHnLeY/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Managing AWS Operations",
    certificateUrl: "https://drive.google.com/file/d/10Y8fcXmXK1KpOvjlbncBFYMP5LZW5hps/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Dependency Injection in ASP.NET Core",
    certificateUrl: "https://drive.google.com/file/d/1ya9gX6o3uxxz3s9XPIxKo5HszzUUnZlA/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Fundamental Cloud Concepts for AWS",
    certificateUrl: "https://drive.google.com/file/d/18FSzJfUK_jIGhxeke3ebCB8SalP-i-ff/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Node.js: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1ce3_IixMMXvJRJUvXUJnxgyRX_8sttTj/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "C# Fundamentals",
    certificateUrl: "https://drive.google.com/file/d/1iymSNZvoElBhd8J0sp-U6ArqIK8nBav2/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Querying Data from PostgreSQL",
    certificateUrl: "https://drive.google.com/file/d/15ncsoVQ1LbfNUKfrjm-BxH_xoaR4W3qR/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "React: Getting Started",
    certificateUrl: "https://drive.google.com/file/d/1FcOblboKBOSBkPxvzPq3pxH7FGoFHpZR/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "TypeScript: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1VJmDsE8g_xFA2CU1SYHRKAY-o1YM6uYR/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Angular Fundamentals",
    certificateUrl: "https://drive.google.com/file/d/1ZPTG2M5of98QJ0kb3H65M1npx1yBWtpz/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Spring: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1GhFb7C8pymmRPcVPMoTLUBArAAEoqDm6/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Getting Started with Programming in Java",
    certificateUrl: "https://drive.google.com/file/d/1FtluMDjDzeu1AIoYySuMOwqq5I-rBglF/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "PostgreSQL Data Manipulation Playbook",
    certificateUrl: "https://drive.google.com/file/d/1M8I64aC8YvGRlgJ2pzUVIM7ClYyJAUYt/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Domain-Driven Design in Practice",
    certificateUrl: "https://drive.google.com/file/d/1LLGwojCcs5Si9jV_EiNl0uXIrJV43ogA/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "HTML, CSS, and JavaScript: The Big Picture",
    certificateUrl: "https://drive.google.com/file/d/1ojl9ikHaNY-nAc3xqbKtiSFELCsARBzi/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "JavaScript Variables and Types",
    certificateUrl: "https://drive.google.com/file/d/1cm4II99IGLVLSnr7K0WKz3FpfIUUxwuJ/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Documenting an ASP.NET Core API with OpenAPI/Swagger",
    certificateUrl: "https://drive.google.com/file/d/1NCKvdyPULBe_EWrdHJtCV2ZdE8bvGgw6/view?usp=share_link",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Building Application with React and Flux",
    certificateUrl: "https://drive.google.com/file/d/1gMKTMDPiKwH5Hd4XE6wv3cEFmsA0_gPq/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Designing RESTful Web APIs",
    certificateUrl: "https://drive.google.com/file/d/163ADevnS7fFv202ttE-0YiR9BXwYe9lc/view?usp=share_link",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "Python for Data Analysts",
    certificateUrl: "https://drive.google.com/file/d/1Fvo48YYl8ofDIY5lD-G9A_JhQq68lsnF/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
  {
    title: "How Git Works",
    certificateUrl: "https://drive.google.com/file/d/1YF6P9MNCWc5Xy0n2ZaSXSAkbSJzPM5iq/view?usp=sharing",
    vendor: CERTIFICATION_VENDORS.PluralSight,
  },
];

export const CERTIFICATIONS: Certification[] = [...UDEMY_CERTS, ...LINKEDIN_CERTS, ...PLURALSIGHT_CERTS];
