import React from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Ratings({rating}) {
  const stars = [faStar,faStar,faStar,faStar,faStar ]

  return (
    <>
    <span>
            {stars.map((star, index)=>(
              <FontAwesomeIcon key={index} className={index < rating?.rate ?'text-yellow-500':'text-gray-500'} icon={faStar} />
            ))}
           </span> <span className='text-s capitalize '>({rating?.count}) rated</span>
           </>
  )
}
