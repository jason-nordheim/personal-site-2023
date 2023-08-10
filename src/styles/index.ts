import { css } from "../styled-system/css";
import { container } from "../styled-system/patterns";
import { SystemStyleObject } from "../styled-system/types";

export const section = (styles: SystemStyleObject) =>
  container({
    display: "flex",
    flexDirection: "column",
    px: "10px",
    py: "10px",
    pb: "50px",
    bg: "gray.100",
    border: "1px solid black",
    rounded: "md",
    m: "10px",
    flex: 1,
    ...styles,
  });
export const sectionTitle = (styles: SystemStyleObject) =>
  css({ textAlign: "center", textStyle: "2xl", fontFamily: "serif", ...styles });
export const sectionSubTitle = (styles: SystemStyleObject) => css({ fontSize: "md", ...styles });
export const sectionCaption = (styles: SystemStyleObject) => css({ textStyle: "sm", ...styles });