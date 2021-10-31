import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { CSSProperties } from "react";

import { QUERIES } from "@/styles/constants";

interface NavbarProps {
  isOpen: boolean;
  pathname?: string;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, pathname }) => {
  const backgroundImage = `url(/images/decorator-cyan-small.svg)`;

  const getBgImage = (conditon: boolean) => {
    return {
      "--backgroundImage": conditon ? backgroundImage : "none",
    } as CSSProperties;
  };

  return (
    <Wrapper isOpen={isOpen}>
      <NavLink id="primary-navigation">
        <NavLinkItem style={getBgImage(pathname === "/")}>
          <Link href="/" passHref>
            <NavLinkAnchor data-content="home">home</NavLinkAnchor>
          </Link>
        </NavLinkItem>
        <NavLinkItem style={getBgImage(pathname === "/portfolio")}>
          <Link href="/portfolio" passHref>
            <NavLinkAnchor data-content="portfolio">portfolio</NavLinkAnchor>
          </Link>
        </NavLinkItem>
        <NavLinkItem style={getBgImage(pathname === "/blog")}>
          <Link href="/blog" passHref>
            <NavLinkAnchor data-content="blog">blog</NavLinkAnchor>
          </Link>
        </NavLinkItem>
        <NavLinkItem style={getBgImage(pathname === "/about")}>
          <Link href="/about" passHref>
            <NavLinkAnchor data-content="about">about</NavLinkAnchor>
          </Link>
        </NavLinkItem>
        <NavLinkItem style={getBgImage(pathname === "/hire-me")}>
          <Link href="/hire-me" passHref>
            <NavLinkAnchor data-content="hire me!">
              <NavLinkAnchorEm>hire me!</NavLinkAnchorEm>
            </NavLinkAnchor>
          </Link>
        </NavLinkItem>
      </NavLink>
    </Wrapper>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled.nav<NavbarProps>`
  @media ${QUERIES.tabletAndSmaller} {
    display: ${(p) => (p.isOpen ? "block" : "none")};
    position: fixed;
    inset: 0;
    background-color: hsl(var(--clr-purple-primary) / 0.2);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    animation: ${slideIn} 300ms ease-in-out;
  }
`;

const NavLink = styled.ul`
  --gap: 1.5rem;
  display: flex;
  gap: var(--gap);

  @media ${QUERIES.tabletAndSmaller} {
    --gap: 3rem;
    flex-direction: column;
    font-size: var(--font-size-lg);
    padding-top: var(--gap);
    padding-left: var(--gap);
  }
`;

const NavLinkAnchor = styled.a`
  display: block;
  position: relative;
  color: var(--clr-text-primary);
  transition: transform 300ms;

  &::before {
    content: attr(data-content);
    position: absolute;
    top: 0;
    left: 0;
    color: var(--clr-cyan);
    transform: translateY(100%);
  }
`;

const NavLinkItem = styled.li`
  padding-left: 6px;
  padding-right: 6px;
  background-image: var(--backgroundImage);
  background-position: left center;
  background-repeat: no-repeat;
  overflow: hidden;

  &:hover {
    background-image: none;
  }

  @media ${QUERIES.tabletAndSmaller} {
    background-size: contain;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover ${NavLinkAnchor} {
      color: var(--clr-cyan);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    &:hover ${NavLinkAnchor} {
      transform: translateY(-100%);
    }
  }
`;

const NavLinkAnchorEm = styled.em`
  color: var(--clr-purple-primary);
  font-style: italic;
`;

export default Navbar;
