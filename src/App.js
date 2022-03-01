import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Homepage from './pages/homepage.js';
import Navbar from './components/navbar.js';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Homepage />
    </Router>
  );
}

export default App;
