import { css } from "../styled-system/css";
import { TABS } from "./Tabs";

export const Header = () => {
  const [tab, setTab] = useState(TABS.ABOUT);
  const handleTabChange = (newTab: string) => {
    setTab(newTab);
  };
  return (
    <header className={css({})}>
      <h1 className={css({ fontSize: "4xl", fontFamily: "serif" })}>Jason Nordheim</h1>
      <Tabs tab={tab} onTabChange={handleTabChange} />
    </header>
  );
};
