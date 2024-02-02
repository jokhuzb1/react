import React, {useState} from 'react'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faRotate, faEnvelope,faTruck,faScaleUnbalanced, faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../components/Carousel';
import first from '../assets/payment/1.png'
import second from '../assets/payment/2.png'
import third from '../assets/payment/3.png'
import fourth from '../assets/payment/4.png'
import fifth from '../assets/payment/5.png'
import sixth from '../assets/payment/6.png'
import seventh from '../assets/payment/7.png'
import { addItem } from '../features/cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import Ratings from '../components/helpers/Ratings';

export default function SingleProduct({}) {
    const dispatch = useDispatch();
    const products = useSelector(state=> state.products.products)
    const {productId} = useParams();
    const currentProduct =products.filter(item=> item.id == productId );
    const {id, title, price, description, image, rating} = currentProduct[0];
    const [size, setSize] = useState('X');
    const addToCart = ()=>{
            const newProduct = {
              id, title, price, description, image
            }
            dispatch(addItem(newProduct))
          } 
  return (
    <div>
        <h2 className='text-red-500'>asds</h2>
        <div className='px-20 md:flex justify-between mt-20'>
        <div className=' w-2/4'>
            <Carousel main={image}/>
        </div>
        <div className='w-2/4 font-thin grid gap-10'>
            <span className='block'>Color
                <select className='' name="color" id="">
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="green">Green</option>
                </select>
            </span>
            <span className='block text-lightblack font-Montserrat cursor-pointer'>Size :<span className='mx-2'>{size}</span>
            <ul className='flex my-2 font-Montserrat'>
                <li onClick={()=>setSize("X")} className='size'>X</li>
                <li onClick={()=>setSize("XS")} className='size'>XS</li>
                <li onClick={()=>setSize("S")} className='size'>S</li>
                <li onClick={()=>setSize("M")} className='size'>M</li>
                <li onClick={()=>setSize("L")} className='size'>L</li>
            </ul>
            <span className='font-thin text-sm mx-2 capitalize' ><FontAwesomeIcon className='mr-2'icon={faCircleQuestion} />size guide</span>
            </span>
            
            <div className='flex justify-around items-center uppercase  border-t-2 border-b-2 py-2'>
                <h1 className='font-bold text-2xl'>{price}</h1>
                <button 
                className='px-4 py-3 bg-black text-white uppercase font-bold mx-2  shadow-lg transform active:scale-y-75 transition-transform '
                onClick={addToCart}
                >Add to cart</button>
                <div><FontAwesomeIcon className='text-2xl font-thin' icon={faHeart}/>
                <FontAwesomeIcon className='text-2xl mx-2 font-bold' icon={faScaleUnbalanced}/></div>
            </div>
            <div className='font-sans  font-thin text-lightblack text-sm flex justify-between'>
                <span ><FontAwesomeIcon className='mx-2' icon={faTruck}/>Shipping & Delivery</span>
                <span><FontAwesomeIcon className='mx-2' icon={faRotate}/>Returns & Exchanges </span>
                <span><FontAwesomeIcon className='mx-2' icon={faEnvelope}/>Ask a question</span>
            </div>
            <div>
                <span className='flex font-normal text-lightblack uppercase'>
                    <span>Guaranteed Safe Chekout</span>
                    <span className='divide-x-2'></span>
                </span>
                <div className='payment-img flex w-full overflow-hidden py-5'>
                    <img src={first} alt="" />
                    <img src={second} alt="" />
                    <img src={third} alt="" />
                    <img src={fourth} alt="" />
                    <img src={fifth} alt="" />
                    <img src={sixth} alt="" />
                    <img src={seventh} alt="" />
                </div>
            </div>
            <div className=''>
                <div className='mb-5'>
                <h2 className='border-y-2 py-5 font-normal text-lightblack uppercase'>Description</h2>
                    <p>{description}</p>
            <Ratings rating={rating}/>

                </div>
                <div>
                    <h2 className='uppercase'>Additional information</h2>
                   <div className='flex flex-col'>
                   <span>Color: black cyan green grey</span>
                    <span>Size: XS S M L</span>
                    <span>Material: 100% Polyester</span>
                   </div>
                    </div>
            </div>
            <div>reviews</div>
        </div>
    </div>
    </div>
  )
}
