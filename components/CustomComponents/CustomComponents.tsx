import styled from 'styled-components';
import { Hash } from 'react-feather';

import type { VariantType } from '../BlockQuote/BlockQuote';
import TextLink from '../TextLink';
import BlockQuote from '../BlockQuote';
import { ReactElement } from 'react';
import { fontSize } from '@/styles/helpers';

/**
 * The component of <h2 />
 */
interface Heading2Props {
  children: string;
}

const Heading2 = ({ children }: Heading2Props) => {
  let sanitizedChildren = '';
  let idText = '';
  let text = '';

  if (typeof children !== 'string') {
    /**
     * if the content(children) has other syntax,
     * it becomes an array.
     * Each item in this array is either a string,
     * or a ReactElement.
     */
    (children as []).forEach((item: ReactElement) => {
      if (typeof item !== 'string') {
        sanitizedChildren += item.props.children;
      } else {
        sanitizedChildren += item;
      }
    });

    idText = sanitizedChildren
      .replace(/[\W_]+/g, ' ')
      .toLowerCase()
      .replace(/ /g, '-');

    text = sanitizedChildren;
  } else {
    idText = children
      .toString()
      .replace(/[\W_]+/g, ' ')
      .toLowerCase()
      .replace(/ /g, '-');

    text = children;
  }

  return (
    <H2Wrapper id={idText} data-text={text}>
      {children}{' '}
      <Anchor href={`#${idText}`} className="hashtag hidden text-gray-300">
        <Hash />
      </Anchor>
    </H2Wrapper>
  );
};

const Anchor = styled.a`
  color: var(--clr-text-light);
  display: inline-block;
  opacity: 0;
`;

const H2Wrapper = styled.h2`
  font-size: ${fontSize('xl')};
  scroll-margin-top: 1em;

  &:hover ${Anchor} {
    border-color: transparent;
    opacity: 1;
    transition: opacity 300ms cubic-bezier(0.17, 0.67, 0.47, 1);
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
 * Component for blockquote
 */
interface QuoteProps {
  // Every line of this markdown blockquote will become an array,
  // which is this `children`
  // If there's no other syntax in a line, it's a pure string;
  // If there's other syntax, it becomes an ReactElement;
  children: any[];
}
export const Quote = ({ children }: QuoteProps) => {
  const TYPES = ['[!INFO] ', '[!WARNING] ', '[!ERROR] '];
  let variant: VariantType = 'default';

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
        kinds.push(item.replace(type, ''));
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
    if (item.hasOwnProperty('props')) {
      if (item?.props?.children[0]?.startsWith(TYPES[0])) {
        variant = 'info';
        pushToItems(item, TYPES[0]);
      } else if (item?.props?.children[0]?.startsWith(TYPES[1])) {
        variant = 'warning';
        pushToItems(item, TYPES[1]);
      } else if (item?.props?.children[0]?.startsWith(TYPES[2])) {
        variant = 'error';
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
  a: TextLink,
  blockquote: (props: QuoteProps) => <Quote {...props} />,
};

export default CustomComponents;
