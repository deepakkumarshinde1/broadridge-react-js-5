import React from "react";
import BlogCard from "./BlogCard";

function MyBlog() {
  return (
    <main className="container">
      {[1, 2].map((item, index) => (
        <BlogCard item={item} key={index} bgColor="#d6d8d4ff" />
      ))}
    </main>
  );
}

export default MyBlog;
