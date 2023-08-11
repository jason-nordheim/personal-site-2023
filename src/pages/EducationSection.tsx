import { FC } from "react";
import { DegreeMajor, EDUCATION, Education, Location } from "../lib/education";
import { section, sectionSubTitle, sectionTitle } from "../styles";
import { PANDA_BREAKPOINTS, PandaBreakpoints, getScreenSize } from "../lib/utils/screenSize";
import { css } from "../styled-system/css";

const detailsStyle = { smDown: { fontSize: "sm", fontStretch: "condensed", lineHeight: "sm" } };

const formatMajor = (major: DegreeMajor, screenSize: PandaBreakpoints) => {
  switch (screenSize) {
    case PANDA_BREAKPOINTS.sm:
      return `${major.typeAbbr}: ${major.name}`;
    case PANDA_BREAKPOINTS.md:
    case PANDA_BREAKPOINTS.lg:
    case PANDA_BREAKPOINTS.xl:
    case PANDA_BREAKPOINTS["2xl"]:
    default:
      return `${major.type} (${major.typeAbbr}) in ${major.name}`;
  }
};

const EducationCardHeader: FC<{ institution: string; start: string; end: string; url?: string }> = ({
  institution,
  start,
  end,
  url,
}) => {
  return (
    <a href={url || "#"} className={css({ display: "flex", mb: "4px" })}>
      <h3 className={sectionSubTitle({ flex: 1, ...detailsStyle })}>{institution}</h3>
      <h3
        className={sectionSubTitle({
          ...detailsStyle,
        })}
      >{`${start} - ${end}`}</h3>
    </a>
  );
};

const EducationMajor: FC<{ major?: DegreeMajor }> = ({ major }) => {
  const size = getScreenSize();
  if (!major) return null;
  return (
    <li className={css({ ...detailsStyle })}>
      <span>Major: </span>
      {formatMajor(major, size)}
    </li>
  );
};

const GradePoint: FC<{ gpa: number | undefined }> = ({ gpa }) => {
  if (!gpa) return null;
  return (
    <li className={css({ ...detailsStyle })}>
      <span>GPA: </span>
      {`${gpa} / 4.00`}
    </li>
  );
};

const EducationLocation: FC<Location> = ({ city, state }) => {
  return (
    <li className={css({ ...detailsStyle })}>
      <span>Location: </span>
      {`${city}, ${state}`}
    </li>
  );
};

const EducationDescription: FC<{ descriptions: string[] }> = ({ descriptions }) => {
  descriptions.sort((a, b) => b.length - a.length);
  return (
    <>
      {descriptions?.map((d) => (
        <li className={css({ ...detailsStyle })} key={d}>
          {d}
        </li>
      ))}
    </>
  );
};

const EducationMinors: FC<{ minors?: string[] }> = ({ minors }) => {
  if (!minors) return null;
  return <li className={css({ ...detailsStyle })}>{`Minors: ${minors.join(", ")}`}</li>;
};

const EducationCard: FC<Education> = ({ description, end, start, institution, location, gpa, major, minors, url }) => {
  return (
    <div id={`education_${institution}`} className={css({ my: "10px" })}>
      <EducationCardHeader institution={institution} start={start} end={end} url={url} />
      <ul className={css({ listStyle: "outside", ml: "4" })}>
        <EducationMajor major={major} />
        <EducationMinors minors={minors} />
        <EducationLocation city={location.city} state={location.state} />
        <GradePoint gpa={gpa} />
        <EducationDescription descriptions={description} />
      </ul>
    </div>
  );
};

export const EducationSection = () => {
  return (
    <section id="education" className={section({})}>
      <h1 className={sectionTitle({})}>Education</h1>
      {EDUCATION.map((e) => (
        <EducationCard key={e.institution} {...e} />
      ))}
    </section>
  );
};
