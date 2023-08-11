import { section, sectionCaption, sectionSubTitle, sectionTitle } from "../styles";
import { Hero } from "../components/Hero";

export const AboutSection = () => {
  return (
    <section id="about" className={section({})}>
      <p className={sectionTitle({})}>About Me</p>
      <Hero />
      <br />
      <p className={sectionSubTitle({})}>Software Engineer</p>
      <p className={sectionCaption({})}>
        I am full-stack software with a background in System Administration, Automation and Data-Analysis. My forte is
        building full-stack web applications using technologies like React, Express & Webpack. I always strive to reach
        beyond my comfort zone, to grow my skills and experience.
      </p>
      <br />
      <p className={sectionSubTitle({})}>Outside of Work</p>
      <p className={sectionCaption({})}>
        When I'm not building websites and APIs, I enjoy exploring the great outdoors. Mostly, I am a hiker, a runner,
        and a photographer.
      </p>
    </section>
  );
};
