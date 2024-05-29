
import { useState } from 'react';

function Counter() {

    var [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    return <>
        <p>Count: {count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </>
}

export default Counter;