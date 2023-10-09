import { FC, PropsWithChildren } from "react";
import { container } from "../styled-system/patterns";
import { DivProps } from "./common";

export const SkillBubbleContainer: FC<PropsWithChildren<DivProps>> = ({ children, ...rest }) => {
  return (
    <div
      className={container({
        display: "flow",
        textAlign: "center",
        flexFlow: "row",
        opacity: 0.8,
        rounded: "md",
        lineHeight: "tight",
      })}
      {...rest}
    >
      {children}
    </div>
  );
};
