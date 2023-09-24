import React from 'react'
import img2 from '../assets/Btn1.svg'
import img4 from '../assets/Man.png'
import img6 from '../assets/Facebook - Negative (1).svg'
import img7 from '../assets/../assets/Twitter - Negative (1).png'
import img8 from '../assets/insta.png'
import img9 from '../assets/linkedin.png'
import img16 from '../assets/trans.png'
const Info = () => {
  return (
    <>
    <nav id='navb'>
      <div>
    <div id='information'>
      <b>Hi I am</b> <br/>
     <p style={{color:"orange"}}><b>Muhammad Umair</b></p>
     
    </div>
     
     <b id='inform1'>UI & UX</b><br/><b id='informm1'>Designer</b>
    <p id='para1'>Lorem ipsum dolor sit amet consectetur. Tristique amet sed<br/>
      massa nibh lectus netus in. Aliquet donec morbi convallis<br/>
      pretium. Turpis tempus pharetra
    </p>
    <img src={img2} width='100px' alt='Shivam' id='buttonn' ></img> 
    </div>
    <div>
      <img src={img4} height='55%' width='55%' alt='Shivam' id='navbutton'></img>
      <img src={img16} id='rect' alt='Shivam'></img>
    </div>
    </nav>
    <img src={img6} id='fab' alt='Shivam'></img>
    {' '} &nbsp;  
    <img src={img7} alt='Shivam'></img>
    {' '} &nbsp;
    <img src={img8} alt='Shivam'></img>
    {' '} &nbsp;
    <img src={img9} alt='Shivam'></img>
    
    </>
  )
}

export default Info