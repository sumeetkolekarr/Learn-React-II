import React from 'react'
import { RiStarFill, RiStarLine } from "react-icons/ri";

const Star = (props) => {
  return (
    <div onClick={props.handleClick}>{props.isFav ? <RiStarFill /> : <RiStarLine />}</div>
  )
}

export default Star