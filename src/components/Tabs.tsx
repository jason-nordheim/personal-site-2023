import { FC } from "react";
import { css } from "../styled-system/css";
import { TabContainer } from "./TabContainer";
import { TABS } from "./common/lib";

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
