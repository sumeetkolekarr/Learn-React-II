import React from 'react'
import p1 from '../assets/p1.webp'
import p2 from '../assets/p2.webp'
import p3 from '../assets/p3.jpeg'
import { FaStar } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Card = (props) => {
  return (
    <div className='card'>
        <img src={p1} alt="Person 1" className='cardImg'/>
        <div className="cardStats">
        <FaStar className='cardStar'/>
        <span>5.0</span>
        <span className='grey'>(6) <GoDotFill /> </span>
        <span className='grey'>USA</span>
        </div>
        <p>Professional Course</p>
        <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}

export default Card