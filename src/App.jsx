import React, { useEffect, useState } from "react"
import './App.css'
// import Card from "./Components/Card Components/Card"
 import Counter from "./Components/Counter/Counter"
// import Basic from "./Components/BasicProject/Basic"
import Product from "./Components/BasicProject/Product"
import Focus from "./Components/Focus/Focus"
import Context from "./Components/Context/Context"
function App() {
    
  return (
    // <div className="studentCardContainer">
    // <Card name="Danny" batch="third" marks="90"/>
    // <Card name="Rama" batch="second" marks="90"/>
    // <Card name="Alia" batch="first" marks="90"/>
    
    // </div>
    <>
    {/* <Counter /> */}
    {/* <Basic count={count} onAdd={onAdd}/> */}

    {/* //For Product
    <Product/> */}

    {/* //For Focus */}
    <Focus/>
    <Context/>
    </>
  )
}

export default App


