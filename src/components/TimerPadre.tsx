import { useState } from "react";
import { Timer } from "./Timer";

export const TimerPadre = () => {

  const [interval, setInterval] = useState<number>(0);

  return (
    <div className="container border bg-light text-bg-light p-3 mt-2">
      <div className="w-100">
        <button
          className="btn btn-outline-success w-auto"
          onClick={() => setInterval(1000)}
        >
          1000
        </button>
        <button
          className="btn btn-outline-success w-auto ms-2"
          onClick={() => setInterval(2000)}
        >
          2000
        </button>
        <button
          className="btn btn-outline-success w-auto ms-2"
          onClick={() => setInterval(3000)}
        >
          3000
        </button>
        <button
          className="btn btn-outline-danger w-auto ms-2"
          onClick={() => setInterval(0)}
        >
          Reset
        </button>
      </div>
      <p className="m-0 mt-2">Interval: <small>{interval}</small></p>
      <Timer interval={interval} />
    </div>
  );
}
