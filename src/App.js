import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Events from './components/Events';
import Domains from './components/Domains';
import Navbar from './components/Navbar'; // Import Navbar
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/domains" element={<Domains />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;