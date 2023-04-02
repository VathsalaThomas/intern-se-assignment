import React from 'react'
import  './Navbar.css' 
const Navbar = () => {
  return (
    <div className='n-wrapper'>
         <div className="n-left" > 
             <div className='ellipse1'>
             <div className='ellipse2'></div>
             </div>
          </div> 
          <div className="n-right" > 
             <div className='n-list'>
                <ul>
                    <li>Product</li>
                    <li>Solution</li>
                    <li>Resource</li>
                    <li>Enterprise</li>
                    <li>Pricing</li>
                </ul>
              </div> 
              </div>
            <div>
            <button className='button n-button'>Sign Up</button>
            </div>  

          
               
          
                     
     </div>
  )
}

export default Navbar
