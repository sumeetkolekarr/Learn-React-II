import React, { useState } from "react";
import "./style.css";
import { GiCardJoker } from "react-icons/gi";

const Joke = ({ setup, punchline, isPun, upVotes }) => {
  const [isShown, setIsShown] = useState(false);

  const toggleBtn = () => {
    setIsShown((prev) => !prev);
  };

  console.log(setup, punchline, isPun, upVotes);
  return (
    <>
      <div className="joke">
        {setup && (
          <>
            <div className="jokeTitle">
              <GiCardJoker />

              <h3>{setup}</h3>
            </div>
          </>
        )}
        {/* {setup ? (
          <div className="jokeTitle">
            <GiCardJoker />

            <h3>{setup}</h3>
          </div>
        ) : (
          <></>
        )} */}
        {isShown && <p>{punchline}</p>}
        <button onClick={toggleBtn} type="button">
          {isShown ? "Hide Punchline" : "Show Punchline"}
        </button>
      </div>
    </>
  );
};

export default Joke;
