import React from 'react'
import { faFacebook, faTwitter, faInstagram, faPinterest  } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export default function Footer() {
  return (
   <div className='my-10'>
     <div className='sm:flex bg-black text-white justify-between items-center py-4 px-10'>
      <h1 className='text-s hidden sm:inline-block'>BE IN TOUCH WITH US:</h1>
      <div className='flex justify-center'>
        <input type="text" className='bg-lightblack' />
        <button className=' border-2 px-3 mx-2'>JOIN US</button>
        </div>
      <div className='icons hidden sm:inline-block '>
        <FontAwesomeIcon className='icon' icon={faFacebook}/>
        <FontAwesomeIcon className='icon' icon={faTwitter}/>
        <FontAwesomeIcon className='icon' icon={faInstagram}/>
        <FontAwesomeIcon className='icon'icon={faPinterest}/>
      </div>
    </div>
    <div className=' grid grid-cols-2 sm:flex sm:flex-row justify-around footer'>
      <ul>
      <h1>Category</h1>
        <li>Men</li>
        <li>Women</li>
        <li>Accessories</li>
        <li>Beauty</li>
      </ul>
      <ul>
        <h1>information</h1>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Blog</li>
        <li>FAQs</li>
      </ul>
      <ul>
        <h1>useful links</h1>
        <li>Term & Condition</li>
        <li>Return & Exchanges</li>
        <li>Shipping & Deliveries</li>
        <li>Privacy Policy</li>
      </ul>
      <ul>
        <h1>contact us</h1>
        <li>Ukraine, Kyiv Khershchatyk 1</li>
        <li>+123456789</li>
        <li>All week 24/7</li>
        <li>example@mail.com</li>
      </ul>
    </div>
   </div>
  )
}
