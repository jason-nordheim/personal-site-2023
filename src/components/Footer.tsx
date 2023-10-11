import { FC } from "react";
import { css } from "../styled-system/css";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { IconType } from "react-icons";
import { MdEmail } from "react-icons/md";

type FooterLinkProps = {
  href: string;
  Icon: IconType;
  text: string;
};

export const FooterLink: FC<FooterLinkProps> = ({ href, Icon, text }) => {
  return (
    <li>
      <a
        className={css({
          color: "black",
          textDecoration: "none",
          display: "flex",
          alignItems: "center",
          "&:hover": { color: "white" },
        })}
        href={href}
      >
        <span>
          <Icon />
        </span>
        <span className={css({ ml: "5px", "&:hover": { textDecoration: "underline" } })}>{text}</span>
      </a>
    </li>
  );
};

export const Footer = () => {
  return (
    <footer
      className={css({
        bottom: "0",
        width: "100%",
        mt: "30px",
        bg: " rgb(197, 149, 241)",
        zIndex: 1000,
      })}
    >
      <ul className={css({ display: "flex", justifyContent: "space-evenly", py: "10px" })}>
        <FooterLink Icon={SiGithub} href="https://github.com/jason-nordheim" text="Github" />
        <FooterLink Icon={SiLinkedin} href="https://www.linkedin.com/in/jasonnordheim/" text="LinkedIn" />
        <FooterLink Icon={MdEmail} href="mailto: jason.nordheim@gmail.com" text="Email" />
      </ul>
    </footer>
  );
};
