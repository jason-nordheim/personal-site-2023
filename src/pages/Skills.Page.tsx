import { SKILLS, SKILL_CATEGORY, Skill, SkillCategory, SkillTag, TAGS, skillHasTag } from "../lib";
import { useMemo, useState } from "react";
import { ValueOf } from "ts-essentials";
import { section, sectionTitle } from "../styles";
import { container } from "../styled-system/patterns";
import { sortAscending } from "../lib/utils/sorting";
import { css } from "../styled-system/css";

type FilterCategories = SkillCategory & "All";

const capitalizeFirstWord = (str: string) => {
  const firstChar = str[0].toUpperCase();
  const updatedStr = `${firstChar}${str.slice(1)}`;
  return updatedStr;
};

const SORT_OPTIONS = {
  name: "name",
  category: "category",
};

const makeSkillStyles = (category: SkillCategory) => {
  const baseStyles = {
    smDown: {
      fontSize: "xs",
      p: "3px, 5px",
    },
    display: "inline-block",
    fontSize: "sm",
    borderRadius: "md",
    border: "1px solid black",
    fontFamily: "monospace",
    fontStretch: "condensed",
    margin: "10px",
    minWidth: "100px",
    p: "5px 10px",
  };
  switch (category.trim().toLowerCase()) {
    case SKILL_CATEGORY.Concept.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "yellow.200" });
    case SKILL_CATEGORY.Framework.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "red.300" });
    case SKILL_CATEGORY.Language.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "blue.300" });
    case SKILL_CATEGORY.Library.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "green.300" });
    case SKILL_CATEGORY.Software.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "orange.300" });
    case SKILL_CATEGORY.Technology.toLowerCase():
      return css({ ...baseStyles, backgroundColor: "amber.300" });
    default:
      return css({ ...baseStyles, backgroundColor: "blue.100" });
  }
};

type Filters = SkillTag | "All" | "None";

type TagFilters = {
  [k: Filters]: boolean;
};

const allPropertiesTruthy = (obj: object) => {
  return Object.values(obj).every((x) => x == true);
};

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

const useSortedAndFilteredSkills = (
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

const FILTERS_ALL = {
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

const FILTER_NONE = {
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

export const SkillsPage = () => {
  const [filters, setFilters] = useState<TagFilters>(FILTERS_ALL);
  const [sortField, setSortField] = useState(SORT_OPTIONS.category);
  const [filterCategory, setFilterCategory] = useState<FilterCategories>("All");

  const skills = useSortedAndFilteredSkills(sortField, filters, filterCategory);

  return (
    <section id="skills" className={section({})}>
      <p className={sectionTitle({})}>Skills</p>
      <form
        className={css({ display: "flex", flexDirection: "row", fontFamily: "monospace", gap: "10px", my: "10px" })}
      >
        <div
          className={css({
            sm: {
              width: "50%",
            },
            md: {
              width: "20%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            },
          })}
        >
          <div
            className={css({
              smDown: { mb: "2" },

              display: "flex",
              flexDirection: "column",
              rounded: "md",
              border: "1px solid gray",
            })}
          >
            <label
              className={css({
                textAlign: "center",
                borderBottom: "1px solid black",
                w: "100%",
                fontWeight: "bold",
                bg: "blue.300",
              })}
              htmlFor="sortOption"
            >
              Sort by:
            </label>
            <select id="sortOption" value={sortField} onChange={(e) => setSortField(e.target.value)}>
              <option value={SORT_OPTIONS.name}>{capitalizeFirstWord(SORT_OPTIONS.name)}</option>
              <option value={SORT_OPTIONS.category}>{capitalizeFirstWord(SORT_OPTIONS.category)}</option>
            </select>
          </div>
          <div
            className={css({
              smDown: { mt: "4" },
              bg: "gray.100",
              display: "flex",
              flexDirection: "column",
              rounded: "md",
              border: "1px solid gray",
            })}
          >
            <label
              className={css({
                textAlign: "center",
                borderBottom: "1px solid black",
                w: "100%",
                fontWeight: "bold",
                bg: "blue.300",
              })}
              htmlFor="filterBy"
            >
              Filter by:
            </label>
            <select
              id="filterBy"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value as FilterCategories)}
            >
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
        </div>
        <div
          className={css({
            display: "flex",
            rounded: "md",
            flexDirection: "column",
            border: "1px solid gray",
            flexGrow: 1,
          })}
        >
          <label
            className={css({
              textAlign: "center",
              borderBottom: "1px solid black",
              w: "100%",
              fontWeight: "bold",
              bg: "blue.300",
            })}
            htmlFor="filterOptions"
          >
            Show skills related to:
          </label>
          <div
            className={css({
              smDown: {
                my: "5px",
                display: "grid",
                gridTemplateColumns: "1",
                "& span": {
                  "& span": { ml: "2" },
                  "& input": { ml: "2" },
                },
              },
              md: { ml: "10px", display: "grid", gridTemplateColumns: 3 },
            })}
          >
            {[
              ...Object.keys(filters).map((k) => {
                // key == tag
                return (
                  <span key={k} className={css({})}>
                    <input
                      type="checkbox"
                      checked={filters[k]}
                      onChange={() => {
                        if (k == "None") {
                          setFilters(FILTER_NONE);
                        } else if (k == "All") {
                          setFilters(FILTERS_ALL);
                        } else {
                          setFilters({
                            ...filters,
                            None: false,
                            [k]: !filters[k],
                          });
                        }
                      }}
                    />
                    <span className={css({ ml: "4px", fontVariant: "titling-caps" })}>{capitalizeFirstWord(k)}</span>
                  </span>
                );
              }),
            ]}
          </div>
        </div>
      </form>
      <div
        className={container({
          display: "flow",
          textAlign: "center",
          flexFlow: "row",
          opacity: 0.8,
          rounded: "md",
          lineHeight: "tight",
        })}
      >
        {skills.map((s) => {
          const styles = makeSkillStyles(s.category);
          return (
            <span key={s.name} className={styles}>
              <span className={css({ display: "flex", alignItems: "center", justifyContent: "center" })}>
                {s.icon && <s.icon className={css({ mr: "5px", fontSize: "lg" })} />}
                <span>{s.name}</span>
              </span>
            </span>
          );
        })}
      </div>
    </section>
  );
};
