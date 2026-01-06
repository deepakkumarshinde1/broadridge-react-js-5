import { useEffect, useState } from "react";

function Input(props) {
  let { text } = props;
  let [count, setCount] = useState(0);
  // hooks
  useEffect(() => {
    console.log("mounting");
    // let intervalId = setInterval(() => {
    //   console.log("interval");
    // }, 1000);

    return () => {
      // clearInterval(intervalId);
      console.log("Unmounting");
    };
  }, []); // once per life cycle

  useEffect(() => {
    console.log("change is happen");
  }, [count]); // updating phase
  return (
    <>
      <input type="text" defaultValue={text} />
      <h3>{count}</h3>
      <button onClick={() => setCount(count + 1)}>INC</button>
    </>
  );
}

export default Input;
