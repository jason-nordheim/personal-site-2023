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
    rounded: "md",
    alignSelf: "center",
    maxWidth: "200px",
    transitionDuration: "0.5s",
    color: selected ? "white" : undefined,
    _hover: {
      cursor: "pointer",
      transition: "ease-in-out",
      transitionDuration: "0.5s",
      textDecoration: "underline",
    },
    sm: {
      p: "2px",
      textAlign: "center",
    },
    mdTo2xl: {
      textAlign: "center",
    },
  });
};

export type TabsProps = {
  selectedTab: string;
  showTabs: boolean;
  onTabClick: (newTab: string) => void;
  onMenuClick: () => void;
};

export const Tabs: FC<TabsProps> = ({ selectedTab, showTabs, onTabClick, onMenuClick }) => {
  return (
    <TabContainer showTabs={showTabs} onMenuClick={onMenuClick}>
      {Object.values(TABS).map((t) => {
        const isSelected = selectedTab == t;
        const style = getTabStyle(isSelected);
        return (
          <li className={style} onClick={() => onTabClick(t)} key={t}>
            {t}
          </li>
        );
      })}
    </TabContainer>
  );
};
