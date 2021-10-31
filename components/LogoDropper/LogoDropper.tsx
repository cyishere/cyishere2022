import { useDropper } from "@/hooks/useDropper";
import styled from "styled-components";

interface LogoDropperProps {}

const LogoDropper: React.FC<LogoDropperProps> = () => {
  const { dropperRef } = useDropper();

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
