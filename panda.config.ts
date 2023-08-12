import { defineConfig } from "@pandacss/dev";
import { SKILL_CATEGORY } from "./src/lib/skills";

export default defineConfig({
  // Whether to use css reset
  preflight: true,
  gitignore: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // The output directory for your css system
  outdir: "src/styled-system",
  theme: {
    extend: {
      recipes: {
        skillBubble: {
          description: "custom styles for skill buttons",
          base: {
            display: "inline-block",
            fontSize: "sm",
            borderRadius: "md",
            border: "1px solid black",
            fontFamily: "monospace",
            fontStretch: "condensed",
            margin: "10px",
            minWidth: "100px",
            p: "5px 10px",
          },
          defaultVariants: {
            variant: SKILL_CATEGORY.Concept,
          },
          variants: {
            variant: {
              [SKILL_CATEGORY.Concept]: { backgroundColor: "yellow.200" },
              [SKILL_CATEGORY.Framework]: { backgroundColor: "red.300" },
              [SKILL_CATEGORY.Language]: { backgroundColor: "blue.300" },
              [SKILL_CATEGORY.Library]: { backgroundColor: "green.300" },
              [SKILL_CATEGORY.Software]: { backgroundColor: "orange.300" },
              [SKILL_CATEGORY.Technology]: { backgroundColor: "amber.300" },
            },
          },
        },
      },
    },
  },
});
