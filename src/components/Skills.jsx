import React from 'react';
import './Skills.css';

const Skills = () => {
  // tecnical skills and soft skills in array
  const technicalSkills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
    { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg' },
    { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
  ];

  const softSkills = ['Problem-Solving', 'Analytical Thinking', 'Quick Learner', 'Team Collaboration'];

  return (
    <section id="skills">
      <h2 className="section-title">My_Skills</h2>
      <div className="skills-wrapper">
        
        {/* Technical Skills Grid */}
        <div className="skills-category">
          <h3>&lt;Technical_Skills /&gt;</h3>
          <div className="tech-grid">
            {technicalSkills.map((skill, index) => (
              <div key={index} className="tech-card">
                <div className="tech-icon">
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <span className="mono-text">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills Tags */}
        <div className="skills-category mt-5">
          <h3>&lt;Soft_Skills /&gt;</h3>
          <div className="tags-container">
            {softSkills.map((skill, index) => (
              <span key={index} className="skill-tag soft-tag">{skill}</span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;  