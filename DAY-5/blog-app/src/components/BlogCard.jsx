import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ blog, bgColor }) {
  let navigate = useNavigate();
  return (
    <div
      className="blog-card"
      onClick={() => navigate("/blog-details")}
      style={{
        border: bgColor ? "3px dotted black" : "3px solid black",
      }}
    >
      <div className="blog-image">
        <img src={blog.image} alt={blog.title} />
      </div>

      <div className="blog-content">
        <h2 className="blog-title">{blog.title}</h2>
        <p className="blog-desc">{blog.shortDescription}</p>

        <div className="blog-meta">
          <span>
            <i className="fa fa-user"></i> {blog.author.fullName.split(" ")[0]}
          </span>
          <span>
            <i className="fa fa-calendar"></i> Jan 2026
          </span>
        </div>
      </div>

      <div className="blog-action">
        <button className="like-btn">
          <i className="fa fa-heart"></i> Like
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
