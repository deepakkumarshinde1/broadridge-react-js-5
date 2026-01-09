import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "../css/CreateBlog.css";
import { useAuthContext } from "../context/auth.context";
import { useNavigate } from "react-router-dom";
import { useBlogContext } from "../context/blog.context";

const CreateBlog = () => {
  let navigate = useNavigate();
  let { authUser } = useAuthContext();
  let { toggle, setToggle } = useBlogContext();
  let [newBlog, setNewBlog] = useState({
    title: "",
    image: "",
    category: "",
    shortDescription: "",
    description: "",
  });

  let inputChange = (event) => {
    let { name, value } = event.target;
    setNewBlog({ ...newBlog, [name]: value });
  };

  let saveBlog = (event) => {
    event.preventDefault();

    let blogs = localStorage.getItem("blogs");
    blogs = blogs ? JSON.parse(blogs) : [];

    blogs.push({ ...newBlog, id: uuidv4(), author: { ...authUser } });

    localStorage.setItem("blogs", JSON.stringify(blogs));
    setToggle(!toggle);
    alert("Blog created successfully !!!");
    navigate("/dashboard");
  };
  return (
    <div className="create-blog-page">
      {/* Page Header */}
      <div className="page-header">
        <h1>
          <i className="fa fa-pencil"></i> Create New Blog
        </h1>
        <p>Write and publish your thoughts</p>
      </div>

      {/* Form */}
      <form className="blog-form" onSubmit={saveBlog}>
        {/* Title */}
        <div className="form-group">
          <label>
            <i className="fa fa-header"></i> Blog Title
          </label>
          <input
            value={newBlog.title}
            name="title"
            onChange={inputChange}
            type="text"
            placeholder="Enter blog title"
          />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>
            <i className="fa fa-tags"></i> Category
          </label>
          <select
            value={newBlog.category}
            name="category"
            onChange={inputChange}
          >
            <option>Select category</option>
            <option>Technology</option>
            <option>Programming</option>
            <option>UI / UX</option>
            <option>Career</option>
          </select>
        </div>

        {/* Cover Image */}
        <div className="form-group">
          <label>
            <i className="fa fa-image"></i> Cover Image URL
          </label>
          <input
            type="text"
            value={newBlog.image}
            name="image"
            placeholder="https://example.com/image.jpg"
            onChange={inputChange}
          />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>
            <i className="fa fa-align-left"></i> Short Description
          </label>
          <textarea
            value={newBlog.shortDescription}
            placeholder="Write a short description..."
            className="short-desc"
            name="shortDescription"
            onChange={inputChange}
          ></textarea>
        </div>

        {/* Content */}
        <div className="form-group">
          <label>
            <i className="fa fa-file-text"></i> Blog Content
          </label>
          <textarea
            placeholder="Write your blog content here..."
            className="blog-content"
            value={newBlog.description}
            name="description"
            onChange={inputChange}
          ></textarea>
        </div>

        {/* Actions */}
        <div className="form-actions">
          {/* <button type="button" className="btn-draft">
            <i className="fa fa-save"></i> Save Draft
          </button> */}

          <button type="submit" className="btn-publish">
            <i className="fa fa-paper-plane"></i> Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
