import React from 'react'
import '../css/ProductCard.css'

const ProductCard = ({id,title,image,price}) => {
  return (
    
    <div className='card'>
        <img src={image} alt={id} className='image'></img>
        <h3>{title}</h3>
        <p>${price}</p>
        <button className='btn'>view Details</button>
    </div>
  )
}

export default ProductCard