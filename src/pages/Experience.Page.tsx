import { FC } from "react";
import { EXPERIENCE, Experience } from "../lib";
import { css } from "../styled-system/css";
import { circle } from "../styled-system/patterns";
import { PANDA_BREAKPOINTS, getScreenSize } from "../lib/utils/screenSize";
import { CardContainer } from "../components/CardContainer";
import { CardGrid } from "../components/CardGrid";
import { PageContainer, PageTitle } from "../components/common";

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
    <CardContainer>
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
          className={circle({
            display: "flex",
            alignContent: "center",
            alignSelf: "center",
            textAlign: "center",
          })}
        >
          <img
            src={image}
            alt={`${employer} logo`}
            style={{ height: logoSize, width: logoSize }}
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
    </CardContainer>
  );
};

export const ExperiencePage = () => {
  return (
    <PageContainer>
      <PageTitle>Experience</PageTitle>
      <CardGrid>
        {EXPERIENCE.map((e) => (
          <ExperienceCard key={e.title} {...e} />
        ))}
      </CardGrid>
    </PageContainer>
  );
};
