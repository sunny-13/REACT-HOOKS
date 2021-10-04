//This is going to explain the concept of unmounting components

import React,{useState,useEffect} from 'react'

function UseEffectTwo() {

    const [x,setX] = useState(0);
    const [y,setY] = useState(0);

    function setXandY (e){
        console.log('XandY changed');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=>{
        console.log('useffect called')
        window.addEventListener('mousemove',setXandY);

        return ()=>{
            console.log('unmounting this component')
            window.removeEventListener('mousemove',setXandY);
        }
    },[])

    //the return function here is used to unmount the eventlistener thats called when the component renders.
    

    return (
        <>
            <h3>Cordinates of the mouse : X={x} Y={y} </h3>
        </>
    );
}

export default UseEffectTwo
