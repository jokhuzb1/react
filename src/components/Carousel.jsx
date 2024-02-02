import React, { useState } from 'react'
// import main from '../assets/img/main.jpg'
import bag from '../assets/img/bag.jpg'
import men from '../assets/img/men.jpg'
export default function Carousel({main}) {
    const [big, setMain] = useState('main')
    const images = {
        'main':main, 
        'bag':bag, 
        'men':men
    }
  return (
    <div className='flex py-5 px-10  '>
        <div className='w-1/4  h-1/4 overflow-y-scroll max-h-full ' >
        <img className='carousel-img' onClick={()=>setMain('main')} src={main} alt="" />
        <img className='carousel-img' onClick={()=>setMain('bag')} src={bag} alt="" />
        <img className='carousel-img' onClick={()=>setMain('men')} src={men} alt="" />
        </div>
        <div className='w-3/4 md:min-h-96 md:max-h-96'>
        <img src={images[big]} className='object-contain w-full h-full' alt="" />
        </div>
    </div>  
  )
}
