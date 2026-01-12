import { useRef, useState } from "react";
import "./App.css";
function App() {
  // let [text, setText] = useState();
  let inputRefUserName = useRef(null);
  // let inputRefUserPassword = useRef(null);
  let makeLogin = () => {};
  return (
    <>
      <input ref={inputRefUserName} type="text" />
      <input ref={inputRefUserPassword} type="text" />
      <button onClick={makeLogin}>CLICK</button>
      <h1>Hello</h1>
    </>
  );
}

export default App;
// controlled components => render each time when a state get change
// uncontrolled components => never get re-render
