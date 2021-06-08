import Link from "next/link";
import { ExternalLinkSolid } from "./Icon";

export const TextLink = ({ href, children, classes, noBg }) => {
  const defaultStyle = noBg ? "highlight-link" : "link";
  return (
    <Link href={href}>
      <a className={`px-1 ${defaultStyle} ${classes}`}>{children}</a>
    </Link>
  );
};

export const ButtonLink = ({ href, children, classes, ...rest }) => (
  <Link href={href}>
    <a
      style={{ width: "fit-content" }}
      className={`flex flex-row justify-start items-center ${classes}`}
      {...rest}
    >
      {children}
    </a>
  </Link>
);

export const ExternalLink = ({ href, children, noBg, classes }) => {
  const defaultStyle = noBg ? "highlight-link" : "link";
  const extraStyles = classes ? classes : "";

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${defaultStyle} px-1 ${extraStyles}`}
    >
      {children} <ExternalLinkSolid />
    </a>
  );
};
