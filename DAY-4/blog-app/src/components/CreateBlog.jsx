import React from "react";
import "../css/CreateBlog.css";

const CreateBlog = () => {
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
      <form className="blog-form">
        {/* Title */}
        <div className="form-group">
          <label>
            <i className="fa fa-header"></i> Blog Title
          </label>
          <input type="text" placeholder="Enter blog title" />
        </div>

        {/* Category */}
        <div className="form-group">
          <label>
            <i className="fa fa-tags"></i> Category
          </label>
          <select>
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
          <input type="text" placeholder="https://example.com/image.jpg" />
        </div>

        {/* Description */}
        <div className="form-group">
          <label>
            <i className="fa fa-align-left"></i> Short Description
          </label>
          <textarea
            placeholder="Write a short description..."
            className="short-desc"
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
          ></textarea>
        </div>

        {/* Actions */}
        <div className="form-actions">
          <button type="button" className="btn-draft">
            <i className="fa fa-save"></i> Save Draft
          </button>

          <button type="submit" className="btn-publish">
            <i className="fa fa-paper-plane"></i> Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
