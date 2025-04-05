import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';
import './styles/hamburger.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If dropdown is open and the clicked target is not within the navbar, close it.
      if (isOpen && navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="navbar cyberpunk-nav" ref={navRef}>
  <h1 className="neon-header">UNECSC</h1>
      <div 
        className={`hamburger ${isOpen ? 'open' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
          <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
