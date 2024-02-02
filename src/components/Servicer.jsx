import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function Servicer({icon, title, description}) {
  return (
    <div className='flex justify-start font-thin items-center '>
        <FontAwesomeIcon className='text-lg mx-2' icon={icon}/>
        <span>
            <h4 className='uppercase'>{title}</h4>
            <span>{description}</span>
        </span>
    </div>
  )
}
