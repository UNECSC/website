import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function DropdownMenu({ onChangeContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    setIsOpen(false);
    onChangeContent(() => {
      navigate(path);
    });
  };

  return (
    <div className="dropdown-menu">
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      {isOpen && (
        <div className="menu-content">
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
