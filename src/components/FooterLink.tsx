import { FC } from "react";

type FooterLinkProps = {
  href: string;
};
export const FooterLink: FC<React.PropsWithChildren<FooterLinkProps>> = ({ href }) => {
  return (
    <li>
      <a href={href} style={{ textDecoration: "none", color: "" }}></a>
    </li>
  );
};
