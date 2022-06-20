import styled from "styled-components";
import Link from "next/link";
import { Hash } from "react-feather";

import type { VariantType } from "../BlockQuote/BlockQuote";
import { ExternalLink } from "../TextLink";
import BlockQuote from "../BlockQuote";

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
 * Component for blockquote
 */
interface QuoteProps {
  children: any[];
}
export const Quote = ({ children }: QuoteProps) => {
  const OPTIONS = ["[!INFO] ", "[!WARNING] ", "[!ERROR] "];
  let variant: VariantType = "default";
  let content: any[] = [];

  const pushContent = (i: any, option: string) => {
    content.push({
      ...i,
      props: {
        ...i.props,
        children: i.props.children.replace(option, ""),
      },
    });
  };

  children.forEach((item) => {
    if (item.hasOwnProperty("props")) {
      if (item.props.children.startsWith(OPTIONS[0])) {
        variant = "info";
        pushContent(item, OPTIONS[0]);
      } else if (item.props.children.startsWith(OPTIONS[1])) {
        variant = "warning";
        pushContent(item, OPTIONS[1]);
      } else if (item.props.children.startsWith(OPTIONS[2])) {
        variant = "error";
        pushContent(item, OPTIONS[2]);
      } else {
        content.push(item);
      }
    } else {
      content.push(item);
    }
  });

  return <BlockQuote variant={variant}>{content}</BlockQuote>;
};

/**
 * The default component
 */
const CustomComponents = {
  h2: Heading2,
  hr: () => <Hr />,
  ul: (props: any) => <UnorderList {...props} />,
  a: ExLink,
  blockquote: (props: QuoteProps) => <Quote {...props} />,
};

export default CustomComponents;
