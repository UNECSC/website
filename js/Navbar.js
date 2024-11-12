// frontend/js/navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="navbar">
            <h1>UNECSC</h1>
            <div
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className={`dropdown ${isOpen ? 'open' : ''}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/events" onClick={() => setIsOpen(false)}>Events</Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>Signup</Link>
                <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
