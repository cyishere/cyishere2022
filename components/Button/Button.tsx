import type { HTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import { color, fontSize } from '@/styles/helpers';

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  href?: string;
}

const Button: React.FunctionComponent<ButtonProps> = ({
  variant = 'primary',
  children,
  href,
  ...rest
}) => {
  const as = href ? 'a' : 'button';
  const Component = variant === 'secondary' ? SecondrayBtn : PrimaryBtn;

  if (href) {
    if (href.startsWith('http')) {
      return (
        <Component
          as={as}
          href={href}
          target="_blank"
          rel="noreferrer"
          {...rest}
        >
          {children}
        </Component>
      );
    }

    return (
      <Link href={href} passHref>
        <Component as={as}>{children}</Component>
      </Link>
    );
  }

  return (
    <Component as={as} {...rest}>
      {children}
    </Component>
  );
};

export default Button;

const Basic = styled.a`
  font-size: ${fontSize('base')};
  text-align: center;
  padding: 8px 20px;
  border-radius: 1000px;
  border-width: 1px;
  border-style: solid;
  display: inline-block;
  transition: background 300ms ease;
`;

const PrimaryBtn = styled(Basic)`
  background-color: ${color('button.bg')};
  color: ${color('button.text')};
  border-color: ${color('button.bg')};

  &:hover {
    background-color: transparent;
    color: ${color('button-secondary.bg')};
    border-color: ${color('button-secondary.bg')};
  }
`;

const SecondrayBtn = styled(Basic)`
  background-color: transparent;
  color: ${color('button-secondary.bg')};
  border-color: ${color('button-secondary.bg')};

  &:hover {
    background-color: ${color('button-secondary.bg')};
    color: ${color('button-secondary.text')};
    border-color: ${color('button-secondary.bg')};
  }
`;
