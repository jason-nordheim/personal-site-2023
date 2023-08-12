import { FC } from "react";
import { css } from "../styled-system/css";
import { TabProps, Tabs } from "./Tabs";
import { MdEngineering } from "react-icons/md";

export const Navigation: FC<TabProps> = ({ selectedTab: tab, onTabChange }) => {
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
      })}
    >
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
          <MdEngineering />
        </span>
      </div>
      <Tabs selectedTab={tab} onTabChange={onTabChange} />
    </header>
  );
};
