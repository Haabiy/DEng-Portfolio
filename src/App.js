import './App.css';
import React from 'react';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Presentation from './components/Presentation.jsx';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Presentation />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;


