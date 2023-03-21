import styled, { keyframes } from "styled-components";
import { DialogOverlay } from "@reach/dialog";
import { X } from "react-feather";

import VisuallyHidden from "../VisuallyHidden";
import MenuToggleButton from "../MenuToggleButton";
import NavLink from "../NavLink";
import { color } from "@/styles/helpers";

interface MobileNavbarProps {
  isOpen: boolean;
  pathname: string;
  toggleMobileMenu: () => void;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  isOpen,
  pathname,
  toggleMobileMenu,
}) => {
  return (
    <Wrapper isOpen={isOpen} onDismiss={toggleMobileMenu}>
      <NavLink pathname={pathname} />

      <MenuToggleButton
        aria-controls="primary-navigation"
        aria-expanded="false"
        onClick={toggleMobileMenu}
      >
        <VisuallyHidden>Close</VisuallyHidden>
        <X />
      </MenuToggleButton>
    </Wrapper>
  );
};

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const Wrapper = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: ${color("base.200")};
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  @media (prefers-reduced-motion: no-preference) {
    animation: ${slideIn} 500ms both cubic-bezier(0, 0.6, 0.32, 1.06);
    animation-delay: 200ms;
  }
`;

export default MobileNavbar;
