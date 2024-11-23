import React from "react";
import { RiSkull2Fill } from "react-icons/ri";

const Header = () => {
  return (
    <header className="header">
      <div className="intro">
        <RiSkull2Fill className="logo" />
        <h2>Meme Generator</h2>
      </div>
      <h4>React Course - Project 3</h4>
    </header>
  );
};

export default Header;
