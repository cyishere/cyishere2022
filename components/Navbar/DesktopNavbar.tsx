import styled from 'styled-components';

import { QUERIES } from '@/styles/theme';
import NavLink from '../NavLink';

interface DesktopNavbarProps {
  pathname: string;
  home?: boolean;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  pathname,
  home = false,
}) => {
  const Container = home ? HomeWrapper : Wrapper;

  return (
    <Container>
      <NavLink pathname={pathname} />
    </Container>
  );
};

const Wrapper = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const HomeWrapper = styled(Wrapper)`
  max-width: var(--max-w);
  margin: 0 auto;
`;

export default DesktopNavbar;
