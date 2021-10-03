import React,{useState} from 'react'

function UseStateBasic() {

    
    //Syntax of UseState Hook:
    // const[variable, variableSettingFunction] = useState(initialValueofVariable);
    
    //Here 'number' is a variable, 'setNumber' is a function which is used for changing the variable 'number' and the '0' passed in the useState is the initial value of the varaiable 'number'
    const [number, setNumber] = useState(0);

    function increaseNumber(){
        setNumber( number =>  number+1 );
    }

    function decreaseNumber(){
        setNumber( number =>  number-1 );
    }

    return (
        <>
        <h3>The number is : "{number}"</h3>
        {/* First button increases the number by 1 */}
        <button className="btn" onClick={increaseNumber}>Increase the Number</button>
        {/* Second button decreases the number by 1 */}
        <button className="btn" onClick={decreaseNumber}>Decrease the Number</button>
        {/* Third button resets the variable to the initial value (inline function writing here) */}
        <button className="btn" onClick={()=> setNumber(0)}>Reset the Number</button>
        </>
    )
}

export default UseStateBasic
