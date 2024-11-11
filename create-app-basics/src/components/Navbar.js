import React from 'react'
import logo from '../images/lg.jpg'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} width='50px' alt='Logo' className='nav_icon'/>
      <h3 className='nav_lg_txt'>ReactFacts</h3>
      <h4 className='nav_title'>React Course - Project 1</h4>
    </nav>
  )
}

export default Navbar