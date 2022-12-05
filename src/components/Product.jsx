import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToBasket } from './slices/basketSlice';


export const Product = ({products}) => {
  const dispatch = useDispatch();

  const [rating, setRating] = useState(3)
  const [hasPrime] = useState(Math.random() < 0.5)

  const addItemToBasket = () => {
    const product = {
      products
    }
    dispatch(addToBasket(product))
  }

  // console.log(products)
  return (
    <div className='product'>
      <div className='product-info'>
      <p>{products.title}</p>
      <p className='product-price'>
        <small>$</small>
        <strong>{products.price}</strong>
      </p>
      <div className="product-rating">
        {
          Array(rating).fill().map((star) => (
            <p>⭐️</p>
          ))
        }
      </div>
      </div>
      <img src={products.image} alt="" />
      {hasPrime && (
        <div className='product-prime'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNriIYNJythkaqsWsdGluyzATvhQFsDezw&usqp=CAU' alt='' />
          <p>Free Next-day delivery</p>
        </div>
      )}
      <button onClick={addItemToBasket}>Add to Cart</button>
    </div>
  )
}
