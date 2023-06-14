import styled from 'styled-components';
import { Menu } from 'react-feather';

import useMobileMenu from '@/hooks/use-mobile-menu';
import NavLink from '../NavLink';
import { MobileNavbar } from '../Navbar';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';
import { QUERIES } from '@/styles/theme';

type HomeHeaderProps = {
  pathname: string;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ pathname }) => {
  const { isOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <Wrapper>
      <Nav as="nav">
        <NavLink pathname={pathname} />
      </Nav>

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
  );
};

export default HomeHeader;

const Wrapper = styled.header`
  padding: 32px;
`;

const Nav = styled.nav`
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;
