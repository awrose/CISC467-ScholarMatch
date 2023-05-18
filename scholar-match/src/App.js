//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import { BrowserRouter as Router, Routes, Route }
  from 'react-router-dom';
import Home from './pages';
import Login from './pages/login';
import SavedScholarships from './pages/savedscholarships';
import { useState, useEffect } from "react";
import loadedScholarships from "./scholarships.json"


function App() {


  const SCHOLARSHIPS = loadedScholarships.map((scholarship) => ({
    ...scholarship
  }));
  const saveDataKey = "save-key"
  const previousData = localStorage.getItem(saveDataKey)
  let data = SCHOLARSHIPS

  if(previousData !== null){
    data = JSON.parse(previousData)
  }


  const [scholarships, setScholarships] = useState(data);

  useEffect(() => {
    localStorage.setItem(saveDataKey, JSON.stringify(scholarships))
  }, [scholarships])

  /*const SCHOLARSHIPS = loadedScholarships.map((scholarship) => ({
    ...scholarship
  }))
  const [scholarships, setScholarships] = useState(SCHOLARSHIPS);*/

  return (
    <Router>
      <Navbar />
      <Routes>
      <Route exact path='/' exact element={<Home scholarships = {scholarships} setScholarships = {setScholarships}/>} />
        <Route path='/login' element={<Login />} />
        <Route path='/savedscholarships' element={<SavedScholarships scholarships = {scholarships} setScholarships = {setScholarships}/>} />
      </Routes>
    </Router>
  );
}

export default App;
