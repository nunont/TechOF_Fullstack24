import { useState } from "react";


export default function Sumer() {

    var [sum, setSum] = useState(0);

    const doMath = (number) => {
        setSum(sum + number)
    }

    return <>
        <p>Soma: {sum} </p>
        <button onClick={() => doMath(1)}>1</button>
        <button onClick={() => doMath(2)}>2</button>
        <button onClick={() => doMath(3)}>3</button>
        <br/>
        <button onClick={() => doMath(4)}>4</button>
        <button onClick={() => doMath(5)}>5</button>
        <button onClick={() => doMath(6)}>6</button>
        <br/>
        <button onClick={() => doMath(7)}>7</button>
        <button onClick={() => doMath(8)}>8</button>
        <button onClick={() => doMath(9)}>9</button>
    </>;
}