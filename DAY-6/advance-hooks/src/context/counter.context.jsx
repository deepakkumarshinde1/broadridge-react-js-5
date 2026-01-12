import { createContext, useContext, useReducer } from "react";
import {
  counterReducer,
  initialCounterState,
} from "../reducers/counter.reducer";

let CounterContext = createContext({});

export function useCounterContext() {
  return useContext(CounterContext);
}

export function CounterContextProvider({ children }) {
  let [state, dispatch] = useReducer(counterReducer, {
    ...initialCounterState,
  });
  let share = {
    state,
    dispatch,
  };
  return (
    <CounterContext.Provider value={share}>{children}</CounterContext.Provider>
  );
}
