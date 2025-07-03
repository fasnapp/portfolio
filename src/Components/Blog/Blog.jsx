import React from "react";
import "./Blog.css";

const posts = [
  {
    title: "Understanding React Hooks",
    date: "June 15, 2025",
    excerpt:
      "Learn how to use useState, useEffect, and custom hooks to simplify your React components.",
    link: "#",
  },
  {
    title: "Bootstrap 5 Layouts for Beginners",
    date: "May 22, 2025",
    excerpt:
      "A complete guide to Bootstrap’s grid system, utilities, and responsive design patterns.",
    link: "#",
  },
  {
    title: "Getting Started with Data Analytics",
    date: "April 30, 2025",
    excerpt:
      "An introduction to using Python, pandas, and Excel to extract insights from data.",
    link: "#",
  },
];

const Blog = () => (
  <section className="blog-section text-white py-5" id="blog">
    <div className="container">
      <h1 className="text-center mb-5">Latest Articles</h1>
      <div className="row">
        {posts.map((post, idx) => (
          <div className="col-md-4 mb-4" key={idx}>
            <div className="card h-100 bg-black text-white blog-card">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{post.title}</h5>
                <small className="text-muted mb-3">{post.date}</small>
                <p className="card-text flex-grow-1">{post.excerpt}</p>
                <a href={post.link} className="mt-3 btn btn-outline-warning align-self-start">
                  Read more
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
