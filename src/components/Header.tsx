import { css } from "../styled-system/css";

export const Header = () => {
  return (
    <header style={{ display: "flex", justifyContent: "center" }}>
      <h1 className={css({ fontSize: "4xl", fontFamily: "serif" })}>Jason Nordheim</h1>
    </header>
  );
};
