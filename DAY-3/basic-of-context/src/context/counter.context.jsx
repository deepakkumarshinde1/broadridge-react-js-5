import { createContext, useContext, useState } from "react";

// create context
let CounterContext = createContext({});

// function useHandleData(value, cb) {
//   let array = useState(value);
//   useEffect(() => {
//     cb;
//   }, [value]);
//   return array;
// }

// custom hook
export function useCounterContext() {
  let context = useContext(CounterContext);
  return context;
}
// wrapper component => Provider
export function CounterContextProvider({ children }) {
  let [counter, setCounter] = useState(0);
  let increment = () => {
    setCounter(counter + 1);
  };
  let shared = { counter, increment };
  return (
    <CounterContext.Provider value={shared}>{children}</CounterContext.Provider>
  );
}
