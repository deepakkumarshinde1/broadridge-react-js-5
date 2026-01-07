import { useCounterContext } from "../context/counter.context";

function PrintCount() {
  let { counter } = useCounterContext();
  return (
    <div>
      <span>{counter}</span>
    </div>
  );
}

export default PrintCount;
