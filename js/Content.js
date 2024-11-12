import React, { useState, useEffect } from 'react';

function Content({ children }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isCollapsed) {
      const timer = setTimeout(() => setIsCollapsed(false), 500); // Match the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isCollapsed]);

  return (
    <div className={`content ${isCollapsed ? 'collapsed' : ''}`}>
      {children}
    </div>
  );
}

export default Content;
