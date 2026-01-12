import { useCounterContext } from "../context/counter.context";

function Button({ type }) {
  let { dispatch } = useCounterContext();
  return <button onClick={() => dispatch({ type })}>INC</button>;
}

export default Button;
