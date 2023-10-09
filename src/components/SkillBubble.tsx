import { Skill } from "../lib";
import { FC } from "react";
import { css } from "../styled-system/css";
import { AnchorProps } from "./common";

type SkillBubbleProps = FC<AnchorProps & { skill: Skill }>;

export const SkillBubble: SkillBubbleProps = ({ skill, ...rest }) => {
  return (
    <a href={skill.href} key={skill.name} {...rest}>
      <span className={css({ display: "flex", alignItems: "center", justifyContent: "center" })}>
        {skill.icon && <skill.icon className={css({ mr: "5px", fontSize: "lg" })} />}
        <span>{skill.name}</span>
      </span>
    </a>
  );
};
