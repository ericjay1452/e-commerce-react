import React, { useState, useEffect } from 'react';
import { Products, NavBar } from './components';
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

  const fetchCartItem = async () => {
    const { data } = commerce.cart.retrieve();
    setCart(data)
  }

	useEffect(() => {
		fetchProducts();
    fetchCartItem();
	}, []);

  console.log(cart)

	return (
		<div className="">
			<NavBar />
			<Products products={products} />
		</div>
	);
};

export default App;
