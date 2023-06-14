import Link from 'next/link';
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
}

const Header: React.FC<HeaderProps> = ({ pathname }) => {
  const { isOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <Container>
      <Wrapper>
        <Link href="/" passHref>
          <Logo>Chen Yang</Logo>
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
  background-color: ${color('base.200')};
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

const Logo = styled.a`
  font-family: ${font('logo')};
  font-weight: ${fontWeight('normal')};
  font-size: ${fontSize('xxl')};
  color: ${color('text.main')};
  letter-spacing: 4px;
`;

export default Header;
