import { memo } from "react";

function Header() {
  return <h1>My Counter App</h1>;
}

export default memo(Header);

// hoc => higher order component
// like a function accepts a component as a parameter
