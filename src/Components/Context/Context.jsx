import React, { createContext,useContext } from 'react'
const userContext=createContext()
const Comp1=()=>{
    return(
        <>I'm from Component 1</>
    )
}
const Comp2=()=>{
    return(
        <>I'm from Component 2</>
    )
    
}
const Comp3=()=>{
    return(
    <>
        I'm from Component 3
        <Comp4/>
    </>
    )
    
}
const Comp4=()=>{
    const user = useContext(userContext)
    return(
        <>
        <h4>I'm from component 4</h4>
        <p>Lets learn {user}</p>
        </>
    )
   
}
const Context = () => {
    return (
    <div>
      <h1>Learning Context API</h1>
      
      <userContext.Provider value="Diksha">
        <Comp1/>
        <Comp2/>
        <Comp4/>
      </userContext.Provider>
    </div>
  )
}

export default Context
