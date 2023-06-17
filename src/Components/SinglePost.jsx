import React from 'react'

function SinglePost(props) {
  return (
    <div className='container my-3 mx-auto p-3' style={{width:'50%'}}>
      <h3>{props.heading}</h3>
      <p>{props.body}</p>
      <button type='button' className='btn btn-secondary' onClick={props.delete}>Delete</button>
    </div>
  )
}

export default SinglePost
