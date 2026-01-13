import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { inc } from "./redux/slice/couter.slice";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  let dispatch = useDispatch();
  let { counter } = useSelector((state) => state.countApp);
  return (
    <>
      <h1>
        Count : {counter}
        <button onClick={() => dispatch(inc())}>INC</button>
      </h1>
      <TodoInput />
      <TodoList />
    </>
  );
}

export default App;
