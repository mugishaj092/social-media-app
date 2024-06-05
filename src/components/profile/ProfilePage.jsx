import React from 'react'
import ProfileLeft from './profileLeft/ProfileLeft'
import './profilePage.css'
import ProfileMiddle from './profileMiddle.jsx/ProfileMiddle'
import ProfileRight from './profileRight/ProfileRight'

function ProfilePage() {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <ProfileMiddle />
      <ProfileRight />
    </div>
  )
}

export default ProfilePage
