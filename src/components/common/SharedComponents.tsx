import { FC, PropsWithChildren } from "react";
import { container } from "../../styled-system/patterns";
import { css, cx } from "../../styled-system/css";
import { HTMLElementProps, HeadingProps, PProps } from "./ElementProps";

const BASE_STYLES = {
  Container: container({
    display: "flex",
    flexDirection: "column",
    px: "10px",
    py: "10px",
    pb: "50px",
    bg: "#f7f7f7",
    border: "1px solid gray",
    rounded: "md",
    m: "10px",
    flex: 1,
  }),
  Title: css({
    textAlign: "center",
    textStyle: "2xl",
    fontFamily: "serif",
    fontWeight: "semibold",
  }),
  Subtitle: css({ fontSize: "md", fontWeight: "semibold", borderBottom: "1px solid black" }),
  Caption: css({ textStyle: "sm", mt: "2" }),
};

export const PageContainer: FC<PropsWithChildren<HTMLElementProps>> = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={cx(BASE_STYLES.Container, className)}>
      {children}
    </section>
  );
};

export const PageTitle: FC<PropsWithChildren<HeadingProps>> = ({ children, className, ...rest }) => {
  return (
    <h1 className={cx(BASE_STYLES.Title, className)} {...rest}>
      {children}
    </h1>
  );
};

export const SubTitle: FC<PropsWithChildren<HeadingProps>> = ({ children, className, ...rest }) => {
  return (
    <h3 className={cx(BASE_STYLES.Subtitle, className)} {...rest}>
      {children}
    </h3>
  );
};

export const Caption: FC<PropsWithChildren<PProps>> = ({ children, className, ...rest }) => {
  return (
    <p className={cx(BASE_STYLES.Caption, className)} {...rest}>
      {children}
    </p>
  );
};