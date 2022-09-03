import React from 'react';
import { Grid } from '@mui/material';
import { Product } from '../../components';

const Products = ({ products, onAddToCart }) => {
	return (
		<main>
			<div style={{ marginTop: '5rem' }}>
				<Grid container justifyContent={'center'} spacing={4}>
					{products.map((product) => (
						<Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
							<Product product={product}  onAddToCart ={onAddToCart}/>
						</Grid>
					))}
				</Grid>
			</div>
		</main>
	);
};

export default Products;
