import React, { useState } from 'react'
import NavIcons from './navIcon/NavIcons'
import './rightSide.css'
import Trend from './trendCard/Trend'
import ShareModal from '../profileSide/shareModal/ShareModal';


function RightSide() {
  const [modalOpened,setModalOpened]=useState(false);
  return (
    <div className='rightSide'>
      <NavIcons />
      <Trend />
      <button className='button r-btn' onClick={()=>{
          setModalOpened(true)
        }}>Share</button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide
