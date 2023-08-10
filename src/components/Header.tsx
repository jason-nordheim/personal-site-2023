import { FC } from "react";
import { css } from "../styled-system/css";
import { TabProps, Tabs } from "./Tabs";

export const Header: FC<TabProps> = ({ tab, onTabChange }) => {
  return (
    <header
      className={css({
        position: "sticky",
        display: "flex",
        flexDirection: "row",
        bg: "blue.100",
      })}
    >
      <h1
        className={css({
          display: "flex",
          placeContent: "center",
          fontSize: "4xl",
          lineHeight: "loose",
          fontFamily: "monospace",
          alignSelf: "center",
          color: "white",
          aspectRatio: "square",
          borderRadius: "50%",
          bg: "blue.500",
          width: "74px",
          border: "1px solid black",
          m: "5px",
        })}
      >
        JN
      </h1>
      <Tabs tab={tab} onTabChange={onTabChange} />
    </header>
  );
};
