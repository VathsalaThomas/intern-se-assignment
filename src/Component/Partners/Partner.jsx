import React from 'react'
import './Partner.css'
import Sony from '../../img/sony.png'
import Nest from '../../img/nest.png'
import Beko from '../../img/beko.png'
import JBL from '../../img/jbl.png'
import Havells from '../../img/havells.png'
import Google from '../../img/Google.jpeg'
import Wing from '../../img/pngwing 3.png'
import {motion} from 'framer-motion'
const Partner = () => {
  return (
    <div className='partner'>
       
        <div className='havells'>
      
            <img className='image1' src={Havells} alt="" />
           
            </div>
        <div className='google'>
          
                <img className='icon2' src={Google} alt="" />
           
            
        </div>
        <div className='wing'>
           
                <img className='icon3' src={Wing} alt="" />
       
        </div>
        <div className='jbl'>
           
                <img className='icon4' src={JBL} alt="" />
            
        </div>
        <div className='sony'>
            <img className='icon5' src={Sony} alt="" />
        
        </div>
        <div className='nest'>
            <div className='icon6'>
                <img src={Nest} alt="" />
            </div>
        </div>
        <div className='beko'>
            <div className='icon7'>
                <img src={Beko} alt="" />
            </div>
        </div>
      
    </div>
     
  )
}

export default Partner
