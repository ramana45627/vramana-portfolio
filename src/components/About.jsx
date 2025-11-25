import React from "react";
import "./about.css";

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="section-title">
        About <span className="highlight">Me</span>
      </h2>

      <div className="about-container">

        {/* LEFT SIDE TEXT */}
        <div className="about-left">
          <p>
            I am <span className="highlight">Venkataramana</span>, a passionate Full-Stack
            Developer who loves building fast, modern, and interactive web
            applications. I focus on clean UI, smooth animations, and
            pixel-perfect design.
          </p>

          <p>
            I work with JavaScript, React, Node, Express, and modern tools to
            craft high-quality products for clients and brands.
          </p>

          <a href="/cv.pdf" className="about-btn">Download CV</a>
        </div>

        {/* RIGHT SIDE IMAGE */}
        
        

      </div>
    </section>
  );
};

export default About;
