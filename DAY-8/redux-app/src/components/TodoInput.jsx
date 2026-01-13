import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, updateNewTodoText } from "../redux/slice/todo.slice";

function TodoInput() {
  let dispatch = useDispatch();
  let { newTodo } = useSelector((state) => state.todoApp);
  let handelChange = (event) => {
    dispatch(updateNewTodoText(event.target.value));
  };
  return (
    <div className="todo-app">
      <h2>Todo List App</h2>

      {/* Input Section */}
      <div className="todo-input">
        <input
          type="text"
          value={newTodo}
          placeholder="Enter your task"
          onChange={handelChange}
        />
        <button className="btn-save" onClick={() => dispatch(addNewTodo())}>
          <i className="fa fa-save"></i> Save
        </button>
      </div>
    </div>
  );
}

export default TodoInput;
