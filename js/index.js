import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import { HashRouter as Router, Routes, Route } from 'react-router-dom'; // Use HashRouter
import Navbar from './Navbar';
import Home from './pages/Home';
import Events from './pages/Events';
import Signup from './pages/Signup';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root')); // Updated
root.render(<App />);
