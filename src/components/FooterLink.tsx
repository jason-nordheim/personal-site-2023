import { FC } from "react";
import { css } from "../styled-system/css";

type FooterLinkProps = {
  href: string;
};

// const StyledLink = styled("a")(({ theme }) => ({
//   color: theme.palette.primary.main,
//   textDecoration: "none",
// }));

export const FooterLink: FC<React.PropsWithChildren<FooterLinkProps>> = ({ href, children }) => {
  return (
    <li>
      <a className={css({ color: "blue.100", textDecoration: "none" })} href={href}>
        {children}
      </a>
    </li>
  );
};
