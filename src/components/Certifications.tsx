import {
  CERTIFICATION_VENDORS,
  Certification,
  LINKEDIN_CERTS,
  PLURALSIGHT_CERTS,
  UDEMY_CERTS,
} from "../lib/certifications";
import { sortAscending, sortDescending } from "../lib/utils/sorting";
import { CardGrid } from "./CardGrid";
import { CardContainer } from "./CardContainer";
import { FC, PropsWithChildren } from "react";
import { LiProps } from "./common";
import { PageTitle } from "./common/SharedComponents";

type UseCertificationOptions = {
  sortDirection: "ascending" | "descending";
};

const useCertificationsFilters = (certifications: Certification[], options?: UseCertificationOptions) => {
  if (options?.sortDirection === "ascending") {
    return certifications.sort((a, b) => sortAscending(a.title, b.title));
  }

  if (options?.sortDirection === "descending") {
    return certifications.sort((a, b) => sortDescending(a.title, b.title));
  }

  return certifications;
};

type CertificationCollectionCardProps = {
  certifications: Certification[];
  title: string;
  subtitle: string;
};

const CourseListItem: FC<PropsWithChildren<LiProps>> = ({ children, ...rest }) => {
  return <li {...rest}>{children}</li>;
};

const CertificationCollectionCard: FC<CertificationCollectionCardProps> = ({ title, subtitle, certifications }) => {
  return (
    <CardContainer>
      <p>{title}</p>
      <p>{subtitle}</p>
      <ul>
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

export const Certifications = () => {
  const udemy = useCertificationsFilters(UDEMY_CERTS, { sortDirection: "ascending" });
  const pluralsight = useCertificationsFilters(PLURALSIGHT_CERTS, { sortDirection: "ascending" });
  const linkedIn = useCertificationsFilters(LINKEDIN_CERTS, { sortDirection: "ascending" });

  return (
    <section id="certifications">
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
    </section>
  );
};
