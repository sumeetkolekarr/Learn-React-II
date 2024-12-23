import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./style.css";
import Main from "./components/Main";

const App = () => {
  const [darkMode, setDarkMode] = useState(true)
  function toggleDarkMode() {
    setDarkMode(prev=>!prev)
  }
  return (
    <>
      <Navbar darkMode={darkMode} toggleSlider={toggleDarkMode}/>
      <Main darkMode={darkMode}/>
    </>
  );
};

export default App;
