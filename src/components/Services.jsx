import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services">
      <h2 className="section-title">Services</h2>
      <div className="services-grid">
        <div className="service-box">
          <div className="icon">💻</div>
          <h3>Frontend Development</h3>
          <p>Creating highly responsive, aesthetic, and user-friendly interfaces using modern web technologies like React.js, HTML, and CSS.</p>
        </div>
        
        <div className="service-box">
          <div className="icon">⚙️</div>
          <h3>Backend Logic</h3>
          <p>Developing server-side logic, managing REST APIs, and structuring robust databases utilizing PHP and MySQL.</p>
        </div>

       <div className="service-box">
          <div className="icon">🔌</div>
          <h3>API Integration</h3>
          <p>Integrating REST APIs and third-party services to fetch real-time data and build dynamic, data-driven web applications.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;