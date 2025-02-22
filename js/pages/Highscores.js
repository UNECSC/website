// /js/pages/Highscores.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Highscores() {
    console.log('Highscores component loaded');
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

Last Updated: 01-27-2025
`;

//1337kitt3n was here.
//Hmmm how can I get on that highscores...?
//UNECSC{l3f7mym4rk}

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (currentIndex < highscoresData.length) {
        setDisplayText(prev => prev + highscoresData[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else {
        clearInterval(typingInterval);
        // Start cursor blink after typing completes
        setInterval(() => {
          setShowCursor(prev => !prev);
        }, 500);
      }
    }, 50); // Typing speed

    return () => clearInterval(typingInterval);
  }, [currentIndex]);

  return (
    <div className="content highscores">
      <div className="terminal-container">
        <pre className="terminal-output">
          {displayText}
          <span className={`cursor ${showCursor ? 'visible' : ''}`}>|</span>
        </pre>
      </div>

      <div className="highscores-actions">
        <Link to="/events" className="cyber-button">
          ← Return to Events
        </Link>
      </div>
    </div>
  );
}

export default Highscores;