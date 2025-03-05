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

    <p>Are you a UNE Student/Staff member?</p>
    <p>Registration is FREE:</p>
    <a 
      href="https://unecsc.tidyhq.com/public/membership_levels/2fbd41198ac1" 
      className="cyber-button mega-button"
      target="_blank" 
      rel="noopener noreferrer"
    >
      Click Here
    </a>

    <p className="spacer" />

    <p>Non-UNE student/staff members:</p>
    <p>Click here to become an affiliate member <br></br>(note $20 registration fee required per year)</p>
    <a 
      href="https://unecsc.tidyhq.com/public/membership_levels/26c13c2d1f2c"
      className="cyber-button mega-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      Become an Affiliate
      </a>
    </div>
  </div>
    </div>
  );
}

export default Signup;