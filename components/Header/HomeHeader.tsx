import styled from 'styled-components';
import { Menu } from 'react-feather';

import useMobileMenu from '@/hooks/use-mobile-menu';
import { DesktopNavbar, MobileNavbar } from '../Navbar';
import MenuToggleButton from '../MenuToggleButton/MenuToggleButton';
import VisuallyHidden from '../VisuallyHidden/VisuallyHidden';

type HomeHeaderProps = {
  pathname: string;
};

const HomeHeader: React.FC<HomeHeaderProps> = ({ pathname }) => {
  const { isOpen, toggleMobileMenu } = useMobileMenu();

  return (
    <Wrapper>
      <DesktopNavbar pathname={pathname} home={true} />

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
