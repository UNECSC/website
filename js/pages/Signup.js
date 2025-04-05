import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved, faTrophy, faUsers, faBriefcase, faCode } from '@fortawesome/free-solid-svg-icons';

function Signup() {
  return (
    <div className="content signup-page">
      <h2 className="neon-header">Level Up Your Cyber Skills</h2>
      <p className="neon-subtitle">Help Shape the Future of Cyber Security</p>

      <div className="benefits-grid">
        <div className="benefit-card">
          <FontAwesomeIcon icon={faCode} className="benefit-icon" />
          <h3>Advanced Workshops</h3>
          <ul>
            <li>Ethical Hacking Labs</li>
            <li>Network Defense Simulations</li>
            <li>Malware Analysis</li>
          </ul>
        </div>

        <div className="benefit-card">
          <FontAwesomeIcon icon={faTrophy} className="benefit-icon" />
          <h3>CTF Dominance</h3>
          <ul>
            <li>Monthly Competitions</li>
            <li>Highscore Rankings</li>
            <li>Exclusive Prizes</li>
          </ul>
        </div>

        <div className="benefit-card">
          <FontAwesomeIcon icon={faBriefcase} className="benefit-icon" />
          <h3>Industry Pipeline</h3>
          <ul>
            <li>Guest Speakers</li>
            <li>Internships</li>
            <li>Career Coaching</li>
          </ul>
        </div>

        <div className="benefit-card">
          <FontAwesomeIcon icon={faUsers} className="benefit-icon" />
          <h3>Elite Community</h3>
          <ul>
            <li>Active Discord</li>
            <li>Study Groups</li>
            <li>Hack Nights</li>
          </ul>
        </div>
      </div>

      <div className="cta-box">
        <FontAwesomeIcon icon={faShieldHalved} className="cta-icon" />
        <h3 className="cyber-glitch">Ready to Join?</h3>

        <div className="cta-info">UNE Students/Staff: Free Registration</div>
        <div className="cta-button-row">
          <a
            href="https://unecsc.tidyhq.com/public/membership_levels/2fbd41198ac1"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button mega-button"
          >
            Join Now
          </a>
        </div>

        <div className="cta-info">Non-UNE members: $20/year affiliate membership</div>
        <div className="cta-button-row">
          <a
            href="https://unecsc.tidyhq.com/public/membership_levels/26c13c2d1f2c"
            target="_blank"
            rel="noopener noreferrer"
            className="cyber-button mega-button"
          >
            Become an Affiliate
          </a>
        </div>
      </div>
    </div>
  ); 
}

export default Signup;
