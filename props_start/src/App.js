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
        {data.map((item, idx) => (
          <Card
          className="card"
            key={idx}
            {...item}
            // item={item}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
