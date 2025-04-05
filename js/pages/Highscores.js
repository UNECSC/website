import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Highscores() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const highscoresData = `
=== CTF HIGHSCORES ===

1. [null] - 0 pts
2. [null] - 0 pts
3. [null] - 0 pts
4. [null] - 0 pts
5. [null] - 0 pts

Last Updated: 23-01-2025
`;

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < highscoresData.length) {
        setDisplayText(prev => prev + highscoresData[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <div className="content highscores-page">
      <div className="terminal-container">
        <pre className="terminal-output">
          {displayText}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
        </pre>
      </div>

      <div className="highscores-actions">
        <Link to="/events" className="neon-button">← Return to Events</Link>
      </div>
    </div>
  );
}

export default Highscores;
