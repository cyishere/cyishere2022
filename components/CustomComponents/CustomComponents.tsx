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
  // Every line of this markdown blockquote will become an item of an array,
  // which is this `children`
  // If there's no other syntax in this line, it's a pure string;
  // If there's other syntax, it becomes an array contains the text
  // as pure string and React element which is the other syntax.
  children: any[];
}
export const Quote = ({ children }: QuoteProps) => {
  const TYPES = ["[!INFO] ", "[!WARNING] ", "[!ERROR] "];
  let variant: VariantType = "default";

  // This is the formatted equivalent to the `children`
  let items: any[] = [];

  /**
   * Remove the type string.
   * @param element - The line with other syntax
   * @param type - The type of this blockquote
   */
  const pushToItems = (element: any, type: string) => {
    const kinds: any[] = [];
    element.props.children.forEach((item: any, i: number) => {
      if (i === 0) {
        kinds.push(item.replace(type, ""));
      } else {
        kinds.push(item);
      }
    });

    items.push({
      ...element,
      props: {
        children: kinds,
      },
    });
  };

  children.forEach((item) => {
    // If this line has `props` property, it has other syntax
    if (item.hasOwnProperty("props")) {
      if (item?.props?.children[0]?.startsWith(TYPES[0])) {
        variant = "info";
        pushToItems(item, TYPES[0]);
      } else if (item?.props?.children[0]?.startsWith(TYPES[1])) {
        variant = "warning";
        pushToItems(item, TYPES[1]);
      } else if (item?.props?.children[0]?.startsWith(TYPES[2])) {
        variant = "error";
        pushToItems(item, TYPES[2]);
      } else {
        items.push(item);
      }

      // Otherwise, push this pure string line to `items`
    } else {
      items.push(item);
    }
  });

  return <BlockQuote variant={variant}>{items}</BlockQuote>;
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
