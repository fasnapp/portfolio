import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="container py-3 d-flex align-items-center">
    <span className="navbar-text fw-bold fs-2 text-warning">Fasna P P</span>
    <ul className="nav ms-auto">
      {["home","about","projects","blog","contact"].map(item => (
        <li className="nav-item fs-5" key={item}>
          <a 
            className={`nav-link link-light`} 
            href={`#${item}`}
            aria-current={window.location.hash === `#${item}` ? "page" : undefined}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;




