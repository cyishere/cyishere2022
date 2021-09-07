import Link from "next/link";
import styled from "styled-components";
import { COLORS, FONTS } from "styles/constants";

interface ButtonLinkProps {
  variant?: "default" | "primary";
}

interface LinkProps extends ButtonLinkProps {
  href: string;
}

const ButtonLink: React.FC<LinkProps> = ({
  variant = "default",
  href,
  children,
}) => {
  return (
    <Link href={href} passHref>
      <Wrapper variant={variant}>{children}</Wrapper>
    </Link>
  );
};

const Wrapper = styled.a<ButtonLinkProps>`
  display: inline-block;
  font-size: ${FONTS.base};
  color: ${COLORS.textPrimary};
  text-align: center;
  padding: 8px 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(p) =>
    p.variant === "primary" ? COLORS.purplePrimary : COLORS.textSecondary};
  background: ${(p) =>
    p.variant === "primary" ? COLORS.purplePrimary : `transparent`};
  color: ${(p) =>
    p.variant === "primary" ? COLORS.white : COLORS.textPrimary};
`;

export default ButtonLink;
