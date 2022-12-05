import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems, selectTotal } from '../slices/basketSlice'
import { CheckoutProduct } from './CheckoutProduct'

export const Checkout = () => {
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)

  return (
    <div className='checkout'>
     <img className='checkout-ad'
     src='https://m.media-amazon.com/images/I/71d+zmYM5LL._SX3000_.jpg'
     alt='ad'
     />
      <h1>Shopping Cart</h1>
     <p>{items.length === 0 ? 'Your Cart is Empty' : null}</p>
     {items.map((item) => (
       <CheckoutProduct 
       key={item.id} 
       id={item.id}
       products={item}
      />
     ))}
     <div>
     {items.length > 0 && (
      <>
      <h2>Subtotal ({items.length}) items</h2>
      <p className='total-price'>
        <small>$</small>
        <strong>{total.toFixed(2)}</strong>
      </p>
      {/* <button>Proceed to Checkout</button> */}
     </>

     )}
     </div>
    </div>
  )
}
