import React from "react";
import Navbar from "./components/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./components/data";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">
        {data.map((dt, idx) => (
          <Card key={idx} className='card' img={dt.img} name={dt.name} phno={dt.phno} email={dt.email} isAvailable={dt.isAvailable} location={dt.location} />
        ))}
      </section>
    </div>
  );
};

export default App;
