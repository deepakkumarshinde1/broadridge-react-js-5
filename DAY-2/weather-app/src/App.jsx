import { useState } from "react";
import Input from "./components/Input";
import "./App.css";

function App() {
  let [text, setText] = useState("Hello");
  let [toggle, setToggle] = useState(true);
  let changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={changeToggle} className={toggle ? "disable" : null}>
        Toggle
      </button>
      {toggle ? <Input text={text} /> : "Input is off"}
    </>
  );
}

export default App;
