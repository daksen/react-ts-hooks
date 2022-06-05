import { useReducer } from "react";

const initialState = {
  counter: 10,
}

type ActionsType = 
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom', payload: number }

const reducer = (state: typeof initialState, action: ActionsType) => {
  switch(action.type) {
    case 'incrementar':
      return { ...state, counter: state.counter++ };
    case 'decrementar':
      return { ...state, counter: state.counter-- };
    case 'custom':
      return { ...state, counter: action.payload };
    default:
      return state;
  }
}

export const CounterReducer = () => {

  const [{ counter }, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container border bg-light text-bg-light p-3 mt-2">
      <h4>CounterReducer</h4>
      <button 
        className="btn btn-outline-primary"
        onClick={() =>  dispatch({ type: 'incrementar' })}
      >
        +1
      </button>
      <button 
        className="btn btn-outline-primary ms-2"
        onClick={() =>  dispatch({ type: 'decrementar' })}
      >
        -1
      </button>
      <button 
        className="btn btn-outline-danger ms-2"
        onClick={() =>  dispatch({ type: 'custom', payload: 100 })}
      >
        100
      </button>
      <p className="m-0 mt-2">{counter}</p>
    </div>
  );
}
