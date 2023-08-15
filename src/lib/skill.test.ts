import { test, expect } from "vitest";
import { SKILLS, TAGS, skillHasTag } from "./skills";

test("correctly determines if a skill includes a tag", () => {
  expect(skillHasTag(SKILLS[0], TAGS.Api)).toBe(false);
  expect(skillHasTag(SKILLS[0], TAGS.FrontEnd)).toBe(false);
  expect(skillHasTag(SKILLS[0], TAGS.Backend)).toBe(false);
  expect(skillHasTag(SKILLS[0], TAGS.ProjectManagement)).toBe(false);
  expect(skillHasTag(SKILLS[0], TAGS.DevOps)).toBe(false);
  expect(skillHasTag(SKILLS[0], TAGS.Software)).toBe(false);
  expect(skillHasTag(SKILLS[0], TAGS.Databases)).toBe(false);
  expect(skillHasTag(SKILLS[0], TAGS.Collaboration)).toBe(true);
  expect(skillHasTag(SKILLS[0], TAGS.Documentation)).toBe(true);
});
