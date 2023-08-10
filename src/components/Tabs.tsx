import { FC } from "react";
import { css } from "../styled-system/css";

export const TABS = { ABOUT: "About Me", SKILL: "Skills", EXPERIENCE: "Experience" };

const getTabStyle = (selected: boolean) => {
  return css({
    flex: "1",
    mx: "10px",
    fontVariant: "small-caps",
    fontWeight: "bold",
    bg: "gray.200",
    p: "3px",
    textAlign: "center",
    rounded: "md",
    border: "1px solid black",
    color: selected ? "blue.600" : undefined,
  });
};

type TabProps = {
  tab: string;
  onTabChange: (newTab: string) => void;
};

export const Tabs: FC<TabProps> = ({ tab, onTabChange }) => {
  return (
    <ul className={css({ listStyle: "none", display: "flex", justifyContent: "space-around" })}>
      {Object.values(TABS).map((t) => {
        const isSelected = tab == t;
        const style = getTabStyle(isSelected);
        return (
          <li className={style} onClick={() => onTabChange(t)} key={t}>
            {t}
          </li>
        );
      })}
    </ul>
  );
};
