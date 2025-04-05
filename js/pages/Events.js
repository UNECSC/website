import React from 'react';
import { Link } from 'react-router-dom';

function Events() {
  return (
    <div className="content events-page">
      <h2 className="neon-header">Events</h2>

      <section className="event-intro">
        <h3>Capture The Flag</h3>
        <p className="events-duration">Duration: 1 Week, Monthly</p>
      </section>

      <section className="event-details">
        <div className="structure">
          <h4>Structure</h4>
          <ul className="events-list">
            <li><strong>Day 1:</strong> Challenges Open</li>
            <li><strong>Day 5:</strong> Bonus Challenge (2x pts)</li>
            <li><strong>Day 7:</strong> Ends @ 11:59PM AEST</li>
          </ul>
        </div>

        <div className="categories">
          <h4>Challenge Categories</h4>
          <div className="topics-grid">
            <div className="topic-item">🔐 Cryptography</div>
            <div className="topic-item">🌐 Web Exploitation</div>
            <div className="topic-item">🔑 Password Cracking</div>
            <div className="topic-item">💥 Buffer Overflows</div>
            <div className="topic-item">🕵️ OSINT</div>
            <div className="topic-item">⚡ Bruteforce</div>
          </div>
        </div>
      </section>

      <section className="prizes">
        <h4>Prizes</h4>
        <ul className="prize-list">
          <li>🥇 1st Place: TBA</li>
          <li>🥈 2nd Place: TBA</li>
          <li className="special-tier">🏆 Grand Prize: TBA</li>
        </ul>
      </section>

      <section className="rules">
        <h4>Rules</h4>
        <ul className="events-list">
          <li>Solo or Teams</li>
          <li>No Infrastructure Damage</li>
          <li>No Flag Sharing</li>
        </ul>
      </section>

      <div className="cta">
        <Link to="/highscores" className="neon-button">Leaderboard ➝</Link>
      </div>

      <p className="events-disclaimer">* Registration opens 1 week before start</p>
    </div>
  );
}

export default Events;
