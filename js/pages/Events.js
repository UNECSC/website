// frontend/js/pages/Events.js
import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div className="content">
      <h2>Events</h2>
      
      <div className="ctf-section">
        <div className="cyber-box">
          <h3>Capture The Flag</h3>
          <p className="glowing-text">Duration: 1 Week Monthly</p>
        </div>

        <div className="grid-container">
          <div className="ctf-structure">
            <h4>Event Structure:</h4>
            <ul className="cyber-list">
              <li><strong>Day 1:</strong> Main challenges released</li>
              <li><strong>Day 5:</strong> Bonus challenge unlocked (2x points)</li>
              <li><strong>Day 7:</strong> Competition ends at midnight</li>
            </ul>
          </div>

          <div className="ctf-topics">
            <h4>Challenge Categories:</h4>
            <div className="topic-grid">
              <div className="topic-item">🔐 Cryptography</div>
              <div className="topic-item">🌐 Web Exploitation</div>
              <div className="topic-item">🔑 Password Cracking</div>
              <div className="topic-item">💥 Buffer Overflows</div>
              <div className="topic-item">🕵️ OSINT Challenges</div>
              <div className="topic-item">⚡ Bruteforce Attacks</div>
            </div>
          </div>
        </div>

        <div className="prizes-section">
  <h4>Prizes:</h4>
  <div className="prize-tier">
    <div className="tier">
      <span>1st Place:</span> TO BE ANNOUNCED
    </div>
    <div className="tier">
      <span>2nd Place:</span> TO BE ANNOUNCED
    </div>
    <div className="tier cyber-glitch" style={{borderColor: "#ff00ff"}}>
      <span>Annual Grand Prize:</span> TO BE ANNOUNCED
    </div>
  </div>
</div>

        <div className="ctf-rules">
          <h4>Competition Rules:</h4>
          <ul className="cyber-list">
            <li>Solo or teams</li>
            <li>No use of tools that may damage/disrupt infrastructure</li>
            <li>No flag sharing/bruteforcing infrastructure</li>
          </ul>
        </div>

        <div className="ctf-actions">
          <Link to="/highscores" className="cyber-button">
            View Current Leaderboard ➔
          </Link>
        </div>

        <p className="disclaimer">
          * Registration opens 1 week before start
        </p>
      </div>
    </div>
  );
}

export default Events;