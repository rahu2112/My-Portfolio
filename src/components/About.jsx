import React from 'react';
import './About.css';
import rahi2 from '../assets/rahi2.png';

const About = () => {
  return (
    <section id="about">
      <h2 className="section-title">About_Me</h2>
      <div className="about-wrapper">
        
      
        <div className="about-image-card">
          <div className="image-frame">
            
            <img src={rahi2} alt="About Rahi" />
          </div>
        </div>

        <div className="about-text-content">
          <h3 className="mono-text sub-heading">public class RahiPatel &#123;</h3>
          <div className="code-block">
            <p>
              I am an aspiring <span className="highlight-text">Java & Frontend Developer</span> currently enhancing my core Java concepts, while leveraging my strong proficiency in frontend technologies like HTML, CSS, JavaScript, and React.js.
            </p>
            <p>
              I seek opportunities to apply my technical and analytical skills in building robust, responsive web applications.
            </p>
          </div>
          <h3 className="mono-text sub-heading">&#125;</h3>
          
          <div className="info-grid mono-text">
            <div className="info-item"><span>Email:</span> rahiptl2003@gmail.com</div>
            <div className="info-item"><span>Phone:</span> +91 9328771773</div>
            <div className="info-item"><span>Degree:</span> B.Tech in IT</div>
            <div className="info-item"><span>Location:</span> Gujarat, India</div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;