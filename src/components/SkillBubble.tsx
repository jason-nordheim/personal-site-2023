import { FC } from "react";
import { SKILL_TYPES, Skill } from "../lib";
import { styled } from "@mui/material";

type SkillBubbleProps = {
  skill: Skill;
};

const Bubble = styled("span")(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: theme.spacing(3),
  margin: `${theme.spacing(1)}`,
  padding: [theme.spacing(1), theme.spacing(1.5)],
  fontSize: 12,
}));

const ColorMap = {
  [SKILL_TYPES.Concept]: "yellow",
  [SKILL_TYPES.Framework]: "fuchsia",
  [SKILL_TYPES.Language]: "cyan",
  [SKILL_TYPES.Library]: "indigo",
  [SKILL_TYPES.Software]: "aqua",
  [SKILL_TYPES.Technology]: "lime",
};

export const SkillBubble: FC<SkillBubbleProps> = ({ skill }) => {
  return <Bubble sx={{ backgroundColor: ColorMap[skill.category], color: "black" }}>{skill.name}</Bubble>;
};
