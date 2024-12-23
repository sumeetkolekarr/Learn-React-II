import React, { useState } from "react";
import WindowTracker from "./components/WindowTracker";

const App = () => {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <div className="container">
        <button onClick={Toggle}>Toggle WindowTracker</button>
        {toggle && <WindowTracker />}
      </div>
    </>
  );
};

export default App;
