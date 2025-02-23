// /js/pages/Contact.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faUserTie, faFileSignature, faCoins } from '@fortawesome/free-solid-svg-icons';

function Contact() {
  return (
    <div className="content cyber-signup">
      <div className="cyber-header">
        <h2 className="cyber">Contact The Team</h2>
        <div className="scanline"></div>
      </div>

      <div className="contact-grid">
        <div className="executive-contacts">
          <h3><FontAwesomeIcon icon={faUserTie} /> Executive Committee</h3>
          <ul className="cyber-list">
  <li>
    <FontAwesomeIcon icon={faUserTie} className="icon-glitch" />
    <span className="role">President:</span>
    <a href="mailto:president@unecsc.com" className="email-link">
      Cody Williams - president@unecsc.com
    </a>
  </li>
  <li>
    <FontAwesomeIcon icon={faUserTie} className="icon-glitch" />
    <span className="role">Vice President:</span>
    <a href="mailto:vicepresident@unecsc.com" className="email-link">
      James Anstee - vicepresident@unecsc.com
    </a>
  </li>
  <li>
    <FontAwesomeIcon icon={faFileSignature} className="icon-glitch" />
    <span className="role">Secretary:</span>
    <a href="mailto:secretary@unecsc.com" className="email-link">
      Lachlan Jarret - secretary@unecsc.com
    </a>
  </li>
  <li>
    <FontAwesomeIcon icon={faCoins} className="icon-glitch" />
    <span className="role">Treasurer:</span>
    <a href="mailto:treasurer@unecsc.com" className="email-link">
      Kevin Teong - treasurer@unecsc.com
    </a>
  </li>
</ul>

        </div>

        <div className="discord-cta">
          <div className="discord-container">
            <FontAwesomeIcon icon={faDiscord} className="discord-icon" />
            <h3>Discord Server</h3>
            <a 
              href="https://discord.gg/CMpE4hZ3zy" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cyber-button discord-button"
            >
              Connect on Discord <FontAwesomeIcon icon={faDiscord} />
            </a>
          </div>
        </div>
      </div>

      <div className="social-teaser">
        <h4><FontAwesomeIcon icon={faEnvelope} /> Additional Contact Options Coming Soon</h4>
        <div className="social-icons">
          <div className="coming-soon">Social Media</div>
          <div className="coming-soon">Event Booking</div>
          <div className="coming-soon">Live Support Chat</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;