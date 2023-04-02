import React from 'react'
import './card.css'

const media = ({image,txt1,txt2}) => {
  return (
    <div   className='Media'>
        <img className='c-img' src={image} alt="" />
        <div className='c-text'>
        <span>{txt1}</span>
        <span>{txt2}</span>
        </div>
    </div>
  )
}

export default media
