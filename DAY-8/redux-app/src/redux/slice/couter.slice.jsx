import { createSlice } from "@reduxjs/toolkit";

let CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: { counter: 170 },
  reducers: {
    inc(state, action) {
      state.counter += 1;
    },
    dec(state, action) {
      state.counter -= 1;
    },
  },
});

export default CounterSlice;
export const { inc, dec } = CounterSlice.actions;
