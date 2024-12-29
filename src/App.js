import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Textform from './component/Textform';
import About from './component/About';
import Cnt from './Cnt';
import { useState } from 'react';
import React from "react";
import {
  BrowserRouter as Router,
  Routes, // Use Routes instead of Switch
  Route,
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [mystyle, setstyle] = useState({ color: '#000' });

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark');
      setstyle({ color: '#fff' });
      console.log(mode);
    } else {
      setmode('light');
      setstyle({ color: '#000' });
    }
  };

  return (
    
      <Router>
      <div className="container">
      <Navbar home="Home" about="About us" cnt="Contact Us" mode={mode} toggleMode={toggleMode} mystyle={mystyle} />
      <div className="container my-3">
      <Routes>  
        <Route path='/' element={<Textform lable="Text Area" title="Component Form" mode={mode} mystyle={mystyle} />}/>
        <Route path='/contact' element={<Cnt page="Contact Page"/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
