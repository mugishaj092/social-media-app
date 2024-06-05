import React from 'react'
import LogoSearch from '../../profileSide/LogoSearch/LogoSearch'
import FollowersCard from '../../profileSide/followersCard/FollowersCard'
import InfoCard from '../../profileSide/infoCard/InfoCard'
import './profileLeft.css'

function ProfileLeft() {
  return (
    <div className='profileLeft'>
      <LogoSearch />
      <InfoCard />
      <FollowersCard />
    </div>
  )
}

export default ProfileLeft
