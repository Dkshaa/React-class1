import React from 'react'
import './Product.css'
const ProductCard = ({name,price,color,addToCart,increase}) => {
  return (
    <>
       
            <div className='item'>
            <h2>{name}</h2>
            <p>${price}</p>
            <p>{color}</p>
            <button onClick={addToCart}>Add To cart</button>
            <h3 style={{color:'black'}}>Clicked {increase} times</h3>
            </div>
        
        
     
      
    </>
  )
}

export default ProductCard
