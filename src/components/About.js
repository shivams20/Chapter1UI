import React from 'react'
 import img10 from '../assets/Man2.png';
 import img11 from '../assets/level.png';
 import img16 from '../assets/trans.png'
const About = () => {
  return (
    <>
    <nav id='navb'>
    <img src={img16} id='rect1' alt='Shivam'></img>
    <div>
    
      <img src={img10} id='navbutton1' height='450px' width='450px' alt='Shivam'></img>
    </div>
    <div>
      <h1 id='about'>About Me</h1>
      <p id='para2'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed<br/>
      massa nibh lectus netus in. Aliquet donec morbi convallis<br/>
      pretium. Turpis tempus pharetra</p>
      
    </div>
    </nav>
    <img src={img11} id='level' height='150px' width='430px' alt='Shivam'></img>
    </>
  )
}

export default About
