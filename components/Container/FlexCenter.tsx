import styled from "styled-components";

import { QUERIES } from "@/styles/theme";

interface FlexCenterProps {}

const FlexCenter: React.FC<FlexCenterProps> = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  & > * {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    padding-top: 3rem;
    padding-bottom: 3rem;

    @media ${QUERIES.tabletAndSmaller} {
      flex-direction: column;
    }
  }
`;

export default FlexCenter;
