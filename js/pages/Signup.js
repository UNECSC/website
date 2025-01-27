// /js/pages/Signup.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faShieldHalved, faTrophy, faUsers, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  return (
    <div className="content cyber-signup">
      <div className="cyber-header">
        <h2 className="cyber">Level Up Your Cyber Skills</h2>
        <p className="cyber-subtitle">Help Shape The Future of Cyber Security.</p>
      </div>

      <div className="benefits-grid">
        <div className="benefit-card">
          <FontAwesomeIcon icon={faCode} className="benefit-icon" />
          <h3>Advanced Workshops</h3>
          <ul className="cyber-list">
            <li>Ethical Hacking Labs</li>
            <li>Network Defense Simulations</li>
            <li>Malware Analysis Sessions</li>
          </ul>
        </div>

        <div className="benefit-card">
          <FontAwesomeIcon icon={faTrophy} className="benefit-icon" />
          <h3>CTF Dominance</h3>
          <ul className="cyber-list">
            <li>Monthly Competitions</li>
            <li>Highscores Rankings</li>
            <li>Exclusive Prizes</li>
          </ul>
        </div>

        <div className="benefit-card">
          <FontAwesomeIcon icon={faBriefcase} className="benefit-icon" />
          <h3>Industry Pipeline</h3>
          <ul className="cyber-list">
            <li>Guest Lectures</li>
            <li>Internship Opportunities</li>
            <li>Career Workshops</li>
          </ul>
        </div>

        <div className="benefit-card">
          <FontAwesomeIcon icon={faUsers} className="benefit-icon" />
          <h3>Elite Community</h3>
          <ul className="cyber-list">
            <li>Active Members</li>
            <li>24/7 Discord Server</li>
            <li>Study Groups</li>
          </ul>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-box">
          <FontAwesomeIcon icon={faShieldHalved} className="cta-icon" />
          <h3 className="cyber-glitch">Ready to Join the Club?</h3>
          <a 
            href="https://unecsc.tidyhq.com/" 
            className="cyber-button mega-button"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Secure Your Membership Now
          </a>
          <p className="disclaimer">
            You'll be redirected to our secure TidyHQ portal
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;