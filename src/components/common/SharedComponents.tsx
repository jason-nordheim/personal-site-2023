import { FC, PropsWithChildren } from "react";
import { cx } from "../../styled-system/css";
import { HTMLElementProps, HeadingProps, PProps } from "./ElementProps";

export const PageContainer: FC<PropsWithChildren<HTMLElementProps>> = ({ children, className, ...rest }) => {
  return (
    <div>
      <section {...rest} className={cx("page-container", className)}>
        {children}
      </section>
    </div>
  );
};

export const PageTitle: FC<PropsWithChildren<HeadingProps>> = ({ children, className, ...rest }) => {
  return (
    <h1 className={cx("page-title", className)} {...rest}>
      {children}
    </h1>
  );
};

export const SubTitle: FC<PropsWithChildren<HeadingProps>> = ({ children, className, ...rest }) => {
  return (
    <h3 className={cx("sub-title", className)} {...rest}>
      {children}
    </h3>
  );
};

export const Caption: FC<PropsWithChildren<PProps>> = ({ children, className, ...rest }) => {
  return (
    <p className={cx("caption", className)} {...rest}>
      {children}
    </p>
  );
};
