import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>
              Passionate Frontend Developer with a BTech in Computer Science &
              Engineering from B S Abdur Rahman Crescent Institute of Science
              and Technology. I have hands‑on experience building responsive,
              user‑friendly web interfaces using HTML, CSS, JavaScript,
              Bootstrap, and SQL.
            </p>
            <p>
              I’m also exploring Data Analytics using Microsoft Office tools and
              Python, and enjoy turning insights into clear visuals. As a
              fresher, I’m eager to contribute to a dynamic team—learning new
              technologies while delivering polished, accessible web
              experiences.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML & CSS</p>
              <hr style={{ width: "70%" }} />
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Python</p>
              <hr style={{ width: "60%" }} />
            </div>
            <div className="about-skill">
              <p>Microsoft Office</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
