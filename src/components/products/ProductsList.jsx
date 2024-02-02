import React, { useEffect, useState } from 'react'
import SingleProduct from './SingleProduct'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'


export default function ProductsList({products, category, listView}) {
  const dispatch = useDispatch()
  return (
    <div className='mt-20 font-light uppercase'>
      <div className='flex justify-between mx-20'>
      <h2>{category}</h2>
      <div>
      
      </div>
      <div>
        <ul className=' hidden sm:flex justify-around '>
          <li className='mr-2'>new arrivals</li>
          <li className='mr-2'>Special</li>
          <li className='mr-2'>most viewed</li>
          <li className='mr-2'>featured products</li>
        </ul>
      </div>
      </div>
    <div className={listView ? "listView ":"cardStyle"}>
      {products.map(item=>(
        <div key={item.id} className='list'>
        <SingleProduct item={item} />
       <div className={listView ?"":'hidden'}>
       <button onClick={()=>dispatch(addItem(item))} className='card-btn'>ADD TO CART</button>
        <button className='card-btn'>View</button>
       </div>
        </div>
      ))}
    </div>
    </div>
  )
}
