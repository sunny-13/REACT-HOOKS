import React,{useContext} from 'react'
import {User} from '../UseContextHook/UseContext'

function ComponentC() {
    const user = useContext(User);
    //Here user variable is imported with the help of useContext hook. Watch for the importing of the User context too.
    return (
        <>
            <h3>HELLO, I am a {user}</h3>
        </>
    )
}

export default ComponentC
