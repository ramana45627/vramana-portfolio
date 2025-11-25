import React from "react";
import "./Contact.css";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <h2 className="contact-title">Contact <span>Me</span></h2>

      <div className="contact-container">

        {/* Left: Contact Info */}
        <div className="contact-info">
          <h3>Let's Work Together</h3>

          <p><Mail size={18} /> venkataramana@example.com</p>
          <p><Phone size={18} /> +91 98765 43210</p>
          <p><MapPin size={18} /> Hyderabad, India</p>
        </div>

        {/* Right: Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  );
};

export default Contact;
