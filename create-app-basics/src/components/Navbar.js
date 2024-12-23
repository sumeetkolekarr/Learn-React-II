import React from "react";
import logo from "../images/lg.jpg";

const Navbar = (props) => {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <img src={logo} width="50px" alt="Logo" className="nav_icon" />
      <h3 className="nav_lg_txt">ReactFacts</h3>
      <div>
      <div onClick={props.toggleSlider}>
        <div>{props.darkMode?'Light Mode': 'Dark Mode'}</div>
      </div>
      <h4 className="nav_title">React Course - Project 1</h4>
      </div>
    </nav>
  );
};

export default Navbar;
