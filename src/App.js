import React, { useState, useEffect } from 'react';
import { Products,Cart, NavBar } from './components';
import commerce from './lib/commerce';
import { Routes, Route } from 'react-router-dom';

const App = () => {
	const [ products, setProducts ] = useState([]);

  // for showing cart items from commerce
  const [cart, setCart] = useState({})

	const fetchProducts = async () => {
		// destructured my data from my await result
		const { data } = await commerce.products.list();
		setProducts(data);
	};

  // api for adding a chosen product and quantity to cart
  const fetchCartItem = async () => {
    setCart(await commerce.cart.retrieve());
  }


  // api for adding a products to cart
  const HandleAddToCart = async (id, quantity) => {
    const {data} = await commerce.cart.add(id, quantity)
    setCart(data)
  }



  // api for updating  products quantity to cart
  const HandleCartUpdateQuant = async (id, quantity) => {
    const {data} = await commerce.cart.update(id, {quantity})
    setCart(data)
  }


  // api for removing a products from cart
  const HandleRenoveCartItem = async (id) => {
    const {data} = await commerce.cart.remove(id)
    setCart(cart)
  }


  // api for reseting products cart empty
  const HandleEmptyCart = async () => {
    const {data} = await commerce.cart.empty()
    setCart(data)
  }
	useEffect(() => {
		fetchProducts();
    fetchCartItem();
	}, []);


	return (
		<>
		<NavBar  totalCartLength= {cart.total_items}/>
		<Routes>
			<Route path='/' exact element = {<Products products={products}  onAddToCart= {HandleAddToCart} />} />
            {/*Passing this prop handle to Products, to be use in IconButton which is in our Product comp.  */}	
            <Route path='/cart' 
			element = {<Cart 
			cart = {cart} 
			HandleCartUpdateQuant = {HandleCartUpdateQuant}
			HandleRenoveCartItem = {HandleRenoveCartItem}
			HandleEmptyCart = {HandleEmptyCart}
			/>}/>
		</Routes>
		</>
	);
};

export default App;
