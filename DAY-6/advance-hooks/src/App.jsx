import { useCallback, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Button2 from "./components/Button2";
import Text2 from "./components/Text2";
function App() {
  let [counter, setCounter] = useState(0);
  let [counter2, setCounter2] = useState(10);
  let inc = () => {
    setCounter(counter + 1);
  };

  let inc2 = useCallback(() => {
    setCounter2(counter2 + 1);
  }, [counter2]);

  let result = useMemo(() => {
    return counter2 % 5 === 0
      ? "Yes its divisible by 5"
      : "No, its not divisible by 5";
  }, [counter2]);

  return (
    <div>
      <Header />
      <h1>
        <span>{counter2}</span>
        <Text2 result={result} />
        <Button2 inc2={inc2} />
      </h1>

      <h1>
        {counter} <button onClick={inc}>Inc</button>
      </h1>
    </div>
  );
}

export default App;
