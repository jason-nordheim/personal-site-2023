import { DetailedHTMLProps, FC, PropsWithChildren, HTMLAttributes } from "react";
import { container } from "../../styled-system/patterns";
import { css, cx } from "../../styled-system/css";
import { sectionTitle } from "../../styles";

type PageContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
type PageTitleProps = DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

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
};

export const PageContainer: FC<PropsWithChildren<PageContainerProps>> = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={cx(BASE_STYLES.Container, className)}>
      {children}
    </section>
  );
};

export const PageTitle: FC<PropsWithChildren<PageTitleProps>> = ({ children, className, ...rest }) => {
  return (
    <h1 className={cx(BASE_STYLES.Title, className)} {...rest}>
      {children}
    </h1>
  );
};
