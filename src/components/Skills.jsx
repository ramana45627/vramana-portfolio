import React from "react";
import "./Skills.css";

const Skills = () => {
  const skills = [
    "HTML", "CSS", "JavaScript", "React.js", "Node.js",
    "Angular",  "Tailwind CSS", "Redux",
    "Git & GitHub", "Vite", "Firebase"
  ];

  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <h2 className="skills-title">My <span>Skills</span></h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              className="skill-card"
              key={index}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
