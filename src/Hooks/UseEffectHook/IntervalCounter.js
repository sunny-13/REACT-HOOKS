import React,{useState,useEffect} from 'react'

function IntervalCounter() {

    const [count,setCount] = useState(0);
    
    useEffect(()=>{
        const interval= setInterval(()=>{
            setCount(count)
        },1000);

        return ()=>{
            clearInterval(interval);
        }
    },[count])

    //using useEffect to increase count variable every second with a dependency array containing count variable
    //if we want to use here an empty dependency array, we will have to use setCount(prevCount=> prevCount+1 );
    return (
        <>
           <h3>{count}</h3> 
        </>
    )
}

export default IntervalCounter
