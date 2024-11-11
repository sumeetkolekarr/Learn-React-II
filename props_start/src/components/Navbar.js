import React from "react";
import logo from "../assets/lg.jpg";

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <img src={logo} height="60px" alt="logo" />
      </nav>
    </>
  );
};

export default Navbar;
