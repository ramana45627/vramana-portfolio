import React from "react";
import "./experience.css";

const Experience = () => {
  const data = [
    {
      role: "Front-End Developer",
      company: "Freelancer",
      year: "2023 - Present",
      desc: "Building modern responsive websites, landing pages, and portfolio designs using React & Vite.",
    },
    {
      role: "UI/UX Designer",
      company: "Freelance Projects",
      year: "2022 - 2023",
      desc: "Created clean UI layouts, mobile-first design, and interactive prototypes.",
    },
    {
      role: "Web Designer",
      company: "Startup Projects",
      year: "2020 -2022",
      desc: "Designed branding websites with animations, SEO content, and user-friendly layouts.",
    },
  ];

  return (
    <section className="exp-section" id="experience">
      <h2 className="exp-title">Work <span>Experience</span></h2>

      <div className="exp-timeline">
        {data.map((item, i) => (
          <div className="exp-card" key={i} style={{ animationDelay: `${i * 0.15}s` }}>
            <div className="exp-dot"></div>

            <h3>{item.role}</h3>
            <h4>{item.company} — <span>{item.year}</span></h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
