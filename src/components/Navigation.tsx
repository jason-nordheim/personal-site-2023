import { FC, PropsWithChildren, useState } from "react";
import { css } from "../styled-system/css";
import { TabsProps, Tabs } from "./Tabs";
import { Animate } from "react-simple-animate";

type NavigationContainerProps = {
  showHeader: boolean;
};

const NavigationContainer: FC<PropsWithChildren<NavigationContainerProps>> = ({ children, showHeader }) => {
  return (
    <Animate start={{ translate: "0 -100%" }} end={{ translate: "0 -15px" }} play>
      <header
        className={css({
          position: "sticky",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bg: "#6c63ff",
          pt: "30px",
          pb: "15px",
          borderRadius: "lg",
          border: "1px solid gray",
          boxShadow: "lg",
          "& span": {},
        })}
      >
        <span
          className={css({
            fontVariant: "small-caps",
            fontFamily: "mono",
            fontSize: "xl",
            ml: "15px",
            display: showHeader ? "flex" : "none",
          })}
        >
          Jason Nordheim
        </span>
        {children}
      </header>
    </Animate>
  );
};

export const Navigation: FC<TabsProps> = ({ selectedTab, onTabChange }) => {
  const [showTabs, seShowTabs] = useState(false);

  const handleMenuClick = () => {
    seShowTabs(!showTabs);
  };

  const handleTabItemClick = (tab: string) => {
    onTabChange(tab);
    handleMenuClick();
  };
  return (
    <NavigationContainer showHeader={!showTabs}>
      <Tabs
        selectedTab={selectedTab}
        onMenuClick={handleMenuClick}
        onTabClick={handleTabItemClick}
        showTabs={showTabs}
      />
    </NavigationContainer>
  );
};
