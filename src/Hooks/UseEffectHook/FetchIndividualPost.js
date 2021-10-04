import React, { useState,useEffect } from 'react'
import axios from 'axios'

function FetchIndividualPost() {
    const [post,setPost] = useState({})
    const [postid,setPostid] = useState(1);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postid}`)
          .then((res)=>{
            setPost(res.data);
          })
          .catch(()=>{
              setPost({id:1 , title:"Not so many posts"});
          } )
    },[postid])

    return (
        <>
            <input value={postid} onChange={(e)=> setPostid(e.target.value)}></input>
            <h3>{post.title}</h3>
        </>
    )
}

export default FetchIndividualPost
