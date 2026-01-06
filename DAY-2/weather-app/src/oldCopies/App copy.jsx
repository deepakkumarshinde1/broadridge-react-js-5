import { useState } from "react";
import Input from "../components/Input";
import "./App.css";
import List from "../components/List";

function App() {
  let [text, setText] = useState("Hello");
  let [toggle, setToggle] = useState(false);
  let changeToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <button onClick={changeToggle} className={toggle ? "disable" : null}>
        Toggle
      </button>
      {/* {toggle ? <Input text={text} /> : "Input is off"} */}
      {toggle ? <List text={text} /> : "Click to list"}
    </>
  );
}

export default App;
