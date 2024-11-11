import React from "react";
// import bg from '../images/bg-icon.png'

const Main = () => {
  return (
    <main className="mainTitle">
      {/* <img src={bg} alt="Background" className="bgImg"/> */}
      <h1>Fun Facts About React</h1>
      <ul className="main_facts">
        <li>Was first released in 2013</li>
        <li>Was Originally Created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by FaceBook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </main>
  );
};

export default Main;
