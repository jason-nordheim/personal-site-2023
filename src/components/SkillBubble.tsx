import { FC } from "react";
import { Skill } from "../lib";
import { styled } from "@mui/material";

type SkillBubbleProps = {
  skill: Skill;
};

const Bubble = styled("span")(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.light}`,
  borderRadius: theme.spacing(3),
  margin: `${theme.spacing(1)}`,
  padding: [theme.spacing(1), theme.spacing(2)],
}));

export const SkillBubble: FC<SkillBubbleProps> = ({ skill }) => {
  return <Bubble>{skill.name}</Bubble>;
};
