import React from 'react'
import { Product } from './Product'

export const ProductItems = ({products}) => {
  return (
    <div className='product-container'>
      {products.map((product) => (
        <Product products={product} key={product.id} id={product.id} />
        ))}
    </div>
  )
}
