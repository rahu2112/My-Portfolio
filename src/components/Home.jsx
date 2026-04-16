import React from 'react';
import './Home.css';
import rahi from '../assets/rahi.jpg';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <p className="greeting mono-text">System.out.println("Welcome to my Projects!");</p>
        <h1 className="name">I'm <span className="highlight">Rahi Patel</span></h1>
        <h2 className="designation">Full Stack Developer</h2>
        <p className="description">
         Full Stack Developer dedicated to building scalable, end-to-end web applications. I bridge the gap between robust backend architecture and intuitive, high-performance user interfaces with a focus on clean, maintainable code.
        </p>
        <div className="home-buttons">
          <a href="#Projects" className="btn-primary mono-text">&lt;View Work/&gt;</a>
          <a href="#contact" className="btn-secondary mono-text">Contact()</a>
        </div>
      </div>
      
     
      <div className="home-image-container">
        <div className="glow-circle"></div>
        
        <img src={rahi} alt="Rahi Patel" className="hero-img" />
        <div className="floating-badge react-badge">⚛️ React</div>
        <div className="floating-badge java-badge">☕ Java</div>
      </div>
    </section>
  );
};

export default Home;