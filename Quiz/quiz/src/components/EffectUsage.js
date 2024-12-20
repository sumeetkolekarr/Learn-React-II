import React from "react";

const EffectUsage = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(0)
  console.log('Component Rendered')
  React.useEffect(function () {
    console.log("Effect Ran")
    // fetch("https://sw-api.starnavi.io/people/1")
    //   .then((res) => res.json())
    //   .then((data) => setStarWarsData(data));
  }, [count]);
  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={()=>setCount(prev=>prev+1)}>Add</button>
    </div>
  );
};

export default EffectUsage;
