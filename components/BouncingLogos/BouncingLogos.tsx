import styled from "styled-components";

import useBouncingLogos from "@/hooks/use-bouncing-logos";
import { QUERIES } from "@/styles/theme";

const BouncingLogos: React.FC = () => {
  const { canvasRef } = useBouncingLogos();

  return <Wrapper ref={canvasRef}></Wrapper>;
};

const Wrapper = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  pointer-events: none;

  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

export default BouncingLogos;
