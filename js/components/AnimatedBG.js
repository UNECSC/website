import React, { useEffect, useRef } from 'react';
import './styles/animatedBG.css'; // Import the CSS file

const AnimatedBG = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Set canvas dimensions
    canvas.width = width;
    canvas.height = height;

    // Matrix configuration
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    // Draw the matrix effect
    const drawMatrix = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Creates fading effect
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#00FF00'; // Matrix green color
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        const text = Math.random() > 0.5 ? '0' : '1'; // Randomly choose 0 or 1
        const xPos = x * fontSize;
        const yPos = y * fontSize;

        ctx.fillText(text, xPos, yPos);

        // Reset drop to start from the top with some randomness
        if (y * fontSize > height && Math.random() > 0.975) {
          drops[x] = 0;
        }

        drops[x]++;
      });

      requestAnimationFrame(drawMatrix);
    };

    drawMatrix();

    // Handle window resize
    const resizeHandler = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Recalculate columns and reset drops
      const newColumns = Math.floor(width / fontSize);
      drops.length = newColumns;
      drops.fill(1);
    };

    window.addEventListener('resize', resizeHandler);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', resizeHandler);
  }, []);

  return <canvas ref={canvasRef} className="animated-bg" />;
};

export default AnimatedBG;
