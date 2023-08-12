import { css } from "../styled-system/css";
import profile from "../assets/profile.jpeg";

export const Hero = () => {
  return (
    <section className={css({ my: 2, px: 1, py: 1, placeContent: "center", display: "flex" })}>
      <div
        className={css({
          height: "200px",
          width: "200px",
          md: {
            height: "400px",
            width: "400px",
          },
          lg: {
            height: "500px",
            width: "500px",
          },
          overflow: "hidden",
          rounded: "50%",
          border: "1px solid black",
          zIndex: -1,
        })}
      >
        <img src={profile} alt="jason nordheim" height="350px" className={css({ translate: "0px 70px", mt: "-20" })} />
      </div>
    </section>
  );
};
