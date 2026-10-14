import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// imports
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';

import Logo from './assets/TF-logo.png';
//nav function 
function App() {
  return (
    <Router>
      {/* css setup */}
      <div style={{fontFamily: 'Arial, sans-serif'}}>
          <nav style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '15px 30px',
            backgroundColor: '#808080',
            color: '#000000'
          }}> 
          {/* custom logo */}
          <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={Logo} alt="TF Portfolio Logo"
            style={{height: '50px', width: 'auto'}}
            />
          </div>
          {/* links list */}
          <ul style={{display: 'flex', listStyle: 'none', gap: '20px', margin: 0, padding: 0}}>
            <li><Link to="/" style={{color: '#ffffff', textDecoration: 'none'}}>Home</Link></li>
            <li><Link to="/about" style={{color: '#ffffff', textDecoration: 'none'}}>About Me</Link></li>
            <li><Link to="/projects" style={{color: '#ffffff', textDecoration: 'none'}}>Projects</Link></li>
            <li><Link to="/education" style={{color: '#ffffff', textDecoration: 'none'}}>Education</Link></li>
            <li><Link to="/services" style={{color: '#ffffff', textDecoration: 'none'}}>Services</Link></li>
            <li><Link to="/contact" style={{color: '#ffffff', textDecoration: 'none'}}>Contact</Link></li>
          </ul>
          </nav>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>
            {/* defines paths for the links in the list */}
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/projects" element={<Projects />}/>
              <Route path="/education" element={<Education />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
      </div>
    </Router>
  );
}

export default App;