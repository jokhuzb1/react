import React from 'react'

export default function HeadImgCard({img, title, category}) {
  return (
    <div className='relative'>
        <img className='object-fill w-full h-full ' src={img} alt="image title" />
        <div className='card-title cursor-pointer'>
        {title? <span className='block font-thin text-xs '>{title}</span>:''}
        <span>{category}</span>
        </div>
        
    </div>
  )
}
