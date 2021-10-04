import React, {useState,useEffect} from 'react'

function UseEfFectOne() {

    const [count,setCount] = useState(0);
    const [name,setName] =useState('');
    useEffect(()=>{
        document.title = `Clicked${count}times`
        console.log('use-effect executed')
    },[count]);

    //The thing to know here is that useEffect is naturally executed everytime the state of a variable changes in the component. BUt this can be modified by passing a "DEPENDENCY ARRAY" as the callback in the useEffect hook.
    //There are three possibilities:
    //1> There is no dependency array. This means useEffect will behave naturally as defined above.
    //2> There is an empty dependency array. This means that sueEffect will be executed only once when the component is first rendered.
    //3> There is/are state variable(s) in the dependency array. This means the useEffect will be executed everytime when those state variables change.
    

            //  FEEL FREE TO UPDATE/REMOVE THE DEPENDENCY ARRAY ABOVE AND SEE THE CONSOLE.

    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
            <h3>Count is "{count}"</h3>  
            <button className="btn" onClick={()=> setCount(prevcount=> prevcount+1) }>Increase By One</button>
            <button className="btn" onClick={()=> setCount(prevcount=> prevcount-1) }>Decrease By One</button>
        </>
    )
}

export default UseEfFectOne
