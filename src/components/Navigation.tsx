import { FC, PropsWithChildren, useEffect, useState } from "react";
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
    <Animate start={{ translate: "0 -100%" }} end={{ translate: "0 -10px" }} play>
      <header
        className={css({
          position: "sticky",
          display: "flex",
          flexDirection: "row",
          transition: "ease-in-out",
          transitionDuration: "0.3s",
          justifyContent: "center",
          bg: "#6c63ff",
          pt: showHeader ? "40px" : "30px",
          pb: "15px",
          borderRadius: "lg",
          border: "1px solid gray",
          boxShadow: "lg",
        })}
      >
        {children}
        <span
          onClick={() => onMenuClick()}
          className={css({
            textAlign: "center",
            fontVariant: "small-caps",
            fontFamily: "mono",
            fontSize: "xl",
            ml: "15px",
            display: showHeader && !tabsShown ? "flex" : "none",
          })}
        >
          Jason Nordheim
        </span>
      </header>
    </Animate>
  );
};

export const Navigation: FC<{ selectedTab: string; onTabChange: (newTab: string) => void }> = ({
  selectedTab,
  onTabChange,
}) => {
  const [isMobile, setIsMobile] = useState(false);
  const [showTabs, seShowTabs] = useState(false);

  const handleMenuClick = () => {
    seShowTabs(!showTabs);
  };

  const handleTabItemClick = (tab: string) => {
    onTabChange(tab);
    handleMenuClick();
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      console.log({ width: window.innerWidth });
      setIsMobile(window.innerWidth <= 500);
    });
  }, []);

  return (
    <NavigationContainer showHeader={isMobile} onMenuClick={handleMenuClick} tabsShown={showTabs}>
      <Tabs
        selectedTab={selectedTab}
        onMenuClick={handleMenuClick}
        onTabClick={handleTabItemClick}
        showTabs={showTabs}
      />
    </NavigationContainer>
  );
};
