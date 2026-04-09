import { useEffect, useState } from "react";
import "./Counter.css"

const Counter=()=>{
    const [count,setCount]=useState(0)

    useEffect(()=>{
      console.log("Welcome")
    },[count])
    
    return(
        <>
        <h1>This is a basic Counter.</h1>
        <button onClick={()=>setCount(count+1)}>
            Add to Counter
        </button>

        <h3>Counter is :{count}</h3>
        </>
    )
}
export default Counter