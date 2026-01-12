import { forwardRef, useImperativeHandle, useRef } from "react";

function Input(props, ref) {
  let inputRef = useRef(null);

  useImperativeHandle(ref, () => {
    return {
      value: inputRef.current.value,
      setValue(text) {
        inputRef.current.value = text;
      },
      setFocus() {
        inputRef.current.focus();
      },
    };
  });
  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default forwardRef(Input);

// hoc => higher order component
