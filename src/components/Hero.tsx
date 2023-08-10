import { css } from "../styled-system/css";
import profile from "../assets/profile.jpeg";

export const Hero = () => {
  return (
    <section className={css({ my: 2, px: 1, py: 1, placeContent: "center", display: "flex" })}>
      <img className={css({ height: "300px", rounded: "lg" })} src={profile} alt="jason nordheim" />
    </section>
  );
};
