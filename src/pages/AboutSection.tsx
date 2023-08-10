import { Stack, Typography } from "@mui/material";
import { Section } from "../components/Section";

export const AboutSection = () => {
  return (
    <Section id="about">
      <Stack>
        <Typography variant="h4" textAlign="center">
          About Me
        </Typography>
        <br />
        <Typography variant="h6">Software Engineer</Typography>
        <Typography variant="body2">
          I am full-stack software with a background in System Administration, Automation and Data-Analysis. My forte is
          building full-stack web applications using technologies like React, Express & Webpack. I always strive to
          reach beyond my comfort zone, to grow my skills and experience.
        </Typography>
        <br />
        <Typography variant="h6">Outside of Work</Typography>
        <Typography variant="body2">
          When I'm not building websites and APIs, I enjoy exploring the great outdoors. Mostly, I am a hiker, a runner,
          and a photographer.
        </Typography>
      </Stack>
    </Section>
  );
};
