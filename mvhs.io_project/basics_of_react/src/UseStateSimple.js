import React, { useState } from 'react';

// useState is a hook. Hooks can only be used within function components (not class components) and must always execute in the same order. In other words, you can't use them within conditionals or anything like that because then they may or may nor run.
function UseStateSimple() {
    const [count, setCount] = useState(4) // useState(n) returns [current_state, thing_that_allows_you_to_update_state] where current_state = n

    // Another way to initialize useState is below. This way is a function and is used when you have a more complex function and want useState to only run the first time that the component renders.
    // const [count, setCount] = useState(() => {
    // return 4
    // })

    function decrementCount() {
        setCount(prevCount => prevCount - 1) // decrease count by one when this function is called
        // setCount(count - 1) <-- this is an incorrect solution as it decreases the original, set count, meaning that you can't call 2 of these in a row as (instead of descreasing the total count by 2) they would only decrease the count by 1
    }

    function incrementCount() {
        setCount(prevCount => prevCount + 1) // decrease count by one when this function is called
    }

    return(
        <>
        <button onClick={decrementCount}>-</button> {/* you need to create + call the function decrementCount rather than just running setCount(count - 1) as that would run infinetely long (while the function would execute once) */}
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
        </>
    )
}

export default UseStateSimple;