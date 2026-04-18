import React, { useState } from 'react';
import './Resume.css';

const Resume = () => {
  // control 3 tab 
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <section id="resume" className="resume-section">
      
      {/* Header & Download Button */}
      <div className="resume-header-row">
        <h2 className="section-title">My_Resume</h2>
        <a href="/Rahi_Patel_Resume.pdf" download="Rahi_Patel_Resume.pdf" className="btn-download">
          <i className="bi bi-cloud-download"></i> Download_CV.pdf
        </a>
      </div>

      {/* VS Code / Mac Window UI */}
      <div className="editor-window">
        
        {/* Window Top Bar */}
        <div className="editor-header">
          <div className="mac-buttons">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          
          <div className="editor-tabs">
            {/* 1. Experience Tab */}
            <button 
              className={`tab ${activeTab === 'experience' ? 'active' : ''}`}
              onClick={() => setActiveTab('experience')}
            >
              <i className="bi bi-briefcase"></i> experience.js
            </button>
            
            {/* 2. Education Tab */}
            <button 
              className={`tab ${activeTab === 'education' ? 'active' : ''}`}
              onClick={() => setActiveTab('education')}
            >
              <i className="bi bi-mortarboard"></i> education.json
            </button>

            {/* 3. Certificates Tab */}
            <button 
              className={`tab ${activeTab === 'certificates' ? 'active' : ''}`}
              onClick={() => setActiveTab('certificates')}
            >
              <i className="bi bi-award"></i> certificates.md
            </button>
          </div>
        </div>

        {/* Window Body Content */}
        <div className="editor-body">
          {/* Fake Line Numbers */}
          <div className="line-numbers">
            {Array.from({ length: 14 }).map((_, i) => (
              <span key={i}>{i + 1}</span>
            ))}
          </div>

          <div className="editor-content">
            
            {/* =====================
                EXPERIENCE TAB
            ====================== */}
            {activeTab === 'experience' && (
              <div className="fade-in">
                <div className="content-card">
                  <div className="card-header">
                    <h4>PHP Developer (Intern)</h4>
                    <span className="badge-year">May 2025 – Dec 2025</span>
                  </div>
                  <h5 className="company-name"><i className="bi bi-building"></i> ZORENS INFOTECH PVT. LTD.</h5>
                  <ul className="dev-list">
                    <li>Developed server-side logic using PHP & managed MySQL databases.</li>
                    <li>Assisted in schema design and API integrations.</li>
                    <li>Contributed to cross-functional projects.</li>
                  </ul>
                </div>

                <div className="content-card">
                  <div className="card-header">
                    <h4>Frontend Developer</h4>
                    <span className="badge-year">Jun 2024 – Aug 2024</span>
                  </div>
                  <h5 className="company-name"><i className="bi bi-building"></i> IBM</h5>
                  <ul className="dev-list">
                    <li>Built responsive web apps using HTML, CSS, JavaScript.</li>
                    <li>Improved UI/UX with clean and modern designs.</li>
                  </ul>
                </div>
              </div>
            )}

            {/* =====================
                EDUCATION TAB
            ====================== */}
            {activeTab === 'education' && (
              <div className="fade-in">
                
                {/* B.Tech */}
                <div className="content-card">
                  <div className="card-header">
                    <h4>B.Tech in Information Technology</h4>
                    <span className="badge-year">Class of 2025</span>
                  </div>
                  <h5 className="company-name"><i className="bi bi-bank"></i> Sankalchand Patel College Of Engineering, Visnagar</h5>
                  <div className="status-badge">Grade: First Class</div>
                </div>

                {/* 12th Science */}
                <div className="content-card">
                  <div className="card-header">
                    <h4>Higher Secondary Certificate (12th Science)</h4>
                    <span className="badge-year">Class of 2021</span>
                  </div>
                  <h5 className="company-name"><i className="bi bi-building"></i> B.M. High School, Patan</h5>
                  <div className="status-badge">Board: GSEB</div>
                </div>

                {/* 10th */}
                <div className="content-card">
                  <div className="card-header">
                    <h4>Secondary School Certificate (10th)</h4>
                    <span className="badge-year">Class of 2019</span>
                  </div>
                  <h5 className="company-name"><i className="bi bi-building"></i> Krishna School Of Science</h5>
                  <div className="status-badge">Board: GSEB</div>
                </div>

              </div>
            )}

            {/* =====================
                CERTIFICATES TAB
            ====================== */}
            {activeTab === 'certificates' && (
              <div className="fade-in">
                
                <div className="content-card">
                  <div className="card-header">
                    <h4>Web Development Certification</h4>
                    <span className="badge-year">Completed</span>
                  </div>
                  <h5 className="company-name"><i className="bi bi-award-fill"></i> IBM</h5>
                  <ul className="dev-list">
                    <li>Completed introductory training in web development focusing on HTML, CSS, and basic JavaScript.</li>
                    <li>Developed practical skills in creating clean, responsive web interfaces.</li>
                    <li>Gained a solid understanding of frontend development processes.</li>
                  </ul>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;