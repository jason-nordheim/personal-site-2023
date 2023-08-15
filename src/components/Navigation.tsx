import { FC, PropsWithChildren, useState } from "react";
import { css } from "../styled-system/css";
import { Tabs } from "./Tabs";
import { Animate } from "react-simple-animate";

type NavigationContainerProps = {
  showHeader: boolean;
  onMenuClick: () => void;
  tabsShown: boolean;
};

const NavigationContainer: FC<PropsWithChildren<NavigationContainerProps>> = ({
  children,
  tabsShown,
  showHeader,
  onMenuClick,
}) => {
  return (
    <Animate start={{ translate: "0 -100%" }} end={{ translate: "0 -15px" }} play>
      <header
        className={css({
          position: "sticky",
          display: "flex",
          flexDirection: "row",
          justifyContent: showHeader ? "space-evenly" : "space-between",
          bg: "#6c63ff",
          pt: "30px",
          pb: "15px",
          borderRadius: "lg",
          border: "1px solid gray",
          boxShadow: "lg",
        })}
      >
        {children}
        {showHeader && !tabsShown ? (
          <span
            onClick={() => onMenuClick()}
            className={css({
              fontVariant: "small-caps",
              fontFamily: "mono",
              fontSize: "xl",
              ml: "15px",
              display: "flex",
            })}
          >
            Jason Nordheim
          </span>
        ) : null}
      </header>
    </Animate>
  );
};

export const Navigation: FC<{ selectedTab: string; onTabChange: (newTab: string) => void }> = ({
  selectedTab,
  onTabChange,
}) => {
  const [showTabs, seShowTabs] = useState(false);

  const handleMenuClick = () => {
    seShowTabs(!showTabs);
  };

  const handleTabItemClick = (tab: string) => {
    onTabChange(tab);
    handleMenuClick();
  };
  return (
    <NavigationContainer showHeader={window.innerWidth < 500} onMenuClick={handleMenuClick} tabsShown={showTabs}>
      <Tabs
        selectedTab={selectedTab}
        onMenuClick={handleMenuClick}
        onTabClick={handleTabItemClick}
        showTabs={showTabs}
      />
    </NavigationContainer>
  );
};
