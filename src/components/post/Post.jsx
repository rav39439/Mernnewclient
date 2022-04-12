import React from 'react'

export default function Post({ post }){




  return (
    <div className="post">
    <div className="postWrapper">

 <span className="postUsername">
              {post.likes}
            </span>
            <span className="postDate">{post.postimage}</span>
            <span className="postDate">{post.createdAt}</span>
          
          <span className="postText">{post.content}</span>
          </div>
    </div>
  )
}

