import { useEffect, useRef } from "react";

const useInterval = (
  callback: (i: number) => void,
  delay: number | null,
  maxTimes: number
) => {
  const intervalRef = useRef<number | null>(null);
  const countRef = useRef(0);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const tick = savedCallback.current;

    if (typeof delay === "number") {
      if (typeof window !== "undefined") {
        intervalRef.current = window.setInterval(() => {
          console.log("count in interval:", countRef.current);
          if (countRef.current >= maxTimes) {
            return window.clearInterval(intervalRef.current!);
          }
          tick(countRef.current);
          countRef.current++;
        }, delay);

        return () => window.clearInterval(intervalRef.current!);
      }
    }
  }, [delay, maxTimes]);

  return intervalRef.current;
};

export default useInterval;
