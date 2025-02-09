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
    }, 500); // Matches CSS transition duration
  };

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      {/* Background Wrapper - Always behind content */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -100 }}>
        <AnimatedBG />
      </div>

      {/* Main Content Wrapper - Ensures UI is above background */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Router>
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
        </Router>
      </div>
    </div>
  );
}

export default App;
