import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Get_In_Touch</h2>
      
      <div className="contact-container">
        <p className="contact-desc text-center">
          I'm currently available for freelance work or full-time opportunities. 
          If you have a project that needs some creative touch or just want to say hi, feel free to reach out!
        </p>
        
        {/* 4 Cards Grid Layout */}
        <div className="contact-grid">
          
          {/* Email Card */}
          <a href="mailto:rahiptl2003@gmail.com" className="contact-card">
            <div className="icon-box email-icon"><i className="bi bi-envelope-at"></i></div>
            <div className="info">
              <span className="label">Email</span>
              <span className="value">rahiptl2003@gmail.com</span>
            </div>
          </a>
          
          {/* Direct Phone Call Card */}
          <a href="tel:+919328771773" className="contact-card">
            <div className="icon-box phone-icon"><i className="bi bi-telephone-outbound"></i></div>
            <div className="info">
              <span className="label">Phone / Call</span>
              <span className="value">+91 9328771773</span>
            </div>
          </a>

          {/* LinkedIn Card */}
          <a href="https://www.linkedin.com/in/rahipatel21/" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon-box linkedin-icon"><i className="bi bi-linkedin"></i></div>
            <div className="info">
              <span className="label">LinkedIn</span>
              <span className="value">in/rahipatel21</span>
            </div>
          </a>

          {/* GitHub Card */}
          <a href="https://github.com/rahu2112" target="_blank" rel="noreferrer" className="contact-card">
            <div className="icon-box github-icon"><i className="bi bi-github"></i></div>
            <div className="info">
              <span className="label">GitHub</span>
              <span className="value">github.com/rahu2112</span>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
};

export default Contact;