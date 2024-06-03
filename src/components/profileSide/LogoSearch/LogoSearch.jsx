import React from 'react'
import './logoSearch.css'
import Logo from '../../../img/logo.png'
import {UilSearch } from '@iconscout/react-unicons'
function LogoSearch() {
  return (
    <div className='LogoSearch'>
      <img src={Logo} alt="Logo" />
      <div className="Search">
        <input type="text" placeholder='#Explore'/>
        <div className="S-icon">
          <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
