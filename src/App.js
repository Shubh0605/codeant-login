import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login1';
import Repository from './components/Repository';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/repositories" element={<Repository />} />
      </Routes>
    </Router>
  );
};

export default App;



