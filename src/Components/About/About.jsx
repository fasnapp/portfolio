import React from "react";
import "./About.css";
import meeeh from "../../assets/meeeh.avif";

const skills = [
  { name: "HTML & CSS", value: 70 },
  { name: "React JS", value: 50 },
  { name: "Python", value: 60 },
  { name: "Microsoft Office", value: 50 },
];

const About = () => (
  <section className="about container-fluid text-white py-5">
    <div className="container">
      <h1 className="text-center mt-0 mb-5 display-4">About Me</h1>
      <div className="row align-items-center">
        {/* Left: Profile Image */}
        <div className="col-md-4 text-center mb-4 mb-md-0">
          <img
            src={meeeh}
            alt="meeeh"
            className="img-fluid about-img"
          />
        </div>

        {/* Right: Text + Skills */}
        <div className="col-md-8">
          <div className="about-para mb-5">
            <p>
              Passionate Frontend Developer with a BTech in Computer Science &
              Engineering from B S Abdur Rahman Crescent Institute of Science
              and Technology. I build responsive, user-friendly web interfaces
              using HTML, CSS, JavaScript, Bootstrap, and SQL.
            </p>
            <p>
              I’m exploring Data Analytics with Microsoft Office tools and
              Python. As a fresher, I’m eager to learn and contribute polished,
              accessible web experiences in a dynamic team environment.
            </p>
          </div>

          {/* Skills with Bootstrap progress bars */}
          <div className="about-skills">
            {skills.map((skill) => (
              <div className="mb-4" key={skill.name}>
                <div className="d-flex justify-content-between mb-1">
                  <span>{skill.name}</span>
                  <span>{skill.value}%</span>
                </div>
                <div
                  className="progress progress-thin"
                  role="progressbar"
                  aria-label={`${skill.name} skill level`}
                  aria-valuenow={skill.value}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  <div
                    className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                    style={{ width: `${skill.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;

