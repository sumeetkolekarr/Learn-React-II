import React from "react";
import memeData from "./memeData";

const Meme = () => {
  const generateMeme = (e) => {
    e.preventDefault();
    let num = Math.floor(Math.random() * memeData.length);
    console.log(memeData.data.memes[num].url);
  };
  return (
    <main>
      <form className="form">
        <input type="text" className="form-input" placeholder="Top Text" />
        <input type="text" className="form-input" placeholder="Bottom Text" />
        <button className="form-button" onClick={generateMeme}>
          Get a new meme image 😊
        </button>
      </form>
    </main>
  );
};

export default Meme;
