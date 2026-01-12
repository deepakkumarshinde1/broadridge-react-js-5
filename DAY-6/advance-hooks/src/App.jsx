import { useDeferredValue, useState, useTransition } from "react";
import "./App.css";
import { users } from "./components/data";
function App() {
  let [value, setValue] = useState("");

  let differValue = useDeferredValue(value);

  let [list, setList] = useState([]);
  let [loading, makeTransition] = useTransition();

  // let onChangeHandler = (event) => {
  //   setValue(event.target.value);
  // };

  //let list = users.filter((user) => user.last_name.includes(differValue));

  let onChangeHandler = (event) => {
    setValue(event.target.value);
    makeTransition(() => {
      let newList = users.filter((user) => user.last_name.includes(value));
      setList(newList);
    });
  };
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={onChangeHandler}
        placeholder="search box"
      />

      <ul>
        {list.map((user, index) => (
          <li key={index}>
            {user.first_name} {user.last_name}
          </li>
        ))}
      </ul>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {list.map((user, index) => (
            <li key={index}>
              {user.first_name} {user.last_name}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;
