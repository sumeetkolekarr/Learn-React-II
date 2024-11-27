import React from "react";

const UseStPractice = () => {
  let [goingOut, setGoingOut] = React.useState(true);
  function revGo() {
    // setGoingOut(!goingOut); //Created By Me
    setGoingOut((prevState) => !prevState);
  }
  return <div onClick={revGo}>{goingOut ? "Yes" : "No"}</div>;
};

export default UseStPractice;
