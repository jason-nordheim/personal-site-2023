import { SKILL_CATEGORY, Skill } from "../lib";
import { FC, PropsWithChildren, useState } from "react";
import { container } from "../styled-system/patterns";
import { css } from "../styled-system/css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { PageContainer, PageTitle, FormProps, DivProps, LabelProps, AnchorProps } from "./common";
import {
  FILTERS_ALL,
  FILTER_NONE,
  FilterCategories,
  SORT_OPTIONS,
  SortOptions,
  TagFilters,
  makeSkillStyles,
} from "./Skills.Lib";
import { useSortedAndFilteredSkills } from "./Skill.hooks";
import { capitalizeFirstChar } from "../lib/utils/strings";

const SkillsForm: FC<PropsWithChildren<FormProps>> = ({ children, ...rest }) => {
  return (
    <form
      className={css({ display: "flex", flexDirection: "row", fontFamily: "monospace", gap: "10px", my: "10px" })}
      {...rest}
    >
      {children}
    </form>
  );
};

const SortAndFilterColumn: FC<PropsWithChildren<DivProps>> = ({ children, ...rest }) => {
  return (
    <div
      className={css({
        sm: {
          width: "50%",
        },
        md: {
          width: "20%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

const TagSelectionColumn: FC<PropsWithChildren<DivProps>> = ({ children, ...rest }) => {
  return (
    <div
      className={css({
        display: "flex",
        rounded: "md",
        flexDirection: "column",
        border: "1px solid gray",
        flexGrow: 1,
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

const SortFilterContainer: FC<PropsWithChildren<DivProps>> = ({ children, ...rest }) => {
  return (
    <div
      className={css({
        smDown: { mb: "2" },
        display: "flex",
        flexDirection: "column",
        rounded: "md",
        border: "1px solid gray",
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

const SortFilterLabel: FC<PropsWithChildren<LabelProps>> = ({ children, ...rest }) => {
  return (
    <label
      className={css({
        textAlign: "center",
        borderBottom: "1px solid black",
        w: "100%",
        fontWeight: "bold",
        bg: "blue.300",
      })}
      {...rest}
    >
      {children}
    </label>
  );
};

const TagSelectionContainer: FC<PropsWithChildren<DivProps>> = ({ children, ...rest }) => {
  return (
    <div
      className={css({
        smDown: {
          my: "5px",
          display: "grid",
          gridTemplateColumns: "1",
          "& span": {
            "& span": { ml: "2" },
            "& input": { ml: "2" },
          },
        },
        md: { ml: "10px", display: "grid", gridTemplateColumns: 3 },
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

const SkillBubbleContainer: FC<PropsWithChildren<DivProps>> = ({ children, ...rest }) => {
  return (
    <div
      className={container({
        display: "flow",
        textAlign: "center",
        flexFlow: "row",
        opacity: 0.8,
        rounded: "md",
        lineHeight: "tight",
      })}
      {...rest}
    >
      {children}
    </div>
  );
};

type SkillBubbleProps = FC<AnchorProps & { skill: Skill }>;

const SkillBubble: SkillBubbleProps = ({ skill, ...rest }) => {
  return (
    <a href={skill.href} key={skill.name} {...rest}>
      <span className={css({ display: "flex", alignItems: "center", justifyContent: "center" })}>
        {skill.icon && <skill.icon className={css({ mr: "5px", fontSize: "lg" })} />}
        <span>{skill.name}</span>
      </span>
    </a>
  );
};

export const SkillsPage = () => {
  const [filters, setFilters] = useState<TagFilters>(FILTERS_ALL);
  const [sortField, setSortField] = useState<SortOptions>(SORT_OPTIONS.category);
  const [filterCategory, setFilterCategory] = useState<FilterCategories>("All");

  const onFilterChange = (filterKey: string) => {
    if (filterKey == "None") {
      setFilters(FILTER_NONE);
    } else if (filterKey == "All") {
      setFilters(FILTERS_ALL);
    } else {
      setFilters({
        ...filters,
        None: false,
        [filterKey]: !filters[filterKey],
      });
    }
  };

  const skills = useSortedAndFilteredSkills(sortField, filters, filterCategory);

  return (
    <PageContainer>
      <PageTitle>Skills</PageTitle>
      <SkillsForm>
        <SortAndFilterColumn>
          <SortFilterContainer>
            <SortFilterLabel htmlFor="sortOption">Sort by:</SortFilterLabel>
            <select id="sortOption" value={sortField} onChange={(e) => setSortField(e.target.value as SortOptions)}>
              <option value={SORT_OPTIONS.name}>{capitalizeFirstChar(SORT_OPTIONS.name)}</option>
              <option value={SORT_OPTIONS.category}>{capitalizeFirstChar(SORT_OPTIONS.category)}</option>
            </select>
          </SortFilterContainer>
          <SortFilterContainer>
            <SortFilterLabel htmlFor="filterBy">Filter by:</SortFilterLabel>
            <select
              id="filterBy"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value as FilterCategories)}
            >
              {[
                <option key="All" value={"All"}>
                  All
                </option>,
                ...Object.values(SKILL_CATEGORY).map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                }),
              ]}
            </select>
          </SortFilterContainer>
        </SortAndFilterColumn>
        <TagSelectionColumn>
          <SortFilterLabel htmlFor="filterOptions">Show skills related to:</SortFilterLabel>
          <TagSelectionContainer>
            {[
              ...Object.keys(filters).map((k) => {
                // key == tag
                return (
                  <span key={k} className={css({})}>
                    <input type="checkbox" checked={filters[k]} onChange={() => onFilterChange(k)} />
                    <span className={css({ ml: "4px", fontVariant: "titling-caps" })}>{capitalizeFirstChar(k)}</span>
                  </span>
                );
              }),
            ]}
          </TagSelectionContainer>
        </TagSelectionColumn>
      </SkillsForm>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          textStyle: "xs",
          fontVariant: "contextual",
          color: "gray.700",
          fontSize: "12px",
          py: "1",
        })}
      >
        <AiOutlineArrowDown />
        <span className={css({ px: "2" })}>Click any skill below for more information</span>
        <AiOutlineArrowDown />
      </div>
      <SkillBubbleContainer>
        {skills.map((s) => {
          const styles = makeSkillStyles(s.category);
          return <SkillBubble key={s.name} className={styles} skill={s} />;
        })}
      </SkillBubbleContainer>
    </PageContainer>
  );
};
