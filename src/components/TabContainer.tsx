import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";

export const TabContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul
      className={css({
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
        smDown: {
          fontSize: "sm",
          fontStretch: "condensed",
        },
      })}
    >
      {children}
    </ul>
  );
};
