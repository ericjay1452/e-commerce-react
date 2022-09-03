import React from 'react'
import { CardMedia, Card, CardActions,CardContent, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

const Product = ({product}) => {
  return (
    <Card>
        <CardMedia image = "" title = {product.name} className = {""}/>

        <CardContent>
         <div>
            <Typography variant = {"5"} gutterBottom>
                {product.name}
            </Typography>

            <Typography variant = {"h5"}>
       
            </Typography>
         </div>

         <Typography variant = {"h2"} color = {"textSecondary"}>
           {product.desc}
         </Typography>
        </CardContent>

        <CardActions disableSpacing className=''>
          <IconButton aria-label='add to cart'>
            <AddShoppingCart />
          </IconButton>
        </CardActions>

    </Card>
  )
}

export default Product