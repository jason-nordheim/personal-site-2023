import { useMemo } from "react";
import { FilterCategories, SKILLS, SORT_OPTIONS, Skill, TagFilters, skillHasTag, sortAscending } from "../lib";
import { ValueOf } from "ts-essentials";
import { allPropertiesTruthy } from "../lib/utils/general";

const useTagFilter = (skills: Skill[], filters: TagFilters) => {
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
