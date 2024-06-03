import React from 'react'
import LogoSearch from './LogoSearch/LogoSearch'
import ProfileCard from './profileCard/ProfileCard'

import './profileSide.css'

function ProfileSide() {
  return (
    <div className='ProfileSide'>
      <LogoSearch />
      <ProfileCard />
    </div>
  )
}

export default ProfileSide
