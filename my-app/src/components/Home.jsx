import { useState } from "react";

function Home() {
  let [count, setCount] = useState(100);

  let incCount = () => {
    // console.log("clicked");
    // count++;
    setCount(count + 1);
    // console.log(count);
  };
  return (
    <div>
      Home {count}
      <button className="btn" onClick={incCount}>
        INC
      </button>
    </div>
  );
}

export default Home;
