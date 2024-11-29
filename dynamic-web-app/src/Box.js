import React, { useState } from "react";
import boxes from "./boxes";
import InnerBox from "./InnerBox";

const Box = (props) => {
  const [squares, setSquares] = useState(boxes);
  const toggleSquare = (id) => {
    // setSquares((prev) => !prev);
    // console.log("Clicked!");
    console.log(id);
  };
  const styles = {
    // For the props from index.js
    // backgroundColor: props.darkMode?"palegoldenrod":"black",

    backgroundColor: "palegoldenrod",
    border: "1px solid palegoldenrod",
  };
  return squares.map((obj) => {
    // return <div className="box" style={obj.on?styles:{}} key={obj.id}></div>;
    return (
      <InnerBox
        style={styles}
        handleClick={toggleSquare}
        key={obj.id}
        id={obj.id}
        obj={obj}
      />
    );
  });
};

export default Box;
