import React, { useState, useEffect } from 'react';
import { 
	// Products
	Cart
	, NavBar
 } from './components';
import commerce from './lib/commerce';

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

  const HandleAddToCart = async (id, quantity) => {
    const items = await commerce.cart.add(id, quantity)
    setCart(items.cart)
  }

  console.log(cart)

	useEffect(() => {
		fetchProducts();
    fetchCartItem();
	}, []);

  console.log({cart})

	return (
		<div className="">
			<NavBar  totalCartLength= {cart.total_items}/>

      {/*Passing this prop handle to Products, to be use in IconButton which is in our Product comp.  */}
			{/* <Products products={products}  onAddToCart= {HandleAddToCart} /> */}
			<Cart cart = {cart} />
		</div>
	);
};

export default App;
