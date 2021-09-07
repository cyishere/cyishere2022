import Link from "next/link";
import styled from "styled-components";

import { COLORS, FONTS, SCREENS } from "styles/constants";
import { MenuIcon } from "@/components/Assets";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <Wrapper>
      <Link href="/" passHref>
        <Logo>CY is here.</Logo>
      </Link>
      <button>
        <MenuIcon />
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${SCREENS.maxW};
  margin-left: auto;
  margin-right: auto;
`;

const Logo = styled.a`
  font-family: ${FONTS.special};
  font-weight: bold;
  font-size: ${FONTS.lg};
  color: ${COLORS.textSecondary};
  letter-spacing: 4px;
`;

export default Header;
