import { createSlice } from "@reduxjs/toolkit";

let TodoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    newTodo: "",
    list: [],
  },
  reducers: {
    updateNewTodoText(state, action) {
      state.newTodo = action.payload;
    },
    addNewTodo(state) {
      state.list.push(state.newTodo);
      state.newTodo = "";
    },
  },
});

export default TodoSlice;
export const { updateNewTodoText, addNewTodo } = TodoSlice.actions;
