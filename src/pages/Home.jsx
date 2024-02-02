import React, { useEffect, useState } from 'react'
import HeadImgCard from '../components/HeadImgCard'
import bag from '../assets/img/bag.jpg';
import main from '../assets/img/main.jpg';
import men from '../assets/img/men.jpg';
import women from '../assets/img/women.jpg';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import { faRecycle } from '@fortawesome/free-solid-svg-icons';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import Servicer from '../components/Servicer';
import ProductsList from '../components/products/ProductsList';
import { selectAllProducts, getProductsError, getProductsStatus, fetchProducts  } from '../features/api/productsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { faList } from '@fortawesome/free-solid-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../components/helpers/Loading';
import img from '../assets/img/img.png'
import img1 from '../assets/img/img_1.png'
import img2 from '../assets/img/img_2.png'
import CardText from '../components/CardText';
export default function Home() {
  const products = useSelector(selectAllProducts);
  const productStatus = useSelector(getProductsStatus);
  const productError = useSelector(getProductsError)
  const dispatch = useDispatch();
  const [listView, setListView] = useState(false)

  useEffect(()=>{
    if(productStatus ==='idle'){
      dispatch(fetchProducts())
    }
  },[dispatch, productStatus]);

  return (
    <div className='lg:m-40'>
      
        <div className=' grid sm:gril-cols-1 mt-20 lg:grid-cols-2 m-3 sm:m-20 gap-10  font-Leauge overflow-hidden'>
        <section>
            <HeadImgCard img={main} category='misto brand' title='banner'/>
        </section>
        <section className='grid grid-cols-1 gap-5 auto-fit'>
        <div className='grid grid-cols-2 gap-10 auto-fit'>
        <HeadImgCard img={men} category='Men'/>
          <HeadImgCard img={women} category='Women'/>
        </div>
            <HeadImgCard className='w-full'img={bag} category='accessories'/>
        </section>
    </div>
    <div className='grid md:grid-cols-3 sm:grid-cols-1 content-center place-items-center mx-20'>
    <Servicer icon={faTruck} title="free shipping" description="On all UA order or order above $100"/>
    <Servicer icon={faRecycle} title="30 DAYS RETURN" description="Simply return it within 30 days for an exchange"/>
    <Servicer icon={faInfo} title="SUPPORT 24/7" description="Contact us 24 hours a day, 7 days a week"/>
    </div>
      {productStatus === "loading" ? <Loading/>: <div>
        <div className='mx-20 mt-10'>
          <span>Filter: </span>
        <FontAwesomeIcon onClick={()=>setListView(false)} icon={faWindows} className='mx-2'/>
        <FontAwesomeIcon  onClick={()=>setListView(true)} icon={faList}/>
        </div>
        <ProductsList category={"Men"} products={products.filter(item=> item.category == "men's clothing")} listView={listView} />
        <ProductsList category={"Women"} products={products.filter(item=> item.category == "women's clothing")} listView={listView}/>
        <ProductsList category={"electronics"} products={products.filter(item=> item.category == "electronics")} listView={listView}/>
        <ProductsList category={"Jewelery"} products={products.filter(item=> item.category == "jewelery")} listView={listView}/>
      </div>}
      <div className='grid m-20 sm:grid-cols-3 gap-10 mb-20'>
      <CardText img={img} />
       <CardText img={img1} />
       <CardText img={img2} />
      </div>
  </div>
    
  )
}
