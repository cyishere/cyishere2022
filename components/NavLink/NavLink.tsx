import { CSSProperties, useContext } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Moon, Sun } from 'react-feather';

import { QUERIES } from '@/styles/theme';
import { color, fontSize } from '@/styles/helpers';
import { LOCAL_THEME_NAME, THEME_NAMES } from '@/utils/constants';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';
import { ThemeContext } from 'pages/_app';

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
            <Item data-content="home">home</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getActiveStyles(pathname, 'portfolio')}>
        <Link href="/portfolio" passHref>
          <NavLinkAnchor>
            <Item data-content="portfolio">portfolio</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getActiveStyles(pathname, 'blog')}>
        <Link href="/blog" passHref>
          <NavLinkAnchor>
            <Item data-content="blog">blog</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getActiveStyles(pathname, 'about')}>
        <Link href="/about" passHref>
          <NavLinkAnchor>
            <Item data-content="about">about</Item>
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
