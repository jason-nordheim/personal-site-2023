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
    responsibilities: [],
    start: "05/2021",
    end: "08/2023",
  },
  {
    employer: 'Paychex',
    title: 'Desktop Engineer',
    description: "Webster, New York",
    responsibilities: [],
    start: "06/2018",
    end: "03/2020"
  },
  {
    employer: 'Rochester Precision Optics',
    title: "Data Analyst & Developer",
    description: '',
    responsibilities: [],
    start: '',
    end: ''
  }
];
