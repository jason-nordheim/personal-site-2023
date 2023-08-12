import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";

export const CardContainer: FC<PropsWithChildren<{ id?: string }>> = ({ children }) => {
  return (
    <article
      className={css({
        bg: "#gray.100",
        display: "flex",
        flexDirection: "column",
        rounded: "md",
        border: "1px solid gray",
        my: "10px",
        px: "10px",
        py: "10px",
        width: "xl",
        xl: {
          transition: "linear",
          transitionDuration: "normal",
          width: "2xl",
        },
        justifySelf: "center",
        boxShadow: "5px 5px 5px gray",
      })}
    >
      {children}
    </article>
  );
};
