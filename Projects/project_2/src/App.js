import React from "react";
import "./style.css";
import { SiReactrouter } from "react-icons/si";
import Joke from "./Joke";

const App = () => {
  return (
    <>
      <div className="body">
        <div className="nav">
          <SiReactrouter />
          <h4>Joke Generator</h4>
        </div>
        <div className="main">
          <h2>Joke Generator</h2>
          <div className="info">
            <p>
              A joke generator is a software application or tool designed to
              create or display jokes. These can be simple one-liners, puns, or
              more elaborate jokes. Joke generators can be useful for
              entertainment, lightening the mood, and even inspiring creativity.
            </p>
            <div className="tags">
              <p className="tag">Funny</p>
              <p className="tag">Entertaining</p>
            </div>
          </div>
        </div>
        <div className="jokes">
          <Joke setup="Why don’t skeletons fight each other?" punchline="They don’t have the guts." isPun={true} upVotes={15}/>
          <Joke setup="What do you call fake spaghetti?" punchline="An impasta!" isPun={true} upVotes={10}/>
          <Joke setup="Why don’t scientists trust atoms?" punchline="Because they make up everything!" isPun={true} upVotes={12}/>
          <Joke punchline="Why don't programmers like nature? It has too many bugs." isPun={true} upVotes={5}/>
        </div>
      </div>
    </>
  );
};

export default App;
