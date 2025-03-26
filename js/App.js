// App.js
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import DropdownMenu from './DropdownMenu';
import Home from './pages/Home';
import Events from './pages/Events';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Highscores from './pages/Highscores';
import Content from './Content';
import AnimatedBG from './components/AnimatedBG';

function App() {
  const [contentKey, setContentKey] = useState(0);

  const handleChangeContent = (callback) => {
    setContentKey((prevKey) => prevKey + 1);
    setTimeout(() => {
      callback();
    }, 500); // Matches your CSS transition duration
  };

  return (
    // Using HashRouter to avoid conflicts with static files like /static/chal1.html
    <Router>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        {/* Matrix-style animated background */}
        <AnimatedBG />

        {/* Foreground UI */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <DropdownMenu onChangeContent={handleChangeContent} />

          <Content key={contentKey}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/events" element={<Events />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/highscores" element={<Highscores />} />
            </Routes>
          </Content>
        </div>
      </div>
    </Router>
  );
}

export default App;
