import React from 'react'
import SinglePost from './SinglePost'
import axios from 'axios'
function Posts(props) {
    const postDeleteHandeler = (id) =>{
      axios.delete('https://jsonplaceholder.typicode.com/posts/' + id)
      .then((responce)=>{
        console.log(responce)
      })
      .catch((error)=>{
        alert('there is an problem while deleting the posts')
      })
    }
  if(props.posts != null){
    return (
      <div className='container'style={{width:'100vw',marginTop:'100px'}}>
          {props.posts.map((ele)=>{
            return <SinglePost heading = {ele.title} body={ele.body} delete={()=>{postDeleteHandeler(ele.id)}}/>
          })}
      </div>
    )
  }else{
    return <></>
  }
}

export default Posts
