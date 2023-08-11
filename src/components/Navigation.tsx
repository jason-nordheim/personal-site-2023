import { FC } from "react";
import { css } from "../styled-system/css";
import { TabProps, Tabs } from "./Tabs";
import { MdEngineering } from "react-icons/md";

export const Navigation: FC<TabProps> = ({ tab, onTabChange }) => {
  return (
    <header
      className={css({
        position: "sticky",
        display: "flex",
        flexDirection: "row",

        bg: "blue.100",
        smDown: {
          height: "50px",
          lineHeight: "50px",
        },
      })}
    >
      <div
        className={css({
          smDown: {
            display: "none",
          },
          display: "flex",
          placeContent: "center",
          fontSize: "4xl",
          borderRadius: "full",
          p: "2",
          m: "5px",
          bg: "white",
          boxShadow: "sm",
          "&*": {
            overflow: "hidden",
          },
        })}
      >
        <MdEngineering />
      </div>
      <Tabs tab={tab} onTabChange={onTabChange} />
    </header>
  );
};
