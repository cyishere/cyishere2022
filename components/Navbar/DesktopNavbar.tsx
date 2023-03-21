import styled from "styled-components";

import { QUERIES } from "@/styles/theme";
import NavLink from "../NavLink";

interface DesktopNavbarProps {
  pathname: string;
}

const DesktopNavbar: React.FC<DesktopNavbarProps> = ({ pathname }) => {
  return (
    <Wrapper>
      <NavLink pathname={pathname} />
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: block;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default DesktopNavbar;
