import React from "react";
import { useCounterContext } from "../context/counter.context";

function Text({ counterName }) {
  let { state } = useCounterContext();

  return <>{state[counterName]}</>;
}

export default Text;
