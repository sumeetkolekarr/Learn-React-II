import React from "react";
import Count from "./Count";

const UseSt = () => {
  //   const [result, setResult] = React.useState("Yes");
  // console.log(result);
  let [number, setNumber] = React.useState(0);
  //   function handleClick() {
  //     setResult('No')
  //   }
  function handleInc() {
    // setNumber(number+1)
    setNumber((prevCount) => prevCount + 1);
  }
  function handleDec() {
    setNumber((prevCount) => prevCount - 1);
  }
  console.log("App Component Rendered");
  return (
    <>
      <Count num={number} />
      <button onClick={handleInc}>Click ++</button>
      <button onClick={handleDec}>Click --</button>
    </>
  );
};

export default UseSt;
