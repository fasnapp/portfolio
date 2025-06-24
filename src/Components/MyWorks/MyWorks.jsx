import React from "react";
import './MyWorks.css';
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";

const projects = [
  {
    image: project1,
    title: "Bakery Website",
    description:
      "A fully responsive website for a bakery with interactive UI and product showcase using HTML, CSS, JS.",
    link: "https://fasnapp.github.io/artisan_website/",
  },
  {
    image: project2,
    title: "Social Media Drug Detection",
    description:
      "An AI system to detect and visualize suspicious drug trafficking content across social media platforms.",
    link: "https://yourprojectlink1.com",
  },
  {
    image: project3,
    title: "Student Dashboard",
    description:
      "A dashboard for students to view results, attendance and announcements using Django + Bootstrap.",
    link: "https://yourprojectlink3.com",
  },
];

const MyWorks = () => (
    <section className="myworks-section text-white py-5" id="projects">
    <div className="container">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row g-4">
        {projects.map((project, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 bg-black text-white myworks-card">
              <img
                src={project.image}
                className="card-img-top myworks-image"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a
                  href={project.link}
                  className="btn btn-outline-warning"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>    
);

export default MyWorks;
