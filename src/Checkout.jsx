import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from './slices/basketSlice'
import { CheckoutProduct } from './app/CheckoutProduct'

export const Checkout = () => {
  const items = useSelector(selectItems)
  // console.log(items[0].image)
  return (
    <div className='checkout'>
     <img className='checkout-ad'
     src='https://m.media-amazon.com/images/I/71d+zmYM5LL._SX3000_.jpg'
     alt='ad'
     />
      <h1>Shopping Cart:</h1>
     <p>{items.length === 0 ? 'Your Cart is Empty' : null}</p>
     {items.map((item) => (
       <CheckoutProduct 
       key={item.id} 
       id={item.id}
       products={item}
      />
     ))}
    </div>
  )
}
