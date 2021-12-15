import { useRef, useState } from "react";
import styled from "styled-components";

import { useDropper } from "@/hooks/use-dropper";
import useInterval from "@/hooks/use-interval";
import { logoUrls } from "@/utils/logos";

interface LogoDropperProps {}

const LogoDropper: React.FC<LogoDropperProps> = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef<number | null>(null);

  const { dropperRef, addDropper } = useDropper();

  timerRef.current = useInterval(tick, count < logoUrls.length ? 1000 : null);

  function tick() {
    addDropper(count);
    setCount((prev) => prev + 1);
  }

  return (
    <>
      <Wrapper ref={dropperRef} />
      <Button onClick={() => tick()}>Drop</Button>
    </>
  );
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

const Button = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

export default LogoDropper;
