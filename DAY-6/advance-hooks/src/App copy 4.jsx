import { useRef, useState } from "react";
import "./App.css";
import Input from "./components/Input";
function App() {
  // let [text, setText] = useState();
  let inputRefUserName = useRef(null);
  let inputRefUserPassword = useRef(null);
  let makeLogin = () => {
    inputRefUserName.current.setFocus();

    // if (inputRefUserName.current.value === "") {
    // inputRefUserName.current.style.backgroundColor = "red";
    // inputRefUserName.current.focus();
    // }

    // if (inputRefUserPassword.current.value === "") {
    //   // inputRefUserName.current.style.backgroundColor = "red";
    //   inputRefUserPassword.current.focus();
    // }
    // inputRefUserName.current.value = "";
    // inputRefUserPassword.current.value = "";
  };
  return (
    <>
      <Input ref={inputRefUserName} />
      {/* <input ref={inputRefUserPassword} type="text" /> */}
      <button onClick={makeLogin}>CLICK</button>
      <h1>Hello</h1>
    </>
  );
}

export default App;
// controlled components => render each time when a state get change
// uncontrolled components => never get re-render
