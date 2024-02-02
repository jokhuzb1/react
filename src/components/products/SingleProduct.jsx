import React, { useEffect, useState } from 'react'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import Ratings from '../helpers/Ratings';
export default function SingleProduct({item}) {


  const {id, title, price, category, description, image,rating} = item;
  const editText = title?.slice(0, 20)
  return (
    <div className='text-wrap bg-white  px-2 border-gray-200 rounded-lg shadow  dark:border-gray-700 h-72 overflow-hidden'>
    <Link to={`/singleProduct/${id}`}>
        <div className='img-container'>
        <img src={image} alt="" className='object-contain h-full w-full ' />
        </div>
        <div>
        <span className='capitalize text-normal block text-gray-700  text-clip my-2' >{editText}</span>
            <span className='font-bold'>$ {price}</span>
            <Ratings rating={rating}/>
        </div>
    </Link>
    </div>
  )
}
