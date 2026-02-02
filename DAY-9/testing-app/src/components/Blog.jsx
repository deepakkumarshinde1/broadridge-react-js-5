import axios from "axios";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function Blog() {
  let [list, setList] = useState([]);
  useEffect(() => {
    (async () => {
      let { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setList(data);
    })();
  }, []);
  return (
    <>
      <Helmet>
        <title>Blog Page</title>
      </Helmet>
      <h1>Users List</h1>
      <ul data-testid="user-list">
        {list.map((user) => {
          return <li key={user.id}>{user.name}</li>;
        })}
      </ul>
    </>
  );
}

export default Blog;
