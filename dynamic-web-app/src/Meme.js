import React, { useState, useEffect } from "react";

const Meme = () => {
  // const [arr, setArr] = useState() //Made by Me
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImg: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMeme, setAllMeme] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setMeme((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  let num;

  // useEffect takes a function as its parameter. If that function returns something, it needs to be a cleanup function. Otherwise, it should return nothing. If we make it an async function, it automatically retuns a promise instead of a function or nothing. Therefore, if you want to use async operations inside of useEffect, you need to define the function separately inside of the callback function, as seen below:
  useEffect(() => {
    async function getMemes() {
      // fetch(`https://api.imgflip.com/get_memes`)
      // .then((res) => res.json())
      // .then((data) => setAllMeme(data));

      const res = fetch(`https://api.imgflip.com/get_memes`);
      const data = (await res).json();
      setAllMeme(data.data.memes);
    }
    getMemes();
  }, []);
  const generateMeme = (e) => {
    e.preventDefault();
    num = Math.floor(Math.random() * allMeme.data.memes.length);
    const randomMemeUrl = allMeme.data.memes[num].url;
    setMeme((prev) => {
      return {
        ...prev,
        randomImg: randomMemeUrl,
      };
    });
    // setArr(randomMemeUrl); //Made by Me
    // console.log(randomMemeUrl);
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
