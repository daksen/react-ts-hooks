import { useEffect, useRef, useState } from "react";

type TimerProps = {
  interval: number,
}

export const Timer = ({ interval }: TimerProps) => {

  const [timer, setTimer] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);

  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (interval) {
      ref.current = setInterval(() => setTimer((t) => t + 10), 10);
    }
    return () => {
      ref.current && clearInterval(ref.current);
    }
  }, [interval]);

  useEffect(() => {
    if (interval) {
      if (timer >= interval) {
        setCounter((c) => c + 1);
        setTimer(0);
      }
    } else {
      setCounter(0);
      setTimer(0);
    }
  }, [interval, timer]);

  return (
    <div className="border bg-light text-bg-light p-3 mt-2">
      <p className="m-0 mb-2">Counter: <small>{counter}</small></p>
      <p className="m-0 mb-0">Timer: <small>{timer}</small></p>
    </div>
  );
}
