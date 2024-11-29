import React from "react";

const InnerBox = (props) => {
//   const [on, setOn] = React.useState(props.obj.on);
//   const toggleSquare = () => {
//     setOn((prev) => !prev);
//   };

// console.log(props.id)
// Alternate to derived States i.e. using above method
  return <div className="box" onClick={()=>props.handleClick(props.id)} style={props.obj.on ? props.style : {}}></div>;
};

export default InnerBox;
