import React from "react";

function Error({ errors, name }) {
  return (
    <>
      {errors[name] && (
        <span style={{ color: "red" }}>{errors[name].message}</span>
      )}
    </>
  );
}

export default Error;
