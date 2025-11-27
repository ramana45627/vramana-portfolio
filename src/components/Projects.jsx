import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      title: "Online Stitching App",
      desc: "Full order flow, price calculator, pickup/drop, services, and dashboard.",
      tech: "React+vite, Routing",
      link: "https://stitching-ten.vercel.app/"
    },
    {
      title: "Modern Portfolio Website",
      desc: "Animated portfolio with sidebar, hero, skills, projects, and contact page.",
      tech: "React + Vite",
      link: "https://vramana-portfolio-153g.vercel.app/"
    },
    {
      title: "New city helper",
      desc: "High converting landing pages with modern animations and UI, home, travel, service, contact.",
      tech: "HTML, CSS, JS, React+Vite",
      link: "https://city-helper-portifilo.vercel.app/"
    },
    {
      title: "Cloud Kitchen",
      desc: "Frontend UI like Swiggy / healthy food daily life.",
      tech: "React+Vite",
      link: "https://cloud-kitchen-sooty.vercel.app/"
    }
  ];

  const openLink = (e, url) => {
    // stop parent/overlay click handlers from blocking
    e.stopPropagation();
    e.nativeEvent && e.nativeEvent.stopImmediatePropagation && e.nativeEvent.stopImmediatePropagation();
    console.log("Opening:", url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">
        My <span>Projects</span>
      </h2>

      <div className="projects-grid">
        {projects.map((item, i) => (
          <div
            className="project-card"
            key={i}
            onClick={() => console.log("Card clicked:", item.title)}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="tech">{item.tech}</div>

            <button
              className="view-btn"
              onClick={(e) => openLink(e, item.link)}
              aria-label={`Open ${item.title}`}
            >
              View Project →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
