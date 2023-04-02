import React from 'react'
import './Trans.css'
import E1 from '../../img/Ellipse 1.png'
import E2 from '../../img/Ellipse 2.png'
import E3 from '../../img/Ellipse 3.png'
import E4 from '../../img/Ellipse 4.png'
const Trans = () => {
  return (
    <div className='Trans'>
        <div className='text'>
          <div className='t1'> <span>Transform with</span></div>
       
        <div className='t2'>
       <span> SaaS solution</span>
       <img src={E1} alt="" />
       <img src={E2} alt="" />
       <img src={E3} alt="" />
       <img src={E4} alt="" />
       </div>
       <span>Vitae dictum mollis vel aliquam tortor aliquam sed nunc. Congue eros velit augue nisl. Vitae convallis blandit vulputate enim sollicitudin tristique velit orci.</span>
       <button className='button checkout'>Check Out Tools</button>
       </div>
    </div>
  )
}

export default Trans
