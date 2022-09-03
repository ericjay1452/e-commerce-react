import React, {useState, useEffect} from 'react'
import { Products, NavBar } from './components'
import commerce from "./lib/commerce"

const App = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
      // destructured my data from my await result
    const {data} = await commerce.products.list();
    setProducts(data);
  }

  useEffect (() =>{
    fetchProducts();
  },[])


  return (
    <div className=''>
      <NavBar />
      <Products products = {products}/>
    </div>
  )
}

export default App