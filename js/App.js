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
    }, 500); // Duration matches the CSS transition duration
  };

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      {/* Animated Background */}
      <AnimatedBG />

      <Router>
        {/* Navbar and dropdown menu */}
        <Navbar />
        <DropdownMenu onChangeContent={handleChangeContent} />

        {/* Main content area */}
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
  );
}

export default App;
