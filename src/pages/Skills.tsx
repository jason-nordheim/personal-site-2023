import { styled } from "@mui/material";
import { SkillBubble } from "../components/SkillBubble";
import { SKILLS } from "../lib";
import { useMemo, useState } from "react";
import { ValueOf } from "ts-essentials";

const SkillContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
}));

const SORT_OPTIONS = {
  name: "name",
  category: "category",
};

const useSortedSkills = (sortBy: ValueOf<typeof SORT_OPTIONS> = SORT_OPTIONS.name) => {
  const sortedSkills = useMemo(() => {
    if (sortBy === SORT_OPTIONS.category) {
      return SKILLS.sort((a, b) => {
        const lowerA = a.category.toLowerCase();
        const lowerB = b.category.toLowerCase();
        if (lowerA < lowerB) return -1;
        if (lowerA > lowerB) return 1;
        return 0;
      });
    }
    return SKILLS.sort((a, b) => {
      const lowerA = a.name.toLowerCase();
      const lowerB = b.name.toLowerCase();
      if (lowerA < lowerB) return -1;
      if (lowerA > lowerB) return 1;
      return 0;
    });
  }, [sortBy]);

  return sortedSkills;
};

export const Skills = () => {
  const [sortField, setSortField] = useState(SORT_OPTIONS.name);

  const skills = useSortedSkills(sortField);

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div>
        <label htmlFor="sortOption">Sort:</label>
        <select
          name="sortOption"
          onChange={(e) => {
            console.log(e.target.value);
            setSortField(e.target.value);
          }}
        >
          {Object.keys(SORT_OPTIONS).map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>
      <SkillContainer>
        {skills.map((s) => (
          <SkillBubble key={s.name} skill={s} />
        ))}
      </SkillContainer>
    </section>
  );
};
