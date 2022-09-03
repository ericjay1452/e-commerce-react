import React from 'react'
import { CardMedia, Card, CardActions,CardContent, Typography, IconButton } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'

const Product = ({product}) => {

  return (
    <Card style={{maxWidth : "100%"}}>
        <CardMedia image = "" title = {product.name} style = {{height : 0, paddingTop: '56.25%'}}/>

        <CardContent>
         <div style={{display: 'flex',
    justifyContent: 'space-between'}}>
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

        <CardActions disableSpacing style={{display: 'flex',
    justifyContent: 'flex-end',}}>
          <IconButton aria-label='add to cart'>
            <AddShoppingCart />
          </IconButton>
        </CardActions>

    </Card>
  )
}

export default Product