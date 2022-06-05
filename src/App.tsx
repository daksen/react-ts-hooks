import { Counter } from "./components/Counter";
import { User } from "./components/User";
import { TimerPadre } from "./components/TimerPadre";
import { CounterReducer } from "./components/CounterReducer";
import { Form } from "./components/Form";

function App() {
  return (
    <div className="container py-5">
      <h1>React + TypeScript</h1>
      <hr/>
      <div className="container bg-light text-bg-light mt-3 p-3">
        <h3>useState</h3>
        <Counter />
        <User />
      </div>
      <div className="container bg-light text-bg-light mt-3 p-3">
        <h3>useEffect - useRef</h3>
        <TimerPadre />
      </div>
      <div className="container bg-light text-bg-light mt-3 p-3">
        <h3>useReducer</h3>
        <CounterReducer />
      </div>
      <div className="container bg-light text-bg-light mt-3 p-3">
        <h3>customHooks</h3>
        <Form />
      </div>
    </div>
  );
}

export default App;
