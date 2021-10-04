//Going to show the unmount behaviour

import React,{useEffect,useState} from 'react'
import UseEffectTwo from './UseEffectTwo'

function UseEffectUnmount() {

    const [display,setDisplay] = useState(true);

    return (
        <>
            <button class="btn" onClick={()=> setDisplay(!display)}>Toggle Display of X and Y </button>
            {display && <UseEffectTwo />}
        </>
    )
}

export default UseEffectUnmount
