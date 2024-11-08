import React from 'react'
import PostShare from './postShare/PostShare'
import Posts from './posts/Posts'
import './postSide.css'

function PostSide() {
  return (
    <div className='PostSide'>
      <PostShare />
      <Posts />
    </div>
  )
}

export default PostSide
