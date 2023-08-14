import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";
import { Nested } from "../styled-system/types/conditions";
import { CssVarProperties, SystemProperties } from "../styled-system/types/style-props";

type CardGridProps = {
  sm?: Nested<SystemProperties & CssVarProperties> | undefined;
  md?: Nested<SystemProperties & CssVarProperties> | undefined;
  lg?: Nested<SystemProperties & CssVarProperties> | undefined;
  id?: string;
};

const DEFAULTS: CardGridProps = {
  sm: { gridTemplateColumns: "1" },
  md: { gridTemplateColumns: "1" },
  lg: { gridTemplateColumns: "1" },
};

export const CardGrid: FC<PropsWithChildren<CardGridProps>> = ({ children, id, sm, md, lg }) => {
  return (
    <div
      id={id}
      className={css({
        display: "grid",
        sm: sm || DEFAULTS.sm,
        md: md || DEFAULTS.md,
        lg: lg || DEFAULTS.lg,
        gap: "10px",
      })}
    >
      {children}
    </div>
  );
};
