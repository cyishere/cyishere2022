import { CSSProperties } from "react";
import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { DialogOverlay } from "@reach/dialog";

import { COLORS, QUERIES } from "@/styles/constants";
import { VisuallyHidden } from "../VisuallyHidden";
import { X } from "react-feather";

interface NavbarProps {
  isOpen: boolean;
  pathname?: string;
  toggleMobileMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({
  isOpen,
  pathname,
  toggleMobileMenu,
}) => {
  const backgroundImage = `url(/images/decorator-cyan-small.svg)`;

  const getBgImage = (conditon: boolean) => {
    return {
      "--backgroundImage": conditon ? backgroundImage : "none",
    } as CSSProperties;
  };

  return (
    <Wrapper isOpen={isOpen} onDismiss={toggleMobileMenu}>
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
      <MenuToggleButton
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={toggleMobileMenu}
      >
        <VisuallyHidden>Close</VisuallyHidden>
        <CloseIconWrapper>
          <X />
        </CloseIconWrapper>
      </MenuToggleButton>
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

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: hsl(${COLORS.purpleLight} / 0.7);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

const NavLink = styled.ul`
  --gap: 1rem;
  display: flex;
  gap: var(--gap);

  @media ${QUERIES.tabletAndSmaller} {
    --gap: 3rem;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: var(--font-size-lg);
    padding-top: var(--gap);
    padding-left: var(--gap);
  }
`;

const NavLinkAnchor = styled.a`
  /* This margin can push the outline out of the view */
  margin-bottom: 1px;
  display: block;
  position: relative;
  color: var(--clr-text-primary);
  transition: transform 300ms;

  @media ${QUERIES.tabletAndSmaller} {
    margin-bottom: 0;
  }

  &:active {
    outline: 0;
  }

  &:focus {
    outline-offset: 0;
  }

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
  padding-right: 12px;
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

const MenuToggleButton = styled.button`
  display: none;
  cursor: pointer;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

const CloseIconWrapper = styled.div``;

export default Navbar;
