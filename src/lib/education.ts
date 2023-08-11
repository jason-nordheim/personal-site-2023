export type Education = {
  institution: string;
  major?: {
    name: string;
    type: string;
  };
  minors?: string[];
  concentrations?: string[];
  gpa?: number;
  start: string;
  end: string;
  description: string[];
  location: { city: string; state: string };
};

const RIT: Education = {
  location: { city: "Henrietta", state: "NY" },
  institution: "Rochester Institute of Technology",
  gpa: 3.49,
  major: { name: "Management Information Systems", type: "Bachelor's of Science (BS)" },
  minors: ["Digital Business", "Web Development"],
  concentrations: ["Psychology"],
  start: "08/2013",
  end: "12/2017",
  description: ["Dean's list Student", "Senior Vice President of Delta Sigma Pi (DSP)"],
};

const FLATIRON: Education = {
  institution: "Flatiron School",
  location: { city: "Denver", state: "CO" },
  start: "04/2020",
  end: "08/2020",
  description: ["Immersive Full-stack Software Engineering Bootcamp"],
};

export const EDUCATION: Education[] = [RIT, FLATIRON];
