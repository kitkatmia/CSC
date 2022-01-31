import { useState } from "react";

const Warmup = () => { // Warmup is capital because it's a component
    const [count, setCount] = useState(0);
    const addOne = (count) => {
        setCount(count => count + 1)
        // localStorage.getItem('count', count)
    }

    const subtractOne = (count) => {
        setCount(count => count - 1)
        // localStorage.getItem('count', count)
    }

    return (
        <div>
            <button onClick={addOne}>+</button>
            <h1>{count}</h1>
            <button onClick={subtractOne}>-</button>
            
        </div>
    )
}

export default Warmup;