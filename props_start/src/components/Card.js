import React from "react";
// import p1 from '../assets/p1.webp'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

// Data Fetching through Props
// const Card = (props) => {
//   return (
//     <div className='card'>
//         <img src={props.img} alt="Person 1" className='cardImg'/>
//         <div className="cardStats">
//         <FaStar className='cardStar'/>
//         <span>5.0</span>
//         <span className='grey'>(6) <GoDotFill /> </span>
//         <span className='grey'>USA</span>
//         </div>
//         <p>{props.name}</p>
//         {/* <p><span className='bold'>From $136</span> / person</p> */}
//         <p><span className='bold'>{props.email}</span></p>
//         <p><span className='bold'>{props.phno}</span></p>
//     </div>
//   )
// }

//Data Fetching through Destructuring
const Card = (props) => {
  let badgeText;
  if (props.isAvailable === 0) {
    badgeText = "Sold Out";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }
  return (
    <div className="card">
      {badgeText !== undefined && <p>{badgeText}</p>}
      <img src={props.img} alt="Person 1" className="cardImg" />
      <div className="cardStats">
        <FaStar className="cardStar" />
        <span>5.0</span>
        <span className="grey">
          (6) <GoDotFill />{" "}
        </span>
        <span className="grey">USA</span>
      </div>
      <p>{props.name}</p>
      {/* <p><span className='bold'>From $136</span> / person</p> */}
      <p>
        <span className="bold">{props.email}</span>
      </p>
      <p>
        <span className="bold">{props.phno}</span>
      </p>
    </div>
  );
};

export default Card;
