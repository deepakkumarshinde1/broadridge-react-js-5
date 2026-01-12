import { memo } from "react";

function Button2({ inc2 }) {
  return <button onClick={inc2}>Inc</button>;
}

export default memo(Button2);
