import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Car Rental System",
      tech: "PHP, MySQL, JS, Bootstrap",
      desc: "Full-stack web app for vehicle listing, booking, and availability tracking with an admin panel.",
      githubLink: "https://github.com/rahu2112/Carrental-portal-",
      // demoLink: "#", 
      imageUrl: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Movie Search App",
      tech: "HTML, CSS, JS, OMDb API",
      desc: "Dynamic web app fetching real-time movie details, posters, and ratings with responsive design.",
      githubLink: "https://github.com/rahu2112/Movie-Search-App",
      demoLink: "https://movie-search-app-one-pied.vercel.app/", 
      imageUrl: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Weather Application",
      tech: "React.js, REST API",
      desc: "Real-time weather data fetcher with dynamic display and elegant responsive UI.",
      githubLink: "https://github.com/rahu2112/Weather_App_",
      demoLink: "https://weather-app-ten-indol-40.vercel.app/", 
      imageUrl: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My_Projects</h2>
      
      <div className="projects-grid">
        {projects.map((proj, idx) => (
          <div key={idx} className="project-card">
            
            <div 
              className="card-bg" 
              style={{ backgroundImage: `url(${proj.imageUrl})` }}
            ></div>
            
            <div className="card-overlay"></div>

            <div className="card-content">
              <span className="tech-stack mono-text">{proj.tech}</span>
              <h3 className="project-title">{proj.title}</h3>
              
              <div className="hover-content">
                <p className="project-desc">{proj.desc}</p>
                
                
                <div className="project-links">
                  <a href={proj.githubLink} target="_blank" rel="noreferrer" className="btn-action btn-github mono-text">
                    <i className="bi bi-github"></i> Code
                  </a>
                  
                
                  {proj.demoLink && (
                    <a href={proj.demoLink} target="_blank" rel="noreferrer" className="btn-action btn-demo mono-text">
                      <i className="bi bi-box-arrow-up-right"></i> Live
                    </a>
                  )}
                </div>

              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;