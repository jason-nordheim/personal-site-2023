import { FC, PropsWithChildren } from "react";
import { css, cx } from "../styled-system/css";
import { HTMLElementProps } from "./common";

const baseStyles = css({
  bg: "#gray.100",
  display: "flex",
  flexDirection: "column",
  rounded: "md",
  border: "1px solid gray",
  my: "10px",
  px: "10px",
  py: "10px",
  width: "xl",
  transition: "linear",
  transitionDuration: "normal",
  lgDown: {
    width: "md",
  },
  xl: {
    width: "xl",
  },
  ["2xl"]: {
    justifyContent: "space-around",
    width: "2xl",
  },
  justifySelf: "center",
  boxShadow: "5px 5px 5px gray",
});
type CardContainerProps = PropsWithChildren<HTMLElementProps>;

export const CardContainer: FC<CardContainerProps> = ({ children, className, ...rest }) => {
  return (
    <article className={cx(baseStyles, className)} {...rest}>
      {children}
    </article>
  );
};
