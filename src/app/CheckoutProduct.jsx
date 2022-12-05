import React from 'react'
import { useState } from 'react'

export const CheckoutProduct = ({ products }) => {
  // const [rating, setRating] = useState(3)
  // const [hasPrime] = useState(Math.random() < 0.5)
  // console.log(products.products.image)
  return (
    <div className='product'>
      <img src={products.products.image} alt='' />
    </div>
  )
}
