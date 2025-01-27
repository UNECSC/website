import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="content">
      <div className="cyber-border animated">
        <h2>UNE Cyber Security Club</h2>
        <p className="cyber-subtitle">Forging Digital Defenders Since 2023</p>
        
        <div className="feature-grid">
          <div className="feature-card">
            <h3>Workshops</h3>
            <p>Hands-on sessions covering ethical hacking, network security, and digital forensics</p>
          </div>
          
          <div className="feature-card">
            <h3>CTF Challenges</h3>
            <p>Monthly competitions with real-world security scenarios</p>
            <Link to="/events" className="cyber-button small">View Events</Link>
          </div>
          
          <div className="feature-card">
            <h3>Industry Connections</h3>
            <p>Exclusive access to security professionals and internship opportunities</p>
          </div>
        </div>

        <div className="cta-section">
          <Link to="/signup" className="cyber-button pulsate">
            Join Now ➔
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;