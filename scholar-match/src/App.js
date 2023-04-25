//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import SavedScholarships from './pages/savedscholarships';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' exact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/savedscholarships' element={<SavedScholarships />} />
      </Routes>
    </Router>
  );
}

export default App;
