import { section, sectionCaption, sectionSubTitle, sectionTitle } from "../styles";
import { Hero } from "../components/Hero";
import { CardGrid } from "../components/CardGrid";
import { CardWrapper } from "../components/CardWrapper";
import { FC } from "react";

const Section: FC<{ title?: string; caption: string }> = ({ title, caption }) => {
  return (
    <>
      {title ? <p className={sectionSubTitle({})}>{title}</p> : null}
      <p className={sectionCaption({})}>{caption}</p>
      <br />
    </>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className={section({})}>
      <p className={sectionTitle({})}>About</p>
      <Hero />
      <br />
      <CardGrid lg={{ gridTemplateColumns: "1" }}>
        <CardWrapper>
          <Section
            title="Introduction"
            caption="Jason Nordheim is an accomplished Full-stack Engineer with an unyielding passion for crafting exceptional
            web applications. With a diverse set of roles and experience, Jason brings an impressive skill set and a
            proven track record of delivering high-quality solutions to complex challenges."
          />
          <Section
            title="Technical Expertise"
            caption="Jason's expertise lies in client-side JavaScript and the React Framework, which he has been utilizing for
            over 4 years. His mastery in these technologies allows him to seamlessly brainstorm and collaborate with
            Product Managers and Designers to conceptualize innovative features. His ability to build complex layouts
            with CSS and HTML adds a layer of sophistication to his work, ensuring a flawless user experience."
          />
          <Section
            title="Collaborative Mindset"
            caption="Jason's collaborative nature shines through in his ability to work harmoniously with cross-functional teams.
            He has an extensive history of collaborating with Application Engineering teams to bring new features to
            life. He is a strong communicator with a keen understanding of the importance of UX and design
            sensibilities, consistently pushing for pixel-perfect implementations and sweating the small details."
          />
          <Section
            title="Technical Insight"
            caption="One of Jason's standout qualities is his aptitude for keeping up with the latest web technologies. He is
            always excited to explore new solutions to emerging challenges and to share his insights with his
            colleagues. Jason is known for his ability to dissect complex systems, identifying areas of improvement, and
            creating practical solutions. His experience in investigating and enhancing JavaScript performance further
            demonstrates his commitment to delivering top-notch applications."
          />
          <Section
            title="Mentorship and Leadership"
            caption=" Jason's dedication to mentorship is evident in his willingness to guide and mentor fellow engineers. He
            believes in fostering a culture of learning and growth within his team, striving to elevate everyone's
            skills. His leadership extends to deep code reviews, which not only ensure code quality but also provide a
            platform for knowledge exchange."
          />
          <Section
            title="Continuous Improvement"
            caption="Driven by self-awareness and a desire to continually improve, Jason embodies the spirit of growth and
            learning. His open-mindedness and adaptability have enabled him to thrive in various environments, including
            small start-up settings. He understands the value of taking on new challenges and expanding his skill set."
          />
          <Section
            title="Education and Beyond"
            caption="Jason holds a degree in Management Information Systems (MIS) from Rochester Institute of Technology, which
            laid the foundation for his technical career. Dedicated to staying current with industry trends and
            embracing new technologies demonstrates Jason’s commitment to excellence."
          />
          <Section
            title="Summary"
            caption="Jason's extensive experience, technical expertise, collaborative spirit, and unquenchable
            curiosity make him an ideal candidate for a wide variety of Engineering roles. His drive to craft
            exceptional web applications aligning with the company's vision, and his passion for pushing boundaries will
            positions him to be a top contributor in the world of software development."
          />
        </CardWrapper>
      </CardGrid>
    </section>
  );
};
