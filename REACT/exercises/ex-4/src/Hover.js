import { useState } from "react"


export default function HoverC(){
    const [isHover, setIsHover] = useState('');

    function mouseover(){
        setIsHover('Mouse HOver Button')
    }

    function mouseLeave(){
        setIsHover('')
    }

    return <>
        <p>{isHover}</p>
        <button onMouseEnter={mouseover} onMouseLeave={mouseLeave}>Button</button>
    </>

}