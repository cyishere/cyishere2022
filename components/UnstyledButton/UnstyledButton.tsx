import styled from "styled-components";

interface ButtonPropsType {
  display?: "inline-block" | "block";
}

export default styled.button<ButtonPropsType>`
  text-align: center;
  font: inherit;
  color: inherit;
  background: transparent;
  border: none;
  display: ${(props) => props.display || "block"};
  margin: 0;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }
`;
