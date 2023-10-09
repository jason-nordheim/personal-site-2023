import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";
import { FormProps } from "./common";

export const SkillsForm: FC<PropsWithChildren<FormProps>> = ({ children, ...rest }) => {
  return (
    <form
      className={css({ display: "flex", flexDirection: "row", fontFamily: "monospace", gap: "10px", my: "10px" })}
      {...rest}
    >
      {children}
    </form>
  );
};
