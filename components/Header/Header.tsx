import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Menu, X } from "react-feather";

import { QUERIES } from "@/styles/constants";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { VisuallyHidden } from "../VisuallyHidden";
import { Navbar } from "../Navbar";

interface HeaderProps {
  pathname: string;
}

interface MobileNavProps {
  isOpen: boolean;
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMobileMenu = () => setIsOpen(!isOpen);

  return (
    <MaxWidthWrapper>
      <Wrapper>
        <Link href="/" passHref>
          <Logo>CY is here.</Logo>
        </Link>

        <Navbar
          isOpen={isOpen}
          pathname={pathname}
          toggleMobileMenu={toggleMobileMenu}
        />

        <MenuToggleButton
          aria-controls="primary-navigation"
          aria-expanded="false"
          onClick={toggleMobileMenu}
        >
          <VisuallyHidden>Menu</VisuallyHidden>
          <MenuIconWrapper isOpen={isOpen}>
            <Menu />
          </MenuIconWrapper>
        </MenuToggleButton>
      </Wrapper>
    </MaxWidthWrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 48px;
  margin-bottom: 96px;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 0;
  }
`;

const Logo = styled.a`
  font-family: var(--ff-logo);
  font-weight: var(--font-weight-normal);
  font-size: var(--font-size-big);
  color: var(--clr-text-primary);
  letter-spacing: 4px;
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

const MenuIconWrapper = styled.div<MobileNavProps>`
  display: ${(p) => (p.isOpen ? "none" : "block")};
`;

export default Header;
