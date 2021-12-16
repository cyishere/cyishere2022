import { useState } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Menu } from "react-feather";

import { QUERIES } from "@/styles/constants";
import { MaxWidthWrapper } from "../MaxWidthWrapper";
import { VisuallyHidden } from "../VisuallyHidden";
import { MobileNavbar, DesktopNavbar } from "../Navbar";
import MenuToggleButton from "../MenuToggleButton";

interface HeaderProps {
  pathname: string;
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

        <DesktopNavbar pathname={pathname} />

        <MobileNavbar
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
          <Menu />
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

export default Header;
