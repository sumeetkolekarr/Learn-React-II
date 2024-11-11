import React from "react";
import grid from '../assets/grid.png'

const Hero = () => {
  return (
    <section className="hero">
      <img src={grid} alt="grid" className="heroImg" />
      <h1 className="heroHeader">Online Experiences</h1>
      <p className="heroText">
        Join Unique Interactive activities led by one-of-a-kind hosts-all
        without leaving home
      </p>
    </section>
  );
};

export default Hero;
