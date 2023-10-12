import { css } from "../../styled-system/css";
import { SystemStyleObject } from "../../styled-system/types/system-types";
import { SKILL_CATEGORY, SkillCategory } from "../skills";

const BASE_SKILL_BUBBLE_STYLES: SystemStyleObject = {
  lgTo2xl: { fontWeight: "bold" },
  smDown: { fontSize: "xs", p: "3px, 5px" },
  display: "inline-block",
  fontSize: "sm",
  borderRadius: "md",
  border: "1px solid black",
  fontWeight: "semibold",
  fontStretch: "condensed",
  margin: "10px",
  minWidth: "100px",
  p: "5px 10px",
  _hover: {
    textDecoration: "underline",
  },
};

export const makeSkillStyles = (category: SkillCategory) => {
  switch (category.trim().toLowerCase()) {
    case SKILL_CATEGORY.Concept.toLowerCase():
      return css({
        ...BASE_SKILL_BUBBLE_STYLES,
        backgroundColor: "yellow.200",
      });
    case SKILL_CATEGORY.Framework.toLowerCase():
      return css({
        ...BASE_SKILL_BUBBLE_STYLES,
        backgroundColor: "red.300",
      });
    case SKILL_CATEGORY.Language.toLowerCase():
      return css({
        ...BASE_SKILL_BUBBLE_STYLES,
        backgroundColor: "blue.300",
      });
    case SKILL_CATEGORY.Library.toLowerCase():
      return css({
        ...BASE_SKILL_BUBBLE_STYLES,
        backgroundColor: "green.300",
      });
    case SKILL_CATEGORY.SoftwareAndTools.toLowerCase():
      return css({
        ...BASE_SKILL_BUBBLE_STYLES,
        backgroundColor: "orange.300",
      });
    case SKILL_CATEGORY.Technology.toLowerCase():
      return css({
        ...BASE_SKILL_BUBBLE_STYLES,
        backgroundColor: "amber.300",
      });
    default:
      return css({
        ...BASE_SKILL_BUBBLE_STYLES,
        backgroundColor: "blue.100",
      });
  }
};
