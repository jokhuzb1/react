import React from 'react'

export default function CardText({img}) {
  return (
        <div className='flex flex-col justify-center items-center'>
          <img src={img} alt="" />
          <div className='w-11/12 lg:w-8/12 flex flex-col items-center -m-10 bg-white p-2'>
            <h2>THE EASIEST WAY TO BREAK</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur illum quidem labore in officia, neque et commodi ratione delectus temporibus!</p>
          </div>
        </div>
  )
}
