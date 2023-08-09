import { styled } from "@mui/material";
import { FC } from "react";

type FooterLinkProps = {
  href: string;
};

const StyledLink = styled("a")(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: "none",
}));

export const FooterLink: FC<React.PropsWithChildren<FooterLinkProps>> = ({ href, children }) => {
  return (
    <li>
      <StyledLink href={href}>{children}</StyledLink>
    </li>
  );
};
