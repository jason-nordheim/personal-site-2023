import { FC, PropsWithChildren } from "react";
import { css } from "../styled-system/css";
import { Animate } from "react-simple-animate";

type TabContainerProps = FC<
  PropsWithChildren<{
    showTabs: boolean;
    onMenuClick?: () => void;
  }>
>;

const Desktop: TabContainerProps = ({ children }) => {
  return (
    <ul
      className={css({
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flex: 1,
        smDown: {
          fontSize: "sm",
          fontStretch: "condensed",
        },
      })}
    >
      {children}
    </ul>
  );
};

const Mobile: TabContainerProps = ({ children, showTabs, onMenuClick }) => {
  return (
    <Animate
      play={showTabs}
      start={{ display: "none" }}
      end={{ display: "flex", justifyContent: "flex-start", marginLeft: "12px" }}
      duration={1.5}
      easeType="ease"
    >
      <span onClick={() => onMenuClick && onMenuClick()}>
        <ul
          className={css({
            listStyle: "none",
          })}
        >
          {children}
        </ul>
      </span>
    </Animate>
  );
};

export const TabContainer: TabContainerProps = ({ children, onMenuClick, showTabs }) => {
  return window.innerWidth > 500 ? (
    <Desktop showTabs={showTabs} onMenuClick={onMenuClick}>
      {children}
    </Desktop>
  ) : (
    <Mobile showTabs={showTabs} onMenuClick={onMenuClick}>
      {children}
    </Mobile>
  );
};
