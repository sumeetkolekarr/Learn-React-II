import React from "react";
import "./style.css";
import Header from "./Header";
import Meme from "./Meme";
// import AddItems from "./AddItems";
// import UseStArray from "./UseStArray";
// import RealUseCase from "./RealUseCase";
// import UseStPractice from "./UseStPractice";
// import UseSt from "./UseSt";

const App = () => {
  return (
    <>
      <Header />
      <Meme />
      {/* <UseSt/> */}
      {/* <UseStPractice/> */}
      {/* <AddItems /> */}
      {/* <UseStArray /> */}
      {/* <RealUseCase /> */}
    </>
  );
};

export default App;

// Props are Like the name parameter which should not be changed in the function and state in React is just like timeofday variable which changes according to the conditions
// function greet(name) {
//   const date = new Date();
//   const hour = date.getHours();
//   let timeofDay;
//   if (hour >= 4 && hour < 12) {
//     timeofDay = "Morning";
//   } else if (hour >= 12 && hour < 17) {
//     timeofDay = "Afternoon";
//   } else if (hour >= 17 && hour < 20) {
//     timeofDay = "Evening";
//   } else {
//     timeofDay = "Night";
//   }
//   return `Good ${timeofDay}, ${name}!`;
// }
// console.log(greet("Sumeet"));


