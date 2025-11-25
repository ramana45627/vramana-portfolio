import React from "react";
import "./footer.css";
import { Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2 className="footer-name">Venkataramana</h2>
        <p className="footer-tag">Frontend Developer • UI/UX Designer</p>

        <div className="footer-socials">
          <a href="#" target="_blank"><Instagram size={22} /></a>
          <a href="#" target="_blank"><Linkedin size={22} /></a>
          <a href="#" target="_blank"><Github size={22} /></a>
        </div>

        <p className="footer-copy">© {new Date().getFullYear()} All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
