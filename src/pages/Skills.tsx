import {
  Checkbox,
  FormControl,
  InputLabel,
  ListItemText,
  MenuItem,
  NativeSelect,
  Select,
  Stack,
  Typography,
  styled,
} from "@mui/material";
import { SKILLS } from "../lib";
import { useMemo, useState } from "react";
import { ValueOf } from "ts-essentials";
import { Section } from "../components/Section";
import { FC } from "react";
import { SKILL_CATEGORY, Skill } from "../lib";

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
  [SKILL_CATEGORY.Concept]: "#0096C7",
  [SKILL_CATEGORY.Framework]: "#00B4D8",
  [SKILL_CATEGORY.Language]: "#48CAE4",
  [SKILL_CATEGORY.Library]: "#90E0EF",
  [SKILL_CATEGORY.Software]: "#ADE8F4",
  [SKILL_CATEGORY.Technology]: "#CAF0F8",
};

const SkillBubble: FC<SkillBubbleProps> = ({ skill }) => {
  return <Bubble sx={{ backgroundColor: ColorMap[skill.category], color: "black" }}>{skill.name}</Bubble>;
};

const useSortedAndFilteredSkills = (sortBy: ValueOf<typeof SORT_OPTIONS> = SORT_OPTIONS.name, filters: string[]) => {
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

export const Skills = () => {
  const [filterOptions, setFilterOptions] = useState<string[]>([]);
  const [sortField, setSortField] = useState(SORT_OPTIONS.name);

  const skills = useSortedAndFilteredSkills(sortField, filterOptions);

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
        <FormControl variant="outlined" sx={{ px: 2, display: "flex", flexDirection: "column" }}>
          <InputLabel id="filterOptions" size="small">
            Filter
          </InputLabel>
          <Select
            labelId="filterOptions"
            value={filterOptions}
            placeholder="filter"
            multiple
            variant="outlined"
            renderValue={(selected) => selected.join(", ")}
            onChange={(e) => {
              console.log(e.target.value);
              // is an array
              if (typeof e.target.value === "object") {
                setFilterOptions(e.target.value);
              }
            }}
          >
            {Object.keys(SKILL_CATEGORY).map((cat) => {
              return (
                <MenuItem key={cat} value={cat}>
                  <Checkbox checked={filterOptions.indexOf(cat) > -1} />
                  <ListItemText primary={cat} />
                </MenuItem>
              );
            })}
          </Select>
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
