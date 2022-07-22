import React, {useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = '#333';
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = '#FFF';
    }
  }

  return (
    <>
      <Router>
        <Navbar logo="Text-Utils" aboutTitle="About Us" mode={mode} enableMode={toggleMode} />
        <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode}/>}/>
            <Route exact path="/about" element={<About mode={mode}/>}/>
        </Routes>
      </Router>
    </>

  );
}

export default App;
