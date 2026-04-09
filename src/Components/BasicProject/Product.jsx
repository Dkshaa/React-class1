import React, { useState } from 'react'
import data from './PrductList'
import ProductCard from './ProductCard'
import './Product.css'
const Product = () => {
    const[increase,setIncrease] = useState(0)
    const addToCart=()=>{
        setIncrease(increase +1)
    }
  return (
    <div className='container'>
      {data.map((item)=>(
        
        <ProductCard
        key={item.id}
        name={item.name}
        price={item.price}
        color={item.color}
        addToCart={addToCart}
        increase={increase}/>
        
      ))}
    </div>
  )
}

export default Product
