import React, { useEffect, useState } from 'react'
import { ProductItems } from './ProductItems'
export const Home = () => {
  const [product, setProduct] = useState([])
  useEffect(() => {
    getData()
  },[])

  const getData = () => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {setProduct(data)
    console.log(data)})
  }

  return (
    <div className='home'>
      <img className='home-image' src="https://m.media-amazon.com/images/I/71aRZ1zkBKL._SX3000_.jpg" alt="header" />
      <div className='home-row'>
        <ProductItems products={product} />
      </div>
      
    </div>
  )
}
