import React, { useState } from "react";

const UseStArray = () => {
  let [arr, setArr] = useState(["Obj 1", "Obj 2"]);

  function addObj() {
    setArr((prev) => {
      return [...arr, `Obj ${arr.length + 1}`];
    });
  }
  return (
    <>
      <button onClick={addObj}>Add Item</button>
      {arr.map((e) => (
        <p>{e}</p>
      ))}
    </>
  );
};

export default UseStArray;
