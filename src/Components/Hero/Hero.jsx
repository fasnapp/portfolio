import React from "react";
import "./Hero.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

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
      <button type="button" className="btn btn-white rounded-pill px-4 py-3 hero-btn"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></button>
      <button type="button" className="btn btn-white rounded-pill px-4 py-3 hero-btn">My resume</button>
    </div>
  </div>
);

export default Hero;

