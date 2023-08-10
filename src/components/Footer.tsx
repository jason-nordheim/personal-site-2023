import { FC } from "react";
import { css } from "../styled-system/css";

type FooterLinkProps = {
  href: string;
};

export const FooterLink: FC<React.PropsWithChildren<FooterLinkProps>> = ({ href, children }) => {
  return (
    <li>
      <a className={css({ color: "blue.500", textDecoration: "none" })} href={href}>
        {children}
      </a>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer>
      <ul className={css({ display: "flex", justifyContent: "space-evenly", bg: "gray.200", mt: "10px", py: "10px" })}>
        <FooterLink href="#">Github</FooterLink>
        <FooterLink href="#">LinkedIn</FooterLink>
        <FooterLink href="#">Email</FooterLink>
      </ul>
    </footer>
  );
};
