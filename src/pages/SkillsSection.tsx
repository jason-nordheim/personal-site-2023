import { SKILLS, SKILL_CATEGORY, SkillCategory, TAGS, skillHasTag } from "../lib";
import { useMemo, useState } from "react";
import { ValueOf } from "ts-essentials";
import { section, sectionSubTitle, sectionTitle } from "../styles";
import { container, stack } from "../styled-system/patterns";
import { sortAscending } from "../lib/utils/sorting";
import { css } from "../styled-system/css";
import { PropertyValue } from "../styled-system/types/csstype";

type FilterCategories = SkillCategory & "All";

const SORT_OPTIONS = {
  name: "name",
  category: "category",
};

const ColorMap = {
  [SKILL_CATEGORY.Concept]: "blue.100",
  [SKILL_CATEGORY.Framework]: "blue.200",
  [SKILL_CATEGORY.Language]: "blue.300",
  [SKILL_CATEGORY.Library]: "blue.400",
  [SKILL_CATEGORY.Software]: "blue.500",
  [SKILL_CATEGORY.Technology]: "blue.600",
};

const makeStillStyles = (category: SkillCategory) => {
  const baseStyles = {
    display: "inline-block",
    fontSize: "sm",
    rounded: "md",
    border: "1px solid black",
    margin: "10px",
    p: "5px 10px",
  };
  switch (category.trim().toLowerCase()) {
    case SKILL_CATEGORY.Concept.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "blue.100" });
    case SKILL_CATEGORY.Framework.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "blue.200" });
    case SKILL_CATEGORY.Language.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "blue.300" });
    case SKILL_CATEGORY.Library.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "blue.400" });
    case SKILL_CATEGORY.Software.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "blue.500" });
    case SKILL_CATEGORY.Technology.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "blue.600" });
    default:
      return css({ ...baseStyles, backgroundColor: "blue.100" });
  }
};

type TagFilters = {
  [k: ValueOf<typeof TAGS>]: boolean;
};

const allPropertiesTruthy = (obj: object) => {
  return Object.values(obj).every((x) => x == true);
};

const useSortedAndFilteredSkills = (
  sortBy: ValueOf<typeof SORT_OPTIONS> = SORT_OPTIONS.name,
  filters: TagFilters,
  selectedCategory: FilterCategories = "All"
) => {
  const sortedSkills = useMemo(() => {
    if (sortBy === SORT_OPTIONS.category) {
      return SKILLS.sort((a, b) => sortAscending(a.category, b.category));
    }
    return SKILLS.sort((a, b) => sortAscending(a.name, b.name));
  }, [sortBy]);

  const skillsFilteredByTag = useMemo(() => {
    if (!filters || allPropertiesTruthy(filters)) return sortedSkills;

    return sortedSkills.filter((skill) => {
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
  }, [sortedSkills, filters]);

  const skillsFilteredByCategory = useMemo(() => {
    return skillsFilteredByTag.filter((skill) => {
      if (selectedCategory === "All") return true;
      if (skill.category === selectedCategory) return true;
      return false;
    });
  }, [skillsFilteredByTag, selectedCategory]);

  return skillsFilteredByCategory;
};

export const SkillsSection = () => {
  const [filters, setFilters] = useState<TagFilters>({
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
  });
  const [sortField, setSortField] = useState(SORT_OPTIONS.name);
  const [filterCategory, setFilterCategory] = useState<FilterCategories>("All");

  const skills = useSortedAndFilteredSkills(sortField, filters, filterCategory);

  return (
    <section id="skills" className={section({})}>
      <p className={sectionTitle({})}>Skills</p>
      <form
        className={css({ display: "flex", flexDirection: "row", fontVariant: "small-caps", gap: "10px", my: "10px" })}
      >
        <div
          className={css({
            bg: "gray.100",
            width: "20%",
            display: "flex",
            flexDirection: "column",
            px: "10px",
            rounded: "md",
            border: "1px solid gray",
          })}
        >
          <label htmlFor="sortOption">Sort by:</label>
          <select id="sortOption" value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value={SORT_OPTIONS.name}>{SORT_OPTIONS.name}</option>
            <option value={SORT_OPTIONS.category}>{SORT_OPTIONS.category}</option>
          </select>
          <label htmlFor="filterBy">Filter by:</label>
          <select id="filterBy" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
            {[
              <option key={"All"} value={"All"}>
                All
              </option>,
              ...Object.values(SKILL_CATEGORY).map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              }),
            ]}
          </select>
        </div>
        <div
          className={css({
            display: "flex",
            bg: "gray.100",
            rounded: "md",
            flexDirection: "column",
            border: "1px solid gray",
            flexGrow: 1,
          })}
        >
          <label className={css({ alignSelf: "center" })} htmlFor="filterOptions">
            Show skills related to:
          </label>
          <div className={css({ ml: "10px", display: "grid", gridTemplateColumns: 4 })}>
            {Object.keys(filters).map((k) => {
              // key == tag
              return (
                <span key={k} className={css({ fontVariant: "small-caps" })}>
                  <input
                    type="checkbox"
                    checked={filters[k]}
                    onChange={() => {
                      setFilters({
                        ...filters,
                        [k]: !filters[k],
                      });
                    }}
                  />
                  {k}
                </span>
              );
            })}
          </div>
        </div>
      </form>
      <div
        className={container({
          textAlign: "center",
          gap: "5",
          border: "1px solid black",
          bg: "gray.100",
          rounded: "md",
          lineHeight: "tight",
        })}
      >
        {skills.map((s) => {
          const styles = makeStillStyles(s.category);
          return (
            <span key={s.name} className={styles}>
              {s.name}
            </span>
          );
        })}
      </div>
    </section>
  );
};
