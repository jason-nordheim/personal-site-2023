import { styled } from "@mui/material";
import { FooterLink } from "./FooterLink";

const UnorderedList = styled("ul")(({ theme }) => ({
  listStyle: "none",
}));

export const Footer = () => {
  return (
    <footer>
      <UnorderedList id="footer-links">
        <FooterLink href="#">Github</FooterLink>
        <FooterLink href="#">LinkedIn</FooterLink>
        <FooterLink href="#">Email</FooterLink>
      </UnorderedList>
    </footer>
  );
};
