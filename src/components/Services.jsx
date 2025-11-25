import React from "react";
import "./Services.css";
import { Code, Smartphone, Globe, Settings } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code size={40} />,
      title: "Web Development",
      desc: "Fully responsive, fast, and modern websites built using React & Vite.",
    },
    {
      icon: <Smartphone size={40} />,
      title: "UI/UX Design",
      desc: "Clean, attractive, mobile-friendly interface designs for any business.",
    },
    {
      icon: <Globe size={40} />,
      title: "Landing Pages",
      desc: "High-converting landing pages for businesses, brands, and products.",
    },
    {
      icon: <Settings size={40} />,
      title: "API Integration",
      desc: "Secure integration using Node.js, Express, Firebase, MongoDB.",
    },
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="services-title">My <span>Services</span></h2>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              className="service-card"
              key={i}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
