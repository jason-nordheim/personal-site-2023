import { CertificationsSection } from "../components/sections/CertificationsSection";
import { PageContainer, PageTitle } from "../components/common";
import { SkillsSection } from "../components/sections/SkillsSection";

export const KnowledgePage = () => {
  return (
    <PageContainer>
      <PageTitle>Skills</PageTitle>
      <SkillsSection />
      <CertificationsSection />
    </PageContainer>
  );
};
