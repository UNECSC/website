import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faUserTie, faFileSignature, faCoins, faCrown, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="content contact-page">
      <h2 className="neon-header glitch">Contact The Team</h2>

      <div className="contact-grid">
        <div className="contact-column">
          <h3 className="section-subtitle"><FontAwesomeIcon icon={faUserTie} /> Executive Committee</h3>
          <div className="contact-card">
            <FontAwesomeIcon icon={faCrown} className="contact-icon pink" />
            <div className="contact-info">
              <div className="role-title">President</div>
              <a href="mailto:president@unecsc.com">Cody Williams</a>
            </div>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faUserTie} className="contact-icon cyan" />
            <div className="contact-info">
              <div className="role-title">Vice President</div>
              <a href="mailto:vicepresident@unecsc.com">James Anstee</a>
            </div>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faFileSignature} className="contact-icon green" />
            <div className="contact-info">
              <div className="role-title">Secretary</div>
              <a href="mailto:secretary@unecsc.com">Lachlan Jarret</a>
            </div>
          </div>
          <div className="contact-card">
            <FontAwesomeIcon icon={faCoins} className="contact-icon yellow" />
            <div className="contact-info">
              <div className="role-title">Treasurer</div>
              <a href="mailto:treasurer@unecsc.com">Kevin Teong</a>
            </div>
          </div>
        </div>

        <div className="contact-column discord-column">
          <FontAwesomeIcon icon={faDiscord} className="discord-icon" />
          <h3>Join the Server</h3>
          <a
            href="https://discord.gg/CMpE4hZ3zy"
            target="_blank"
            rel="noopener noreferrer"
            className="btn discord"
          >
            Connect on Discord
          </a>
        </div>
      </div>

      <div className="social-teaser">
        <h4><FontAwesomeIcon icon={faEnvelope} /> More Contact Options Coming Soon</h4>
        <div className="social-icons">
          <span className="coming-soon">Social Media</span>
          <span className="coming-soon">Event Booking</span>
          <span className="coming-soon">Live Support Chat</span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
