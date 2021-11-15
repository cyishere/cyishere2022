import * as Matter from "matter-js";
import { useEffect, useRef, useState } from "react";

import { logoUrls } from "@/utils/logos";

const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();
const runner = Runner.create();

const createDropper = (url: string) => {
  const dropper = Bodies.circle(
    Math.round(Math.random() * window.innerWidth),
    -30,
    35,
    {
      angle: Math.PI * (Math.random() * 2 - 1),
      friction: 0.001,
      frictionAir: 0.01,
      restitution: 0.75,
      render: {
        sprite: {
          texture: url,
          xScale: 1,
          yScale: 1,
        },
      },
    }
  );

  World.add(engine.world, [dropper]);
};

export const useDropper = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const canvas = ref.current;

    if (!canvas) {
      return;
    }

    const height = canvas.clientHeight;
    const width = canvas.clientWidth;

    const render = Render.create({
      canvas,
      engine: engine,
      options: {
        height,
        width,
        background: "transparent",
        wireframes: false,
      },
    });

    const boundaryOptions = {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        strokeStyle: "transparent",
      },
    };

    const ground = Bodies.rectangle(
      width / 2,
      height,
      width + 20,
      4,
      boundaryOptions
    );

    const leftWall = Bodies.rectangle(
      0,
      height / 2,
      4,
      height + 60,
      boundaryOptions
    );

    const rightWall = Bodies.rectangle(
      width,
      height / 2,
      4,
      height + 60,
      boundaryOptions
    );

    World.add(engine.world, [ground, leftWall, rightWall]);

    Render.run(render);
    Runner.run(runner, engine);
  }, [ref]);

  const addDropper = () => {
    createDropper(logoUrls[count]);
    setCount(count + 1);
  };

  return { dropperRef: ref, addDropper, count };
};
