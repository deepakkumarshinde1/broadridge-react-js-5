import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./slice/couter.slice";
import TodoSlice from "./slice/todo.slice";

const store = configureStore({
  reducer: {
    countApp: CounterSlice.reducer,
    todoApp: TodoSlice.reducer,
  },
});

export default store;
