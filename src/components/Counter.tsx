import { useState } from 'react';

export const Counter = () => {

  const [counter, setCounter] = useState(0);

  const increase = ( value: number = 1 ):void => {
    setCounter((c) => c + value);
  }

  const decrease = ( value: number = 1 ):void => {
    setCounter((c) => c - value);
  }
  
  return (
    <div className="container border bg-light text-bg-light p-3 mt-2">
      <h4>Counter</h4>
      <button 
        className="btn btn-outline-primary"
        onClick={() => increase(1)}
      >
        +1
      </button>
      <button 
        className="btn btn-outline-primary ms-2"
        onClick={() => decrease(1)}
      >
        -1
      </button>
      <button 
        className="btn btn-outline-danger ms-2"
        onClick={() => setCounter(0)}
      >
        Reset
      </button>
      <p className="m-0 mt-2">{counter}</p>
    </div>
  );
}
