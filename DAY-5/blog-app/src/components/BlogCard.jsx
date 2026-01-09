import React from "react";
import { useNavigate } from "react-router-dom";

function BlogCard({ item, bgColor }) {
  let navigate = useNavigate();
  return (
    <div
      className="blog-card"
      key={item}
      onClick={() => navigate("/blog-details")}
      style={{
        border: bgColor ? "3px dotted black" : "3px solid black",
      }}
    >
      <div className="blog-image">
        <i className="fa fa-image"></i>
      </div>

      <div className="blog-content">
        <h2 className="blog-title">Blog Title {item}</h2>
        <p className="blog-desc">
          This is a short description of the blog post. It gives users a quick
          idea about the content.
        </p>

        <div className="blog-meta">
          <span>
            <i className="fa fa-user"></i> Admin
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
