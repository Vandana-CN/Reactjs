import React,{useContext} from "react";
import {HelloContext} from './Counter';



const HelloComponent = () => {
    const hello = useContext(HelloContext)
    console.log(hello)
    return (
        <h1>
            Hello from Hello component which is a child of MainComponent
        </h1>
    )
}

export default HelloComponent