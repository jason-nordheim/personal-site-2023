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
  },
  LinkedIn: {
    name: "LinkedIn",
    subtitle:
      "LinkedIn Learning is an online educational platform that helps you discover and develop business, technology-related, and creative skills through expert-led course videos. Checkout the courses I've completed below.",
  },
  PluralSight: {
    name: "PluralSight",
    subtitle:
      "Pluralsight is a leader in a providing on-demand comprehensive training on the latest technologies with courses authored by seasoned industry exports, assessments, and learning paths. Checkout some of the courses I've completed below.",
  },
};

const CERTIFICATION_TAGS = {
  Python: "python",
  AWS: "Amazon Web Services",
};

type CertificationTag = ValueOf<typeof CERTIFICATION_TAGS>;

type Certification = {
  title: string;
  certificateUrl?: string;
  courseUrl: string;
  vendor: ValueOf<typeof CERTIFICATION_VENDORS>;
  tags: [];
};
