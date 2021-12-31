import Link from "next/link";
import styled from "styled-components";

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
  color: ${(props) =>
    props.variant === "primary"
      ? `var(--clr-white)`
      : `var(--clr-text-primary)`};
  background-color: ${(props) =>
    props.variant === "primary" ? `var(--clr-purple-primary)` : `transparent`};
  font-size: var(--font-size-base);
  text-align: center;
  padding: 8px 20px;
  border-radius: 4px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) =>
    props.variant === "primary"
      ? `var(--clr-purple-primary)`
      : `var(--clr-text-primary)`};
  display: inline-block;
  transition: background 300ms ease;

  &:hover {
    color: ${(props) =>
      props.variant === "primary"
        ? `var(--clr-purple-primary)`
        : `var(--clr-white)`};
    background-color: ${(props) =>
      props.variant === "primary" ? `transparent` : `var(--clr-text-primary)`};
  }
`;

export default ButtonLink;
