import React, { useEffect, useState } from "react";
import "./App.css";
import Die from "./Die";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

const App = () => {
  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    };
  }
  const allNewDice = () => {
    let arr = [];
    for (let index = 0; index < 10; index++) {
      arr.push(generateNewDie());
    }
    return arr;
  };
  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
    } else {
      setTenzies(false);
      setDice(allNewDice());
    }
  }
  function holdDice(id) {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  }
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
      console.log("You Won!");
    }
  }, [dice]);
  return (
    <main>
      {tenzies && <Confetti />}
      <h1 className="title">Tenzies</h1>
      <p className="instructions">
        Roll until all the dice are the same. Click each die to freeze it at its
        current value between rolls
      </p>
      <div className="dice-container">
        {dice.map((die) => (
          <Die
            key={die.id}
            holdDice={() => holdDice(die.id)}
            isHeld={die.isHeld}
            value={die.value}
          />
        ))}
      </div>
      <button className="roll-dice" onClick={rollDice}>
        {tenzies ? "New Game" : "Roll"}
      </button>
    </main>
  );
};

export default App;
