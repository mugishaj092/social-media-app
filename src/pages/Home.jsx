import React from 'react'
import '../styles/home.css'
import ProfileSide from '../components/profileSide/ProfileSide'
import PostSide from '../components/postSide/PostSide'
import RightSide from '../components/rightSide/RightSide'

const Home=()=> {
  return (
    <div className='Home'>
        <div className="profileSide"><ProfileSide /></div>
        <div className="postSide"><PostSide /></div>
        <div className="rightSide"><RightSide /></div>
    </div>
  )
}

export default Home
