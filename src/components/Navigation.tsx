import { FC, PropsWithChildren, useEffect, useState } from "react";
import { css } from "../styled-system/css";
import { TabsProps, Tabs } from "./Tabs";
import { MdEngineering } from "react-icons/md";
import { IconType } from "react-icons";

const CLASSES = {
  Nav: {
    Container: {
      loaded: css({
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        bg: "blue.100",
        pt: "20px",
        pb: "10px",
        translate: "0 -10px",
        smDown: {
          height: "50px",
          lineHeight: "50px",
        },
        borderRadius: "lg",
        border: "1px solid gray",
      }),
      initial: css({
        position: "sticky",
        display: "flex",
        flexDirection: "column",
        transition: "ease",
        transitionDelay: "1s",
        bg: "blue.100",
        py: "10px",
        translate: "0 -20px",
        smDown: {
          height: "50px",
          lineHeight: "50px",
        },
        borderRadius: "lg",
        border: "1px solid gray",
      }),
    },
  },
};

const NavigationContainer: FC<PropsWithChildren> = ({ children }) => {
  const [rendered, setRendered] = useState(false);
  useEffect(() => {
    setRendered(true);
  }, []);

  const { initial, loaded } = CLASSES.Nav.Container;

  return <header className={rendered ? loaded : initial}>{children}</header>;
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
