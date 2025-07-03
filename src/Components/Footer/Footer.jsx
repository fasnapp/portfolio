import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="text-white py-5">
    <div className="container">
      {/* Top Row */}
      <div className="row align-items-center mb-4">
        <div className="col-md-6 mb-4 mb-md-0">
          <h4 className="text-warning">Fasna P P</h4>
          <p className="mb-0">
            I'm a frontend developer from India, currently pursuing Bachelor of Technology in CS
          </p>
        </div>
        <div className="col-md-6">
          <form className="d-flex">
            <input
              type="email"
              className="form-control rounded-pill bg-secondary text-white border-light me-2 px-4"
              placeholder="Enter your email"
            />
            <button type="button" className="btn rounded-pill px-4">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <hr className="border-secondary" />

      {/* Bottom Row */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mt-4">
        <p className="mb-2 mb-md-0">© 2025 Fasna P P. All rights reserved.</p>
        <div className="d-flex gap-4">
          <a href="#" className="text-white text-decoration-none link-hover">Terms of Services</a>
          <a href="#" className="text-white text-decoration-none link-hover">Privacy Policy</a>
          <a href="#contact" className="text-white text-decoration-none link-hover">Connect with me</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
