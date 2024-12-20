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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
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
          <input
            type="text"
            className="form-input"
            name="topText"
            onChange={handleChange}
            value={meme.topText}
            placeholder="Top Text"
          />
          <input
            type="text"
            className="form-input"
            name="bottomText"
            onChange={handleChange}
            value={meme.bottomText}
            placeholder="Bottom Text"
          />
          <button className="form-button" onClick={generateMeme}>
            Get a new meme image 😊
          </button>
        </form>
      </main>
      {meme && (
        <div className="meme_img">
          {/* <h1>{arr.name}</h1> */}
          <img src={meme.randomImg} alt="MemeImg" />
          <div>
            <div>
              <h1>{meme.topText}</h1>
            </div>
            <h1>{meme.bottomText}</h1>
          </div>
        </div>
      )}
    </>
  );
};

export default Meme;
