import { useState, useEffect, useContext } from 'react';
import UserContext from '../contexts/UserContext';

export default function CounterTitle() {

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        document.title = `Counter: ${counter}`;
    }, [counter]);

    const user = useContext(UserContext);

    return <>
        <h1>Counter: {counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
        <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        <br></br>
        <p>User: {user.name} ({user.email})</p>
        <p>Age: {user.age}</p>

    </>;
}