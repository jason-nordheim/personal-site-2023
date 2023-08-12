import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";

export const CardWrapper: FC<PropsWithChildren<{ id?: string }>> = ({ children }) => {
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
        maxWidth: "lg",
        justifySelf: "center",
        boxShadow: "5px 5px 5px gray",
      })}
    >
      {children}
    </article>
  );
};
