import styled from "styled-components";
import Link from "next/link";
import { CSSProperties } from "react";

import { QUERIES } from "@/styles/constants";

interface NavLinkProps {
  pathname: string;
}

const NavLink: React.FC<NavLinkProps> = ({ pathname }) => {
  const backgroundImage = `url(/images/decorator-cyan-small.svg)`;

  const getBgImage = (conditon: boolean) => {
    return {
      "--backgroundImage": conditon ? backgroundImage : "none",
    } as CSSProperties;
  };

  return (
    <Wrapper role="navigation" aria-label="Main" id="primary-navigation">
      <NavLinkItem style={getBgImage(pathname === "/")}>
        <Link href="/" passHref>
          <NavLinkAnchor>
            <Item data-content="home">home</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getBgImage(pathname === "/portfolio")}>
        <Link href="/portfolio" passHref>
          <NavLinkAnchor>
            <Item data-content="portfolio">portfolio</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getBgImage(pathname === "/blog")}>
        <Link href="/blog" passHref>
          <NavLinkAnchor>
            <Item data-content="blog">blog</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      <NavLinkItem style={getBgImage(pathname === "/about")}>
        <Link href="/about" passHref>
          <NavLinkAnchor>
            <Item data-content="about">about</Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem>
      {/* <NavLinkItem style={getBgImage(pathname === "/hire-me")}>
        <Link href="/hire-me" passHref>
          <NavLinkAnchor>
            <Item data-content="hire me!">
              <NavLinkAnchorEm>hire me!</NavLinkAnchorEm>
            </Item>
          </NavLinkAnchor>
        </Link>
      </NavLinkItem> */}
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
    font-size: var(--font-size-lg);
    padding-top: var(--gap);
    padding-left: var(--gap);
  }
`;

const Item = styled.span`
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
  padding: 4px 12px 4px 6px;
  background-image: var(--backgroundImage);
  background-position: left center;
  background-size: contain;
  background-repeat: no-repeat;

  &:hover {
    background-image: none;
  }

  @media (prefers-reduced-motion: reduce) {
    &:hover ${NavLinkAnchor} {
      color: var(--clr-cyan);
    }
  }
`;

const NavLinkAnchorEm = styled.em`
  color: var(--clr-purple-primary);
  font-style: italic;
`;

export default NavLink;
