import styled from "styled-components";

interface VisuallyHiddenProps {}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  ...rest
}) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

const Wrapper = styled.div`
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
`;

export default VisuallyHidden;
