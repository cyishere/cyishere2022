import styled from "styled-components";
import Link from "next/link";

import { color, fontSize } from "@/styles/helpers";

interface ButtonLinkProps {
  variant?: "default" | "primary";
  href: string;
  children: React.ReactNode;
}

const ButtonLink: React.FunctionComponent<ButtonLinkProps> = ({
  variant = "default",
  href,
  children,
}) => {
  const styles = {
    "--bg": variant === "primary" ? `${color("button.bg")}` : "transparent",
    "--color":
      variant === "primary"
        ? `${color("button.text")}`
        : `${color("button.bg")}`,
    "--borderColor":
      variant === "primary" ? `${color("button.bg")}` : `${color("button.bg")}`,
    "--bgHover":
      variant === "primary" ? "transparent" : `${color("button.bg")}`,
    "--colorHover":
      variant === "primary"
        ? `${color("button.bg")}`
        : `${color("button.text")}`,
    "--borderColorHover":
      variant === "primary" ? `${color("button.bg")}` : `${color("button.bg")}`,
  } as React.CSSProperties;

  if (href.startsWith("http")) {
    return (
      <Link href={href} passHref>
        <Wrapper style={styles} target="_blank" rel="noreferrer">
          {children}
        </Wrapper>
      </Link>
    );
  }

  return (
    <Link href={href} passHref>
      <Wrapper style={styles}>{children}</Wrapper>
    </Link>
  );
};

export default ButtonLink;

const Wrapper = styled.a`
  font-size: ${fontSize("base")};
  text-align: center;
  padding: 8px 20px;
  background-color: var(--bg);
  color: var(--color);
  border-color: var(--borderColor);
  border-radius: 1000px;
  border-width: 1px;
  border-style: solid;
  display: inline-block;
  transition: background 300ms ease;

  &:hover {
    background-color: var(--bgHover);
    color: var(--colorHover);
    border-color: var(--borderColorHover);
  }
`;
