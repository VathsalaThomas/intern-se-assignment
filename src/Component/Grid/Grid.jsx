import React from 'react'
import './Grid.css'
import Img1 from '../../img/IMG1.png'
import Img2 from '../../img/IMG2.png'
import Img3 from '../../img/IMG3.png'
const Grid = () => {
  return (
<div className='Grid'>

    <div className='Rectangle1'>
        <div className='rec1'>
          <div className='txt1'>
        <span>Automated
          <br /> Reports</span> 
          <span>Fermentum ut cras gravida et malesuada 
            <br /> curabitur netus ac. Id mauris nibh turpis sed 
            <br /> laoreet rhoncus gravida.</span>
            </div>
           
              <img className='im1' src={Img1} alt="" />

           
        </div>
        <div className='rec2'>
          <div className='txt2'>
        <span>User Journey
          <br />
        </span>
        <span>Duis amet est ante erat aliquet
          <br /> tellus sed vel in. Nibh dictum
          <br /> suspendisse purus tincidunt fringilla velit.</span>
          </div>
        <img className='im2' src={Img2} alt="" /> 
        </div>
        </div>
    <div className='Rectangle2'>
      <img className='im3' src={Img3} alt="" />
      <div className='txt3'>
        <span>Automated Reports</span> 
        <span>Fermentum ut cras gravida et malesuada curabitur netus ac. Id mauris nibh turpis sed laoreet rhoncus gravida.</span>
        </div>
        </div>
        </div> 
  )
}

export default Grid
