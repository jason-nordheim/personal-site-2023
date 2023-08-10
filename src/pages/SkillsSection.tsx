import { SKILLS, SKILL_CATEGORY } from "../lib";
import { useMemo, useState } from "react";
import { ValueOf } from "ts-essentials";
import { section, sectionSubTitle } from "../styles";
import { container, stack } from "../styled-system/patterns";
import { sortAscending } from "../lib/utils/sorting";
import { css } from "../styled-system/css";

// const SkillContainer = styled("div")(({ theme }) => ({
//   display: "flex",
//   flexWrap: "wrap",
//   alignContent: "center",
//   justifyContent: "center",
// }));

const SORT_OPTIONS = {
  name: "name",
  category: "category",
};

const ColorMap = {
  [SKILL_CATEGORY.Concept]: "#0096C7",
  [SKILL_CATEGORY.Framework]: "#00B4D8",
  [SKILL_CATEGORY.Language]: "#48CAE4",
  [SKILL_CATEGORY.Library]: "#90E0EF",
  [SKILL_CATEGORY.Software]: "#ADE8F4",
  [SKILL_CATEGORY.Technology]: "#CAF0F8",
};

const useSortedAndFilteredSkills = (sortBy: ValueOf<typeof SORT_OPTIONS> = SORT_OPTIONS.name, filters: string[]) => {
  const sortedSkills = useMemo(() => {
    if (sortBy === SORT_OPTIONS.category) {
      return SKILLS.sort((a, b) => sortAscending(a.category, b.category));
    }
    return SKILLS.sort((a, b) => sortAscending(a.name, b.name));
  }, [sortBy]);

  const filteredSkills = useMemo(() => {
    if (!filters || filters.length === 0) return sortedSkills;

    return sortedSkills.filter((skill) => {
      let isIncluded = false;
      filters.forEach((filter) => {
        if (filter.toLowerCase() === skill.category) {
          isIncluded = true;
        }
      });
      return isIncluded;
    });
  }, [sortedSkills, filters]);

  return filteredSkills;
};

export const SkillsSection = () => {
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  const [sortField, setSortField] = useState(SORT_OPTIONS.name);

  const skills = useSortedAndFilteredSkills(sortField, filterOptions);

  return (
    <section id="skills" className={section({})}>
      <p className={sectionSubTitle({})}>Skills</p>
      <div className={container({})}>
        <form>
          <label htmlFor="sortOption">Sort by:</label>
          <select id="sortOption" value={sortField} onChange={(e) => setSortField(e.target.value)}>
            <option value={SORT_OPTIONS.name}>{SORT_OPTIONS.name}</option>
            <option value={SORT_OPTIONS.category}>{SORT_OPTIONS.category}</option>
          </select>
        </form>

        <label htmlFor="filterOptions">Filter</label>
        <select
          id="filterOptions"
          value={filterOptions}
          placeholder="filter"
          multiple
          onChange={(e) => {
            console.log(e);
            // is an array
            if (typeof e.target.value === "object") {
              setFilterOptions(e.target.value);
            }
          }}
        >
          {Object.keys(SKILL_CATEGORY).map((cat) => {
            return (
              <option value={cat} key={cat}>
                {cat}
              </option>
            );
          })}
        </select>
      </div>
      <div className={container({ textAlign: "center", gap: "10" })}>
        {skills.map((s) => (
          <span
            key={s.name}
            className={css({
              display: "inline-block",
              bg: ColorMap[s.category],
              fontSize: "sm",
              rounded: "md",
              border: "1px solid black",
              margin: "10px",
              p: "5px 10px",
            })}
          >
            {s.name}
          </span>
        ))}
      </div>
    </section>
  );
};
