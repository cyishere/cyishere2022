import { useEffect } from "react";
import styled from "styled-components";

import { useDropper } from "@/hooks/use-dropper";
import { logoUrls } from "@/utils/logos";

interface LogoDropperProps {}

const LogoDropper: React.FC<LogoDropperProps> = () => {
  const { dropperRef, addDropper, count } = useDropper();
  console.log("count:", count);

  useEffect(() => {
    let timer: any;

    if (count < logoUrls.length - 1) {
      timer = setTimeout(() => addDropper(), 500);
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [count]);

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
