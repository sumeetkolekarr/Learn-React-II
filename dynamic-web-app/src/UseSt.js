import React from "react";

const UseSt = () => {
  //   const [result, setResult] = React.useState("Yes");
  // console.log(result);
  let [number, setNumber] = React.useState(0);
  //   function handleClick() {
  //     setResult('No')
  //   }
  function handleInc() {
    // setNumber(number+1)
    setNumber(prevCount=>prevCount+1)
}
function handleDec() {
    setNumber(prevCount=>prevCount-1)
  }
  return (
    <>
      <div>{number}</div>
      <button onClick={handleInc}>Click ++</button>
      <button onClick={handleDec}>Click --</button>
    </>
  );
};

export default UseSt;
