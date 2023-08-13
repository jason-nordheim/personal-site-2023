import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";
import { TabsProps, Tabs } from "./Tabs";
import { MdEngineering } from "react-icons/md";
import { IconType } from "react-icons";

const NavigationContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <header
      className={css({
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        bg: "blue.100",
        py: "10px",
        top: "-10px",
        smDown: {
          height: "50px",
          lineHeight: "50px",
        },
        borderRadius: "lg",
        border: "1px solid gray",
      })}
    >
      {children}
    </header>
  );
};

const Logo: FC<{ Icon: IconType }> = ({ Icon }) => {
  return (
    <div
      className={css({
        smDown: {
          display: "none",
        },
        display: "flex",
        justifyContent: "center",
      })}
    >
      <span
        className={css({
          width: "50px",
          flexGrow: 0,
          fontSize: "4xl",
          borderRadius: "full",
          p: "2",
          m: "5px",
          bg: "white",
          boxShadow: "sm",
        })}
      >
        <Icon />
      </span>
    </div>
  );
};

export const Navigation: FC<TabsProps> = ({ selectedTab: tab, onTabChange }) => {
  return (
    <NavigationContainer>
      <Tabs selectedTab={tab} onTabChange={onTabChange} />
    </NavigationContainer>
  );
};
