import React from "react";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-3">
    <a className="navbar-brand" href="#">Fasna P P</a>
    <button className="navbar-toggler" type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        {["Home", "About Me", "Portfolio", "Blog", "Contact"].map(item => (
          <li className="nav-item" key={item}>
            <a className="nav-link" href={`#${item.replace(/\s+/g, "").toLowerCase()}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
      <button className="btn btn-gradient rounded-pill ms-lg-3">
        Connect with Me
      </button>
    </div>
  </nav>
);

export default Navbar;
