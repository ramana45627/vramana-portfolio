import React from "react";
import "./Education.css";

const Education = () => {
  const education = [
    {
      course: "master of computer science",
      college: "Your College Name",
      year: "2014 - 2017",
      desc: "Focused on web development, programming, UI/UX, and project building.",
    },
    {
      course: "Degree (MEc)",
      college: "Your College Name",
      year: "2011 - 2014",
      desc: "Mathematics & electronics  in computer.",
    },
    {
      course: "intermediate",
      college: "Your School Name",
      year: "2007- 2009",
      desc: "mathematics & physice in computer.",
    },
    
{
      course: "board",
      college: "Your School Name",
      year: "2006- 2007",
      desc: "board of andhra.",
    },
    
  ];

  return (
    <section className="edu-section" id="education">
      <h2 className="edu-title">My <span>Education</span></h2>

      <div className="edu-timeline">
        {education.map((item, i) => (
          <div
            className="edu-card"
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <div className="edu-dot"></div>

            <h3>{item.course}</h3>
            <h4>{item.college} — <span>{item.year}</span></h4>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
