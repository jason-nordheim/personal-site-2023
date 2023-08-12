import { useMemo } from "react";
import { SKILLS, Skill, skillHasTag } from "../lib";
import { FilterCategories, SORT_OPTIONS } from "./Skills.Lib";
import { sortAscending } from "../lib/utils/sorting";
import { ValueOf } from "ts-essentials";

const allPropertiesTruthy = (obj: object) => {
  return Object.values(obj).every((x) => x == true);
};

const useTagFilter = (skills: Skill[], filters: NewType) => {
  const skillsFilteredByTag = useMemo(() => {
    if (!filters || allPropertiesTruthy(filters) || filters["All"]) return skills;

    if (filters["None"]) return [];

    return skills.filter((skill) => {
      const selectedFilters = Object.keys(filters).filter((x) => filters[x]);
      for (let i = 0; i < selectedFilters.length; i++) {
        const tag = selectedFilters[i];
        if (skillHasTag(skill, tag)) {
          i = selectedFilters.length - 1;
          return true;
        }
        return false;
      }
      selectedFilters.forEach((tag) => {
        console.log({ tag, hasTag: skillHasTag(skill, tag), skill });
        if (skillHasTag(skill, tag)) {
          return true;
        }
      });
      return false;
    });
  }, [skills, filters]);

  return skillsFilteredByTag;
};

const useCategoryFilter = (skills: Skill[], category: FilterCategories) => {
  return skills.filter((skill) => {
    if (category === "All") return true;
    if (skill.category == category) return true;
    return false;
  });
};

export const useSortedAndFilteredSkills = (
  sortBy: ValueOf<typeof SORT_OPTIONS> = SORT_OPTIONS.name,
  filters: TagFilters,
  selectedCategory: FilterCategories = "All"
) => {
  const sortedSkills =
    SORT_OPTIONS.category == sortBy
      ? SKILLS.sort((a, b) => sortAscending(a.category, b.category))
      : SKILLS.sort((a, b) => sortAscending(a.name, b.name));

  const skillsFilteredByTag = useTagFilter(sortedSkills, filters);
  const categoryFilteredSkills = useCategoryFilter(skillsFilteredByTag, selectedCategory);

  return categoryFilteredSkills;
};
