import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <Home />
        <About />
        <Skills />
        <Resume />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;