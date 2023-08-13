import { FC, PropsWithChildren } from "react";
import { css, cx } from "../styled-system/css";
import { LiProps } from "../pages/common";
import { BsInfoCircleFill } from "react-icons/bs";
import { LiaToolsSolid } from "react-icons/lia";
import { BiBuildings } from "react-icons/bi";
import { IoIosSchool } from "react-icons/io";
import { ValueOf } from "ts-essentials";

export const TABS = { ABOUT: "About", SKILL: "Skills", EXPERIENCE: "Experience", EDUCATION: "Education" };

type TabValue = ValueOf<typeof TABS>;

const TAB_ICONS = {
  [TABS.ABOUT]: BsInfoCircleFill,
  [TABS.SKILL]: LiaToolsSolid,
  [TABS.EXPERIENCE]: BiBuildings,
  [TABS.EDUCATION]: IoIosSchool,
};

const TabContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ul
      className={css({
        listStyle: "none",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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

const Tab: FC<LiProps & { isSelected: boolean; value: TabValue }> = ({ isSelected, className, value, ...rest }) => {
  const Icon = TAB_ICONS[value];
  const style = css({
    translate: "0 -20px",
    display: "flex",
    flex: "1",
    mx: "10px",
    flexDirection: "row",
    gap: "1",
    alignItems: "center",
    justifyContent: "center",
    fontVariant: "small-caps",
    fontWeight: isSelected ? "extrabold" : "bold",
    p: "3px",
    textAlign: "center",
    rounded: "md",
    alignSelf: "center",
    maxWidth: "200px",
    transitionDuration: "0.5s",
    color: isSelected ? "blue.500" : undefined,
    outline: isSelected ? "then" : undefined,
    outlineStyle: "inset",
    _hover: {
      cursor: "pointer",
      transition: "ease-in-out",
      transitionDuration: "0.3s",
      textDecoration: "underline",
    },
    sm: {
      p: "2px",
    },
  });
  return (
    <li className={cx(style, className)} {...rest}>
      <Icon />
      <p>{value}</p>
    </li>
  );
};

export type TabsProps = {
  selectedTab: string;
  onTabChange: (newTab: string) => void;
};

export const Tabs: FC<TabsProps> = ({ selectedTab, onTabChange }) => {
  return (
    <TabContainer>
      {Object.values(TABS).map((t) => {
        return <Tab onClick={() => onTabChange(t)} isSelected={t == selectedTab} key={t} value={t} />;
      })}
    </TabContainer>
  );
};
