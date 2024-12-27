import React, { useState } from "react";
import "./App.css";
import Die from "./Die";

const App = () => {
  const allNewDice = () => {
    let arr = [];
    for (let index = 0; index < 10; index++) {
      let randInt = Math.ceil(Math.random() * 6);
      arr.push({ value: randInt, isHeld: false, id: index + 1 });
    }
    return arr;
  };
  function rollDice() {
    setDice(allNewDice());
  }
  const [dice, setDice] = useState(allNewDice());
  return (
    <main>
      <div className="dice-container">
        {dice.map((die) => (
          <Die key={die.id} isHeld={die.isHeld} value={die.value} />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        Roll
      </button>
    </main>
  );
};

export default App;
