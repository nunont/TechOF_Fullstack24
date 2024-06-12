
import { useState, useEffect } from 'react';

export default function Seconds() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
            setSeconds(seconds + 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, [seconds]);

    return <>
        <h1>Seconds: {seconds}</h1>
    </>;
}