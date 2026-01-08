import React, { useEffect, useState } from "react";

function App(props) {
  let [counter, setCounter] = useState(0);
  let inc = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    return () => {}; // unmounting
  }, []); // mounting

  useEffect(() => {}, [state, props]); // update

  return <div>App {counter}</div>;
}

export default App;
