import React from "react";

import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Services from "./Services";
import Experience from "./Experience";
import Education from "./Education";
import Projects from "./Projects";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="home-wrapper">
      

      <div className="main-content">
        <Hero/>
        <About />
        <Skills />
        <Services />
        <Experience />
        <Education />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
        <Navbar/>
      </div>
    </div>
  );
};

export default Home;

