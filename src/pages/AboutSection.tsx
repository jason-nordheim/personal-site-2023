import { Stack, Typography } from "@mui/material";
import { Section } from "../components/Section";

const CONTENT = {
  title: " About Me",
  subTitle1: "Software Engineer",
  body1:
    " I am full-stack software with a background in System Administration, Automation and Data-Analysis. My forte is building full-stack web applications using technologies like React, Express & Webpack. I always strive to reach beyond my comfort zone, to grow my skills and experience.",
  subTitle2: "Outside of Work",
  body2:
    " When I'm not building websites and APIs, I enjoy exploring the great outdoors. Mostly, I am a hiker, a runner, and a photographer.",
};

export const AboutSection = () => {
  return (
    <Section id="about">
      <Stack>
        <Typography variant="h4" textAlign="center">
          {CONTENT.title}
        </Typography>
        <br />
        <Typography variant="h6">{CONTENT.subTitle1}</Typography>
        <Typography variant="body2">{CONTENT.body1}</Typography>
        <br />
        <Typography variant="h6">{CONTENT.subTitle2}</Typography>
        <Typography variant="body2">{CONTENT.body2}</Typography>
      </Stack>
    </Section>
  );
};
