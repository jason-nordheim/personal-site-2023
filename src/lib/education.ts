export type DegreeMajor = {
  name: string;
  typeAbbr: string;
  type: string;
};

export type Location = {
  city: string;
  state: string;
};

export type Education = {
  institution: string;
  url?: string;
  major?: DegreeMajor;
  logoUrl?: string;
  minors?: string[];
  concentrations?: string[];
  gpa?: number;
  start: string;
  end: string;
  description: string[];
  location: Location;
};

const RIT: Education = {
  location: { city: "Henrietta", state: "NY" },
  institution: "Rochester Institute of Technology",
  url: "https://www.rit.edu",
  gpa: 3.49,
  logoUrl:
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rochester_Institute_of_Technology_seal.svg/1024px-Rochester_Institute_of_Technology_seal.svg.png",
  major: { name: "Management Information Systems", type: "Bachelor's of Science", typeAbbr: "BS" },
  minors: ["Digital Business", "Web Development"],
  concentrations: ["Psychology"],
  start: "08/2013",
  end: "12/2017",
  description: ["Dean's list Student", "Senior Vice President of Delta Sigma Pi (DSP)"],
};

const FLATIRON: Education = {
  institution: "Flatiron School",
  url: "https://flatironschool.com",
  logoUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/FS_wiki.png",
  location: { city: "Denver", state: "CO" },
  start: "04/2020",
  end: "08/2020",
  description: ["Immersive Full-stack Software Engineering Bootcamp"],
};

export const EDUCATION: Education[] = [RIT, FLATIRON];
