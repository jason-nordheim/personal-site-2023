import { DetailedHTMLProps, FC, PropsWithChildren, HTMLAttributes } from "react";
import { container } from "../../styled-system/patterns";
import { cx } from "../../styled-system/css";

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const BASE_STYLES = container({
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
});

export const PageContainer: FC<PropsWithChildren<Props>> = ({ children, className, ...rest }) => {
  return (
    <section {...rest} className={cx(BASE_STYLES, className)}>
      {children}
    </section>
  );
};
