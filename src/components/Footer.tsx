import { styled } from "@mui/material";
import { FooterLink } from "./FooterLink";

const UnOrderedList = styled("ul")(({ theme }) => ({
  listStyle: "none",
}));

export const Footer = () => {
  return (
    <footer>
      <UnOrderedList id="footer-links">
        <FooterLink href="#">Github</FooterLink>
        <FooterLink href="#">LinkedIn</FooterLink>
        <FooterLink href="#">Email</FooterLink>
      </UnOrderedList>
    </footer>
  );
};
