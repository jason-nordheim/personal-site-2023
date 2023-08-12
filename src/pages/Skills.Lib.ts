import { ValueOf } from "ts-essentials";
import { SKILL_CATEGORY, SkillCategory, SkillTag, TAGS } from "../lib";
import { css } from "../styled-system/css";
import { SystemStyleObject } from "../styled-system/types";

export type SortOptions = ValueOf<typeof SORT_OPTIONS>;
export type Filters = SkillTag | "All" | "None";
export type TagFilters = { [k: Filters]: boolean };
export type FilterCategories = SkillCategory | "All";

export const FILTERS_ALL = {
  [TAGS.Api]: true,
  [TAGS.Backend]: true,
  [TAGS.Collaboration]: true,
  [TAGS.Databases]: true,
  [TAGS.DevOps]: true,
  [TAGS.Documentation]: true,
  [TAGS.FrontEnd]: true,
  [TAGS.ProjectManagement]: true,
  [TAGS.Software]: true,
  [TAGS.Testing]: true,
  All: true,
  None: false,
};

export const FILTER_NONE = {
  [TAGS.Api]: false,
  [TAGS.Backend]: false,
  [TAGS.Collaboration]: false,
  [TAGS.Databases]: false,
  [TAGS.DevOps]: false,
  [TAGS.Documentation]: false,
  [TAGS.FrontEnd]: false,
  [TAGS.ProjectManagement]: false,
  [TAGS.Software]: false,
  [TAGS.Testing]: false,
  All: false,
  None: true,
};

export const SORT_OPTIONS = {
  name: "name",
  category: "category",
} as const;

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
};

export const capitalizeFirstChar = (str: string) => {
  const firstChar = str[0].toUpperCase();
  const updatedStr = `${firstChar}${str.slice(1)}`;
  return updatedStr;
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
