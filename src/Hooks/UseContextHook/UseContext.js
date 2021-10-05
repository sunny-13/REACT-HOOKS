import React from 'react'
import ComponentB from './ComponentB';
export const User = React.createContext();

function UseContext() {
    return (
        <>
            <User.Provider value={"student"} >
                <ComponentB />
            </User.Provider>
        </>
    )
}

//This shows how to create a context and provide it through the  children without have to pass them as a prop.

export default UseContext
