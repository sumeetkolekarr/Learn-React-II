import React from "react";

const EffectUsage = () => {
  const [starWarsData, setStarWarsData] = React.useState({});
  const [count, setCount] = React.useState(1)
  console.log('Component Rendered')
  React.useEffect(function () {
    console.log("Effect Ran")
    fetch(`https://sw-api.starnavi.io/people/${count}`)
      .then((res) => res.json())
      .then((data) => setStarWarsData(data));
  }, [count]);
  return (
    <div>
      <h2>The count is {count}</h2>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <button onClick={()=>setCount(prev=>prev+1)}>Get Next Character</button>
    </div>
  );
};

export default EffectUsage;
