import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { useState } from 'react';
import { Splash } from './pages/Splash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< Splash />} />
        <Route path="/flightSearch" element={< Home />} />
      </Routes>
    </Router>
  );
}

export default App;
