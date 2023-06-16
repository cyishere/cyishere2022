import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import { Menu } from 'react-feather';

import { QUERIES } from '@/styles/theme';
import { color, font, fontSize, fontWeight } from '@/styles/helpers';
import useMobileMenu from '@/hooks/use-mobile-menu';
import VisuallyHidden from '../VisuallyHidden';
import { MobileNavbar, DesktopNavbar } from '../Navbar';
import MenuToggleButton from '../MenuToggleButton';

interface HeaderProps {
  pathname: string;
  bg: string;
}

const Header: React.FC<HeaderProps> = ({ pathname, bg }) => {
  const { isOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <Container style={{ '--bg': bg } as React.CSSProperties}>
      <Wrapper>
        <Link href="/" passHref>
          <LogoContainer>
            <Img>
              <Image src="/favicon.png" alt="" width="32px" height="32px" />
            </Img>
            <Logo>Chen Yang</Logo>
          </LogoContainer>
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
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--bg);
`;

const Wrapper = styled.header`
  max-width: var(--max-w);
  margin: 0 auto;
  padding-top: 32px;
  padding-bottom: 96px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    padding-top: 0;
  }
`;

const Img = styled.div`
  flex: 1;
  height: 32px;
`;

const LogoContainer = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Logo = styled.span`
  font-family: ${font('special')};
  font-weight: ${fontWeight('normal')};
  font-size: ${fontSize('xxl')};
  color: ${color('text.main')};
  letter-spacing: 4px;
`;

export default Header;
