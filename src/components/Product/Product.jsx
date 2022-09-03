import React from 'react'
import { CardMedia, Card, CardActions,CardContent, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import Logo from "../../assets/mobile.jpg"

const Product = ({product}) => {

  return (
    <Card className = "max-w-full">
        <CardMedia image = {Logo} title = {product.name} style = {{height : 0, paddingTop: '56.25%'}}/>

        <CardContent>
         <div className= 'flex justify-between'>
            <Typography variant = {"5"} gutterBottom>
                {product.name}
            </Typography>

            <Typography variant = {"h5"}>
            {product.price}
            </Typography>
         </div>

         <Typography variant = {"body2"} color = {"textSecondary"}>
           {product.desc}
         </Typography>
        </CardContent>

        <CardActions disableSpacing className = 'flex justify-end'>
          <IconButton aria-label='add to cart'>
            <AddShoppingCart />
          </IconButton>
        </CardActions>

    </Card>
  )
}

export default Product