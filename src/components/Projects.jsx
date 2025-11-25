import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Online Stitching App",
      desc: "Full order flow, price calculator, pickup/drop, services, and dashboard.",
      tech: "React+vite, Routing, ",
      link: "#"
    },
    {
      title: "Modern Portfolio Website",
      desc: "Animated portfolio with sidebar, hero, skills, projects, and contact page.",
      tech: "React + Vite",
      link: "#"
    },
    {
      title: "New city helper",
      desc: "High converting landing pages with modern animations and UI,home,travel,service,contct.",
      tech: "HTML, CSS, JS,react+vite",
      link: "#"
    },
    {
      title: "cloud kitchen",
      desc: "Frontend UI like Swiggy/healthy food daily life.",
      tech: "React+vite",
      link: "#"
    }
  ];

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My <span>Projects</span></h2>

      <div className="projects-grid">
        {projects.map((item, i) => (
          <div
            className="project-card"
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="tech">{item.tech}</div>

            <a href={item.link} className="view-btn">View Project →</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
