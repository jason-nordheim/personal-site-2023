import { FC } from "react";
import { css } from "../styled-system/css";

export const TABS = { ABOUT: "About Me", SKILL: "Skills", EXPERIENCE: "Experience" };

const getTabStyle = (selected: boolean) => {
  return css({
    flex: "1",
    mx: "10px",
    fontVariant: "small-caps",
    fontWeight: "bold",
    p: "3px",
    textAlign: "center",
    rounded: "md",
    alignSelf: "center",
    maxWidth: "200px",
    color: selected ? "blue.600" : undefined,
    _hover: {
      cursor: "pointer",
      transition: "ease-in-out",
      textDecoration: "underline",
    },
  });
};

export type TabProps = {
  tab: string;
  onTabChange: (newTab: string) => void;
};

export const Tabs: FC<TabProps> = ({ tab, onTabChange }) => {
  return (
    <ul
      className={css({
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        flex: 1,
      })}
    >
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