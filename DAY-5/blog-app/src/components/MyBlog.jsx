import React from "react";
import BlogCard from "./BlogCard";
import { useBlogContext } from "../context/blog.context";

function MyBlog() {
  let { userBlogs } = useBlogContext();
  return (
    <main className="container">
      {userBlogs.map((blog, index) => (
        <BlogCard blog={blog} key={blog.id} bgColor="#d6d8d4ff" />
      ))}
    </main>
  );
}

export default MyBlog;
