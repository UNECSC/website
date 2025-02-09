import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DropdownMenu({ onChangeContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Reference for the dropdown wrapper

  const handleLinkClick = (path) => {
    setIsOpen(false);
    onChangeContent(() => {
      navigate(path);
    });
  };

  // Attach a click listener that will close the dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If dropdown is open and the clicked element is not inside dropdownRef, close it.
      if (isOpen && dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="dropdown-wrapper" ref={dropdownRef}>
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          <Link to="/" onClick={() => handleLinkClick('/')}>Home</Link>
          <Link to="/events" onClick={() => handleLinkClick('/events')}>Events</Link>
          <Link to="/signup" onClick={() => handleLinkClick('/signup')}>Signup</Link>
          <Link to="/contact" onClick={() => handleLinkClick('/contact')}>Contact</Link>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
