import React from 'react'
import NavIcons from './navIcon/NavIcons'
import './rightSide.css'
import Trend from './trendCard/Trend'

function RightSide() {
  return (
    <div className='rightSide'>
      <NavIcons />
      <Trend />
      <button className='button r-btn'>Share</button>
    </div>
  )
}

export default RightSide
