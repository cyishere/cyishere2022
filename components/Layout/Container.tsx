import styled from "styled-components";

interface ContainerProps {}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  max-width: 1130px;
  width: 100%;
`;

export default Container;
