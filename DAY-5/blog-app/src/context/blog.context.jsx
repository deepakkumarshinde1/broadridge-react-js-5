import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./auth.context";

let BlogContext = createContext({});

export function useBlogContext() {
  return useContext(BlogContext);
}

export function BlogContextProvider({ children }) {
  let { authUser } = useAuthContext();
  let [blogs, setBlogs] = useState([]);
  let [userBlogs, setUserBlogs] = useState([]);
  let [toggle, setToggle] = useState(false);
  useEffect(() => {
    let _blogs = localStorage.getItem("blogs");
    _blogs = _blogs ? JSON.parse(_blogs) : [];
    if (authUser) {
      let _userBlog = _blogs.filter((blog) => blog.author.id === authUser.id);
      setUserBlogs([..._userBlog]);
    }
    setBlogs([..._blogs]);
  }, [toggle]);

  let share = {
    blogs,
    toggle,
    setToggle,
    userBlogs,
  };
  return <BlogContext.Provider value={share}>{children}</BlogContext.Provider>;
}
