import React from 'react'
import SinglePost from './SinglePost'
function Posts(props) {
    
  return (
    <div className='container'style={{width:'100vw',marginTop:'100px'}}>
        {props.posts.map((ele)=>{
          return <SinglePost heading = {ele.title} body={ele.body}/>
        })}
    </div>
  )
}

export default Posts
