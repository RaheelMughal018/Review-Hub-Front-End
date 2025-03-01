// GlowingCursor.js (a React component)
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard';
import './GlowingCursor.css'; // Import your CSS file for styling

const GlowingCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateCursorPosition);

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="container">
      <Dashboard/>
      <div
        className="glow"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </div>
  );
};

export default GlowingCursor;
