// /components/AnimatedBG.js
import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/animatedBG.css';

const AnimatedBG = () => {
  const location = useLocation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    // Measures the entire document to set canvas size
    function setCanvasSize() {
      const width = Math.max(
        document.documentElement.scrollWidth,
        window.innerWidth
      );
      const height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      canvas.width = width;
      canvas.height = height;
    }

    // Initial setup
    setCanvasSize();

    // Adjust these to taste
    const fontSize = 14;
    const delayMs = 100; // ~10 FPS if using setTimeout(..., 100)
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);

    // Our Matrix draw loop
    function drawMatrix() {
      // Creates the trailing/fading effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Matrix green
      ctx.fillStyle = '#00FF00';
      ctx.font = `${fontSize}px monospace`;

      drops.forEach((y, x) => {
        // Randomly choose 0 or 1
        const text = Math.random() > 0.5 ? '0' : '1';

        const xPos = x * fontSize;
        const yPos = y * fontSize;
        ctx.fillText(text, xPos, yPos);

        // If drop is off-screen, reset occasionally
        if (yPos > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        }
        drops[x]++;
      });

      // Instead of calling requestAnimationFrame immediately,
      // introduce a delay to slow the animation
      setTimeout(() => {
        requestAnimationFrame(drawMatrix);
      }, delayMs);
    }

    drawMatrix();

    // Recalc on window resize
    const handleResize = () => {
      setCanvasSize();
      // Reset drops after resizing
      const newCols = Math.floor(canvas.width / fontSize);
      drops.length = newCols;
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // On route change, re-measure in case the new page is longer/shorter
  useEffect(() => {
    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const width = Math.max(
        document.documentElement.scrollWidth,
        window.innerWidth
      );
      const height = Math.max(
        document.documentElement.scrollHeight,
        window.innerHeight
      );
      canvas.width = width;
      canvas.height = height;
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return <canvas ref={canvasRef} className="animated-bg" />;
};

export default AnimatedBG;
