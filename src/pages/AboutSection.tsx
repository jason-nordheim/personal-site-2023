import { section, sectionCaption, sectionSubTitle, sectionTitle } from "../styles";
import { Hero } from "../components/Hero";

export const AboutSection = () => {
  return (
    <section id="about" className={section({})}>
      <p className={sectionTitle({})}>About</p>
      <Hero />
      <br />
      <p className={sectionSubTitle({})}>Introduction</p>
      <p className={sectionCaption({})}>
        Jason Nordheim is an accomplished Full-stack Engineer with an unyielding passion for crafting exceptional web
        applications. With a diverse set of roles and experience, Jason brings an impressive skill set and a proven
        track record of delivering high-quality solutions to complex challenges.
      </p>
      <br />
      <p className={sectionSubTitle({})}>Technical Expertise</p>
      <p className={sectionCaption({})}>
        Jason's expertise lies in client-side JavaScript and the React Framework, which he has been utilizing for over 4
        years. His mastery in these technologies allows him to seamlessly brainstorm and collaborate with Product
        Managers and Designers to conceptualize innovative features. His ability to build complex layouts with CSS and
        HTML adds a layer of sophistication to his work, ensuring a flawless user experience.
      </p>
      <br />
      <p className={sectionSubTitle({})}>Collaborative Mindset</p>
      <p className={sectionCaption({})}>
        Jason's collaborative nature shines through in his ability to work harmoniously with cross-functional teams. He
        has an extensive history of collaborating with Application Engineering teams to bring new features to life. He
        is a strong communicator with a keen understanding of the importance of UX and design sensibilities,
        consistently pushing for pixel-perfect implementations and sweating the small details.
      </p>
      <br />
      <p className={sectionSubTitle({})}>Technical Insight</p>
      <p className={sectionCaption({})}>
        One of Jason’s standout qualities is his aptitude for keeping up with the latest web technologies. He is always
        excited to explore new solutions to emerging challenges and to share his insights with his colleagues. Jason is
        known for his ability to dissect complex systems, identifying areas of improvement, and creating practical
        solutions. His experience in investigating and enhancing JavaScript performance further demonstrates his
        commitment to delivering top-notch applications.
      </p>
      <br />
      <p className={sectionSubTitle({})}>Mentorship and Leadership</p>
      <p className={sectionCaption({})}>
        Jason's dedication to mentorship is evident in his willingness to guide and mentor fellow engineers. He believes
        in fostering a culture of learning and growth within his team, striving to elevate everyone's skills. His
        leadership extends to deep code reviews, which not only ensure code quality but also provide a platform for
        knowledge exchange.
      </p>
      <br />
      <p className={sectionSubTitle({})}>Continuous Improvement</p>
      <p className={sectionCaption({})}>
        Driven by self-awareness and a desire to continually improve, Jason embodies the spirit of growth and learning.
        His open-mindedness and adaptability have enabled him to thrive in various environments, including small
        start-up settings. He understands the value of taking on new challenges and expanding his skill set.
      </p>
      <br />
      <p className={sectionSubTitle({})}>Education and Beyond</p>
      <p className={sectionCaption({})}>
        Jason holds a degree in Management Information Systems (MIS) from Rochester Institute of Technology, which laid
        the foundation for his technical career. Dedicated to staying current with industry trends and embracing new
        technologies demonstrates Jason’s commitment to excellence.
      </p>
      <p className={sectionCaption({})}>
        In conclusion, Jason's extensive experience, technical expertise, collaborative spirit, and unquenchable
        curiosity make him an ideal candidate for a wide variety of Engineering roles. His drive to craft exceptional
        web applications aligning with the company's vision, and his passion for pushing boundaries will positions him
        to be a top contributor in the world of software development.
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
