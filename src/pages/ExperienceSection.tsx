import { FC } from "react";
import { EXPERIENCE, Experience } from "../lib";
import { css } from "../styled-system/css";
import { section } from "../styles";

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
    <article
      className={css({
        display: "flex",
        flexDirection: "column",
        rounded: "md",
        border: "1px solid black",
        my: "10px",
        p: "5px",
      })}
    >
      <p className={css({ textStyle: "lg", fontWeight: "bold", textAlign: "center" })}>{`${title} | ${employer}`}</p>
      <p className={css({ textStyle: "md", fontVariant: "small-caps" })}>
        {location ? `${formatDateString(start, end)}, ${location}` : formatDateString(start, end)}
      </p>
      {description && <p className={css({ textStyle: "sm" })}>{description}</p>}
      <ul className={css({ listStyle: "outside", ml: 5, fontSize: "xs" })}>
        {responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </article>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="skills" className={section({})}>
      {EXPERIENCE.map((e) => (
        <ExperienceCard key={e.title} {...e} />
      ))}
    </section>
  );
};
