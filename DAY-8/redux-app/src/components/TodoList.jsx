import { useDispatch, useSelector } from "react-redux";

function TodoList() {
  let dispatch = useDispatch();
  let { list } = useSelector((state) => state.todoApp);
  return (
    <>
      {/* Todo Table */}
      <table className="todo-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {list.map((todo, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{todo}</td>
              <td>
                <button className="btn-edit">
                  <i className="fa fa-pencil"></i>
                </button>

                <button className="btn-delete">
                  <i className="fa fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TodoList;
