import React, { useState } from "react";
import { Helmet } from "react-helmet";

function Home({ text }) {
  let [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <div>
        <h1 data-testid="props-text">{text}</h1>
        <h1 data-testid="counter">{count}</h1>
        <button
          data-testid="counter-button"
          onClick={() => setCount(count + 1)}
        >
          INC
        </button>
      </div>
    </>
  );
}

export default Home;
