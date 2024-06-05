import React from 'react'
import './post.css'
import postData from '../../../data/postData'
import Post from './post/Post'

function Posts() {
  return (
    <div className='Post'>
      {postData.map((post,id)=>{
        return <Post data={post} id={id} key={id} />
      })}
    </div>
  )
}

export default Posts
