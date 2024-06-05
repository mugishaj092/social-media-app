import React from 'react'
import ProfileCard from '../../profileSide/profileCard/ProfileCard'
import PostSide from '../../postSide/PostSide'

function ProfileMiddle() {
  return (
    <div className='profileLeft'>
      <ProfileCard />
      <PostSide />
    </div>
  )
}

export default ProfileMiddle
