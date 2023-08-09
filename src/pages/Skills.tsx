import { FormControl, InputLabel, NativeSelect, Stack, Typography, styled } from "@mui/material";
import { SKILLS } from "../lib";
import { useMemo, useState } from "react";
import { ValueOf } from "ts-essentials";
import { Section } from "../components/Section";
import { FC } from "react";
import { SKILL_TYPES, Skill } from "../lib";

const SkillContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
  justifyContent: "center",
}));

const SORT_OPTIONS = {
  name: "name",
  category: "category",
};

type SkillBubbleProps = {
  skill: Skill;
};

const Bubble = styled("span")(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: theme.spacing(1),
  margin: `${theme.spacing(1)}`,
  padding: [theme.spacing(1), theme.spacing(1)],
  fontSize: 12,
  boxShadow: `${theme.spacing(0.5)} ${theme.spacing(0.5)} ${theme.spacing(0.25)}`,
}));

const ColorMap = {
  [SKILL_TYPES.Concept]: "#0096C7",
  [SKILL_TYPES.Framework]: "#00B4D8",
  [SKILL_TYPES.Language]: "#48CAE4",
  [SKILL_TYPES.Library]: "#90E0EF",
  [SKILL_TYPES.Software]: "#ADE8F4",
  [SKILL_TYPES.Technology]: "#CAF0F8",
};

const SkillBubble: FC<SkillBubbleProps> = ({ skill }) => {
  return <Bubble sx={{ backgroundColor: ColorMap[skill.category], color: "black" }}>{skill.name}</Bubble>;
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
    <Section id="skills">
      <Stack>
        <Typography variant="h4" textAlign="center">
          Skills
        </Typography>
        <FormControl variant="outlined" sx={{ mx: 2, display: "flex", flexDirection: "column" }}>
          <InputLabel id="sortOption" size="small">
            Sort by:
          </InputLabel>
          <NativeSelect
            inputProps={{
              name: "",
              id: "sortOption",
            }}
            value={sortField}
            onChange={(e) => setSortField(e.target.value)}
          >
            <option value={SORT_OPTIONS.name}>{SORT_OPTIONS.name}</option>
            <option value={SORT_OPTIONS.category}>{SORT_OPTIONS.category}</option>
          </NativeSelect>
        </FormControl>
      </Stack>
      <SkillContainer>
        {skills.map((s) => (
          <SkillBubble key={s.name} skill={s} />
        ))}
      </SkillContainer>
    </Section>
  );
};
