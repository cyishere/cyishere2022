import styled from "styled-components";
import { ButtonHTMLAttributes } from "react";

import { QUERIES } from "@/styles/theme";
import { color } from "@/styles/helpers";

interface MenuToggleButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const MenuToggleButton: React.FC<MenuToggleButtonProps> = ({
  children,
  ...delegated
}) => {
  return (
    <Wrapper
      aria-controls="primary-navigation"
      aria-expanded="false"
      {...delegated}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  color: ${color("text.main")};
  display: none;
  cursor: pointer;

  @media ${QUERIES.tabletAndSmaller} {
    display: block;
    position: absolute;
    top: 2rem;
    right: 2rem;
  }
`;

export default MenuToggleButton;
