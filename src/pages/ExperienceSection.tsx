import { FC } from "react";
import { Section } from "../components/Section";
import { EXPERIENCE, Experience } from "../lib";
import { Grid, Typography } from "@mui/material";

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const makeMonthDayString = (dateStr: string) => {
  const parts = dateStr.split("/");

  if (parts.length !== 2) throw new Error(`Unexpected Format. Date string should be in MM/DD format`);

  const month = parseInt(parts[0]);
  const year = parseInt(parts[1]);

  const date = new Date(year, month - 1);

  return `${MONTHS[date.getMonth()]} ${date.getFullYear()}`;
};

const formatDateString = (start: string, end: string) => {
  return `${makeMonthDayString(start)} - ${makeMonthDayString(end)}`;
};

const ExperienceCard: FC<Experience> = ({ description, employer, end, start, responsibilities, title, location }) => {
  return (
    <Grid item>
      <Typography fontWeight="800" variant="subtitle1">{`${title} | ${employer}`}</Typography>
      <Typography variant="subtitle2">{formatDateString(start, end)}</Typography>
    </Grid>
  );
};

export const ExperienceSection = () => {
  return (
    <Section id="experience">
      {EXPERIENCE.map((e) => (
        <ExperienceCard {...e} />
      ))}
    </Section>
  );
};
