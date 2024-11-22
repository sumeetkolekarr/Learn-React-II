import React from "react";
import "./style.css";
import { SiReactrouter } from "react-icons/si";
import Joke from "./Joke";
import jokesdata from "./jokesData";

const App = () => {
  console.log(jokesdata.setup);
  // const jokeElements = ;
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
          {jokesdata.map((obj) => (
              <Joke
                setup={obj.setup}
                punchline={obj.punchline}
                isPun={obj.isPun}
                upVotes={obj.upVotes}
              />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
