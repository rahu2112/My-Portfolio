import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', icon: 'bi-house-door' },
    { name: 'About', icon: 'bi-person' },
    { name: 'Skills', icon: 'bi-lightning-charge' },
    { name: 'Resume', icon: 'bi-file-earmark-person' },
    { name: 'Projects', icon: 'bi-briefcase' },
    { name: 'Services', icon: 'bi-gear' },
    { name: 'Contact', icon: 'bi-envelope' }
  ];

  return (
    <aside className="sidebar">
      <div className="logo-container">
        <h1 className="logo">Rahi<span>.</span></h1>
      </div>
      <nav className="nav-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a href={`#${link.name.toLowerCase()}`}>
                {/* અહીં આપણે આઇકન અને નામ બંને પ્રિન્ટ કરી રહ્યા છીએ */}
                <i className={`bi ${link.icon}`}></i> {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-footer">
        <p>© 2026 Rahi Patel</p>
      </div>
    </aside>
  );
};

export default Navbar;