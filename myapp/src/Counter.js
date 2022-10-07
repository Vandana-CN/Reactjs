// import React ,{useEffect, useState} from "react";
import React,{createContext} from "react";
import MainComponent from "./MainComponent";

export const HelloContext = createContext();

const Hooks = () => {
    // const [counter, setCounter] = useState(0);
    // const [name,setName] = useState("")
    // function increaseCounter()
    // {
    //     setCounter(counter+1);
    // }
    // function decreaseCounter()
    // {
    //     setCounter(counter-1);
    // }

    // return(
    //     <div>
    //         <input type="text" onChange={e=>setName(e.target.value)}/>
    //         <h1>Counter: {counter}</h1>
    //         <h1>{name} has clicked {counter} times</h1>
    //         <button onClick={increaseCounter}>Increased</button>
    //         <button onClick={decreaseCounter}>Decreased</button>
    //     </div>
    // )


//---------------

    //useState with object
    // const [details, setDetails] = useState({counter:0,name:""});
    // function increaseCounter()
    // {
    //     setDetails((prev)=>({
    //         ...prev,
    //         counter:prev.counter+1
    //     }));
    // }

    // function decreaseCounter()
    // {
    //     setDetails((prev)=>({
    //         ...prev,
    //         counter:prev.counter-1
    //     }));
    // }

    // return(
    //     <div>
    //         {/* <input type="text" onChange={e=>setName(e.target.value)}/> */}
    //         <h1>Counter: {details.counter}</h1>
    //         {/* <h1>{name} has clicked {counter} times</h1> */}
    //         <button onClick={increaseCounter}>Increased</button>
    //         <button onClick={decreaseCounter}>Decreased</button>
    //     </div>
    // )


    //---------------------

    //use effect without dependencies
    // const [counter, setCounter] = useState(0);
    // useEffect(()=>{
    //     document.title = counter+" times clicked"
    // })

    // function increaseCounter()
    // {
    //     setCounter(counter+1);
    // }

    // function decreaseCounter()
    // {
    //     setCounter(counter-1)
    // }

    // return(
    //     <div>
    //         <h1>Counter: {counter}</h1>
    //         <button onClick={increaseCounter}>Increased</button>
    //         <button onClick={decreaseCounter}>Decreased</button>
    //     </div>
    // )


    //--------------------------------


    //useEffect with an empty array
    // const [counter, setCounter] = useState(0);
    // useEffect(()=>{
    //     document.title=counter+" times clicked"
    // },[]);

    // function increaseCounter()
    // {
    //     setCounter(counter+1);
    // }
    // function decreaseCounter()
    // {
    //     setCounter(counter-1);
    // }

    // return (
    //     <div>
    //         <h1>Counter: {counter}</h1>
    //         <button onClick={increaseCounter}>Increased</button>
    //         <button onClick={decreaseCounter}>Decreased</button>
    //     </div>
    // )

    //-------------------------

    //useEffect with variables

    // const [counter,setCounter] = useState(0);
    // const [countByTen, setCountByTen] = useState(10);
    // useEffect(()=>{
    //     document.title = countByTen+" times clicked"
    // },[countByTen])

    // function increaseCounter()
    // {
    //     setCounter(counter+1);
    // }

    // function decreaseCounter()
    // {
    //     setCounter(counter-1);
    // }

    // return (

    //     <div>
    //         <h1>Counter: {counter}</h1>
    //         <button onClick={increaseCounter}>Increased</button>
    //         <button onClick={decreaseCounter}>Decreased</button>
    //         <h1>Count by 10 :{countByTen}</h1>
    //         <button onClick={()=>setCountByTen(countByTen+10)}>count increased by 10</button>
    //     </div>
    // )

    //--------------

    //useContext

    return(
        <HelloContext.Provider value={"abc"}>
            <div>
                <MainComponent></MainComponent>
            </div>
        </HelloContext.Provider>
    )

}

export default Hooks;
