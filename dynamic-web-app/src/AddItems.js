import React, { useState } from "react";

const AddItems = () => {
  let [thingsArray, setThingsArray] = useState(["Thing 1", "Thing 2"]);
  const btnPress = () => {
    setThingsArray((prev) => {
      return [...prev, `Thing ${thingsArray.length + 1}`];
    });
    console.log(thingsArray);
  };
  return (
    <>
      <div>
        <button onClick={btnPress}>Add Item</button>
      </div>
      {thingsArray.map((obj, idx) => {
        return <p key={idx}>{obj}</p>;
      })}
    </>
  );
};

export default AddItems;
