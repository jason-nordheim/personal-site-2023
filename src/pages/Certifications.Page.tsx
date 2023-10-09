import { FC, PropsWithChildren } from "react";
import { Caption, CardContainer, CardGrid, LiProps, PageContainer, PageTitle, SubTitle } from "../components";
import {
  CERTIFICATION_VENDORS,
  Certification,
  LINKEDIN_CERTS,
  PLURALSIGHT_CERTS,
  UDEMY_CERTS,
} from "../lib/certifications";
import { css } from "../styled-system/css";
import { AiOutlineArrowDown } from "react-icons/ai";
import { useCertificationsFilters } from "../hooks";

type CertificationCollectionCardProps = {
  certifications: Certification[];
  title: string;
  subtitle: string;
};

const CourseListItem: FC<PropsWithChildren<LiProps>> = ({ children, ...rest }) => {
  return (
    <li className={css({ color: "gray.800", _hover: { textDecoration: "underline" } })} {...rest}>
      {children}
    </li>
  );
};

export const CertificationCollectionCard: FC<CertificationCollectionCardProps> = ({
  title,
  subtitle,
  certifications,
}) => {
  return (
    <CardContainer>
      <SubTitle>{title}</SubTitle>
      <Caption>{subtitle}</Caption>
      <div
        className={css({
          display: "flex",
          justifyContent: "center",
          textStyle: "xs",
          fontVariant: "contextual",
          color: "gray.700",
          fontSize: "12px",
          pt: "3",
          pb: "3",
          px: "1",
        })}
      >
        <AiOutlineArrowDown />
        <span className={css({ px: "2" })}>Click a course below for more information</span>
        <AiOutlineArrowDown />
      </div>
      <ul
        className={css({
          listStyle: "outside",
          ml: "15px",
          textStyle: "sm",
          fontFamily: "sans-serif",
        })}
      >
        {certifications.map(({ courseUrl, title, certificateUrl }) => {
          if (certificateUrl) {
            return (
              <CourseListItem key={title}>
                <a href={certificateUrl}>{title}</a>
              </CourseListItem>
            );
          } else if (courseUrl) {
            return (
              <CourseListItem key={title}>
                <a href={courseUrl}>{title}</a>
              </CourseListItem>
            );
          } else {
            return <CourseListItem key={title}>{title}</CourseListItem>;
          }
        })}
      </ul>
    </CardContainer>
  );
};

export const CertificationsPage = () => {
  const udemy = useCertificationsFilters(UDEMY_CERTS, { sortDirection: "ascending" });
  const pluralsight = useCertificationsFilters(PLURALSIGHT_CERTS, { sortDirection: "ascending" });
  const linkedIn = useCertificationsFilters(LINKEDIN_CERTS, { sortDirection: "ascending" });

  return (
    <PageContainer>
      <PageTitle>Certifications</PageTitle>
      <CardGrid>
        {udemy?.length && (
          <CertificationCollectionCard
            key="udemy"
            certifications={udemy}
            title={CERTIFICATION_VENDORS.Udemy.name}
            subtitle={CERTIFICATION_VENDORS.Udemy.subtitle}
          />
        )}
        {pluralsight?.length && (
          <CertificationCollectionCard
            key="pluralsight"
            certifications={pluralsight}
            title={CERTIFICATION_VENDORS.PluralSight.name}
            subtitle={CERTIFICATION_VENDORS.PluralSight.subtitle}
          />
        )}
        {linkedIn?.length && (
          <CertificationCollectionCard
            key="linkedIn"
            certifications={linkedIn}
            title={CERTIFICATION_VENDORS.LinkedIn.name}
            subtitle={CERTIFICATION_VENDORS.LinkedIn.subtitle}
          />
        )}
      </CardGrid>
    </PageContainer>
  );
};
