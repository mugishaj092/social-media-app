import React from 'react'
import './navIcon.css'
import Home from '../../../img/home.png'
import noti from '../../../img/noti.png'
import comment from '../../../img/comment.png'
import {UilSetting} from '@iconscout/react-unicons' 

function NavIcons() {
  return (
    <div className='navIcons'>
      <img src={Home} alt="" />
      <UilSetting />
      <img src={noti} alt="" />
      <img src={comment} alt="" />
    </div>
  )
}

export default NavIcons
