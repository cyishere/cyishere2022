import Link from 'next/link';
import type { CSSProperties } from 'react';
import { useContext } from 'react';
import { Moon, Rss, Sun } from 'react-feather';
import styled from 'styled-components';

import { color, fontSize } from '@/styles/helpers';
import { QUERIES } from '@/styles/theme';
import { LOCAL_THEME_NAME, THEME_NAMES } from '@/utils/constants';
import { ThemeContext } from 'pages/_app';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

interface NavLinkProps {
  pathname: string;
}

const NavLink: React.FC<NavLinkProps> = ({ pathname }) => {
  const ctx = useContext(ThemeContext);
  const getActiveStyles = (path: string, prefix: string) => {
    const homePage = path === prefix || null;

    let condition = homePage ?? path.slice(1).startsWith(prefix);

    return {
      '--activeColor': condition ? 'var(--clr-accent-main)' : 'transparent',
    } as CSSProperties;
  };

  const themeHandler = () => {
    ctx?.setIsLight(!ctx.isLight);
    localStorage.setItem(
      LOCAL_THEME_NAME,
      ctx?.isLight ? THEME_NAMES.dark : THEME_NAMES.light
    );
  };

  return (
    <Wrapper role="navigation" aria-label="Main" id="primary-navigation">
      <NavLinkItem style={getActiveStyles(pathname, '/')}>
        <Link href="/" passHref>
          <NavLinkAnchor>
            <Item data-content="Home">Home</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getActiveStyles(pathname, 'portfolio')}>
        <Link href="/portfolio" passHref>
          <NavLinkAnchor>
            <Item data-content="Portfolio">Portfolio</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getActiveStyles(pathname, 'blog')}>
        <Link href="/blog" passHref>
          <NavLinkAnchor>
            <Item data-content="Blog">Blog</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getActiveStyles(pathname, 'about')}>
        <Link href="/about" passHref>
          <NavLinkAnchor>
            <Item data-content="About">About</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      {/* <NavLinkItem style={getActiveStyles(pathname, "hire-me")}>
        <Link href="/hire-me" passHref>
          <NavLinkAnchor>
            <Item data-content="hire me!">
              <NavLinkAnchorEm>hire me!</NavLinkAnchorEm>
            </Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem> */}
      <NavLinkItem>
        <NavLinkAnchor href="/rss.xml" rel="noreferrer" target="_blank">
          <VisuallyHidden>RSS</VisuallyHidden>
          <Rss />
        </NavLinkAnchor>
      </NavLinkItem>
      <NavLinkItem>
        <UnstyledButton onClick={themeHandler}>
          <VisuallyHidden>
            {ctx?.isLight ? 'Change to dark theme' : 'Change to light theme'}
          </VisuallyHidden>
          {ctx?.isLight ? <Moon /> : <Sun />}
        </UnstyledButton>
      </NavLinkItem>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  --gap: 1rem;
  display: flex;
  gap: var(--gap);

  @media ${QUERIES.tabletAndSmaller} {
    --gap: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: ${fontSize('lg')};
    padding-top: var(--gap);
    padding-left: var(--gap);
  }
`;

const Item = styled.span`
  display: block;
  position: relative;
  color: ${color('text.main')};
  transition: transform 300ms;

  &::after {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    color: ${color('primary.main')};
    transform: translateY(100%);
  }
`;

const NavLinkAnchor = styled.a`
  display: block;
  overflow: hidden;
  color: ${color('text.main')};

  @media (prefers-reduced-motion: no-preference) {
    &:hover ${Item} {
      transform: translateY(-100%);
    }
  }
`;

const NavLinkItem = styled.li`
  padding: 4px 6px;
  position: relative;

  &::after {
    content: '';
    display: block;
    height: 5px;
    background-color: var(--activeColor);
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;
  }

  &:hover {
    &::after {
      display: none;
    }
  }
`;

// const NavLinkAnchorEm = styled.em`
//   color: var(--clr-primary-main);
//   font-style: italic;
// `;

export default NavLink;
