import React from "react";
import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      {/* Header */}
      <div className="dashboard-header">
        <div>
          <h1>
            <i className="fa fa-dashboard"></i> My Dashboard
          </h1>
          <p>Manage your blogs and content</p>
        </div>

        <button className="btn-create">
          <i className="fa fa-plus"></i> Create Blog
        </button>
      </div>

      {/* Blog List */}
      <div className="blog-table">
        {/* Row */}
        <div className="blog-row">
          <div className="blog-info">
            <h3>Understanding React Hooks</h3>
            <span className="blog-date">
              <i className="fa fa-calendar"></i> Jan 10, 2026
            </span>
          </div>

          <span className="status published">
            <i className="fa fa-check-circle"></i> Published
          </span>

          <div className="actions">
            <button className="btn edit">
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn unpublish">
              <i className="fa fa-eye-slash"></i>
            </button>
            <button className="btn delete">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>

        {/* Row */}
        <div className="blog-row">
          <div className="blog-info">
            <h3>CSS Flexbox Complete Guide</h3>
            <span className="blog-date">
              <i className="fa fa-calendar"></i> Jan 8, 2026
            </span>
          </div>

          <span className="status draft">
            <i className="fa fa-pencil-square-o"></i> Draft
          </span>

          <div className="actions">
            <button className="btn edit">
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn publish">
              <i className="fa fa-eye"></i>
            </button>
            <button className="btn delete">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>

        {/* Row */}
        <div className="blog-row">
          <div className="blog-info">
            <h3>JavaScript Performance Tips</h3>
            <span className="blog-date">
              <i className="fa fa-calendar"></i> Jan 5, 2026
            </span>
          </div>

          <span className="status unpublished">
            <i className="fa fa-ban"></i> Unpublished
          </span>

          <div className="actions">
            <button className="btn edit">
              <i className="fa fa-pencil"></i>
            </button>
            <button className="btn publish">
              <i className="fa fa-eye"></i>
            </button>
            <button className="btn delete">
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
