import React from "react";
import "./hero.css";
import profileImg from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-left">
        <h1 className="hero-title">
          Hi, I'm <span className="gold">Venkataramana</span>
        </h1>

        <h2 className="hero-role">Full-Stack Developer</h2>

        <p className="hero-desc">
          I build fast, modern and interactive websites & applications for brands.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <a href="#contact" className="btn outline">Hire Me</a>
        </div>
      </div>

      <div className="hero-right">
        <div className="hero-shape"></div>

        <div className="hero-image-wrapper">
          <img src={profileImg} alt="Profile" className="hero-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
