import styled from 'styled-components';
import Link from 'next/link';

import { color } from '@/styles/helpers';
import { MaxWidthWrapper } from '../MaxWidthWrapper';

const HomeHeader = () => {
  return (
    <Wrapper>
      <Nav as="nav">
        <List>
          <li>
            <Link href="/" passHref>
              <Anchor>Home</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/portfolio" passHref>
              <Anchor>Portfolio</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <Anchor>Blog</Anchor>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <Anchor>About</Anchor>
            </Link>
          </li>
        </List>
      </Nav>
    </Wrapper>
  );
};

export default HomeHeader;

export const Wrapper = styled.header`
  padding: 32px;
`;

export const Nav = styled(MaxWidthWrapper)`
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: flex-end;
  gap: 48px;
`;

export const Anchor = styled.a`
  color: ${color('text.main')};
`;
