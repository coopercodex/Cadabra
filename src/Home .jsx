import React, { useEffect, useState } from 'react'
import { Product } from './Product'
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
       {/* <Product id='1'
          title="Govee Smart Outdoor String Lights, 96ft RGBIC Patio Lights with 30 Dimmable Warm White LED Bulbs, IP65 Waterproof WiFi APP Control Outdoor String Lights Work with Alexa for Balcony, Backyard, Party"
          price={99.99}
          rating={4}
          image='https://m.media-amazon.com/images/I/61boXQYS+YL._AC_SL1500_.jpg' alt='lights'
        /> */}
      </div>
      
    </div>
  )
}
