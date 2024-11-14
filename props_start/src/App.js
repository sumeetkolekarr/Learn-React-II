import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="https://images.pexels.com/photos/416160/pexels-photo-416160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Lucky"
        phno="6784654"
        email="sgfes@fh"
      />
      <Card
        img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Fluffy"
        phno="24542153"
        email="sgfesxkvg@fh"
      />
      <Card
        img="https://images.pexels.com/photos/804475/pexels-photo-804475.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Bunny"
        phno="67588867379"
        email="sgfeszfvszvs@fh"
      />
      <Card
        img="https://images.pexels.com/photos/271611/pexels-photo-271611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        name="Heroine"
        phno="687354864678"
        email="iyxvusfuiyszt@fh"
      />
    </div>
  );
};

export default App;
