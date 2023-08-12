import { ValueOf } from "ts-essentials";
import { SkillCategory } from "../lib";

export const SORT_OPTIONS = {
  name: "name",
  category: "category",
} as const;

export type SortOptions = ValueOf<typeof SORT_OPTIONS>;

export type FilterCategories = SkillCategory | "All";

export const capitalizeFirstChar = (str: string) => {
  const firstChar = str[0].toUpperCase();
  const updatedStr = `${firstChar}${str.slice(1)}`;
  return updatedStr;
};
