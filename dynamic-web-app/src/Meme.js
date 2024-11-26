import React, { useState } from "react";
import memeData from "./memeData";

const Meme = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [name, setName] = useState("");
  const generateMeme = (e) => {
    e.preventDefault();
    let num = Math.floor(Math.random() * memeData.data.memes.length);
    const randomMemeUrl = memeData.data.memes[num].url;
    const randomMemeName = memeData.data.memes[num].name;
    setImgUrl(randomMemeUrl);
    setName(randomMemeName)
    console.log(randomMemeUrl);
  };
  // Ternary Operator
  // let isGoingOut = false
  // <p>{isGoingOut?"Yes":"No"}</p>
  return (
    <>
      <main>
        <form className="form">
          <input type="text" className="form-input" placeholder="Top Text" />
          <input type="text" className="form-input" placeholder="Bottom Text" />
          <button className="form-button" onClick={generateMeme}>
            Get a new meme image 😊
          </button>
        </form>
      </main>
      {imgUrl && (
        <div className="meme_img">
          <h1>{name}</h1>
          <img src={imgUrl} alt="MemeImg"  />
        </div>
      )}
    </>
  );
};

export default Meme;
