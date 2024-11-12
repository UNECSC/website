import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import DropdownMenu from './DropdownMenu';
import Home from './pages/Home';
import Events from './pages/Events';
import Signup from './pages/Signup';
import Contact from './pages/Contact';
import Content from './content';


function App() {
  const [contentKey, setContentKey] = useState(0);

  const handleChangeContent = (callback) => {
    setContentKey(prevKey => prevKey + 1);
    setTimeout(() => {
      callback();
    }, 500); // Duration matches the CSS transition duration
  };

  return (
    <Router>
      <Navbar />
      <DropdownMenu onChangeContent={handleChangeContent} />
      <Content key={contentKey}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
