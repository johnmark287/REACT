import React, { useState } from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)

    const incrementFive = () => {
        for (let i = 0; i < 10000000000; i){
            setCount(prevCount => prevCount + 1)
        }
    }

    return (
        <div>
            <p> Count : {count} </p>
            <button onClick={() => setCount(initialCount)} >Reset </button><br></br>
            <button onClick={() => setCount(count + 1)} >Increment</button><br></br>
            <button onClick={() => setCount(count - 1)} >Decrement</button><br></br>
            <button onClick={incrementFive} >Five</button><br></br>
        </div>
    )
}

export default HookCounterTwo