import React,{useState} from 'react'
import {  useDispatch } from 'react-redux'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import { NavLink} from 'react-router-dom';
import NavItem from './helpers/NavItem';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPinterest } from '@fortawesome/free-brands-svg-icons';
import { createPortal } from 'react-dom';

export default function Navbar() {
  const dispatch = useDispatch();
  const [toggleBurger, setToggleBurger] = useState(false)
  return (
    <div className='fixed top-0 left-0 right-0 z-20 '>
     <div className='bg-black text-white font-extralight text-xs flex justify-between px-12 py-1'>
            <div >
                <span ><FontAwesomeIcon className='icon' icon={faPhone}/> +123456789</span>
                <span className='hidden md:inline-block'><FontAwesomeIcon className='icon ' icon={faLocationDot}/>Ukraine, Kyiv, Khreshchatyk 1</span>
                <span className='hidden lg:inline-block'><FontAwesomeIcon className='icon' icon={faClock}/>All week 24/7</span>
            </div>
            <div>
                <FontAwesomeIcon className='icon'  icon={faFacebook}/>
                <FontAwesomeIcon className='icon' icon={faTwitter}/>
                <FontAwesomeIcon className='icon' icon={faInstagram}/>
                <FontAwesomeIcon className='icon' icon={faPinterest}/>
            </div>
        </div>
    <nav className='grid grid-cols-3 sm:grid-cols-3  py-3 bg-white font-Leauge  text-md border-b-2 '>
      <div  >
     
        <span className='col-1 flex justify-center text-4xl font-bold'
        ><NavLink to='/'>MiSto</NavLink></span>
        </div>
        
      <ul className='hidden sm:flex justify-around  items-center gap-5 col-2 text-lg font-light'>
        <li ><NavItem to='about' name='About' /></li>
        <li ><NavItem to='women' name='Women' /></li>
        <li ><NavItem to='men' name='Men' /></li>
        <li ><NavItem to='electronic' name='Electronic' /></li>
        <li ><NavItem to='jewelery' name='Jewelery' /></li>
        <li ><NavItem to='contact' name='Contact' /></li>
       
      </ul>
      <ul className='flex col-1 justify-center '>
        <li><FontAwesomeIcon className='mr-2' icon={faMagnifyingGlass}/></li>
        <li><FontAwesomeIcon className='mr-2' icon={faGlobe}/></li>
       <Cart/>
      </ul>
      <span onClick={()=>setToggleBurger(!toggleBurger)} className='flex col-1 justify-center' >
      <FontAwesomeIcon className='sm:hidden cursor-pointer'icon={faBurger}/>
      </span>
     
    </nav>

    {toggleBurger && createPortal(
        <ul className={` mobile sm:hidden fixed top-0 left-0 right-0 bottom-0 z-20  bg-white flex flex-col bg-opacity-90`}>
        <li onClick={()=>setToggleBurger(!toggleBurger)} className='float-left cursor-pointer'>X</li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='/' name='Home' /></li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='about' name='About' /></li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='women' name='Women' /></li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='men' name='Men' /></li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='electronic' name='Electronic' /></li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='jewelery' name='Jewelery' /></li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='contact' name='Contact' /></li>
        <li onClick={()=>setToggleBurger(!toggleBurger)} ><NavItem to='cart' name='Cart' /></li>
      </ul>
     ,
        document.body
      )}
    </div>
  )
}
