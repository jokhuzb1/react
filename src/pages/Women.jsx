import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import { selectAllProducts } from '../features/api/productsSlice'
import ProductsList from '../components/products/ProductsList'

export default function Women() {
  const [listView, setListView] = useState(false)
  const products = useSelector(selectAllProducts)
  return (
    <div className='my-40'>
      <ProductsList category={"Women"} products={products.filter(item=> item.category == "women's clothing")} listView={listView} />
    </div>
  )
}
