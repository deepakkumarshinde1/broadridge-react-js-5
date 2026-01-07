import { useCounterContext } from "../context/counter.context";

function Home() {
  let { increment } = useCounterContext();
  return (
    <div>
      Home <button onClick={increment}>INC</button>
    </div>
  );
}

export default Home;
