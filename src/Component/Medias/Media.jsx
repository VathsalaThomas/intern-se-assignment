import React from 'react'
import   './Media.css'
import Google from '../../img/G.png'
import Webflow from '../../img/webflow.png'
import Slack from '../../img/Slack.png'
import Twitter from '../../img/twitter.png'
import Card from '../Card/card'

const Media = () => {
  return (
    <div className='media'>
        <div  className='gle'>
          <img src={Google} alt="" />
          <span>Google
            <br />
          </span>
          <span>Dictum pharetra arcu vel mi gravida etiam ut tortor nam. Volutpat mauris euismod a massa.</span>
        </div>
        <div className='frame1'>
          <Card image={Webflow} txt1='Webflow' txt2='In in ut urna placerat. Pellentesque mauris euismod a'/>
          <Card image={Slack} txt1='Slack' txt2='Dictum pharetra arcu vel mi gravida etiam ut tortor nam. '/>
          <Card image={Twitter} txt1='Twitter' txt2='Dictum pharetra arcu vel mi gravida etiam ut tortor nam. '/>
         { /*<div className='webflow'>
            <img src={Webflow} alt="" />
            <span>Webflow</span>
            <span>In in ut urna placerat. Pellentesque mauris euismod a </span>
          </div>
          <div className='twitter'>
            <img src={Twitter} alt="" />
            <span>Twitter</span>
            <span>Dictum pharetra arcu vel mi gravida etiam ut tortor nam.  </span>
  </div>*/}

        </div>
       {/* <div className='frame2'>
        <div className='webflow'>
            <img src={Webflow} alt="" />
            <span>Webflow</span>
            <span>In in ut urna placerat. Pellentesque mauris euismod a </span>
          </div>
          <div className='twitter'>
            <img src={Twitter} alt="" />
            <span>Twitter</span>
            <span>Dictum pharetra arcu vel mi gravida etiam ut tortor nam.  </span>
          </div>
        </div>
*/}
    </div>
  )
}

export default Media
