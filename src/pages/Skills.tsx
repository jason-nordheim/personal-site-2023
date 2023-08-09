import { styled } from "@mui/material";
import { SkillBubble } from "../components/SkillBubble";
import { SKILLS } from "../lib";

const SkillContainer = styled("section")(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignContent: "center",
}));

export const Skills = () => {
  return (
    <SkillContainer id="skills">
      {SKILLS.sort((a, b) => {
        const lowerA = a.name.toLowerCase();
        const lowerB = b.name.toLowerCase();
        if (lowerA < lowerB) return -1;
        if (lowerA > lowerB) return 1;
        return 0;
      }).map((s) => (
        <SkillBubble key={s.name} skill={s} />
      ))}
    </SkillContainer>
  );
};
