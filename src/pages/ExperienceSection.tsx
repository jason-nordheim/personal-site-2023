import { FC } from "react";
import { EXPERIENCE, Experience } from "../lib";
import { css } from "../styled-system/css";
import { section, sectionTitle } from "../styles";
import { circle } from "../styled-system/patterns";

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

const ExperienceCard: FC<Experience> = ({
  description,
  employer,
  end,
  start,
  responsibilities,
  title,
  location,
  image,
}) => {
  return (
    <article
      className={css({
        bg: "gray.100",
        display: "flex",
        flexDirection: "column",
        rounded: "md",
        border: "1px solid black",
        my: "10px",
        px: "10px",
        py: "10px",
        maxWidth: "lg",
        justifySelf: "center",
        boxShadow: "5px 5px 5px gray",
      })}
    >
      <p className={css({ fontFamily: "serif", textStyle: "xl", textAlign: "center", lineHeight: "loose" })}>{title}</p>

      {image && (
        <img src={image} alt={`${employer} logo`} className={circle({ alignSelf: "center", width: "100px" })} />
      )}
      <p
        className={css({
          fontFamily: "sans-serif",
          textStyle: "md",
          textAlign: "center",
          lineHeight: "snug",
          pt: "10px",
        })}
      >
        {employer}
      </p>
      <span className={css({ borderBottom: "1px solid gray", mb: "10px", textStyle: "sm" })}>
        <p
          className={css({
            display: "flex",
            justifyContent: "space-between",
            fontVariant: "small-caps",
            mx: "10px",
          })}
        >
          {location && <span className={css({ alignSelf: "flex-start" })}>{location}</span>}
          <span className={css({ alignSelf: "flex-end" })}>{formatDateString(start, end)}</span>
        </p>
      </span>
      {description && <p className={css({ textStyle: "sm" })}>{description}</p>}
      <ul className={css({ listStyle: "outside", ml: 5, fontSize: "xs", px: "10px" })}>
        {responsibilities.map((r) => (
          <li key={r}>{r}</li>
        ))}
      </ul>
    </article>
  );
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className={section({})}>
      <h2 className={sectionTitle({})}>Experience</h2>
      <div
        className={css({
          display: "grid",
          md: { gridTemplateColumns: "1" },
          lg: { gridTemplateColumns: "2" },
          gap: "10px",
        })}
      >
        {EXPERIENCE.map((e) => (
          <ExperienceCard key={e.title} {...e} />
        ))}
      </div>
    </section>
  );
};
