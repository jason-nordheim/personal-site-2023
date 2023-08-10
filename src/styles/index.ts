import { css } from "../styled-system/css";
import { container } from "../styled-system/patterns";
import { SystemStyleObject } from "../styled-system/types";

export const section = (styles: SystemStyleObject) =>
  container({ my: 2, px: 1, py: 1, w: "100%", mb: "10", ...styles });
export const sectionTitle = (styles: SystemStyleObject) => css({ textAlign: "center", textStyle: "lg", ...styles });
export const sectionSubTitle = (styles: SystemStyleObject) => css({ fontSize: "md", ...styles });
export const sectionCaption = (styles: SystemStyleObject) => css({ textStyle: "sm", ...styles });
