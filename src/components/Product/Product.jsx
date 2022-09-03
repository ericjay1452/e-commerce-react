import React from 'react';
import { CardMedia, Card, CardActions, CardContent, Typography, IconButton } from '@mui/material';
import { AddShoppingCart } from '@mui/icons-material';
import Logo from '../../assets/mobile.jpg';

const Product = ({ product, onAddToCart }) => {
	// deeper destructuring of objects
	const { price: { formatted, formatted_with_symbol }, name, description, id } = product;
	return (
		<Card className="max-w-full">
			<CardMedia image={Logo} title={product.name} style={{ height: 0, paddingTop: '56.25%' }} />

			<CardContent>
				<div className="flex justify-between">
					<Typography variant={'h6'} gutterBottom>
						{name}
					</Typography>

					<Typography variant={'h6'}>{formatted_with_symbol}</Typography>
				</div>

				<Typography
					variant={'body2'}
					color={'textSecondary'}
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			</CardContent>

			<CardActions disableSpacing className="flex justify-end">
				<IconButton aria-label="add to cart" onClick={() =>onAddToCart(product.id, 1)}>
					<AddShoppingCart />
				</IconButton>
			</CardActions>
		</Card>
	);
};

export default Product;
