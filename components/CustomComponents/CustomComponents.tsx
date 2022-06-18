import styled from "styled-components";
import Link from "next/link";
import { Hash } from "react-feather";
import { ExternalLink } from "../TextLink";

/**
 * The component of <h2 />
 */
interface Heading2Props {
  children: string;
}

const Heading2 = ({ children }: Heading2Props) => {
  const idText = children.replace(/ /g, "_").toLowerCase();

  return (
    <H2Wrapper id={idText}>
      {children}{" "}
      <Anchor href={`#${idText}`} className="hashtag hidden text-gray-300">
        <Hash />
      </Anchor>
    </H2Wrapper>
  );
};

const Anchor = styled.a`
  color: var(--clr-text-light);
  display: none;
`;

const H2Wrapper = styled.h2`
  font-size: var(--font-size-xl);

  &:hover ${Anchor} {
    display: inline-block;
  }
`;

/**
 * The component of <hr />
 */
export const Hr = styled.hr`
  background-image: url(/images/hr-line.svg);
  background-position: center top;
  background-repeat: no-repeat;
  border: 0;
  height: 50px;
  margin-top: 4rem;
  margin-bottom: 4rem;
`;

/**
 * The component of <ul />
 */
export const UnorderList = styled.ul`
  list-style-position: inside;
  list-style-type: disc;

  li::marker {
    color: var(--clr-text-light);
  }
`;

/**
 * The component of external link
 */
interface ExLinkProps {
  children: string;
  href: string;
}

export const ExLink = ({ children, href }: ExLinkProps) => {
  const external = /^http/.test(href);

  if (external) {
    return <ExternalLink href={href}>{children}</ExternalLink>;
  }

  return (
    <Link href={href} passHref>
      <a>{children}</a>
    </Link>
  );
};

/**
 * The default component
 */
const CustomComponents = {
  h2: Heading2,
  hr: () => <Hr />,
  ul: (props: any) => <UnorderList {...props} />,
  a: ExLink,
};

export default CustomComponents;
