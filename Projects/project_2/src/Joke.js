import React from "react";
import "./style.css";
import { GiCardJoker } from "react-icons/gi";

const Joke = ({ setup, punchline, isPun, upVotes }) => {
    console.log(setup, punchline, isPun, upVotes)
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
        <p>{punchline}</p>
      </div>
    </>
  );
};

export default Joke;
