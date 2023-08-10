import { css } from "../styled-system/css";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <footer>
      <ul className={css({ display: "flex" })}>
        <FooterLink href="#">Github</FooterLink>
        <FooterLink href="#">LinkedIn</FooterLink>
        <FooterLink href="#">Email</FooterLink>
      </ul>
    </footer>
  );
};
