import React, { useState } from 'react';

// If any of the undocumented code seems unclear, vist UseStateSimple.js

// Overall, it does same thing EXCEPT uses objects
function UseStateObject() {
    const [state, setState] = useState({ theme: 'blue', count: 4}) 
    const count = state.count
    const theme = state.theme
 
    function decrementCount() {
        setState(prevState => {
            return { ...prevState, count: prevState.count - 1} // ...prevState passes all of the previous parameters so that they aren't overidden and only the counts shows (basically makes sure the entire thing is shown)
        })
    }

    function incrementCount() {
        setState(prevState => {
            return { ...prevState, count: prevState.count + 1}
        })
    }
    // The reason the don't automatically merge is that, in general you want to define multiple hooks, as shown below:
    // const [count, setCount] = useState(4)
    // const [theme, setTheme] = useState('blue') 
    // And then the code underneath decrementCount and incrementCount remain the same as they were in UseStateSimple
    return (
        <>
            <button onClick={decrementCount}>-</button> 
            <span>{count} {theme}</span>
            <button onClick={incrementCount}>+</button>
        </>
    )
}

export default UseStateObject;