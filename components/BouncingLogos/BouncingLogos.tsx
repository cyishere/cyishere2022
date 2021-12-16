import { useEffect, useRef } from "react";
import styled from "styled-components";
import Matter, { Body } from "matter-js";

import { logoUrls } from "@/utils/logos";
import { QUERIES } from "@/styles/constants";

const BouncingLogos: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const logosRef = useRef<Body[]>([]);

  const { Engine, Render, Runner, Composite, Bodies } = Matter;
  // create engine
  const engine = Engine.create(),
    world = engine.world;

  const rest = 0.9,
    space = 600 / 5;

  for (let i = 0; i < logoUrls.length; i++) {
    let logo = Bodies.circle(Math.round(Math.random() * space * i), 60, 35, {
      angle: Math.PI * (Math.random() * 2 - 1),
      restitution: rest,
      render: {
        sprite: {
          texture: logoUrls[i],
          xScale: 1,
          yScale: 1,
        },
      },
    });
    logosRef.current.push(logo);
  }

  useEffect(() => {
    if (!canvasRef.current) return;
    console.log(logosRef.current);

    const canvas = canvasRef.current;
    const width = canvas.offsetWidth;
    const height = canvas.offsetHeight;

    // create renderer
    const render = Render.create({
      // element: boxRef.current,
      canvas,
      engine,
      options: {
        width,
        height,
        background: "transparent",
        wireframes: false,
      },
    });

    Render.run(render);

    // create runner
    const runner = Runner.create();
    Runner.run(runner, engine);

    const boundaryOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    };

    // add bodies
    Composite.add(world, [
      ...logosRef.current,
      // walls
      Bodies.rectangle(width / 2, 0, width, 50, boundaryOptions), // top,
      Bodies.rectangle(width / 2, height, width, 50, boundaryOptions), // bottom
      Bodies.rectangle(0, height / 2, 50, height, boundaryOptions), // left
      Bodies.rectangle(width, height / 2, 50, height, boundaryOptions), // right
    ]);

    // fit the render viewport to the scene
    Render.lookAt(render, {
      min: { x: 0, y: 0 },
      max: { x: width, y: height },
    });

    return () => {
      Render.stop(render);
      Runner.stop(runner);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
