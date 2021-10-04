import React,{useState,useEffect} from 'react'
import axios from 'axios'

function FetchingDataPosts() {

    const[posts,setPosts]= useState([]);
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts")
         .then((res)=>{
             setPosts(res.data);
         });
    },[])
    //Here the dependecy array should be empty because if we don't give a depedency array, the fetching will go into infinite loop.
    
    return (
        <ul>
            {posts.map( (post) => <li key={post.id}>{post.title}</li> ) }
        </ul>
    )
}

export default FetchingDataPosts
