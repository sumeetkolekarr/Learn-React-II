import React, { useState } from "react";
import memeData from "./memeData";

const Meme = () => {
  // const [arr, setArr] = useState() //Made by Me
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImg, setAllMemeImg] = useState(memeData);
  const generateMeme = (e) => {
    e.preventDefault();
    let num = Math.floor(Math.random() * memeData.data.memes.length);
    const randomMemeUrl = memeData.data.memes[num].url;
    setMeme((prev) => {
      return {
        ...prev,
        randomImg: randomMemeUrl,
      };
    });
    // setArr(randomMemeUrl); //Made by Me
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
      {meme && (
        <div className="meme_img">
          {/* <h1>{arr.name}</h1> */}
          <img src={meme.randomImg} alt="MemeImg" />
        </div>
      )}
    </>
  );
};

export default Meme;
