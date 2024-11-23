import React from "react";
import "./style.css";
import { RiEarthFill } from "react-icons/ri";
import Card from "./Card";
import places from "./data";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <RiEarthFill className="globe" />
        <h1>My Travel Journey</h1>
      </div>
      <div className="content">
        {places.map((item, idx) => {
          return <Card key={idx} item={item} />;
        })}
      </div>
      <div className="footer"></div>
    </div>
  );
};

export default App;
