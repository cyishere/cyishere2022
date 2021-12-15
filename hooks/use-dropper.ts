import * as Matter from "matter-js";
import { useEffect, useRef } from "react";

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
  /**
   * For the canvas
   */
  const ref = useRef<HTMLCanvasElement>(null);

  // Setup the canvas
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

  const addDropper = (count: number) => {
    console.log("count in dropper:", count);
    createDropper(logoUrls[count]);
  };

  return { dropperRef: ref, addDropper };
};
