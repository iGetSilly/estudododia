import { useReducer } from "react";

type Action =
  | { type: "incrementar" }
  | { type: "decrementar" }
  | { type: "resetar" };

type State = {
    count: number
}

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "incrementar":
        return { count: state.count + 1 };
      case "decrementar":
        return { count: state.count > 0 ? state.count - 1 : 0 };
      case "resetar":
        return { count: 0 };
      default:
        return state;
    }
  }

function Exercicio1() {
  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState)

  return <div>
    <p>{state.count}</p>
    <button onClick={() => dispatch({type: "incrementar"})}>Incrementar</button>
    <button onClick={() => dispatch({type: "decrementar"})}>Decrementar</button>
    <button onClick={() => dispatch({type: "resetar"})}>Resetar</button>
  </div>;
}

export default Exercicio1;
