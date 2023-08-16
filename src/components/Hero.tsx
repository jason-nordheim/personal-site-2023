import { css } from "../styled-system/css";
import programmer from "../assets/programmer.svg";
export const Hero = () => {
  const imageStyles = css({ sm: { height: "200px" }, md: { height: "300px" } });
  return (
    <section
      id="hero"
      className={css({
        my: 2,
        px: 1,
        py: 1,
        placeContent: "center",
        display: "flex",
        sm: { height: "200px" },
        md: { height: "300px" },
      })}
    >
      <img src={programmer} alt="programmer" className={imageStyles} />
    </section>
  );
};
