import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section
      className="container text-center d-flex flex-column align-items-center py-5"
      style={{ gap: '35px' }}
    >
      <h2 className="fw-semibold" style={{ fontSize: '90px', lineHeight: '1.1', width: '70%' }}>
        <span className="gradient-text">I'm Fasna,</span> frontend developer based in India
      </h2>

      <p className="lead" style={{ fontSize: '24px', lineHeight: '40px', width: '50%' }}>
        I’m a frontend developer from India, currently pursuing Bachelor of Technology in CS
      </p>

      <div className="d-flex gap-4 mb-5">
        <button className="btn btn-connect">Connect with me</button>
        <button className="btn btn-resume">My resume</button>
      </div>
    </section>
  );
};

export default Hero;

