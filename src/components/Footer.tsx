import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <footer>
      <ul id="footer-links">
        <li>
          <FooterLink href="#">Github</FooterLink>
        </li>
        <li>
          <a href="#">LinkedIn</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
      </ul>
    </footer>
  );
};
