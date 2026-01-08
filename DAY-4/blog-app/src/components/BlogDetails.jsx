import React from "react";
import "../css/BlogDetails.css";

const BlogDetails = () => {
  return (
    <div className="blog-details-page">
      {/* Blog Header */}
      <section className="blog-header">
        <h1 className="blog-main-title">
          How to Build a Clean Blog UI Using React
        </h1>

        <div className="blog-info">
          <span>
            <i className="fa fa-user"></i> Admin
          </span>
          <span>
            <i className="fa fa-calendar"></i> January 10, 2026
          </span>
          <span>
            <i className="fa fa-tag"></i> React, UI Design
          </span>
        </div>
      </section>

      {/* Blog Image */}
      <section className="blog-cover">
        <i className="fa fa-image"></i>
      </section>

      {/* Blog Content */}
      <section className="blog-body">
        <p>
          Building a professional blog application requires a clean layout,
          readable typography, and a consistent color system. React makes it
          easier to structure UI components efficiently.
        </p>

        <p>
          In this article, we focus on creating a modern blog details page using
          JSX and plain CSS while following Tailwind-inspired color guidelines.
        </p>

        <h2>Why Clean UI Matters</h2>

        <p>
          A clean user interface improves readability, reduces distractions, and
          helps users focus on the content. Minimal colors, spacing, and
          typography play a crucial role in blog design.
        </p>

        <blockquote>“Good design is as little design as possible.”</blockquote>

        <p>
          By keeping components simple and reusable, you can scale your blog
          application easily in the future.
        </p>
      </section>

      {/* Actions */}
      <section className="blog-actions">
        <button className="like-btn">
          <i className="fa fa-heart"></i> Like
        </button>

        <button className="share-btn">
          <i className="fa fa-share-alt"></i> Share
        </button>
      </section>

      {/* Comments */}
      <section className="comments-section">
        <h3>
          <i className="fa fa-comments"></i> Comments
        </h3>

        <div className="comment">
          <strong>Rohit</strong>
          <p>Very clean design! Easy to read and understand.</p>
        </div>

        <div className="comment">
          <strong>Anjali</strong>
          <p>Loved the minimal UI and color selection.</p>
        </div>

        {/* Add Comment */}
        <div className="add-comment">
          <textarea placeholder="Write your comment..."></textarea>
          <button className="btn-primary">
            <i className="fa fa-paper-plane"></i> Post Comment
          </button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
