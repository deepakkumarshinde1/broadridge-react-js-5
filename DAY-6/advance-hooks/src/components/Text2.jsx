import { memo } from "react";

function Text2({ result }) {
  return (
    <div>
      &nbsp;
      <u>{result}</u>
    </div>
  );
}

export default memo(Text2);
