import React from "react";
import "./testimonials.css";

const Testimonials = () => {
  const reviews = [
    {
      name: "Akhil",
      role: "Web Developer",
      msg: "Venkataramana is very fast and creative. His UI and animations are next level!",
    },
    {
      name: "Priya",
      role: "Business Owner",
      msg: "He designed my landing page perfectly. More conversions and very clean UI!",
    },
    {
      name: "Rahul",
      role: "Freelancer",
      msg: "Great communication and perfect delivery. Highly recommended!",
    },
  ];

  return (
    <section className="test-section" id="testimonials">
      <h2 className="test-title">Client <span>Testimonials</span></h2>

      <div className="test-grid">
        {reviews.map((item, i) => (
          <div
            className="test-card"
            key={i}
            style={{ animationDelay: `${i * 0.15}s` }}
          >
            <p className="test-msg">“{item.msg}”</p>
            <h3 className="test-name">{item.name}</h3>
            <span className="test-role">{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
