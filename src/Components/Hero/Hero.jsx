import React from "react";
import "./Hero.css";

const Hero = () => (
  <div className="hero text-center py-5">
    {/* Hero Headline */}
    <h2 className="hero-heading">
      <span className="text-warning">I'm Fasna,</span> frontend developer based in India
    </h2>

    {/* Hero Description */}
    <p className="hero-text">
      I'm a frontend developer from India, currently pursuing Bachelor of Technology in CS
    </p>

    {/* Hero Action Buttons */}
    <div className="hero-action d-flex justify-content-center gap-3">
      <button type="button" className="btn btn-white hero-btn">Connect with me</button>
      <button type="button" className="btn btn-white hero-btn">My resume</button>
    </div>
  </div>
);

export default Hero;

