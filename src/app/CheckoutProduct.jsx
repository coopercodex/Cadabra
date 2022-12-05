import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

export const CheckoutProduct = ({ products }) => {
  const [rating, setRating] = useState(3)
  const dispatch = useDispatch()

  const addItemToBasket = () => {
    const product = {
      products
    }
    dispatch(addToBasket(products))
  }

  const removeItemFromBasket = () => {
    dispatch(removeFromBasket(products.products.id))
  }  
  
  return (
    <div className='product'>
      <img src={products.products.image} alt='' />
       <div className='checkout-info'>
        <p>{products.products.title}</p>
        <div className="product-rating">
        {
          Array(rating).fill().map((star) => (
            <p>⭐️</p>
          ))
        }
      </div>
      <div>
        <p>{products.products.description}</p>
      </div>
      <p className='product-price'>
        <small>$</small>
        <strong>{products.products.price}</strong>
      </p>
       </div>
       <button onClick={addItemToBasket}>Add to Cart</button>
       <button onClick={removeItemFromBasket}>Remove from Cart</button>
    </div>
  )
}
