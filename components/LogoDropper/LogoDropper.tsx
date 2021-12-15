import styled from "styled-components";

import { useDropper } from "@/hooks/use-dropper";
import { logoUrls } from "@/utils/logos";
import useInterval from "@/hooks/use-interval";

interface LogoDropperProps {}

const LogoDropper: React.FC<LogoDropperProps> = () => {
  const { dropperRef, addDropper } = useDropper();
  useInterval(addDropper, 1000, logoUrls.length);

  return <Wrapper ref={dropperRef} />;
};

const Wrapper = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  pointer-events: none;
`;

export default LogoDropper;
