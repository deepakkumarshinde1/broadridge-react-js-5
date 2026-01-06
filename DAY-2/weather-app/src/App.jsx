import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import List from "./components/List";

function App() {
  let [cites, setCites] = useState([]);

  return (
    <>
      <Input setCites={setCites} cites={cites} />
      <List cites={cites} setCites={setCites} />
    </>
  );
}

export default App;
