import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";

export const TABS = {
  ABOUT: "About",
  KNOWLEDGE: "Knowledge",
  PROJECTS: "Projects",
  EXPERIENCE: "Experience",
  EDUCATION: "Education",
};

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
    transitionDuration: "0.5s",
    color: selected ? "blue.600" : undefined,
    _hover: {
      cursor: "pointer",
      transition: "ease-in-out",
      transitionDuration: "0.5s",
      textDecoration: "underline",
    },
    sm: {
      p: "2px",
    },
  });
};

const TabContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul
      className={css({
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
        smDown: {
          fontSize: "sm",
          fontStretch: "condensed",
        },
      })}
    >
      {children}
    </ul>
  );
};

export type TabsProps = {
  selectedTab: string;
  onTabChange: (newTab: string) => void;
};

export const Tabs: FC<TabsProps> = ({ selectedTab, onTabChange }) => {
  return (
    <TabContainer>
      {Object.values(TABS).map((t) => {
        const isSelected = selectedTab == t;
        const style = getTabStyle(isSelected);
        return (
          <li className={style} onClick={() => onTabChange(t)} key={t}>
            {t}
          </li>
        );
      })}
    </TabContainer>
  );
};
