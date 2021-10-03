import React ,{useState} from 'react'

function UseStateArray() {

    const [arrayNum,setArrayNum] = useState([])

    function addElement(){
        const newElement=document.getElementById('newel').value;
        
        //This is probably the most important part of this code. The 'spread operator' used below:
        //The spread operator allows the setArrayNum to keep the previous data and then add the new data being entered rather than overwriting the whole data with just the new one.

        setArrayNum([...arrayNum,{
            id: arrayNum.length,
            value: newElement
        }]);

        document.getElementById('newel').value=null;
    }

    return (
        <>
            <h3>The array has {arrayNum.length} elements:</h3>
            {arrayNum.map((element) => (<p key={element.id}>{element.value}</p>))}
    
            <input id="newel" style={{'width':'100px'},{'height':'40px'}} placeholder="Add an element"></input> 
            <button className="btn" onClick={addElement}>ADD</button>
        
        </>
    )
}

export default UseStateArray

//The useState hook where the elements stored are OBJECTS are treated more or less like arrays.
//So, no need to add another file for that.
