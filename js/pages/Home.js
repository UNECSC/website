import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="content home-page">
      <h1 className="hero-title glitch neon-header">University of New England<br />Cyber Security Club</h1>
      <p className="neon-subtitle">Forging Digital Defenders Since 2024</p>

      <div className="feature-grid">
        <div className="feature-card cyan-border">
          <h3>🛠 Workshops</h3>
          <p>Hands-on hacking, network defense, and digital forensics.</p>
        </div>

        <div className="feature-card magenta-border">
          <h3>🎯 CTF Challenges</h3>
          <p>Monthly competitions with real-world security scenarios.</p>
          <Link to="/events" className="neon-button btn-small">View Events</Link>
        </div>

        <div className="feature-card green-border">
          <h3>🔗 Industry Connections</h3>
          <p>Access to cyber pros, internship pipelines, and tech mentors.</p>
        </div>
      </div>

      <div className="scanline"></div>

      <div className="cta-section">
        <Link to="/signup" className="neon-button mega-button pulse-hover">
          Join Now ➤
        </Link>
      </div>
    </div>
  );
}

export default Home;
