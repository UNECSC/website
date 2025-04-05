import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/animatedBG.css';

const AnimatedBG = () => {
  const location = useLocation();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    function setCanvasSize() {
      const width = Math.max(document.documentElement.scrollWidth, window.innerWidth);
      const height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      canvas.width = width;
      canvas.height = height;
    }

    // Initialize canvas
    setCanvasSize();

    const fontSize = 16;
    const delayMs = 140; // slower for subtlety
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    const symbols = ['░', '▒', '▓', '█', '▄', '▀', '▲', '◆', '◇'];

    const colors = ['#ff00ff', '#8e2de2', '#00ffff'];

    // Draw loop
    function draw() {
      // Subtle dark fade
      ctx.fillStyle = 'rgba(10, 5, 20, 0.06)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Space Mono', monospace`;

      drops.forEach((y, x) => {
        const symbol = symbols[Math.floor(Math.random() * symbols.length)];
        const color = colors[Math.floor(Math.random() * colors.length)];
        ctx.fillStyle = color;

        const xPos = x * fontSize;
        const yPos = y * fontSize;
        ctx.fillText(symbol, xPos, yPos);

        if (yPos > canvas.height && Math.random() > 0.975) {
          drops[x] = 0;
        }
        drops[x]++;
      });

      setTimeout(() => requestAnimationFrame(draw), delayMs);
    }

    draw();

    const handleResize = () => {
      setCanvasSize();
      const newCols = Math.floor(canvas.width / fontSize);
      drops.length = newCols;
      drops.fill(1);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const width = Math.max(document.documentElement.scrollWidth, window.innerWidth);
      const height = Math.max(document.documentElement.scrollHeight, window.innerHeight);
      canvas.width = width;
      canvas.height = height;
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return <canvas ref={canvasRef} className="animated-bg" />;
};

export default AnimatedBG;
