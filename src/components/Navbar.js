import React from 'react'

import img1 from '../assets/Subtract.png'
import img3 from '../assets/DownCV.png'
const Navbar = () => {
  return (
    <>
    
    <nav id='navb'>
    
    <div id='logo'>
      <img src={img1} height='50' width='50' alt='Shivam'></img>
      <b>M</b>umair
      </div>
      <div>
        <ul id='navbar'>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">About Me</a></li>
          <li><a href="index.html">Services</a></li>
          <li><a href="index.html">Projects</a></li>
          <li><a href="index.html">Testimonials</a></li>
          <li><a href="index.html">Contact</a></li>
        </ul>
      </div>
      <div>
      <img src={img3} width='100px' id='navbutton' alt='Shivam'></img>
      
      </div>
      </nav>
    </>
  )
}

export default Navbar
