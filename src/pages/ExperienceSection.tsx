import { FC } from "react";
import { EXPERIENCE, Experience } from "../lib";
import { css } from "../styled-system/css";
import { section, sectionTitle } from "../styles";
import { circle } from "../styled-system/patterns";
import { PANDA_BREAKPOINTS, getScreenSize } from "../lib/utils/screenSize";

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

const getLogoImageSize = () => {
  const screenSize = getScreenSize();
  switch (screenSize) {
    case PANDA_BREAKPOINTS.sm:
      return "75px";
    case PANDA_BREAKPOINTS.md:
      return "100px";
    case PANDA_BREAKPOINTS.lg:
      return "125px";
    case PANDA_BREAKPOINTS.xl:
    case PANDA_BREAKPOINTS["2xl"]:
    default:
      return "150px";
  }
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
  const logoSize = getLogoImageSize();
  return (
    <article
      className={css({
        bg: "#gray.100",
        display: "flex",
        flexDirection: "column",
        rounded: "md",
        border: "1px solid gray",
        my: "10px",
        px: "10px",
        py: "10px",
        maxWidth: "lg",
        justifySelf: "center",
        boxShadow: "5px 5px 5px gray",
      })}
    >
      <p
        className={css({
          fontFamily: "serif",
          fontWeight: "semibold",
          textStyle: "xl",
          textAlign: "center",
          lineHeight: "loose",
          smDown: { "& div": { width: "50px" } },
        })}
      >
        {title}
      </p>
      {image && (
        <div
          style={{ height: logoSize, width: logoSize }}
          className={circle({
            display: "flex",
            alignContent: "center",
            placeContent: "center",
            alignSelf: "center",
          })}
        >
          <img
            src={image}
            alt={`${employer} logo`}
            className={circle({
              justifySelf: "center",
              alignSelf: "center",
              width: "100px",
              overflow: "hidden",
            })}
          />
        </div>
      )}
      <p
        className={css({
          fontFamily: "sans-serif",
          textStyle: "md",
          textAlign: "center",
          lineHeight: "snug",
          pt: "10px",
          smDown: {
            fontSize: "xl",
            fontFamily: "serif",
          },
        })}
      >
        {employer}
      </p>
      <span
        className={css({
          borderBottom: "1px solid gray",
          mb: "10px",
          textStyle: "sm",
        })}
      >
        <p
          className={css({
            display: "flex",
            justifyContent: "space-between",
            fontVariant: "small-caps",
            mx: "10px",
            smDown: { display: "flex", flexDirection: "column", fontSize: "14px", fontWeight: "semibold" },
          })}
        >
          {location && (
            <span className={css({ smDown: { alignSelf: "center" }, lg: { alignSelf: "flex-start" } })}>
              {location}
            </span>
          )}
          <span className={css({ smDown: { alignSelf: "center", color: "gray.800" }, alignSelf: "flex-end" })}>
            {formatDateString(start, end)}
          </span>
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
