import React, { useState } from "react";
import "./Blog.css";
import { Modal, Button } from "react-bootstrap";
import blum from "../../assets/blum.png";
import blueee from "../../assets/blueee.png";
import dtanal from "../../assets/dtanal.jpg";

const initialPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    date: "June 15, 2025",
    image: blum,
    excerpt: "Learn how to use useState, useEffect, and custom hooks...",
    content: "Here is the full article content on React Hooks. Explain everything in detail..."
  },
  {
    id: 2,
    title: "Bootstrap 5 Layouts for Beginners",
    date: "May 22, 2025",
    image: blueee,
    excerpt: "A complete guide to Bootstrap’s grid system...",
    content: "Complete article content explaining layout, grid, utilities..."
  },
  {
    id: 3,
    title: "Getting Started with Data Analytics",
    date: "April 30, 2025",
    image: dtanal,
    excerpt: "An introduction to using Python, pandas, and Excel...",
    content: "Full guide to data analytics step by step..."
  }
];

const Blog = () => {
  const [posts] = useState(initialPosts);
  const [openPost, setOpenPost] = useState(null);

  return (
    <section className="blog-section text-white py-5" id="blog">
      <div className="container">
        <h1 className="text-center mb-5">Latest Articles</h1>
        <div className="row">
          {posts.map(post => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card bg-black text-white blog-card">
                <div className="img-wrapper">
                  <img src={post.image} className="card-img-top blog-img" alt={post.title} />
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{post.title}</h5>
                  <small className="text-muted mb-3">{post.date}</small>
                  <p className="card-text flex-grow-1">{post.excerpt}</p>
                  <button
                    className="mt-3 btn btn-outline-warning align-self-start"
                    onClick={() => setOpenPost(post)}
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {openPost && (
        <Modal show={true} onHide={() => setOpenPost(null)}>
          <Modal.Header closeButton className="bg-dark text-white">
            <Modal.Title>{openPost.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="bg-dark text-white">
            <img src={openPost.image} className="img-fluid mb-3" alt={openPost.title} />
            <p>{openPost.content}</p>
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button variant="warning" onClick={() => setOpenPost(null)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </section>
  );
};

export default Blog;
